var request = require("request");
var fs = require("fs");
var path = require("path");
var http = require("http");
var https = require("https");
var Stream = require("stream").Transform;
// const User = require('./../../model/User');
const UtilController = require("./../services/UtilController");

const awsConfig = require("./../../../config/connection");
const { S3Client, PutObjectCommand, DeleteObjectCommand, ListObjectsV2Command } = require("@aws-sdk/client-s3");
var link = awsConfig.aws.link;
//var s3 = new AWS.S3();
var returnObj = [];
var posterKeys = [];
var allKeys = [];

module.exports = {
  upload2AWS: async function (path, bucket, fileName, contentType) {
    try {
      const s3 = new S3Client({
        region: awsConfig.aws.region,
        credentials: {
          accessKeyId: awsConfig.aws.accessKeyId,
          secretAccessKey: awsConfig.aws.secretAccessKey,
        },
      });
      var fsData = fs.readFileSync(path);
      const params = {
        Bucket: bucket,
        Key: fileName,
        Body: fsData,
        CacheControl: "max-age=31536000",
        ContentType: contentType,
      };
      await s3.send(new PutObjectCommand(params));
    } catch (err) {
      console.error(err);
    }
  },

  uploadExcel2AwsWithReturn: async function (dataFile, bucket, fileName) {
    try {
      const s3 = new S3Client({
        region: awsConfig.aws.region,
        credentials: {
          accessKeyId: awsConfig.aws.accessKeyId,
          secretAccessKey: awsConfig.aws.secretAccessKey,
        },
      });
      const params = {
        Bucket: bucket,
        Key: fileName,
        Body: dataFile,
      };

      let attachmentUrl = link + bucket + "/" + fileName;
      await s3.send(new PutObjectCommand(params));
      return attachmentUrl;
    } catch (err) {
      console.error(err);
    }
  },

  upload2AWSnoReturn: async function (path, bucket, fileName) {
    try {
      const s3 = new S3Client({
        region: awsConfig.aws.region,
        credentials: {
          accessKeyId: awsConfig.aws.accessKeyId,
          secretAccessKey: awsConfig.aws.secretAccessKey,
        },
      });
      fs.readFile(path, function (err, data) {
        if (err) console.error(err);
        else {
          const params = {
            Bucket: bucket,
            Key: fileName,
            Body: data,
            CacheControl: "max-age=31536000",
          };
          s3.send(new PutObjectCommand(params)).catch(console.error);
        }
      });
    } catch (err) {
      console.error(err);
    }
  },

  uploadFiles: async function (req, res, next) {
    try {
      //var attachmentUrl = "";
      var attachmentUrlArray = [];
      var code = 1;
      if (
        !(req.files === null || req.files === undefined) &&
        !(req.files.attachment === undefined)
      ) {
        // to get the bucket name based on input condition, starts Here
        var bucket;
        switch (req.body.upload) {
          case "attachment":
            bucket = awsConfig.attachmentsBucket;
            break;
          case "invoice":
            bucket = awsConfig.invoicesBucket;
            break;
          case "photo":
            bucket = awsConfig.photosBucket;
            break;
          case "prescription":
            bucket = awsConfig.prescriptionBucket;
            break;
          default:
            bucket = "";
        }
        // ends here
        var attachmentObj = req.files.attachment;
        if (Array.isArray(attachmentObj)) {
          for (var i = 0; i < attachmentObj.length; i++) {
            var attachmentName =
              Date.now() + "_" + attachmentObj[i].originalname;
            attachmentUrlArray.push(link.concat(bucket + "/" + attachmentName));
            module.exports.upload2AWS(
              attachmentObj[i].path,
              bucket,
              attachmentName,
              attachmentObj[i].mimetype
            ); // this is async call, will not wait until to finish upload
          }
        } else {
          var attachmentPath = attachmentObj.path;
          var attachmentName = Date.now() + "_" + attachmentObj.originalname;
          //  attachmentUrl = link.concat(bucket + '/' + attachmentName);
          attachmentUrlArray.push(link.concat(bucket + "/" + attachmentName));
          module.exports.upload2AWS(
            attachmentPath,
            bucket,
            attachmentName,
            attachmentObj.mimetype
          ); // this is async call, will not wait until to finish upload
        }
      }
      UtilController.sendSuccess(req, res, next, {
        attachmentUrl: attachmentUrlArray,
      });
    } catch (err) {
      console.error(err);
      UtilController.sendError(req, res, next, err);
    }
  },

  uploadeMigratedFiles: async function (attachmentObj) {
    try {
      var bucket;
      switch (attachmentObj.upload) {
        case "movies":
          bucket = "hoblist/movies/poster";
          break;
        case "books":
          bucket = "hoblist/books/poster";
          break;
        case "shows":
          bucket = "hoblist/shows/poster";
          break;
        case "genre":
          bucket = "hoblist/genre";
          break;
        case "verification":
          bucket = awsConfig.verificationBucket;
          break;
        default:
          bucket = "";
      }

      var attachmentPath = attachmentObj.path;
      var attachmentName = Date.now() + "_" + attachmentObj.originalname;
      //var attachmentName = attachmentObj.originalname;
      var attachmentUrl = link.concat(bucket + "/" + attachmentName);
      //attachmentUrlArray.push(link.concat(bucket + '/' + attachmentName));
      module.exports.uploadMigratedFile2AWS(
        attachmentPath,
        bucket,
        attachmentName
      ); // this is async call, will not wait until to finish upload
      //console.log('attachmentUrl');
      return attachmentUrl;
    } catch (err) {
      console.error(err);
    }
  },

  uploadMigratedFile2AWS: async function (path, bucket, fileName) {
    try {
      var s3 = new AWS.S3();
      var url = path;
      https
        .request(url, function (response) {
          var data = new Stream();
          response.on("data", function (chunk) {
            data.push(chunk);
          });
          response.on("end", function () {
            //fs.writeFileSync('image.png', data.read());
            //var body = new Buffer(data.read(), 'base64');
            params = {
              ACL: "public-read", // public-read  //authenticated-read
              Bucket: bucket,
              Key: fileName,
              Body: data.read(),
              CacheControl: "max-age=31536000",
            };
            s3.putObject(params, function (err, data) {
              if (err) {
                console.error(err);
     
              }
            });
          });
        })
        .end();
    } catch (err) {
      console.error(err);
    }
  },

  listAllKeys: async function (token, cb) {
    console.log("listAllKeys is calling");
    console.log("allKeys");
    console.log(allKeys.length);
    const s3 = new S3Client({
      region: awsConfig.aws.region,
      credentials: {
        accessKeyId: awsConfig.aws.accessKeyId,
        secretAccessKey: awsConfig.aws.secretAccessKey,
      },
    });

    var opts = {
      Bucket: "hoblist",
      Delimiter: "/",
      //Prefix: folder + '/'
      Prefix: "movies/poster/",
    };
    if (token) opts.ContinuationToken = token;

    (async () => {
      try {
        const data = await s3.send(new ListObjectsV2Command(opts));
        allKeys = allKeys.concat(data.Contents || []);
        if (data.IsTruncated)
          module.exports.listAllKeys(data.NextContinuationToken, cb);
        else module.exports.cb();
      } catch (err) {
        console.error(err);
      }
    })();
  },
  cb: async function () {
    console.log("cb function");
    console.log(allKeys.length);
    console.log(allKeys);
    module.exports.checkAndDeleteS3Image(allKeys);
  },
  getFolderImages: async function (req, res, bucket, folder, page, options) {
    try {
      module.exports.listAllKeys(null, "cb");
      // var s3 = new AWS.S3();
      // var params = {
      //   Bucket: 'hoblist',
      //   Delimiter: "/",
      //   //Prefix: folder + '/'
      //   Prefix: 'movies/poster/',
      //   MaxKeys: '2000'
      // }
      //
      // s3.listObjectsV2(params, function(err, response) {
      //   console.log('err');
      //   console.log(err);
      //   console.log('response');
      //   console.log(response);
      //   console.log(response.Contents.length);
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     allKeys = allKeys.concat(response.Contents);
      //
      //     if (response.IsTruncated)
      //       listAllKeys(response.NextContinuationToken, cb);
      //     else
      //       cb();
      //     var extension = '.';
      //     for (var i = 0; i < response.Contents.length; i++) {
      //       var resCnt = response.Contents[i];
      //       posterKeys.push(response.Contents[i].Key);
      //       if (resCnt.Key.indexOf(extension) !== -1) {
      //         var tempUrl = link + '/' + bucket + '/' + resCnt.Key;
      //         returnObj.push(tempUrl);
      //       }
      //
      //
      //     }
      //     // var x = response.Contents.filter(function(file) {
      //     //   return file.Key.indexOf(extension) !== -1;
      //     // });
      //     //
      //     //module.exports.checkAndDeleteS3Image(posterKeys);
      //     res.status(200).send({
      //       status: 'success',
      //       code: 1,
      //       imageUrl: returnObj
      //     });
      //     // res.render(page.path, {
      //     //   pageTitle: page.title,
      //     //   imageUrl: returnObj,
      //     //   options
      //     // });
      //   }
      // });
    } catch (err) {
      console.error(err);
    }
  },

  deleteImageFromS3: async function (imageUrl) {
    try {
    const s3 = new S3Client({
      region: awsConfig.aws.region,
      credentials: {
        accessKeyId: awsConfig.aws.accessKeyId,
        secretAccessKey: awsConfig.aws.secretAccessKey,
      },
    });
      let imageKey = imageUrl.substr(imageUrl.lastIndexOf("/") + 1);
      var deleteParams = {
        Bucket: "hoblist/posts",
        Key: imageKey,
      };
    s3.send(new DeleteObjectCommand(deleteParams)).then(console.log).catch(console.error);
    } catch (err) {
      console.error(err);
    }
  },
};
