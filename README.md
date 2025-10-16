# Learn React 🚀

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algo -  written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing 
- COde Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Food Ordering APP
<!-- Header - Logo, nav Items, cart
Body - Search, RestaurantContainer-(RestaurantCard - img, name of res, star ratings, cuisine, deliveryTime etc)
Footer - copyright, Links, Address, Contact -->

# Two types of Import/Export
Default Import/Export - export default Component; - import Component from "path";
Named Import/Export - export const Component; - import {Component} from "path";

# React Hooks
(Normal Js Utility Functions)
1. useState() 
    // using react state variable // Local state variable - super powerful variable
    Example- const [ listOfRestaurants, setListOfRestaurants ] = useState([])
2. useEffect(() => {}, []) takes 2 arguments - callback fn and dependency

# 2 types of Routing in Web Apps
- Client Side Routing
- Server Side Routing

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect to our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of testing as a (developer)
- Unit Testing
- Integration Testing
- End to End Testing (e2e testing)

# Setting up Testing in our app
- Install React Testing Library
- Install jest
- Install babel dependencies(required when we use jest using babel)
- Configure babel
- Configure parcel config file to disable default babel transpilation
- Jest Configuration (npx jest --init)
- Install jsdom library
- __ is called Dunder (2 underscore)
- Install @babel/preset-react - to make JSX work in Test Cases
- Include @babel/preset-react inside my  babel config
- Install @testing-library/jest-dom