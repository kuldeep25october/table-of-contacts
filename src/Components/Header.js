import React from "react";
import {
  PlusCircleFilled,
  SearchOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Input } from "antd";

const HeaderBar = (props) => {
  const { Header } = props;
  return (
    <>
      <Header>
        <div className="navBar d-flex">
          <div className="headerContactsTxt ">All Contacts(100)</div>
          <PlusCircleFilled className="antIconPlusCircle" />
        </div>
        <div className="searchBar">
          <Input
            top="40px"
            border-radius="16px"
            size="large"
            placeholder="Search contacts"
            prefix={<SearchOutlined />}
          />
        </div>
        <div className="fetchContactsSect d-flex">
          <CheckCircleFilled className="antIconCheckCircle" />
          <div className="slctAll">Select All</div>
          <button type="submit">Export All</button>
        </div>
      </Header>
    </>
  );
};

export default HeaderBar;
