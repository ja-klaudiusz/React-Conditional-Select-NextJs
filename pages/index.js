import React, { useState, useEffect } from "react";
import Head from "next/head";

import ConditionalSelection from "../components/RCS/ConditionalSelection";
import Loading from "../components/Other/Loading";
import Bg from "../components/Other/Bg";
import RuleTranslator from "../components/Other/RuleTranslator";
import Editable from "../components/Other/Editable";
import Thanks from "../components/Other/Thanks";
import data from "../data";

export default function Home() {
  const [onlyOnClient, setOnlyOnClient] = useState(false);
  useEffect(() => {
    setOnlyOnClient(true);
    return () => {
      onlyOnClient && setOnlyOnClient(false);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 z-10 relative ">
        <Head>
          <title>React Conditional Selection</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@900&display=swap"
            rel="stylesheet"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mb-10">
          <div className="flex flex-wrap items-center justify-around max-w-7xl mt-6 sm:w-full">
            <div className="w-full px-2 py-2 mx-auto">
              <div className="flex flex-col items-start justify-center space-y-6 text-left">
                <h1 className="text-7xl text-primary-100 border-b border-primary-500 pb-10 mb-4 w-full font-title">
                  React <br></br> Conditional Selection
                </h1>
                <p className="text-primary-100 w-full ">
                  React Conditional Selection is a useful way to build cascading
                  selection with large amount of options and business rules
                  behind of them.
                </p>
                <h2 className="text-4xl pt-6 text-primary-100 font-title">
                  How it works
                </h2>
                <p className="text-primary-100 md:w-3/5 w-full">
                  Business rules are defined on almost every row of data and
                  each time when selection object changes, there is starting
                  validation process. Validation relies on comparing rules
                  defined on every option with current selection object.
                </p>
                <h2 className="text-4xl pt-6 text-primary-100 font-title">
                  Basic example
                </h2>
                <div className="w-full flex flex-col md:flex-row items-center justify-center space-y-6">
                  <ConditionalSelection
                    data={data}
                    showRequired={true}
                    exampleMode={true}
                  />
                </div>
                <h2 className="text-4xl pt-6 text-primary-100 font-title">
                  Example with default selection
                </h2>

                <div className="w-full flex flex-col md:flex-row items-center justify-center space-y-6">
                  <ConditionalSelection
                    exampleMode={true}
                    data={data}
                    showRequired={true}
                    defaultValues={{
                      EQUIPMENTLINE: "AMGPLUS",
                      EQUIPMENTPACKAGE: "6",
                      AIRBAGS: "MORE",
                      ENGINEVERSIONS: "GASOLINE",
                      FUELTYPE: "PETROL",
                      UPHLOSTERYGROUP: "NAPPA",
                      UPHLOSTERYINTERIOR: "NAP49261",
                      UPHLOSTERYSEAT: "NAP49261",
                    }}
                  />
                </div>

                {onlyOnClient && <Editable />}

                <RuleTranslator />
                <Thanks />
              </div>
            </div>
          </div>
        </main>

        <footer className="flex items-center justify-center w-full h-24 text-primary-100">
          <p className="text-center">
            Copyright © Klaudiusz Marszałek, 2021. MITNFA Licensed<br></br>
            <strong>GitHub</strong>{" "}
            <a href="https://github.com/ja-klaudiusz/React-Conditional-Selection">
              React Conditional Selection
            </a>
          </p>
        </footer>
      </div>
      <Bg />
    </>
  );
}
