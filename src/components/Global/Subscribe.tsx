"use client";

import { useState } from "react";
import { IconSend } from "@tabler/icons-react";
import { FormEvent } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState<string>("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear the form data
    setEmail("");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex justify-between items-stretch h-full w-full"
    >
      <input
        type="email"
        placeholder="Enter your email"
        required
        className="outline-none bg-transparent  my-text-16 w-full pr-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary sm:py-3 py-2.5 lg:px-5 md:px-4 sm:px-3 px-2.5 flex-centerY sm:gap-3 gap-2 font-semibold"
        aria-label="subscribe"
      >
        Subscribe <IconSend className="md:text-base sm:text-sm text-xs" />
      </button>
    </form>
  );
};

export default Subscribe;
