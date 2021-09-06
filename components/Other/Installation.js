import React, { useEffect, useState } from "react";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
const Installation = () => {
  return (
    <>
      <h2 className="text-4xl pt-6 text-primary-100 font-black font-title">
        Installation
      </h2>
      <p className="text-primary-100 w-full text-lg">Install NPM package</p>
      <pre className="w-full text-sm text-left mr-6 p-6 bg-primary-800 rounded-3xl text-info-150">
        npm i react-conditional-selection
      </pre>
      <p className="text-primary-100 w-full text-lg">
        and then apply code like this
      </p>
      <div
        className="w-full text-sm text-left mr-6 p-6 bg-primary-800 rounded-3xl text-info-150"
        dangerouslySetInnerHTML={{
          __html:
            "<pre style='overflow:hidden; max-width:80vw; margin: 0 auto;'>" +
            highlight(
              `import ConditionalSelection from "react-conditional-selection";

function App() {
  const data = {
    FUELTYPE: {
      code: "FUELTYPE",
      name: "Fuel type",
      options: [
        {
          code: "NONE",
          name: "none",
          default: null,
          rules: { ENGINEVERSIONS: { $in: ["ELECTRIC", "HYDROGEN"] } },
        },
        {
          code: "PETROL",
          name: "Petrol",
          default: null,
          rules: { ENGINEVERSIONS: "GASOLINE" },
        },
        {
          code: "DIESEL",
          name: "Diesel",
          default: null,
          rules: { ENGINEVERSIONS: "GASOLINE" },
        },
      ],
      category: { name: "Technical Data", code: "TECHNICAL" },
      isVisible: true,
      isRequired: true,
      rules: null,
    },
  };
  return (
    <ConditionalSelection
      data={data}
      showRequired={true}
      callback={(data) => {
        console.log(data);
      }}
    />
  );
}

export default App;`,
              languages.js
            ) +
            "</pre>",
        }}
      ></div>
    </>
  );
};

export default Installation;
