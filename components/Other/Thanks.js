import React from "react";

const Thanks = () => {
  return (
    <>
      <h2 className="text-4xl pt-6 text-primary-100 font-bold font-title">
        Thanks to
      </h2>
      <p className="text-primary-100 w-full">
        To comparing this stuff I've been used{" "}
        <a href="https://github.com/protobi/query" className="font-bold">
          great library
        </a>{" "}
        written by Pieter Sheth-Voss.
        <br></br>
        To translate SQL to MongoDB syntax I've been used{" "}
        <a
          className="font-bold"
          href="https://github.com/allmas-tn/mongo-dql#readme"
        >
          Mongo DQL plugin
        </a>
        .<br></br>
        Also thanks to Jad Watson for great{" "}
        <a
          className="font-bold"
          href="https://github.com/jedwatson/react-select"
        >
          React Select
        </a>
        .<br></br>
        And of course thaks to{" "}
        <a
          className="font-bold"
          href="https://reactjs.org/community/team.html"
          rel="nofollow"
        >
          React Team
        </a>{" "}
        for React.
      </p>
    </>
  );
};

export default Thanks;
