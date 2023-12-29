import React, { useEffect, useState } from "react";
import artDatas from "../Data/artData";
import { MdClose } from "react-icons/md";
import "../css/view.css";

function View({ id, close }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    const data = artDatas.find((item) => item.id === id);

    if (data) {
      setImage(data.img);
    }
  }, [id]);

  return (
    <div className="view-overlay">
      <div className="view-container">
        <button onClick={close}>
          <MdClose />
        </button>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default View;
