import React from "react";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [select, setSelect] = React.useState("Select");

  return (
    <div className="app">
      <div className="home">
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
      {isOpen && (
        <div className="dropdown">
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
