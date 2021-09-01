import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import Scrollbars from "react-custom-scrollbars";
import ConditionalSelection from "../RCS/ConditionalSelection";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import { example } from "../../data";

const Editable = () => {
  const [sampleCode, setSampleCode] = useState(example);
  const [editorError, setEditorError] = useState(null);
  return (
    <>
      {sampleCode && (
        <>
          <h2 className="text-4xl pt-6 text-primary-100 font-black font-title">
            Live edit
          </h2>
          <div className="w-full flex flex-col md:flex-row items-start justify-center">
            <div
              className={
                " md:w-1/2 w-full text-sm text-left rounded-3xl md:mr-6 mr-0 md:mb-0 mb-8 p-6 border-4 " +
                (editorError
                  ? "bg-error-700 border-error-800"
                  : "bg-primary-900  border-primary-550")
              }
            >
              <pre className="pb-1 text-info-250">Paste your data:</pre>
              <Scrollbars
                renderThumbVertical={({ style, ...props }) => (
                  <div
                    {...props}
                    style={{ ...style, backgroundColor: "#2e2333" }}
                  />
                )}
                autoHeight
                autoHeightMin={100}
                autoHeightMax={400}
              >
                <Editor
                  className="editor-box"
                  value={JSON.stringify(sampleCode, null, "    ")}
                  onValueChange={(code) => {
                    try {
                      editorError && setEditorError(null);
                      const result = code || "{}";
                      return setSampleCode(JSON.parse(result));
                    } catch (e) {
                      setEditorError(e.message);
                    }
                  }}
                  highlight={(code) => highlight(code, languages.js)}
                />
              </Scrollbars>
              {editorError ? (
                <pre className="pt-4 text-error-150">
                  Unsuccessful attempts with incorrect syntax!
                  <br></br>
                  {editorError}
                </pre>
              ) : (
                <pre className="pt-1 mt-6 text-info-400 border-t border-info-400">
                  Sample scema
                </pre>
              )}
            </div>
            <div className="md:w-1/2 w-full text-sm text-left">
              <ConditionalSelection data={sampleCode} showRequired={true} />
            </div>
          </div>
        </>
      )}

      <h2 className="text-4xl pt-6 text-primary-100 font-black">
        Try it on CodeSandbox
      </h2>
      <div
        className="w-full p-6 border-4 border-primary-550 rounded-3xl"
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://codesandbox.io/embed/react-conditional-selection-75e7s?fontsize=14&hidenavigation=1&module=%2Fsrc%2FComponents%2FConditionalSelection.js&theme=dark&view=editor"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="React Conditional Selection"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        }}
      ></div>
    </>
  );
};

export default Editable;
