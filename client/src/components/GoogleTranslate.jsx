// src/components/GoogleTranslate.jsx
import React, { useEffect } from "react";

const GoogleTranslate = ({ includedLanguages = "en,hi,gu,mr" }) => {
  useEffect(() => {
    // if already loaded, do nothing
    if (window.google && window.google.translate) return;

    // global callback required by the script
    window.googleTranslateElementInit = function () {
      if (!window.google || !window.google.translate) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // inject script
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Do not remove the script on unmount in case other parts still need it;
      // if you must cleanup, remove script and the global callback.
    };
  }, [includedLanguages]);

  // expose a simple function on window to change language programmatically
  useEffect(() => {
    window.setGoogleTranslateLanguage = function (lang) {
      // try to find the select box that the widget creates
      const tryChange = () => {
        const combo = document.querySelector(".goog-te-combo");
        if (!combo) return false;
        combo.value = lang;
        combo.dispatchEvent(new Event("change"));
        return true;
      };

      // try multiple times (widget might not be ready instantly)
      let attempts = 0;
      const maxAttempts = 20;
      const interval = setInterval(() => {
        if (tryChange() || attempts++ > maxAttempts) {
          clearInterval(interval);
        }
      }, 200);
    };

    return () => {
      // cleanup helper when component unmounts
      try {
        delete window.setGoogleTranslateLanguage;
      } catch {}
    };
  }, []);

  // keep the widget DOM present but visually off-screen so we can access the select
  return (
    <div
      id="google_translate_element"
      style={{ position: "absolute", left: "-9999px", top: 0, width: "1px", height: "1px", overflow: "hidden" }}
      aria-hidden="true"
    />
  );
};

export default GoogleTranslate;
