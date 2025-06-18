// app/api/verify-captcha/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();
  const secret = "6Le9r2UrAAAAALLHzwnhHWctGeppd581sK5FLvOm";

  const verificationRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: "POST",
    }
  );

  const data = await verificationRes.json();

  return NextResponse.json({
    success: data.success,
    score: data.score || null,
    errorCodes: data["error-codes"] || [],
  });
}
