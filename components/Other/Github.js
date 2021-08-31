import React, { useEffect, useState } from "react";

const Github = () => {
  const [stargazersCount, setStargazersCount] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://api.github.com/repos/ja-klaudiusz/React-Conditional-Selection",
        {
          credentials: "same-origin",
        }
      );

      const result = await data.json();
      const stars = parseInt(result.stargazers_count);
      stars > 0 && setStargazersCount(stars);
    };
    fetchData();
  }, []);
  return (
    <div className="w-full flex flex-row justify-end h-10 pt-0 mt-0">
      <div className="bg-white bg-opacity-90 h-10 py-0 px-2 flex flex-row justify-start items-center space-x-2 rounded-lg">
        <a
          className="btn"
          href="https://github.com/ja-klaudiusz/React-Conditional-Selection"
          rel="noopener"
          target="_blank"
          aria-label="Star React-Conditional-Selection on GitHub"
        >
          <svg
            viewBox="0 0 16 16"
            width="24"
            height="24"
            className="octicon octicon-mark-github"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
        {stargazersCount > 0 && (
          <strong>
            <a
              className="pr-1 hover:text-primary-400 text-sm tracking-wider"
              href="https://github.com/ja-klaudiusz/React-Conditional-Selection/stargazers"
              rel="noopener"
              target="_blank"
              aria-label={stargazersCount + " stargazers on GitHub"}
            >
              {stargazersCount}
            </a>
          </strong>
        )}
      </div>
    </div>
  );
};

export default Github;
