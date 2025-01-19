# Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Matching Algorithm - written in c++
- Cashing - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support Older Browser
- Diagnostic
- Error Handling
- HTTPs

# Two Types of Export and Import

- Default Export / Import

export default component
import component from "path

- Named Export / Import

export const component
import {component} from "path"

# React Hooks

(Normal Js Utility Function)

- Two Important Hooks in React
  - useState() - This basically is used to Genrate superPowerful State Vairable In React
  - useEffect() -

# Promises

- Promise is used to handle Asycrhonas Task In Js
- Promise is nothing its js object
- First Promise return empty object and after successfully get data promise will data automatically
- Promise Object Can Be Resolved only once time

# Async Fuction

- Async Function Always Returns A Promise
- Async And Await Is Used To Handle Promises
- Await is KeyWOrd That Can be Only be the used inside a async function
- and Await be used inFront of promise and its resolve these promise

# Why Use Promises (Completed Asycrhonas Task)

- First time you have to completed Asycrhonas Task We use Callback Function
- But Its Not Trustily That is why
- Promises comes in the picture
- After Coming Promise in Picture His Syntax IS Complicated
- So Async Await is Coming with clean Syntax
- Promise is used to complete asycrhonas task because js is synchronous threaded language

# Lazy Loading

- Lazy Loading is used to load component only when it is needed
- Lazy Loading is Used To improve your application performance
- When use Lazy Loading you userExperience is good

- # Name of Lazy Loading
  - On Demand Loading
  - Code Splitting
  - Dynamic Import
  - Asycrhonas Loading
  - Conditional Loading

# Redux ToolKit

- install @reduxjs/toolkit
- install react-redux
- build our store
- connect our store to our app
- create cartSlice
- dispatch action
- selector

<!-- how to work dispatch -->

const dispatch = useDispatch();

const handleClick = () => {
dispatch(addItem("Pizza"));

    // {
    //   paylod:"pizza"
    // }

};
