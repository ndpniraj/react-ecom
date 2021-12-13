import React from "react";

export default function Contact() {
  return (
    <div className="mt-10 max-w-md mx-auto text-center font-semibold">
      <h1 className="mt-10 max-w-md mx-auto text-center text-2xl font-semibold">
        Welcome to <span className="text-yellow-500">Contact</span> Page
      </h1>
      <form className="mt-5 space-y-5">
        <input
          type="text"
          className="border-b w-full outline-none"
          placeholder="Message title"
        />
        <textarea
          placeholder="Your message"
          className="w-full resize-none border-b outline-none h-36"
        ></textarea>
        <input
          className="px-5 py-2 cursor-pointer"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}
