import React from "react";

const Dropdown = (props) => {
  //to open and close dropdown
  const [isOpen, setIsOpen] = React.useState(false);
  //to select dropdown item
  const [select, setSelect] = React.useState("Select");

  //dropdown component
  return (
    <div className="app">
      <h1>Should you use a dropdown?</h1>
      {/* select menu */}
      <div className="home">
        {/* evennt listener to open dropdown*/}
        <button
          onMouseEnter={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span>{select}</span>
          <i
            className={
              isOpen
                ? "fa fa-solid fa-angle-down"
                : "fa fa-solid fa-angle-right"
            }
          ></i>
        </button>
      </div>
      {/* opening dropdown menu */}
      {isOpen && (
        <div className="dropdown">
          {/* maping dropdown item through props */}
          {props.list.map((item) => (
            <p
              key={item}
              onClick={() => {
                setIsOpen(!isOpen);
                setSelect(item);
              }}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
