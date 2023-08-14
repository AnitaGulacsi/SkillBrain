// Instructions
// Your design company has primarily been working with CSS transformations to build web pages. 
// After some discussion, a decision is made to start using JavaScript to perform some calculations dynamically. 
// Some of your teammates are less experienced with JavaScript, so you decide to use a function closure to create reusable transformation for {x, y} coordinate pairs.

// 1. Translate the coordinates
// Implement the translate2d function that returns a function making use of a closure to perform a repeatable 2d translation of a coordinate pair.



// 2. Scale the coordinates
// Implement the scale2d function that returns a function making use of a closure to perform a repeatable 2d scale of a coordinate pair.
// For this exercise, assume only positive scaling values.



// 3. Compose transformation functions
// Combine two transformation functions to perform a repeatable transformation. 
// This is often called function composition, where the result of the first function 'f(x)' is used as the input to the second function 'g(x)'.



// 4. Save the results of functions
// Implement the memoizeTransform function. It takes a function to memoize, then returns a new function that remembers the inputs to the supplied 
// function so that the last return value can be "remembered" and only calculated once if it is called again with the same arguments.
// Memoizing is sometimes called dynamic programming, it allows for expensive operations to be done only once since their result is remembered.
