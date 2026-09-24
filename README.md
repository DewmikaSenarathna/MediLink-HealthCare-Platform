# MediLink - Community Healthcare Information & Support Platform

<p align="center">
  <img src="docs/assets/medilink-logo.png" alt="MediLink Logo" width="300"/>
</p>

<p align="center"><strong>Connecting Care. Simplifying Access.</strong></p>

<p align="center">A user-centred full-stack healthcare platform designed to simplify doctor discovery, appointment booking, medicine availability checking, and online payment.</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
</p>

---

## 📌 Project Overview

**MediLink** is a full-stack web-based healthcare information and support platform developed to address common difficulties faced by patients when accessing healthcare services.

The platform brings several important healthcare tasks into one digital environment:

- Finding available doctors
- Searching doctors by name, specialty, and hospital
- Viewing doctor availability
- Selecting appointment slots
- Booking appointments
- Managing existing appointments
- Checking medicine availability
- Completing an online payment workflow
- Receiving booking and payment confirmation
- Providing role-specific dashboards and healthcare management interfaces

MediLink was developed with a strong **Human-Computer Interaction (HCI)** focus. The interface is designed around user needs identified through questionnaire-based requirements gathering, with particular attention to simplicity, accessibility, consistency, recognition, error prevention, and reduced interaction complexity.

---

## 🎯 Problem Statement

Accessing healthcare services can involve several unnecessary steps.

Patients may need to:

1. Contact hospitals manually to find available doctors.
2. Travel to hospitals to make appointments.
3. Wait without knowing whether a doctor is available.
4. Visit pharmacies or hospitals to determine whether medicine is available.
5. Complete payments through time-consuming physical processes.
6. Re-enter or remember information throughout different stages of a healthcare transaction.

These challenges can become particularly inconvenient for people who live far from healthcare facilities, elderly users, and users who require a simpler interaction process.

MediLink addresses these challenges by bringing essential healthcare service interactions into a single web-based platform.

---

## 💡 Our Solution

MediLink provides a unified digital experience where users can move from **discovering healthcare services to completing an appointment-related transaction** through a structured and understandable workflow.

### Core Journey

```text
Landing Page
     │
     ▼
Register / Login
     │
     ▼
Patient Dashboard
     │
     ├──────────────► Check Medicine Availability
     │
     ▼
Find Doctor
     │
     ▼
View Doctor Details
     │
     ▼
Select Date & Time
     │
     ▼
Appointment Summary
     │
     ▼
Enter Patient Details
     │
     ▼
Payment
     │
     ▼
Booking Confirmation
```

---

## 👥 Target Users

| User | Main Requirements |
|---|---|
| **Patients** | Find doctors, book appointments, check medicine, make payments |
| **Doctors** | Manage availability and appointment-related information |
| **Hospital Staff** | Manage healthcare service and medicine-related information |
| **Parents / Guardians** | Access healthcare services on behalf of dependents |
| **Elderly Users** | Simple navigation, readable text, clear labels, large controls, and fewer steps |

---

## 🔎 User-Centred Design Foundation

MediLink follows a user-centred HCI process:

```text
User Problem
     ↓
Target User Identification
     ↓
Questionnaire-Based Requirement Gathering
     ↓
Requirement Analysis
     ↓
Task Analysis / HCI
     ↓
Mental Model
     ↓
Wireframes
     ↓
Interface Design
     ↓
React Frontend
     ↓
MERN Backend
     ↓
Database Integration
     ↓
Functional Healthcare Workflows
```

The questionnaire investigated age, smartphone ownership, Internet usage, healthcare website experience, appointment-booking experience, desired healthcare features, preferred language, and preferred device.

The project reported **103 questionnaire responses**, with smartphone ownership reported at 100% and daily Internet use at 87.4%.

---

## 🎨 HCI-Driven Interface Design

MediLink applies the following HCI principles:

### 1. Know The User

The system considers different user roles and their different tasks.

### 2. Universal Usability

The interface incorporates responsive layouts, touch-friendly controls, high-contrast elements, visible interaction states, clear typography, and accessibility-oriented design.

### 3. Understand the Task

Complex healthcare activities are divided into smaller understandable stages.

### 4. Reduce Memory Load

Important information is presented again at relevant decision points instead of requiring users to remember previous selections.

### 5. Strive for Consistency

Buttons, cards, badges, typography, icons, navigation, and status indicators follow a consistent visual language.

### 6. Remind Users & Refresh Their Memory

Appointment summaries, payment information, confirmation messages, and status indicators provide continuous feedback.

### 7. Prevent Errors & Allow Reversal

The system uses form validation, unavailable-slot prevention, confirmation dialogs, payment validation, cancellation confirmation, and rescheduling/cancellation workflows.

### 8. Naturalness

The platform uses familiar healthcare concepts and conventional GUI patterns such as search, filtering, cards, buttons, date/time selection, and payment selection.

---

## ✨ Key Features

### 🔐 Authentication

- Patient registration
- Patient login
- Role-aware access
- JWT authentication
- Password hashing using bcrypt
- Protected application routes

### 👨‍⚕️ Doctor Discovery

Patients can search for doctors using:

- Doctor name
- Medical specialty
- Hospital

Search results provide doctor, specialty, hospital, availability, and next available time.

### 📅 Appointment Management

Users can:

- View doctor availability
- Select an available date
- Select an available time slot
- Review appointment information
- Enter patient details
- Confirm an appointment
- View appointments
- Reschedule appointments
- Cancel appointments

Appointment booking and payment are handled as separate operations so that a payment failure can be retried without unnecessarily losing the appointment slot.

### 💊 Medicine Availability

Users can:

- Search for medicines
- View availability information
- Check stock status
- View the latest available status
- Re-search when required

### 💳 Online Payment

The platform includes a structured payment workflow with appointment/payment summary, patient information, payment method selection, card payment, online banking, validation, and confirmation.

> **Important:** The current payment implementation is a simulated/demo payment workflow and is not connected to a real payment gateway.

### 📊 Role-Based Dashboards

#### Patient Dashboard

Provides access to Find Doctor, Appointments, Medicine Availability, Profile, recent activity, and upcoming appointment information.

#### Doctor Dashboard

Provides doctor-oriented information and availability-related functionality.

#### Hospital Staff Dashboard

Provides staff-oriented healthcare and medicine management functionality.

---

## 🏗️ System Architecture

MediLink follows a full-stack **MERN architecture**.

```text
┌───────────────────────────────────────────────┐
│                 Client Layer                  │
│                                               │
│          React + Vite + React Router          │
│                                               │
│  Components • Pages • Forms • State • UI      │
└───────────────────────┬───────────────────────┘
                        │
                        │ REST API
                        ▼
┌───────────────────────────────────────────────┐
│                Application Layer              │
│                                               │
│              Node.js + Express.js             │
│                                               │
│  Routes → Controllers → Services → Validation │
└───────────────────────┬───────────────────────┘
                        │
                        │ Mongoose
                        ▼
┌───────────────────────────────────────────────┐
│                 Database Layer                │
│                                               │
│                    MongoDB                    │
│                                               │
│ Users • Doctors • Appointments • Medicines    │
│ Payments • Healthcare-related data            │
└───────────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| **React** | User interface |
| **Vite** | Frontend development/build tooling |
| **React Router** | Client-side routing |
| **Axios** | API communication |
| **Lucide React** | Interface icons |
| **Responsive CSS/UI system** | Responsive interface design |

### Backend

| Technology | Purpose |
|---|---|
| **Node.js** | Server runtime |
| **Express.js** | REST API framework |
| **Mongoose** | MongoDB ODM |
| **JWT** | Authentication |
| **bcryptjs** | Password hashing |
| **express-validator** | Request validation |
| **Day.js** | Date/time handling |

### Database

**MongoDB** — persistent application and healthcare service data.

---

## 📁 Project Structure

```text
medilink-healthcare-platform/
│
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── layouts/
│       ├── hooks/
│       ├── services/
│       ├── context/
│       ├── utils/
│       └── App.jsx
│
├── server/
│   └── src/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       ├── services/
│       ├── utils/
│       └── seed.js
│
├── docs/
│   ├── assets/
│   │   └── medilink-logo.png
│   └── reports/
│
├── .github/
│   └── workflows/
│
├── .gitignore
├── .env.example
├── LICENSE
├── package.json
└── README.md
```

---

## 🔄 Core Application Workflows

### Patient Appointment Workflow

```text
1. Register / Login
        ↓
2. Open Dashboard
        ↓
3. Find Doctor
        ↓
4. Search / Filter
        ↓
5. View Doctor
        ↓
6. Check Availability
        ↓
7. Select Appointment Slot
        ↓
8. Review Summary
        ↓
9. Enter Patient Details
        ↓
10. Select Payment Method
        ↓
11. Complete Demo Payment
        ↓
12. Receive Confirmation
```

### Medicine Workflow

```text
Search Medicine
      ↓
Check Availability
      ↓
View Stock Status
      ↓
Review Latest Status
```

---

## 🔒 Security & Data Handling

MediLink incorporates:

- JWT-based authentication
- Password hashing with bcrypt
- Request validation
- Protected application routes
- Server-side validation
- Database-level integrity constraints
- Environment variables for sensitive configuration
- Separation of frontend and backend responsibilities

### Environment Variables

Sensitive values should **never** be committed to GitHub.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
PORT=5000
```

Use `.env` for local secrets and `.env.example` for documenting required configuration without exposing actual credentials.

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB or MongoDB Atlas
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/DewmikaSenarathna/MediLink-HealthCare-Platform.git
cd Medilink-Healthcare-Platform
```

### 2. Install Dependencies

```bash
npm run install-all
```

### 3. Configure MongoDB

Local MongoDB example:

```text
mongodb://localhost:27017/medilink
```

Alternatively, configure MongoDB Atlas.

### 4. Configure Environment Variables

Create `server/.env` from `server/.env.example`:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 5. Seed the Database

```bash
node server/src/seed.js
```

### 6. Start the Application

```bash
npm run dev
```

Frontend: `http://localhost:5173`

Backend health endpoint: `http://localhost:5000/api/health`

---

## 👤 Demo Accounts

| Role | Email | Password |
|---|---|---|
| Patient | `patient@medilink.com` | `Patient123` |
| Doctor | `doctor@medilink.com` | `Doctor123` |
| Staff | `staff@medilink.com` | `Staff123` |

> **Security Notice:** These credentials are intended only for local/demo use and should not be used as production credentials.

---

## 🖥️ Interface Preview

The interface follows a healthcare-oriented visual language with teal branding, high-contrast content, structured cards, clear status badges, consistent buttons, responsive navigation, form validation, booking progress indicators, and clear primary actions.

The project includes interfaces for:

```text
Landing Page
Login
Registration
Patient Dashboard
Doctor Search
Doctor Search Results
Doctor Details
Appointment Booking
Appointment Summary
Payment
Card Payment
Online Banking
Payment Confirmation
Medicine Availability
My Appointments
Profile
Doctor Dashboard
Staff Dashboard
```
---

## 🧠 HCI & UX Focus

MediLink combines **software engineering with Human-Computer Interaction principles**.

### Design Priorities

```text
User Needs
    ↓
Usability
    ↓
Accessibility
    ↓
Task Efficiency
    ↓
Consistency
    ↓
Error Prevention
    ↓
Clear Feedback
    ↓
User Confidence
```

The project focuses on reducing unnecessary interaction steps, making important information visible at decision points, providing feedback after actions, and maintaining consistent navigation and visual patterns.

---

## 🧪 Validation & Reliability

Important application rules are enforced at the server/database level rather than relying entirely on frontend state.

Examples include:

- Appointment availability is calculated from doctor schedules and existing appointments.
- Double-booking prevention is handled using database-level constraints.
- Appointment and payment operations are separated.
- Validation occurs before important operations.
- Destructive actions require confirmation.
- Server errors are returned in user-understandable language.

---

## 🗺️ Development Roadmap

### Completed

- [x] User research
- [x] Requirement analysis
- [x] Target-user identification
- [x] HCI analysis
- [x] Task analysis
- [x] Interface wireframes
- [x] Responsive frontend
- [x] Authentication
- [x] Doctor search
- [x] Doctor availability
- [x] Appointment booking
- [x] Appointment management
- [x] Medicine availability
- [x] Payment demonstration workflow
- [x] Role-based dashboards
- [x] MongoDB persistence
- [x] REST API backend

### Future Improvements

- [ ] Real payment gateway integration
- [ ] Email/SMS appointment notifications
- [ ] Real-time doctor availability
- [ ] Multilingual interface: English / Sinhala / Tamil
- [ ] Advanced accessibility testing
- [ ] Healthcare-provider verification
- [ ] Production-grade monitoring
- [ ] Automated testing
- [ ] Deployment pipeline
- [ ] Production security hardening

---

## ⚠️ Current Scope & Limitations

MediLink is an academic/software-engineering project and should not currently be considered a production healthcare system.

Important limitations include:

- Hospital and healthcare information is based on project/demo data.
- The payment gateway is simulated.
- Production-grade payment security would require integration with a trusted payment provider.
- Notification delivery is not currently implemented.
- Healthcare-provider verification is outside the current scope.
- Production deployment would require additional security, privacy, and compliance considerations.
- The current interface evidence is primarily English.
- Real clinical decision-making is outside the purpose of the platform.

MediLink should therefore be understood as a **functional academic prototype and full-stack foundation for a community healthcare platform**, rather than a deployed medical service.

---

## 🤝 Contributing

Contributions, suggestions and improvements are welcome.

For major changes:

1. Create a feature branch.
2. Make the required changes.
3. Test the changes locally.
4. Commit using a clear commit message.
5. Open a Pull Request.

Example:

```bash
git checkout -b feature/doctor-search-improvement
git commit -m "feat: improve doctor search filtering"
```

---

## 📄 License

This project is developed for academic and educational purposes.

If a specific open-source license is selected for the repository, replace this section with the corresponding license terms.

---

---
<br>

<p align="center">
  <strong>MediLink</strong><br>
  <em>Community Healthcare Information & Support Platform.</em>
</p>
