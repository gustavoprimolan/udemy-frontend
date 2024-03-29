import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ options, label, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // useEffect(() => {
  //   document.body.addEventListener(
  //     "click",
  //     (event) => {
  //       if (ref.current.contains(event.target)) {
  //         console.log(ref.current);
  //         console.log(event.target);
  //         return;
  //       }
  //       console.log(ref.current);
  //       console.log(event.target);
  //       setOpen(false);
  //     },
  //     { capture: true }
  //   );
  // }, []);

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
    console.log('useeffect');


    //ONLY TO CLEANUP WHEN THE COMPONENT IS DESTROYED
    return () => {
      console.log('retorno');
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  // console.log(ref.current);

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
