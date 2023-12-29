import React, { useEffect, useState } from "react";
import "../css/story.css";
import artDatas from "../Data/artData";
import Titles from "./Titles";
import Buttons from "./Buttons";
import View from "./View";
import { MdClose, MdRemoveRedEye } from "react-icons/md";

function Story({ id, close }) {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [openView, setOpenView] = useState(false);
  const [getId, setGetId] = useState("");

  useEffect(() => {
    const data = artDatas.find((item) => item.id === id);

    if (data) {
      const formattedStory = data.story.replace(/\n/g, "<br>");
      setStory(formattedStory);
      setTitle(data.title);
      setGetId(data.id);
    }
  }, [id]);

  const handleOpenView = () => {
    setOpenView(true);
  };

  return (
    <article className="story-overlay">
      {openView ? <View id={getId} close={close} /> : ""}
      <div className="story-container">
        <button onClick={close} className="closeButton">
          <MdClose />
        </button>
        <Titles text={title} />

        <p dangerouslySetInnerHTML={{ __html: story }}></p>

        <Buttons
          buttonType="outlineButton"
          buttonText="View"
          buttonIcon={<MdRemoveRedEye />}
          clickFunc={handleOpenView}
        />
      </div>
    </article>
  );
}

export default Story;
