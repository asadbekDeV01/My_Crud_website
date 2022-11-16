import { Link } from "react-router-dom";

function Card({ title, body, link, image, id }) {
  return (
    <Link to={`/games/${id}`}>
      <div class="flex justify-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <img src={image} />
          <h5 class="text-gray-900 text-xl leading-tight font-medium my-2">
            {title}
          </h5>
          <p class="text-gray-700 text-base my-4 truncate">{body}</p>
          <Link
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            to={`/games/${id}`}
          >
            Deteil
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default Card;
