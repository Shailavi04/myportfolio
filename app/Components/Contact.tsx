"use client";
import { useRef, useState } from "react";
import Button from "./Button";
import SocialIcon from "./SocialIcon";

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleKeyDown = (
    e: React.KeyboardEvent,
    nextRef?: React.RefObject<any>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (nextRef?.current) {
        nextRef.current.focus();
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = () => {
    const name = nameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const message = messageRef.current?.value.trim();
  
    if (!name || !email || !message) {
      setError("Please fill out all fields before submitting.");
      setSuccess(false);
      return;
    }
  
    // ✅ Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      setSuccess(false);
      return;
    }
  
    // ✅ Clear error and set success
    setError("");
    setSuccess(true);
  
    // ✅ Scroll to top of the page smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  
    // ✅ Optional: reset form fields
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };
  

  return (
    <section
      id="contact"
      className="px-6 py-10 bg-gradient-to-b from-blue-100 via-white to-blue-100"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <h2 className="text-3xl font-bold text-center text-indigo-800">
          Get in Touch
        </h2>

        {success && (
          <div className="bg-green-100 text-green-800 p-4 rounded-md text-center text-sm">
            ✅ Your message has been sent successfully!
          </div>
        )}
        {error && (
          <div className="bg-red-100 text-red-800 p-4 rounded-md text-center text-sm">
            {error}
          </div>
        )}

        <form
          className="flex flex-col md:flex-row gap-10"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {/* Left - Input Fields */}
          <div className="flex-1 flex flex-col gap-4 text-black">
            <input
              type="text"
              placeholder="Your Name"
              ref={nameRef}
              onKeyDown={(e) => handleKeyDown(e, emailRef)}
              className="rounded-lg border border-gray-400 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
  type="email"
  placeholder="Your Email"
  ref={emailRef}
  onKeyDown={(e) => {
    if (e.key === " ") e.preventDefault(); // prevent space
    handleKeyDown(e, messageRef);
  }}
  className="rounded-lg border border-gray-400 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
/>
            <textarea
              rows={5}
              placeholder="Your Message"
              ref={messageRef}
              onKeyDown={(e) => handleKeyDown(e)}
              className="rounded-lg border border-gray-400 px-4 py-3 text-sm shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Right - Button */}
          <div className="flex flex-col items-center justify-between gap-6 md:w-1/3">
            <Button
              value="Send Message"
              className="bg-indigo-500 text-white hover:bg-indigo-600 px-6 py-2 rounded-md text-sm"
            />
          </div>
        </form>

        {/* Social Icons */}
        <div className="flex gap-6 text-gray-700 text-2xl justify-center">
          <SocialIcon
            icon="github"
            url="https://github.com/Shailavi04"
          />
          <SocialIcon
            icon="linkedin"
            url="https://www.linkedin.com/in/shailavi-srivastava-05a807243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
          <SocialIcon icon="x" url="https://x.com/Sri04Shailavi" />
        </div>
      </div>
    </section>
  );
}
