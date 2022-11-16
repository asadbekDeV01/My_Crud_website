import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Vortex } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeteilRoute() {
  let params = useParams();
  let navigate = useNavigate();

  const [data, setdata] = useState([]);
  useEffect(() => {
    setTimeout(
      () =>
        axios
          .get(`http://localhost:3000/games/${params.id}`)
          .then(function (response) {
            //3.muvaqqiyatli bolganda kelgan malumotni statge birirktirish
            setdata(response.data);
          })
          .catch(function (error) {
            console.log(error);
          }),
      2000
    );
  }, []);

  return (
    <div>
      {data.length == 0 ?   <div className="flex justify-center items-center h-screen">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div> :  <div className="container mx-auto ">
        <div className="fy-center  my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <img className="w-full p-24 px-32 h-auto" src={data.imageURL} />
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <div className="px-8 mb-4 text-center">
                <h1 className="pt-4 mb-2 text-4xl">{data.title}</h1>
                <h4>{data.developer}</h4>
                <p className="my-4 text-sm text-gray-700">{data.description}</p>
              </div>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Enter Email Address..."
                  />
                </div>
                <div className="mb-6 text-center">
                  
                  <div className="flex justify-start items-end space-x-4 space-y-4 ">
                    <Link
                      to={`/games/delete/${params.id}`}
                      className="w-full px-4 py-2 font-semibold  text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </Link>
                    <Link
                      to={`/games/update/${params.id}`}
                      className="w-full px-4 py-2 font-semibold  text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
                    >
                      Update
                    </Link>
                  </div>
                </div>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>}
      

     
    </div>
  );
}

export default DeteilRoute;
