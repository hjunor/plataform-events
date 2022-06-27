import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-gray-900">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-green-500 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <a className="btn-1">
          <Link to="/event">Go to Event</Link>
        </a>
      </button>
    </main>
  );
}
