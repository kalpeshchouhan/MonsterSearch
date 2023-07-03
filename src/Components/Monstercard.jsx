/* eslint-disable react/prop-types */
import { memo, useEffect, useState } from "react";
import cardstyle from "./card.module.css";

// eslint-disable-next-line react-refresh/only-export-components, no-unused-vars
const Monstercard = ({ data, inputevalue }) => {
  const [filterdata, setfilterdata] = useState([]);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(inputevalue.toLowerCase())
    );
    setfilterdata(filteredData);
  }, [inputevalue, data]);

  return (
    <>
      <div className={cardstyle.maincontainer}>
        <ul>
          {filterdata ? (
            filterdata.map((item, index) => (
              <li key={index}>
                <img
                  src={`https://robohash.org/${item.id}?set=set2`}
                  alt="loading image"
                />
                <p>{item.name}</p>
                <p>{item.email}</p>
              </li>
            ))
          ) : (
            <p>No data to display</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default memo(Monstercard);
