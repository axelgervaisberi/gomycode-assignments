import React from 'react';

/**
 * STEP 1: Define a TypeScript Interface for Component Props
 * --------------------------------------------------------
 * In plain JavaScript, props are untyped objects, which can lead to runtime
 * errors if expected props are missing or passed as the wrong data type.
 * Here, we define 'GreetingProps' specifying that the 'name' prop is required
 * and must be a string.
 */
interface GreetingProps {
  name: string;
}

/**
 * STEP 2: Annotate the Functional Component with React.FC (React.FunctionComponent)
 * ---------------------------------------------------------------------------------
 * We type 'Greeting' using 'React.FC<GreetingProps>'. This generic type:
 * 1. Ensures the component receives props matching 'GreetingProps'.
 * 2. Provides type checking for JSX return value.
 * 3. Destructures 'name' safely with full IDE autocompletion and static type safety.
 */
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div className="fs-4 text-dark">Hello, <span className="fw-bold text-primary">{name}</span>!</div>;
};

export default Greeting;
