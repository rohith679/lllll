const UtilController = require("./../services/UtilController");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { v4: uuidv4 } = require("uuid");
const connection = require("../../../config/connection");

const region = connection.aws?.region || "ap-south-1";
const myBucket = connection.aws?.bucket || "genex-project";
const signedUrlExpireSeconds = 60 * 6;

const s3Client = new S3Client({
  region,
  credentials: connection.aws?.accessKeyId && connection.aws?.secretAccessKey ? {
    accessKeyId: connection.aws.accessKeyId,
    secretAccessKey: connection.aws.secretAccessKey,
  } : undefined,
});

module.exports = {
  uploadFile: async (req, res, next) => {
    try {
      let fileType = req.body.fileType ?? ".png";
      const file = uuidv4() + `.${fileType}`;
      let bucketName = req.body.bucketName || connection.aws?.prodbucket || "";
      const Bucket = bucketName ? `${myBucket}/${bucketName}` : myBucket;
      const command = new PutObjectCommand({ Bucket, Key: file });
      const uploadURL = await getSignedUrl(s3Client, command, { expiresIn: signedUrlExpireSeconds });
      let result = uploadURL ?? "";

      UtilController.sendSuccess(req, res, next, {
        result,
      });
    } catch (err) {
      console.error("error in upload--", err.name);
      UtilController.sendError(req, res, next, err);
    }
  },
};
