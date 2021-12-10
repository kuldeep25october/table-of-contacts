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
          <div
            className="font-bold "
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              position: "absolute",
              top: "6px",
            }}
          >
            All Contacts(100)
          </div>
          <PlusCircleFilled
            style={{
              fontSize: "25px",
              position: "absolute",
              right: "10px",
              color: "#26a187",
            }}
          />
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

        <div
          className="btn d-flex"
          style={{ position: "relative", top: "50px", paddingLeft: "0px" }}
        >
          <CheckCircleFilled
            style={{
              fontSize: "20px",
              color: "darkgray",
            }}
          />
          <div className="slctAll">Select All</div>
         <button
            type="submit"
            style={{
              position: "absolute",
              right: "0px",
              fontSize: "12px",
              borderRadius: "6px",
              fontWeight: "bold",
              padding: "8px",
              border: "unset",
              backgroundColor: "#26a187",
              color: "#fff",
            }}
          >
            Export All
          </button>
        </div>
      </Header>
    </>
  );
};

export default HeaderBar;
