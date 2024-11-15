"use client";

import { useState } from "react";
import copy from "clipboard-copy";

const useCopy = () => {
  const [copiedText, setCopiedText] = useState(null);

  const handleCopy = (text: any) => {
    copy(text);
    setCopiedText(text);

    // Clear the copied text message after 2 seconds
    setTimeout(() => {
      setCopiedText(null);
    }, 1500);
  };

  return { copiedText, handleCopy };
};

export default useCopy;
