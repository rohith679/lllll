// Seed sample Contacts, Reviews, and Quick Services for admin UI testing
// Usage: node scripts/seedSampleData.js

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const connectDB = require('../config/db');
const connection = require('../config/connection');
const Contact = require('../api/models/Contact');
const Review = require('../api/models/Review');
const QuickService = require('../api/models/QuickService');

async function main() {
  try {
    await connectDB(connection.dbUrl);

    const now = Math.floor(Date.now() / 1000);

    const contacts = [
      { name: 'Karthick', email: 'kmass8754@gmail.com', phone: '06374001173', message: 'Need info about skincare', createAt: now },
      { name: 'Vidya', email: 'vidhya@gmail.com', phone: '9000000002', message: 'Appointment request', createAt: now - 86400 },
    ];

    const reviews = [
      { name: 'Karthick', email: 'karthick@gmail.com', organization: 'rentDoor', rating: 5, category: 'Plumbing Services', review: 'Great service!', agree: true },
      { name: 'Vidhya', email: 'vidhya@gmail.com', organization: 'Infotech', rating: 4, category: 'Appliances', review: 'Good experience', agree: true },
    ];

    const services = [
      { name: 'Karthick', phone: '06374001173', serviceType: 'plumbing', message: 'Looking for plumbing related services.' },
      { name: 'Karthick', phone: '06374001173', serviceType: 'electrical', message: 'Switch issue' },
    ];

    await Contact.insertMany(contacts);
    await Review.insertMany(reviews);
    await QuickService.insertMany(services);

    console.log('Seeded sample data: ', {
      contacts: contacts.length,
      reviews: reviews.length,
      services: services.length,
    });
    process.exit(0);
  } catch (err) {
    console.error('Failed to seed sample data:', err?.message || err);
    process.exit(1);
  }
}

main();


