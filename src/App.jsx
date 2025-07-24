// Lexi Legal Assistant Interface - React Component
// Run: npm install && npm start

import React, { useState } from "react";

export default function LexiLegalAssistant() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      const fakeResponse = {
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text:
              "As the age of the deceased at the time of accident was held to be about 54–55 years...",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link:
              "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"
          }
        ]
      };
      setResponse(fakeResponse);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Lexi Legal Assistant</h1>

        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your legal question here..."
          className="w-full h-32 p-4 border rounded-md resize-none"
        ></textarea>

        <button
          onClick={handleSubmit}
          disabled={loading || !query.trim()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Generating Answer..." : "Submit"}
        </button>

        {response && (
          <div className="mt-6 bg-gray-50 p-4 rounded-md border">
            <p className="text-lg font-semibold">Answer:</p>
            <p className="mt-2 text-gray-800">{response.answer}</p>

            <div className="mt-4">
              <p className="font-semibold">Citation:</p>
              {response.citations.map((cite, index) => (
                <div key={index} className="mt-2 p-2 bg-white border rounded-md">
                  <p className="text-sm italic">"{cite.text}"</p>
                  <a
                    href={cite.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline mt-1 inline-block"
                  >
                    View PDF: {cite.source}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
