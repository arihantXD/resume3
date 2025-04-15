import { formSchema } from "@/app/sections/Contact";
import axios from "axios";
import { NextRequest } from "next/server";
import { z } from "zod";

let globalRate = 20;
let lastReset = Date.now();
const WINDOW = 5 * 60 * 1000;

function checkRateLimit() {
  const now = Date.now();
  if (now - lastReset > WINDOW) {
    globalRate = 20;
    lastReset = now;
  }

  if (globalRate <= 0) return false;

  globalRate--;
  return true;
}

export async function POST(req: NextRequest) {
  if (!checkRateLimit()) {
    return Response.json(
      {
        message: "Someone spammed the emails, please try again after 5 mins 😥",
      },
      { status: 429 }
    );
  }

  try {
    const body: z.infer<typeof formSchema> = await req.json();
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: body.username, email: "xtremeplay000@gmail.com" },
        to: [{ email: "xtremeplay000@gmail.com" }],
        subject: "New message from latest resume",
        htmlContent: `
      <div style="font-family: Arial, sans-serif; padding: 16px; background-color: #f9f9f9; border-radius: 8px; border: 1px solid #ddd;">
        <h2 style="color: #333;">📩 New Message from Portfolio Site</h2>
        <p><strong>👤 Sender:</strong> ${body.username}</p>
        <p><strong>📧 Email:</strong> ${body.email}</p>
        <div style="margin-top: 12px; padding: 12px; background: #fffbe6; border-left: 4px solid #ffcc00;">
          <p style="margin: 0;"><strong>💬 Message:</strong></p>
          <p style="margin: 4px 0 0;">${body.message}</p>
        </div>
      </div>`,
      },
      {
        headers: {
          "api-key": process.env.API_KEY,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return Response.json({
      message: "Mail Sent, I will get back to you soon. Thanks ! 🙂",
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      message: "Internal error, please mail me manually. Sorry ! 😥",
    });
  }
}
