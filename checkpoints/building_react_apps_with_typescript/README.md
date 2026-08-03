# Building React Apps with TypeScript Checkpoint

This repository contains the conversion of React JavaScript components to TypeScript 5 with explicit type annotations, interface definitions, and detailed inline code commentary.

---

## 📝 Step-by-Step Conversion Descriptions

### Code 01: Functional Component (`Greeting.tsx`)

#### Original JavaScript Code
```javascript
import React from 'react'; 
const Greeting = ({ name }) => { 
  return <div>Hello, {name}!</div>;
};
export default Greeting;
```

#### TypeScript Conversion Steps
1. **Defined Props Interface (`GreetingProps`)**:
   - Created `interface GreetingProps { name: string; }` to explicitly declare that the `name` prop is a required string.
2. **Annotated Component Type (`React.FC<GreetingProps>`)**:
   - Typed the component as `React.FC<GreetingProps>` (or `React.FunctionComponent<GreetingProps>`), granting autocompletion and compile-time prop validation.
3. **Prop Destructuring with Type Safety**:
   - Destructured `({ name })` safely with type inference provided by TypeScript.

---

### Code 02: Class Component (`Counter.tsx`)

#### Original JavaScript Code
```javascript
import React, { Component } from 'react'; 
class Counter extends Component { 
  state = {
    count: 0
  }; 
  increment = () => {
    this.setState({ count: this.state.count + 1 }); 
  }; 
  render() { 
    return ( 
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div> 
    );
  }
} 
export default Counter;
```

#### TypeScript Conversion Steps
1. **Defined Props & State Interfaces (`CounterProps` and `CounterState`)**:
   - Created `interface CounterState { count: number; }` specifying that state has a numerical `count` field.
   - Created `interface CounterProps {}` for props.
2. **Generic Class Declaration (`Component<CounterProps, CounterState>`)**:
   - Extended `Component<CounterProps, CounterState>` passing `CounterProps` and `CounterState` as generics. This enforces strict type checking on `this.state` and `this.setState`.
3. **Explicit State Type Initialization**:
   - Explicitly typed `state: CounterState = { count: 0 };`.
4. **Typed Arrow Function Handler (`increment`)**:
   - Explicitly typed handler function signature `increment = (): void => { ... }`.

---

## 🚀 How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Build production bundle (TypeScript typecheck & compile):
   ```bash
   npm run build
   ```
