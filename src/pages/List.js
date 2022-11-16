import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { AuthContext } from "../utils/AuthProvider";

function ListRoute() {
  //4-etap Context-ni ishlatish
  const { currentuser, setcurrentuser } = useContext(AuthContext);
  // 1.state yarativolish keladigan data uchun
  const [data, setdata] = useState([]);
  //2.useeffect ichida axios orqali get qilish
  useEffect(() => {
    axios
      .get("http://localhost:3000/games")
      .then(function (response) {
        //3.muvaqqiyatli bolganda kelgan malumotni statge birirktirish
        setdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="m-10 space-y-8">
       
        <h2> List route {currentuser.name}</h2>
        <div className="grid grid-cols-3 gap-10 ">
          {/* 4.state ichidagi elementlarning har biri uchun map orqali componenet render qilish */}
          {data.map((game) => {
            return (
              <Card
                image={game.imageURL}
                title={game.title}
                body={game.description}
                id={game.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ListRoute;
