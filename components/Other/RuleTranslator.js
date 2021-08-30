import React, { useEffect, useState } from "react";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
const RuleTranslator = () => {
  const [json, setJson] = useState(null);
  const [sqlRule, setSqlRule] = useState(
    "((FUELTYPE IN ('PETROL', 'DIESEL') AND EQUIPMENTLINE = 'AMG') OR EQUIPMENTLINE='AMGPLUS')"
  );
  const getRule = async (rule) => {
    const response = await fetch("/api/rule", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rule: rule }),
    });
    const result = await response.json();
    setJson(result);
  };
  useEffect(() => {
    getRule(sqlRule);
  }, [sqlRule]);

  return (
    <>
      <h2 className="text-4xl pt-6 text-primary-100 font-bold font-title">
        Rule Translator
      </h2>
      <p className="text-primary-100 w-full">
        Rules are writen in MongoDB syntax but if you are more familiar with SQL
        syntax you can use belowing translator:
      </p>
      <input
        className="w-full p-6 rounded-3xl bg-primary-900 border-4 border-primary-600 text-primary-100 outline-none"
        type="text"
        onChange={(e) => setSqlRule(e.target.value)}
        value={sqlRule}
      />
      {json ? (
        <div
          className="md:w-1/2 w-full text-sm text-left mr-6 p-6 bg-primary-800 rounded-3xl"
          dangerouslySetInnerHTML={{
            __html:
              "<pre>" +
              highlight(JSON.stringify({ rule: json }, null, 4), languages.js) +
              "</pre>",
          }}
        ></div>
      ) : null}
    </>
  );
};

export default RuleTranslator;
