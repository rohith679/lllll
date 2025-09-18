const Contact = require("../../models/Contact");
const mailer = require("../services/mailer"); // adjust path
const UtilController = require("../services/UtilController");

module.exports = {
  createContact: async (req, res, next) => {
    try {
      const { name, email, phone, message, brochure } = req.body;
      console.log("req.body: ", req.body);

      if (!name || !email) {
        return res.status(400).json({ message: "Name & Email are required" });
      }

      // Try to send email, but do not fail the entire request if email sending breaks
      try {
        // Notify admin
        console.log('Sending admin contact email to fathimaclinic1234@gmail.com');
        await mailer.sendMail(
          "fathimaclinic1234@gmail.com",
          `📩 New Contact from ${name}`,
          undefined,
          `
            <h3>New ${brochure === true ? 'Download Brochure' : 'Contact'} Submission</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone || 'N/A'}</p>
            <p><b>Message:</b> ${message || 'N/A'}</p>
          `
        );

        // Acknowledgement to customer
        console.log('Sending contact acknowledgement to', email);
        await mailer.sendMail(
          email,
          `We received your message, ${name}`,
          undefined,
          `
            <div style="font-family:Arial,sans-serif;line-height:1.6;color:#333;">
              <h2>Thank you for contacting Fathima Skin & Hair Clinic</h2>
              <p>Dear ${name},</p>
              <p>We have received your message and our team will get back to you shortly.</p>
              <p><b>Your message:</b></p>
              <blockquote>${(message || '').replace(/</g,'&lt;')}</blockquote>
              <p>Warm regards,<br/>Fathima Skin & Hair Clinic</p>
            </div>
          `
        );
      } catch (emailErr) {
        console.error("Email send failed (continuing):", emailErr?.message);
        // Continue without failing the request
      }

      // Persist contact
      try {
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();
      } catch (saveErr) {
        console.error("Contact save failed (continuing):", saveErr?.message);
      }

      UtilController.sendSuccess(req, res, next, {
        message: "Contact created successfully",
      });
    } catch (err) {
      console.error("Error creating contact:", err);
      res.status(500).json({ message: "Server error", details: err?.message });
    }
  },

  // READ All Contacts
  getContacts: async (req, res, next) => {
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      UtilController.sendSuccess(req, res, next, { contacts });
    } catch (err) {
      console.error("Error fetching contacts:", err);
      res.status(500).json({ message: "Server error" });
    }
  },

  // READ Single Contact
  getContactById: async (req, res, next) => {
    try {
      const { id } = req.query;
      if (!id) return res.status(400).json({ message: "id is required" });
      const contact = await Contact.findById(id).lean();
      if (!contact)
        return res.status(404).json({ message: "Contact not found" });
      return UtilController.sendSuccess(req, res, next, { contact });
    } catch (err) {
      console.error("Error fetching contact:", err);
      res.status(500).json({ message: "Server error" });
    }
  },

  // DELETE Contact
  deleteContact: async (req, res, next) => {
    try {
      const contact = await Contact.findByIdAndDelete(req.query.id);
      if (!contact)
        return res.status(404).json({ message: "Contact not found" });
      UtilController.sendSuccess(req, res, next, {
        message: "Contact deleted successfully",
        contact,
      });
    } catch (err) {
      console.error("Error deleting contact:", err);
      res.status(500).json({ message: "Server error" });
    }
  },

  updateContact: async (req, res, next) => {
    try {
      const updatedObj = req.body;
      const { id } = req.body;
      const updatedContact = await Contact.findOneAndUpdate(
        { _id: id },
        updatedObj
      );
      UtilController.sendSuccess(req, res, next, {
        message: "Contact updated successfully",
        contact: updatedContact,
      });
    } catch (err) {
      console.error("Error updating contact:", err);
      res.status(500).json({ message: "Server error" });
    }
  },
  
  // EXPORT Contacts as CSV (for admin download)
  exportContacts: async (req, res) => {
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
      const headers = ["Name", "Email", "Phone", "Message", "Created At"];
      const escape = (val = "") => `"${String(val).replace(/"/g, '""')}"`;
      const rows = contacts.map((c) => [
        escape(c.name),
        escape(c.email),
        escape(c.phone || ""),
        escape(c.message || ""),
        escape(c.createAt ? new Date(c.createAt * 1000).toISOString() : ""),
      ].join(","));
      const csv = [headers.join(","), ...rows].join("\n");
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", 'attachment; filename="contacts.csv"');
      return res.status(200).send(csv);
    } catch (err) {
      console.error("Error exporting contacts:", err);
      return res.status(500).json({ message: "Export failed" });
    }
  },
};
