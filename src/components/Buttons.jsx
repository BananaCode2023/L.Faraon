import React from "react";
import "../css/buttons.css";

function Buttons({ buttonType, buttonText, clickFunc, buttonIcon }) {
  const renderButton = () => {
    switch (buttonType) {
      case "filledButton":
        return (
          <button className="filledButton" onClick={clickFunc}>
            {buttonText}
            {buttonIcon}
          </button>
        );
      case "tonalButton":
        return (
          <button className="tonalButton" onClick={clickFunc}>
            {buttonText}
            {buttonIcon}
          </button>
        );
      case "outlineButton":
        return (
          <button className="outlineButton" onClick={clickFunc}>
            {buttonText}
            {buttonIcon}
          </button>
        );
      default:
        return null;
    }
  };

  return <div className="buttons">{renderButton()}</div>;
}

export default Buttons;
