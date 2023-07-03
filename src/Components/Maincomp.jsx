import Searchcomp from "./Searchcomp";
import mainst from "./maincomp.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Monstercard from "./Monstercard";

const Maincomp = () => {
  const [inputevalue, setinputevalue] = useState("");
  const [data, setdata] = useState([]);

  const onchanghandler = (e) => {
    setinputevalue(e.target.value);
  };
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setdata(response.data);
    });
  }, []);

  return (
    <>
      <div className={mainst.maincontainer}>
        <Searchcomp onchanghandler={onchanghandler} inputevalue={inputevalue} />
        <Monstercard inputevalue={inputevalue} data={data} />
      </div>
    </>
  );
};

export default Maincomp;
