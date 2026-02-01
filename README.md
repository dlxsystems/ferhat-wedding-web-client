# Sahar & Ferhat Wedding Website

A premium, interactive, and mobile-first wedding invitation website built with Next.js, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Advanced Design**: Elegant typography, parallax scrolling, and smooth animations.
- **Interactive Experience**: Custom guest counter, map integration, and background music with a visualizer.
- **Serverless RSVP**: Integrated email notifications and Google Sheets syncing.
- **Multi-lingual**: Support for English, Dutch, Turkish, Farsi.
- **Premium Performance**: Smooth scrolling (Lenis) and optimized image loading.

## 🚀 Getting Started

1.  **Install dependencies**:

    ```bash
    npm install
    ```

2.  **Environment Variables**:
    Create a `.env.local` file with the following credentials (optional for development, required for real emails/sheets):

    ```env
    # Email Settings (for nodemailer)
    SMTP_HOST=smtp.example.com
    SMTP_PORT=587
    SMTP_USER=your_email@example.com
    SMTP_PASS=your_password
    COUPLE_EMAIL=couple@example.com

    # Google Sheets Settings
    GOOGLE_SHEETS_CLIENT_EMAIL=service-account@project.iam.gserviceaccount.com
    GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
    GOOGLE_SHEET_ID=your_sheet_id
    ```

3.  **Run development server**:
    ```bash
    npm run dev
    ```

## 🎨 Customization

- **Theme**: Colors and fonts are defined in `app/globals.css` using Tailwind v4 theme variables.
- **Content**: Update text translations in `app/data/locales.ts`.
- **Images**: Add your own high-res photos to `public/`.
- **Music**: Replace `public/music.mp3` with your preferred track.
