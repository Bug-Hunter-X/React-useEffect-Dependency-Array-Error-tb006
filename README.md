# React useEffect Dependency Array Bug

This repository demonstrates a common error in React's `useEffect` hook: incorrectly specifying the dependency array.

## The Bug
The `bug.js` file contains a `MyComponent` that uses `useEffect` to log the current count.  However, the dependency array is missing `count`. This causes the effect to run on every render, creating an infinite loop of log messages.

## The Solution
The `bugSolution.js` file shows the corrected version of `MyComponent`, where `count` is included in the dependency array.  Now the effect only runs when `count` actually changes.

## How to reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console logs in the `bug.js` and `bugSolution.js` versions. Note the difference in behaviour. 

This example highlights the importance of carefully managing the dependency array in `useEffect` to prevent unexpected behavior in your React applications.