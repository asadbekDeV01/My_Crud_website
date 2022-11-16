import axios from "axios";
import { useEffect, useState } from "react";
import Myinput from "../../components/myinput";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

function UpdateRoute() {
  const [titleinp, settitleinp] = useState("");
  const [developerinp, setdeveloperinp] = useState("");
  const [release_dateinp, setrelease_dateinp] = useState("");
  const [imageUrLinp, setimageURLinp] = useState("");
  const [descriptioninp, setdescriptioninp] = useState("");

  let navigate = useNavigate();
  let params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/games/${params.id}`)
      .then(function (response) {
        //3.muvaqqiyatli bolganda kelgan malumotni statge birirktirish
        // setdata(response.data);
        settitleinp(response.data.title);
        setdeveloperinp(response.data.developer);
        setrelease_dateinp(response.data.release_date);
        setimageURLinp(response.data.imageURL);
        setdescriptioninp(response.data.description);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onCreate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/games/${params.id}`, {
        title: titleinp.trim(),
        description: descriptioninp.trim(),
        release_date: release_dateinp,
        imageURL: imageUrLinp.trim(),
        developer: developerinp.trim(),
      })
      .then(function (response) {
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        toast("Nimadir Hato Ketdi Keyinroq Urinib Ko'ring!!");
      });
  };
  return (
    <form className="max-w-3xl mx-auto shadow p-8 mt-24 space-y-8">
      <Myinput
        labelText={"Title"}
        myvalue={titleinp}
        mysetvaluchange={settitleinp}
        type={"text"}
      />
      <Myinput
        labelText={"Developer"}
        myvalue={developerinp}
        mysetvaluchange={setdeveloperinp}
        type={"text"}
      />

      <Myinput
        labelText={"Release_date"}
        myvalue={release_dateinp}
        mysetvaluchange={setrelease_dateinp}
        type={"number"}
      />
      <Myinput
        labelText={"image Url"}
        myvalue={imageUrLinp}
        mysetvaluchange={setimageURLinp}
        type={"text"}
      />
      <Myinput
        labelText={"Description"}
        myvalue={descriptioninp}
        mysetvaluchange={setdescriptioninp}
        type={"text"}
      />
      <div className="flex justify-end">
        <button
          onClick={onCreate}
          className="px-4 py-2 rounded bg-indigo-700 text-white"
        >
          Update
        </button>
        <ToastContainer />
      </div>
    </form>
  );
}

export default UpdateRoute;
