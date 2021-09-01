import React, { useState, useEffect } from "react";
import Head from "next/head";

import ConditionalSelection from "../components/RCS/ConditionalSelection";
import Loading from "../components/Other/Loading";
import Bg from "../components/Other/Bg";
import RuleTranslator from "../components/Other/RuleTranslator";
import Editable from "../components/Other/Editable";
import Thanks from "../components/Other/Thanks";
import Github from "../components/Other/Github";
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
      <div className="flex flex-col items-center justify-center min-h-screen py-2 z-10 relative">
        <Head>
          <title>React Conditional Selection</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.8, maximum-scale=1.0, minimum-scale=0.8, user-scalable=0"
          ></meta>
          <meta
            name="description"
            content="React Conditional Selection is a useful way to build cascading dropdown with large amount of options, categories and business rules aimed at controlling the dependencies between of them."
          />
          <meta property="og:title" content="React Conditional Selection" />
          <meta
            property="og:description"
            content="Try the new way to build cascading dropdown with large amount of options, categories and business rules behind of them."
          />
          <meta
            property="og:url"
            content="https://react-conditional-select.vercel.app/"
          />
          <meta property="og:image" content="/rcs.jpg" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;900&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mb-10">
          <div className="flex flex-wrap items-center justify-around max-w-7xl mt-6 sm:w-full">
            <div className="w-full px-2 py-2 mx-auto">
              <div className="flex flex-col items-start justify-center space-y-6 text-left">
                <Github />
                <h1 className="text-7xl text-primary-100 border-b border-info-800 pb-10 w-full font-title font-black">
                  React <br></br> Conditional Selection
                </h1>

                <p className="text-primary-100 md:w-9/12 w-full text-lg pt-3">
                  React Conditional Selection is a useful way to build cascading
                  dropdown with large amount of options, categories and business
                  rules aimed at controlling the dependencies between of them.
                </p>
                <h2 className="text-4xl pt-6 text-primary-100 font-title font-black">
                  How it works
                </h2>
                <p className="text-primary-100 md:w-9/12 w-full text-lg">
                  Business rules are defined on almost every row of data. Each
                  time when object of selection changes, there is starting
                  validation process. Rule decide about when option or select
                  should render. Validation relies on comparing rules with
                  selection object. Categories, selects or options are rendered
                  only when its rules are matching to current object of
                  selection.
                </p>
                <h2 className="text-4xl pt-6 text-primary-100 font-title font-black">
                  Basic example
                </h2>
                <div className="w-full flex flex-col md:flex-row items-center justify-center">
                  <ConditionalSelection
                    data={data}
                    showRequired={true}
                    exampleMode={true}
                  />
                </div>
                <h2 className="text-4xl pt-6 text-primary-100 font-title font-black">
                  Example with default selection
                </h2>

                <div className="w-full flex flex-col md:flex-row items-center justify-center">
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
                <h2 className="text-4xl pt-6 text-primary-100 font-title font-black">
                  License
                </h2>
                <p className="text-primary-100 md:w-9/12 w-full text-lg">MIT</p>
                <Thanks />
              </div>
            </div>
          </div>
        </main>

        <footer className="flex flex-col items-center justify-center w-full text-primary-100 leading-6">
          <p className="text-center">
            Build by Klaudiusz Marszałek. Please support me by leaving a{" "}
            <strong>
              <a href="https://github.com/ja-klaudiusz/React-Conditional-Selection">
                ★ @github
              </a>
            </strong>
          </p>
          <form
            className="w-full text-center mt-4"
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="VVVUQY34AK24A"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
              className="h-0"
            />
          </form>
          <p className="bg-white px-6 py-2 text-center text-black rounded-lg mb-2 mt-2">
            Hosted on ▲ Vercel
          </p>
        </footer>
      </div>
      <Bg />
    </>
  );
}
