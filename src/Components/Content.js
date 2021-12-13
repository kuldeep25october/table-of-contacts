import React from "react";
import AlphabetA from "../Components/AlphabetA";

const ContentBar = (props) => {
  const { Content, children } = props;
  return (
    <>
      <Content>
        <AlphabetA />
        
        {children}
      </Content>
    </>
  );
};

export default ContentBar;
