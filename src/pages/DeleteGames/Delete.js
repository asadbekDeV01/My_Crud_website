import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteGames() {
  let params = useParams();
  let navigate = useNavigate();

  const OnDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3000/games/${params.id}`)
      .then(function (response) {
        navigate("/");
        toast("Nimadir Hato Ketdi Keyinroq Urinib Ko'ring!!");
      })
      .catch(() => {
        toast("Nimadir Hato Ketdi Keyinroq Urinib Ko'ring!");
      });
  };

  return (
    <div className=" h-screen w-screen flex justify-center items-center flex-col ">
        <div className="border-l-4 p-10 border-solid border-l-red-600 border-r-4 border-r-green-500 border-y-4 border-y-blue-500">
      <h1 className="text-6xl  flex text-center flex-col justify-center text-red-600 my-4  ">
        Are you sure you want to
        <span className="font-semibold text-pink-900 mx-2"> delete </span> this
        game?
      </h1>
      <div className="grid grid-cols-2 space-x-6 my-10">
      <button
        onClick={OnDelete}
        className="w-64 px-4 py-2 text-xl font-semibold  text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
      >
        👍 Yes
      </button>
      <Link
      to={"/"}
        className=" px-4 py-2 font-semibold text-xl text-center text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
      >
        No, I won't delete it 👎
      </Link>
      </div>

      <ToastContainer />
      </div>
    </div>
  );
}

export default DeleteGames;
