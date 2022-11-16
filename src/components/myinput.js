import { useState } from "react";

function Myinput( {labelText,myvalue,mysetvaluchange,type}) {
    const [inpvalue, setinpvalue] = useState("");

    const oninpvaluechange = (e) => {
        mysetvaluchange(e.target.value);
      };
    return ( 
        <div>
        <label className="text-xl" htmlFor="inputFor">
          {labelText}:
        </label>
        <input
          onChange={oninpvaluechange}
          value={myvalue}
          type={type}
          id="inputFor"
          className="form-input w-full border-2 rounded mt-2 "
        />
        
      </div>
     );
}

export default Myinput;