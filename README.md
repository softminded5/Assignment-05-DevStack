 ##  Development Stack


 ## Project description:
  DevStack is a responsive technology showcase website built with React, TypeScript, and Tailwind CSS. It displays popular development technologies with their category, description, rating, difficulty level, and badge. Users can easily explore and filter technologies through a clean, modern interface.

 ## Technologies used: 
 React • TypeScript • Tailwind CSS • JSON Data

 # Features:
 1. Technology Cards — Each card shows name, icon, category, description, rating, difficulty, and badge.
 2. TypeScript Support — Uses types/interfaces to make the data and components safer and easier to maintain.
 3. JSON-Based Data — Technology information is stored separately as structured JSON data.



 ## 1. What is JSX, and why is it used in React?
 JSX is an extention of JavaScript. It allows HTML inside of it or it's  a combination of JavaScript and HTML.
 JSX is used in React for making components easier to create and read.

 ## 2. What is the difference between props and state?
 Props is used to pass data from parent to child and state is used to manage changing data inside the component.

 ## 3. What does the `useState` hook do, and where did you use it in this project?
 useState is used to store and update data that can change in a component.
 I used it in technologies to stores the technology data and to set updates the technology data.

 ## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
 useEffect is used to run code after the component renders, especially for side effects like API/file loading.
 I used it  to loads technologies.json and to put the data into state.

 ##  5. Why does every item in a `.map()` list need a unique `key` prop?
 So that react can catch the changes of data.

 ## 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
 Conditional rendering is rendering UI based on a condition.

 ## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
 Parent Passes data to child through props.
 And Child Passes a callback function as a prop, then the child calls that function.