import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-[#F9F9FF] pt-12 pb-16 text-center">
        <h1 className="font-extrabold text-3xl">Answers to your questions</h1>
      </div>
      <div className="my-10 w-[95%] md:w-[90%] mx-auto">
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 rounded-box"
        >
          <div className="collapse-title text-xl font-semibold">
            Q1: When should you use context API?
          </div>
          <div className="collapse-content border font-medium">
            <p className="mt-5">
              Answer: You should use the Context API in React Router when you
              have multiple components that need to share the same data or
              state, but those components are not directly related or connected
              to each other. By using the Context API, you can create a shared
              state or data store that can be accessed by any component in the
              application, regardless of its position in the component tree or
              its relationship to other components. This makes it easier to
              manage and update the data in real-time, and can lead to a more
              efficient and streamlined application overall.
            </p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 rounded-box mt-5"
        >
          <div className="collapse-title text-xl font-semibold">
            Q2: What is a custom hook?
          </div>
          <div className="collapse-content border font-medium">
            <p className="mt-5">
              Answer: A custom hook in React Router is like a special tool that
              you create to help you with some common tasks related to routing,
              such as getting information about the current route or navigating
              to a new page. It's like having your own personal assistant that
              can help you do things faster and more efficiently. With custom
              hooks, you can write code that's easier to understand and reuse
              across different parts of your application.
            </p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 rounded-box mt-5"
        >
          <div className="collapse-title text-xl font-semibold">
            Q3: What is useRef?
          </div>
          <div className="collapse-content border font-medium">
            <p className="mt-5">
              Answer: In React Router, useRef is a built-in hook that allows you
              to create a reference to a specific element in your application's
              UI. <br />
              Think of a reference like a label that you can attach to a
              particular object, such as a text input or a button. When you
              create a reference using the useRef hook, you can use it to access
              and manipulate that object directly, without having to search for
              it in the DOM or use other complicated techniques. <br />
              For example, you could use the useRef hook to create a reference
              to a text input field in a form. This would allow you to easily
              access the value of the input field and perform any necessary
              validation or manipulation on it, without having to traverse the
              DOM to find the input element. <br />
              In summary, the useRef hook in React Router is a useful tool that
              allows you to create a reference to a specific UI element, making
              it easier to manipulate and work with that element in your
              application's code.
            </p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 rounded-box mt-5"
        >
          <div className="collapse-title text-xl font-semibold">
            Q4: What is useMemo?
          </div>
          <div className="collapse-content border font-medium">
            <p className="mt-5">
              Answer: useMemo is a built-in hook in React that allows you to
              memoize a function's result, caching it so that it's only
              recomputed when its dependencies change. This can improve the
              performance of your application by reducing unnecessary re-renders
              of components that rely on the memoized value. In simpler terms,
              useMemo helps you optimize your React components by caching the
              result of a function until its input changes, avoiding unnecessary
              re-computations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
