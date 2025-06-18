"use client";

import { useState, useRef } from "react";

declare global {
  interface Window {
    grecaptcha: {
      getResponse: () => string;
      reset: () => void;
    };
  }
}

export default function ReCaptchaForm() {
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = window.grecaptcha.getResponse();

    if (!token) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    const res: Response = await fetch("/api/verify-captcha", {
      method: "POST",
      body: JSON.stringify({ token }),
    });

    window.grecaptcha.reset();

    const data = await res.json();
    if (data.success) {
      setMessage("CAPTCHA passed! 🎉 Proceed with your logic.");
    } else {
      setMessage("CAPTCHA failed ❌. Try again.");
    }

    window.grecaptcha.reset();
  };

  return (
    <>
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>

      <form onSubmit={handleSubmit} ref={formRef} className="space-y-4">
        {/* Your fields here */}
        <input
          type="text"
          placeholder="Your email"
          className="border p-2 w-full"
          required
        />

        {/* CAPTCHA */}
        <div
          className="g-recaptcha"
          data-sitekey="6Le9r2UrAAAAAKKoDxF0lGt2u3x9FeWbHWrRy2PR"
        ></div>

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Submit
        </button>

        {message && <p className="text-sm text-gray-200">{message}</p>}
      </form>
    </>
  );
}
