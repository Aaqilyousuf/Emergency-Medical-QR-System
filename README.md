# Emergency Medical Info QR Code System

## Overview

The Emergency Medical Info QR Code System is a web application built with React and Node.js that allows users to input their medical information and generate a QR code containing this data. This QR code can be scanned by medical professionals in emergencies to quickly access the user's medical information.

## Features

- **User Information Form**: Users can input their personal and medical information including:
  - Name
  - Date of Birth
  - Blood Type
  - Allergies
  - Medications
  - Medical Conditions
  - Emergency Contacts
  - Medical Field (e.g., Allopathy, Unani, etc.)

- **QR Code Generation**: The application generates a QR code based on the inputted medical information.

- **User Information Storage**: User details are stored in the local storage and can be viewed later.

- **Navigation**: The application includes a navigation bar with routes to Home, User, and Enter Medical Info pages.

- **Styling**: The application is styled for a clean and user-friendly interface.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB (if needed)
- **QR Code Generation**: `qrcode.react` library

## Installation and Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/emergency-medical-info-qr-code-system.git
   cd emergency-medical-info-qr-code-system
