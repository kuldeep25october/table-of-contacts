import React from "react";
import UsersData from "./UsersData";

const ContentBar = (props) => {
  const { Content, children } = props;
  return (
    <>
      <Content>
        <UsersData />
        {children}
      </Content>
    </>
  );
};
export default ContentBar;
