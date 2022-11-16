import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-indigo-800 text-white h-20 py-6 ">
      <div className="flex justify-between font-semibold px-10">
        <Link to={"/"} className="text-2xl">Games</Link>
        <nav>
          <ul className="flex">
            <li>
              <Link
                className="text-white p-2.5 text-xl mx-1 font-semibold hover:bg-white hover:text-indigo-700 hover:rounded"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-white p-2.5 text-xl mx-1 font-semibold hover:bg-white hover:text-indigo-700 hover:rounded"
                to={"/games/Create"}
              >
                Create
              </Link>
            </li>
            <li>
              <Link
                className="text-white p-2.5 text-xl mx-1 font-semibold hover:bg-white hover:text-indigo-700 hover:rounded"
                to={"/"}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
