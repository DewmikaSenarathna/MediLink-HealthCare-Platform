import dotenv from "dotenv";
dotenv.config({ path: new URL("../.env", import.meta.url) });

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import User from "./models/User.js";
import Doctor from "./models/Doctor.js";
import Medicine from "./models/Medicine.js";

// --------------------------------------------------
// Hospital data
// --------------------------------------------------

const HOSPITALS = [
  "MediLink General Hospital",
  "City Care Hospital",
  "Central Medical Centre"
];

// --------------------------------------------------
// Doctor seed data
// --------------------------------------------------

const doctors = [
  {
    name: "Dr. N. Silva",
    initials: "NS",
    specialty: "Cardiology",
    hospital: HOSPITALS[0],
    status: "available",
    next: "20 Oct, 3:00 PM",
    fee: 3500,
    bio: "Over 12 years of experience in cardiovascular care, with a focus on preventive heart health and long-term recovery planning.",
    slots: [
      {
        date: "20 Oct",
        times: ["09:00 AM", "10:00 AM", "02:00 PM"]
      },
      {
        date: "21 Oct",
        times: ["11:00 AM"]
      },
      {
        date: "22 Oct",
        times: []
      }
    ]
  },

  {
    name: "Dr. A. Perera",
    initials: "AP",
    specialty: "General Medicine",
    hospital: HOSPITALS[1],
    status: "limited",
    next: "21 Oct, 9:00 AM",
    fee: 2000,
    bio: "General physician providing everyday health checkups, common illness treatment, and specialist referrals.",
    slots: [
      {
        date: "20 Oct",
        times: ["09:00 AM"]
      },
      {
        date: "21 Oct",
        times: ["10:00 AM", "11:00 AM"]
      },
      {
        date: "22 Oct",
        times: ["09:00 AM", "01:00 PM"]
      }
    ]
  },

  {
    name: "Dr. R. Fernando",
    initials: "RF",
    specialty: "Dermatology",
    hospital: HOSPITALS[2],
    status: "unavailable",
    next: "No slots this week",
    fee: 3000,
    bio: "Specialist in skin health, covering common dermatological conditions and minor outpatient procedures.",
    slots: [
      {
        date: "20 Oct",
        times: []
      },
      {
        date: "21 Oct",
        times: []
      },
      {
        date: "22 Oct",
        times: []
      }
    ]
  },

  {
    name: "Dr. K. Jayasuriya",
    initials: "KJ",
    specialty: "Pediatrics",
    hospital: HOSPITALS[0],
    status: "available",
    next: "20 Oct, 4:30 PM",
    fee: 2500,
    bio: "Pediatrician with a gentle, family-centred approach to children's health from infancy through adolescence.",
    slots: [
      {
        date: "20 Oct",
        times: ["09:00 AM", "03:00 PM", "04:30 PM"]
      },
      {
        date: "21 Oct",
        times: ["09:00 AM"]
      },
      {
        date: "22 Oct",
        times: ["10:00 AM"]
      }
    ]
  },

  {
    name: "Dr. S. Wickrama",
    initials: "SW",
    specialty: "Orthopedics",
    hospital: HOSPITALS[1],
    status: "available",
    next: "21 Oct, 11:00 AM",
    fee: 4000,
    bio: "Orthopedic surgeon specialising in joint, bone, and sports-related injuries.",
    slots: [
      {
        date: "20 Oct",
        times: []
      },
      {
        date: "21 Oct",
        times: ["11:00 AM", "01:00 PM"]
      },
      {
        date: "22 Oct",
        times: ["09:00 AM"]
      }
    ]
  },

  {
    name: "Dr. M. Bandara",
    initials: "MB",
    specialty: "Cardiology",
    hospital: HOSPITALS[2],
    status: "limited",
    next: "22 Oct, 10:00 AM",
    fee: 3500,
    bio: "Cardiologist focused on hypertension management and post-cardiac-event recovery.",
    slots: [
      {
        date: "20 Oct",
        times: []
      },
      {
        date: "21 Oct",
        times: []
      },
      {
        date: "22 Oct",
        times: ["10:00 AM"]
      }
    ]
  }
];

// --------------------------------------------------
// Medicine seed data
// --------------------------------------------------

const medicines = [
  {
    name: "Paracetamol 500mg",
    hospital: HOSPITALS[0],
    status: "available",
    stock: "In stock",
    updated: "10 mins ago"
  },

  {
    name: "Paracetamol 500mg",
    hospital: HOSPITALS[1],
    status: "limited",
    stock: "Low stock - 8 units",
    updated: "1 hour ago"
  },

  {
    name: "Amoxicillin 250mg",
    hospital: HOSPITALS[2],
    status: "unavailable",
    stock: "Out of stock",
    updated: "Today, 8:00 AM"
  },

  {
    name: "Amoxicillin 250mg",
    hospital: HOSPITALS[0],
    status: "available",
    stock: "In stock",
    updated: "30 mins ago"
  },

  {
    name: "Metformin 500mg",
    hospital: HOSPITALS[1],
    status: "available",
    stock: "In stock",
    updated: "2 hours ago"
  },

  {
    name: "Cetirizine 10mg",
    hospital: HOSPITALS[2],
    status: "available",
    stock: "In stock",
    updated: "45 mins ago"
  }
];

// --------------------------------------------------
// Demo users
// --------------------------------------------------

const demoUsers = [
  {
    name: "Kasun Perera",
    email: "patient@medilink.com",
    phone: "+94 71 234 5678",
    password: "Patient123",
    role: "patient"
  },

  {
    name: "Dr. N. Silva",
    email: "doctor@medilink.com",
    phone: "",
    password: "Doctor123",
    role: "doctor"
  },

  {
    name: "R. Abeywardena",
    email: "staff@medilink.com",
    phone: "",
    password: "Staff123",
    role: "staff"
  }
];

// --------------------------------------------------
// Database connection
// --------------------------------------------------

try {
  // Check that MONGO_URI was loaded
  if (!process.env.MONGO_URI) {
    throw new Error(
      "MONGO_URI is not defined. Make sure server/.env exists and contains MONGO_URI."
    );
  }

  console.log("Connecting to MongoDB Atlas...");

  await mongoose.connect(process.env.MONGO_URI);

  console.log("MongoDB Atlas connected successfully.");

  // ------------------------------------------------
  // Clear existing doctors and medicines
  // ------------------------------------------------

  console.log("Clearing existing doctors and medicines...");

  await Doctor.deleteMany({});
  await Medicine.deleteMany({});

  // ------------------------------------------------
  // Insert doctors
  // ------------------------------------------------

  console.log("Adding doctors...");

  await Doctor.insertMany(doctors);

  // ------------------------------------------------
  // Insert medicines
  // ------------------------------------------------

  console.log("Adding medicines...");

  await Medicine.insertMany(medicines);

  // ------------------------------------------------
  // Create demo users
  // ------------------------------------------------

  console.log("Creating demo users...");

  for (const user of demoUsers) {
    const existingUser = await User.findOne({
      email: user.email
    });

    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(
        user.password,
        10
      );

      await User.create({
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: hashedPassword,
        role: user.role
      });

      console.log(`Created user: ${user.email}`);
    } else {
      console.log(`User already exists: ${user.email}`);
    }
  }

  // ------------------------------------------------
  // Finished
  // ------------------------------------------------

  console.log("");
  console.log("======================================");
  console.log("MediLink database seeded successfully!");
  console.log("======================================");
  console.log("");
  console.log("Demo accounts:");
  console.log("Patient: patient@medilink.com / Patient123");
  console.log("Doctor : doctor@medilink.com  / Doctor123");
  console.log("Staff  : staff@medilink.com   / Staff123");
  console.log("");

} catch (error) {
  console.error("");
  console.error("======================================");
  console.error("Database seeding failed");
  console.error("======================================");
  console.error("");

  console.error(error);
  process.exitCode = 1;

} finally {
  // ------------------------------------------------
  // Close MongoDB connection
  // ------------------------------------------------

  await mongoose.disconnect();

  console.log("MongoDB connection closed.");
}