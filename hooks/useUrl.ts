import { useState, useEffect, SyntheticEvent } from "react";
import { UrlIndex } from "../enums/urlIndex";

export type urlStrings = keyof typeof UrlIndex;

export const useUrl = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleUrlChange = (url: number) => {
    setActiveLink(url);
  };

  return {
    activeLink,
    handleUrlChange,
  };
};
