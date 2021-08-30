# React Conditional Selection

React Conditional Selection is a useful way to build cascading selection with large amount of options and business rules behind of them.

# How it works

Business rules are defined on almost every row of data and each time when selection object changes, there is starting validation process. Validation relies on comparing rules defined on every option with current selection object.

## Thanks to

To comparing this stuff I've been used [great library](https://github.com/protobi/query) written by Pieter Sheth-Voss.

To translate SQL to MongoDB syntax I've been used [Mongo DQL plugin](https://github.com/allmas-tn/mongo-dql).

Also thanks to Jad Watson for great [React Select](https://github.com/jedwatson/react-select).

And of course thaks to [React Team](https://reactjs.org/community/team.html) for React.
