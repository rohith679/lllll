// Seed an admin user
// Usage:
//   node scripts/seedAdmin.js "Admin Name" "admin@example.com" "0000000000" "password123" "admin"
// or set env vars: ADMIN_NAME, ADMIN_EMAIL, ADMIN_PHONE, ADMIN_PASSWORD, ADMIN_USER_TYPE

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const CryptoJS = require('crypto-js');
const connectDB = require('../config/db');
const connection = require('../config/connection');
const User = require('../api/models/User');

const passwordKey = 'Json222';

async function main() {
  try {
    const args = process.argv.slice(2);
    const [nameArg, emailArg, phoneArg, passwordArg, userTypeArg] = args;

    const name = nameArg || process.env.ADMIN_NAME || 'Admin';
    const email = emailArg || process.env.ADMIN_EMAIL;
    const phone = phoneArg || process.env.ADMIN_PHONE || '0000000000';
    const password = passwordArg || process.env.ADMIN_PASSWORD;
    const userType = userTypeArg || process.env.ADMIN_USER_TYPE || 'admin';

    if (!email || !password) {
      console.error('Missing email or password. Provide args or set ADMIN_EMAIL and ADMIN_PASSWORD.');
      process.exit(1);
    }

    await connectDB(connection.dbUrl);

    const existing = await User.findOne({ email }).lean();
    if (existing) {
      console.log(`User already exists: ${email} (id: ${existing._id})`);
      process.exit(0);
    }

    const encryptedPassword = CryptoJS.AES.encrypt(password, passwordKey).toString();
    const user = new User({ name, email, phone, password: encryptedPassword, userType });
    await user.save();
    console.log('Admin user created:', { id: user._id.toString(), email: user.email, userType: user.userType });
    process.exit(0);
  } catch (err) {
    console.error('Failed to seed admin:', err?.message || err);
    process.exit(1);
  }
}

main();


