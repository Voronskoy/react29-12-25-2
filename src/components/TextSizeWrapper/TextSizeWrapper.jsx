import React, { useState } from "react";
import TextSizeControl from "./TextSizeControl";
import TEXT_SIZE_OPTIONS from "./data";

const TextSizeWrapper = (props) => {
  const { children } = props;
  const [fontSize, setFontSize] = useState("medium");

  return (
    <div style={{ fontSize: TEXT_SIZE_OPTIONS[fontSize].fontSize }}>
      <TextSizeControl fontSize={fontSize} setFontSize={setFontSize} />
      {children}
    </div>
  );
};

export default TextSizeWrapper;
