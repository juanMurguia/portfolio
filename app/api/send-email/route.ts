import "dotenv/config";
const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request: Request): Promise<Response> {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "juancruzmur@gmail.com",
        subject: `Portfolio Contact: ${name}`,
        reply_to: email,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return Response.json(data);
    } else {
      const errorData = await res.text();
      return Response.json(
        { error: "Email sending failed", details: errorData },
        { status: res.status }
      );
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { error: "Failed to send email", message: (error as Error).message },
      { status: 500 }
    );
  }
}
