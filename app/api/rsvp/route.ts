import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, guests } = body;

    // 1. Validation
    if (!name || !email || !guests) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("Received RSVP:", { name, email, guests });

    // 2. Google Sheets Integration (Mocked if no credentials)
    if (
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL &&
      process.env.GOOGLE_SHEETS_PRIVATE_KEY
    ) {
      try {
        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(
              /\\n/g,
              "\n"
            ),
          },
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        // Append to sheet (Assumes a sheet ID is provided)
        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          range: "Sheet1!A:C",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [[name, email, guests, new Date().toISOString()]],
          },
        });
        console.log("Google Sheet updated");
      } catch (error) {
        console.error("Google Sheets Error:", error);
        // Don't fail the request if sheets fails, just log it
      }
    } else {
      console.log("Skipping Google Sheets - No credentials provided");
    }

    // 3. Email Notification (Mocked if no credentials)
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        // Send email to couple
        await transporter.sendMail({
          from: '"Wedding RSVP" <rsvp@example.com>',
          to: process.env.COUPLE_EMAIL || "couple@example.com",
          subject: `New RSVP from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nGuests: ${guests}`,
          html: `<b>New RSVP</b><br>Name: ${name}<br>Email: ${email}<br>Guests: ${guests}`,
        });
        console.log("Email sent");
      } catch (error) {
        console.error("Email Error:", error);
      }
    } else {
      console.log("Skipping Email - No credentials provided");
    }

    return NextResponse.json(
      { message: "RSVP received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("RSVP API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
