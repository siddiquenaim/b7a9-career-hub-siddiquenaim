import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <svg
          className="w-40 h-40 text-gray-600 mb-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g data-name="53.World">
            <path d="M12 24a12 12 0 1 1 12-12h-2a10 10 0 1 0-10 10z" />
            <path d="m4.707 19.707-1.414-1.414L4.586 17h2L8 15.586v-3.822l1-2V8.236L8.382 7H6.697L3.445 4.832l1.11-1.664L7.303 5h2.315L11 7.764v2.472l-1 2v4.178L7.414 19h-2l-.707.707zM16 13h-2v-2.414l2.178-2.179L16.882 7l-1-2 1.223-2.447 1.79.894L18.118 5l1 2-1.296 2.593L16 11.414V13zM14.292 15.707l1.415-1.414 6 6-1.415 1.414z" />
            <path d="m14.292 20.293 6-6 1.414 1.415-6 6z" />
          </g>
        </svg>
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn-primary">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
