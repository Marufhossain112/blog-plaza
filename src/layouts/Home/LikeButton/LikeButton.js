import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

const LikeButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  return (
    <button onClick={handleClick}>
      <span className="likes-counter flex items-center">
        {isClicked ? <FcDislike /> : <FcLike />}
      </span>
    </button>
  );
};

export default LikeButton;
