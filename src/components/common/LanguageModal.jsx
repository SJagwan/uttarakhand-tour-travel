import React from "react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
];

export default function LanguageModal({ open, onSelect }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xs w-full text-center">
        <h2 className="text-xl font-bold mb-4">Select Language / भाषा चुनें</h2>
        <div className="space-y-3">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onSelect(lang.code)}
              className="w-full py-2 px-4 rounded-lg border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition cursor-pointer"
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
