const { returnCode } = require("../../../config/responseCode");
const Review = require("../../models/Review");
const UtilController = require("../services/UtilController");

module.exports = {
  createReview: async (req, res, next) => {
    try {
      const { name, email, organization, rating, category, review } =
        req.body;
      console.log("req.body: ", req.body);
      let photo = null;

      //   if (req.file) {
      //     photo = req.file.filename; // or full path / cloud URL
      //   }

      // if (!agree) {
      //   UtilController.sendError(req, res, next, {
      //     message: "You must agree to publish review.",
      //     responseCode: returnCode.incompleteBody,
      //   });
      // }

      const newReview = new Review({
        name,
        email,
        organization,
        rating,
        category,
        review,
        // photo,
        // force server-side default; do not allow client to set approval
      });

      await newReview.save();

      // Send acknowledgement email (best-effort)
      try {
        const mailer = require("../services/mailer");
        if (email) {
          console.log('Sending review acknowledgement to', email);
          await mailer.sendMail(
            email,
            `Thanks for your review, ${name}`,
            undefined,
            `
            <div style=\"font-family:Arial,sans-serif;line-height:1.6;color:#333;\">
              <h2>Thank you for sharing your experience</h2>
              <p>Dear ${name},</p>
              <p>We have received your review. Once approved by our team, it will appear on our website.</p>
              <p><b>Your review:</b></p>
              <blockquote>${(review || '').replace(/</g,'&lt;')}</blockquote>
              <p>Warm regards,<br/>Fathima Skin & Hair Clinic</p>
            </div>
          `
          );
        }
      } catch (mailErr) {
        console.warn("Review acknowledgement email failed:", mailErr?.message);
      }

      UtilController.sendSuccess(req, res, next, {
        message: "Review created successfully",
        review: newReview,
      });
    } catch (error) {
      console.error("Error creating review:", error);
      UtilController.sendError(req, res, next, {
        message: "Error creating review",
        responseCode: returnCode.serverError,
      });
    }
  },

  // Get all reviews
  getReviews: async (req, res, next) => {
    try {
      const reviews = await Review.find().sort({ createdAt: -1 });
      UtilController.sendSuccess(req, res, next, { reviews });
    } catch (error) {
      console.error("Error fetching reviews:", error);
      UtilController.sendError(req, res, next, {
        message: "Error fetching reviews",
        responseCode: returnCode.serverError,
      });
    }
  },
  getReviewsAgree: async (req, res, next) => {
    try {
      const reviews = await Review.find({ agree: true }).sort({
        createdAt: -1,
      });
      UtilController.sendSuccess(req, res, next, { reviews });
    } catch (error) {
      console.error("Error fetching reviews:", error);
      UtilController.sendError(req, res, next, {
        message: "Error fetching reviews",
        responseCode: returnCode.serverError,
      });
    }
  },

  // Get single review by ID
  getReviewById: async (req, res, next) => {
    try {
      const review = await Review.findById(req.query.id);
      if (!review)
        UtilController.sendError(req, res, next, {
          message: "Review not found",
          responseCode: returnCode.noData,
        });
      UtilController.sendSuccess(req, res, next, { review });
    } catch (error) {
      console.error("Error fetching review:", error);
      UtilController.sendError(req, res, next, {
        message: "Error fetching review",
        responseCode: returnCode.serverError,
      });
    }
  },

  // Delete review
  deleteReview: async (req, res, next) => {
    try {
      const deletedReview = await Review.findByIdAndDelete(req.query.id);
      if (!deletedReview)
        UtilController.sendError(req, res, next, {
          message: "Review not found",
          responseCode: returnCode.noData,
        });
      UtilController.sendSuccess(req, res, next, {
        message: "Review deleted successfully",
        review: deletedReview,
      });
    } catch (error) {
      console.error("Error deleting review:", error);
      UtilController.sendError(req, res, next, {
        message: "Error deleting review",
        responseCode: returnCode.serverError,
      });
    }
  },

  // Update review
  updateReview: async (req, res, next) => {
    try {
      const updatedObj = req.body;
      const { id } = req.body;
      const updatedReview = await Review.findOneAndUpdate(
        { _id: id },
        updatedObj
      );
      UtilController.sendSuccess(req, res, next, {
        message: "Review updated successfully",
        review: updatedReview,
      });
    } catch (err) {
      console.error("Error updating review:", err);
      UtilController.sendError(req, res, next, {
        message: "Error updating review",
        responseCode: returnCode.serverError,
      });
    }
  },
  // Export reviews as CSV
  exportReviews: async (req, res) => {
    try {
      const items = await Review.find().sort({ createAt: -1 }).lean();
      const getCreatedAtIso = (doc) => {
        const raw = doc?.createAt ?? doc?.createdAt ?? doc?.created_at ?? doc?.created_on;
        if (!raw) return "";
        if (typeof raw === "number") {
          const ms = raw > 1e12 ? raw : raw * 1000;
          return new Date(ms).toISOString();
        }
        const d = new Date(raw);
        return isNaN(d.getTime()) ? "" : d.toISOString();
      };
      const headers = [
        "Name",
        "Email",
        "Organization",
        "Rating",
        "Category",
        "Review",
        "Created At",
      ];
      const escape = (val = "") => `"${String(val).replace(/"/g, '""')}"`;
      const rows = items.map((r) =>
        [
          escape(r.name),
          escape(r.email),
          escape(r.organization || ""),
          escape(r.rating ?? ""),
          escape(r.category || ""),
          escape(r.review || ""),
          escape(getCreatedAtIso(r)),
        ].join(",")
      );
      const csv = [headers.join(","), ...rows].join("\n");
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", 'attachment; filename="reviews.csv"');
      return res.status(200).send(csv);
    } catch (err) {
      console.error("Error exporting reviews:", err);
      return res.status(500).json({ message: "Export failed" });
    }
  },
};
