[Course link](https://www.udemy.com/course/react-redux/)

# React X ReactDOM

![React X ReactDOM image](imgs/01.png "React X ReactDOM")

# useState Function
![useState image](imgs/02.png "useState")

# How to create a react app
* The recommended method for generating a project is now:
npx create-react-app my-app
* If you get any errors about missing templates or how a global Create React App install is no longer supported even when using this command, you likely need to remove the global package from your system:
* npm uninstall -g create-react-app
* Note - extra step is needed for Mac / Linux users to manually delete the folder:
* rm -rf /usr/local/bin/create-react-app

# Why create-react-app?
![create-react-app image](imgs/03.png "create-react-app")

## Babel work:
* ES2015 JS -> BABEL -> ES5 JS.
* It takes the new versions os javascript and 'transform' in a version that browsers can interpreter.

# Exploring a create-react-app project.
![](imgs/04.png)


# Difference between ES2015 Modules -> import and CommonJS Modules -> require
* ES2015 Import statement -> import
* CommonJS require statement -> require

# Important Note about Live Reloading
* There appears to be an issue in CRA in regards to fast refresh when code changes are made to the index.js file:
* https://github.com/facebook/create-react-app/issues/9904
* Manually refreshing will show the changes, also, any changes to components deeper in the file structure will cause an auto-refresh as expected.
* One workaround noted suggests putting the following in the index.js which enables reloading:

```javascript
if (module.hot) {
  module.hot.accept();
}
```
* Note - If you have spaces in your project directory name, reloading throughout the whole application can also fail.


# What is a React Component?
![](imgs/05.png)

# What is JSX?
* It's similar html, but its the 'translation' of react content made by babel.
![](imgs/06.png)
![](imgs/07.png)
![](imgs/08.png)

# JSX vs HTML
![](imgs/09.png)
![](imgs/10.png)
* First braces indicate de javascript variable and second meant a javascript object.

# Three Tenets of Components
![](imgs/11.png)

# Open Source Styling CSS framework
* https://semantic-ui.com
* https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css
* https://cdnjs.com/libraries/semantic-ui

# Library that helps developing with mocks
* faker.js
* https://github.com/marak/Faker.js/
* npm install --save faker

# Creating a Reusable Configurable Component
![](imgs/12.png)

# Props
![](imgs/13.png)
* Example show different names in comments.

# Class Components
![](imgs/14.png)
![](imgs/15.png)
![](imgs/16.png)
![](imgs/17.png)
![](imgs/18.png)
* STATE CAN **ONLY** BE UPDATED USING THE FUNCTION 'setState'

# Component Lifecycle
![](imgs/19.png)
![](imgs/20.png)


# Solving Context Issues

```javascript

class Car {
  constructor() {
    //OLD FASHION
    this.drive = this.drive.bind(this);
  }

  setDriveSound(sound) {
    this.sound = sound;
  }

  drive() {
    return this.sound;
  }

}

const Car = new Car();
car.setDriveSound('vroom');

const drive = car.drive;

drive(); //IF WITHOUT CONSTRUCTOR THE RETURN WILL BE 'cannot read undefined'

```

```javascript
class Car {
  setDriveSound(sound) {
    this.sound = sound;
  }


  //OTHER WAY
  drive = () => {
    return this.sound;
  }

}

const Car = new Car();
car.setDriveSound('vroom');

const drive = car.drive;

drive(); //IF WITHOUT CONSTRUCTOR THE RETURN WILL BE 'cannot read undefined'

```

# React Refs

* Gives access to a single DOM element
* We create refs in constructor, assign them to instance variables, then pass to a particular JSX element as props.

# React Hooks

![](imgs/21.png)
![](imgs/22.png)

# Understanding useState

```javascript
//ARRAY DESTRUCTURING

const colors = ['red', 'green'];

colors[0]; // 'red'

colors[1]; // 'green'

const redColor = colors[0];
const greenColor = colors[1];

const [firstElement, secondElement] = colors;

const [x, setX] = useState(null); // CREATE ARRAY WITH 2 ELEMENTS, ONE PROPERTY ANOTHER FUNCTION

//IT IS THE SAME
const things = useState(null);
const activeThings = things[0];
const setActiveThings = things[1];

```

![](imgs/23.png)
![](imgs/24.png)
![](imgs/25.png)

# The 'useEffect' Hook

* Allows function components to use something like lifecycle methods
* We configure the hook to run some code automatically in one of three scenarios.
* 1 - When the component is rendered for the first time only
* 2 - Whne the component is rendered **for the first time and whenever it rerenders**.
* 3 - When the component is reendered **for the first time and whenever it rerenders and some piece of data has changed**.

```javascript
useEffect(() => {
    console.log('I RUN EVERY RENDER AND AT INITIAL RENDER ');
  });

  useEffect(() => {
    console.log('I RUN EVERY INITIAL RENDER');
  }, []);


  useEffect(() => {
    console.log('I RUN EVERY RENDER AND WHEN TERM CHANGES');
  }, [term]);

```


# ASYNC FUNCTION AT useEffect

```javascript
// CANNOT USE ASYNC IN THIS FUNCTION
useEffect(() => {
  

  //SOLUTION 1
  //THIS IS ALLOWED    
  const search = async () => {
    await axios.get('asdada');
  };
  search();


  //SOLUTION 2
  //DEFINES A FUNCTION AND EXECUTE IT
  (async () => {
    await axios.get('asdada');
  })();


  //SOLUTION 3
  //USING PROMISE
  axios.get('sadada')
    .then((response) => {
      console.log(response.data)
    });

}, [term]);


```


# XSS ATTACKS IN REACT

```jsx

<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>

```

* Execute javascript in our application

# useEffect's Cleanup Function


```javascript

useEffect(() => {
  console.log("Initial render or term was changed");

  return () => {
    console.log("CLEANUP"); // ALWAYS EXECUTE FIRST AFTER INITIAL RENDER
  };

}, [term]);

```

* Initial Component Render
  * Func provided to useEffect is called
  * Return a cleanup function
* Rerender
  * Invoke the cleanup function
  * Function provided to useEffect is called again
  * Return a cleanup function



# Navigation

* Showing different sets of components when the URL changes.

* Majority of React apps use React-Router
  * However...
  * React Router has frequent breaking changes
  * More important to learn the ideas and theory of navigation
  * We are going to build some navigation stuff from scratch!
  * React-Router will be convered later in the course!!!


# Custom Hooks

* Best way to create reusable code in a React Project (besides components).
* Creating by extracting hook-related code out of a function component.
* Custom hooks always make use of at least one primitive hook internally.
* Each custom hook should have one purpose.
* Kind of an art form!
* Data-fetching is a great thing to try to make reusable.

# Process for creating reusable hooks

* Identify each line of code related to some single purpose.
* Identify the inputs to that code.
* Identify the outputs to that code.
* Extract all of the code into a separate function, receiving the inputs as arguments, and returning the outputs.

