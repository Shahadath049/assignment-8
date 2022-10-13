import './App.css';
import Activity from './components/Activity/Activity';



function App() {
  return (
    <div >
        <Activity></Activity>

        <div className='container mx-auto mt-20'>
        <h1 className="text-5xl font-bold text-center  my-10 text-indigo-500">Frequent Questions & Answers</h1>
              <div className=' mb-10 px-20'>
                    <h1 className='text-4xl font-semibold my-2 text-indigo-500'>Question 1 : How does React work ?</h1>
                    <p className='text-2xl font-semibold'><span className='text-3xl font-bold mt-2 mb-5 text-green-800'>Answer : </span > React has some core features that make it stand out from other JavaScript libraries. JSX is a JavaScript syntax extension used in React element creation. Developers employ it to embed HTML code in JavaScript objects. As JSX accepts valid JavaScript expressions and function embedding, it can simplify complex code structures.Whenever there’s a change in data, ReactJS will generate a new Virtual DOM tree and compare it with the previous one to find the quickest possible way to implement changes in the real DOM. This process is known as diffing.ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.A state is a JavaScript object that represents a part of a component. It changes whenever a user interacts with the application, rendering a new UI to reflect the modifications.Programmatic navigation refers to instances when lines of code create an action that redirects a user. Login and signup actions, for instance, programmatically navigate users to new pages.

Returned React elements determine how the UI will look at the client end.</p>

              </div>
              <div className=' mb-10 px-20'>
                    <h1 className='text-4xl font-semibold my-2 text-indigo-500'>Question 2 : What are the differences between Props and State ?</h1>
                    <p  className='text-2xl font-semibold'><span className='text-3xl font-bold mt-2 mb-5 text-green-800'>Answer : </span> The state is an updated structure that is used to contain and can modify data or information about the component over time. The state change may occur as a user activity or device event response. It decides the actions of the component and how it is to be done by the core of the React component.“Props” is a special React keyword for proprietary purposes, used for data transmission from component to component.The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.

A prop can be passed on to the child in the state of a parent. They apply to the same value but can only be updated by the parent variable.A prop can be passed on to the child in the state of a parent. They apply to the same value but can only be updated by the parent variable.A state change takes place on the basis of the user input, which triggers an occurrence. React (with status) components are often made on the basis of state data. The initial knowledge is held by the State.

Thus when the state changes, React will be notified and the DOM will be re-rendered immediately; not the whole DOM but only the modified portion. This is one of the reasons for the fast reaction. </p>

              </div>
              <div className=' mb-10 px-20'>
                    <h1 className='text-4xl font-semibold my-2 text-indigo-500'>Question 3 : When would you use a useEffect ?</h1>
                    <p className='text-2xl font-semibold'><span className='text-3xl font-bold mt-2 mb-5 text-green-800'>Answer : </span>The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

This is not what we want. There are several ways to control when side effects run.

We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.</p>

              </div>
        
        </div>

    </div>
  );
}

export default App;
