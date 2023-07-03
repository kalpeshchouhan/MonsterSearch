import searchsyle from "./Search.module.css";

// eslint-disable-next-line react/prop-types
const Searchcomp = ({ onchanghandler, inputevalue }) => {
  return (
    <>
      <div className={searchsyle.maincontainer}>
        <h1>Monster Search</h1>
        <br />
        <br />
        <input
          type="text"
          value={inputevalue}
          onChange={onchanghandler}
          placeholder="Search Monstor"
        />
      </div>
    </>
  );
};

export default Searchcomp;
