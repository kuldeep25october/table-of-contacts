import React from "react";
import { Avatar, Tag } from "antd";
import {
  UserOutlined,
  CheckCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import AlphabetInfo from "./Constant/AlphabetA";

const AlphabetA = () => {
    const AlphabetInformation = AlphabetInfo.map(val => 
        <li>{val.avatar}{val.name}{val.contact}</li>)

  return (
    <div className="parentContainer" style={{ marginTop: "70px" }}>
      <div className="alphabetA">
        {/* 1st user of alphabetA */}
        <div style={{ fontWeight: "bold" }}>A</div>
        {/* <div>
        <div>
        
      </div>
        </div> */}
        
        <div
          className="userInfo"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          <ul>{AlphabetInformation}</ul>
          {/* <CheckCircleFilled
            style={{
              marginTop: "-4px",
              fontSize: "20px",
              color: "darkgray",
            }}
          /> */}
          {/* <div
            className="userDetls"
            style={{gi
              display: "flex",
              alignItems: "center",
              marginLeft: "12px",
              borderBottom: "1px solid darkgray",
              paddingRight: "100px",
            }}
          >
            <Avatar
              size="large"
              icon={<UserOutlined />}
              style={{ marginBottom: "6px" }}
            />
            <div
              style={{
                flexFlow: "column",
                marginLeft: "8px",
                marginBottom: "6px",
              }}
            >
              <div
                className="userName"
                style={{ fontSize: "14px", fontWeight: "bold" }}
              >
                Anilly Moon
              </div>
              <div
                className="contactNo"
                style={{
                  color: "darkgray",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                +910123456789
              </div>
            </div>
          </div> */}
          <div className="rightSideIcons" style={{ marginLeft: "auto" }}>
            <PlusCircleFilled
              style={{
                fontSize: "22px",
                color: "#26a187",
              }}
            />
          </div>
        </div>
      </div>
      {/* 2nd user of alphabetA */}
      {/* <div
        className="userInfo"
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <CheckCircleFilled
          style={{
            marginTop: "-4px",
            fontSize: "20px",
            color: "darkgray",
          }}
        />
        <div
          className="userDetls"
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "12px",
            borderBottom: "1px solid darkgray",
            paddingRight: "100px",
          }}
        >
          <Avatar
            size="large"
            icon={<UserOutlined />}
            style={{ marginBottom: "6px" }}
          />
          <div
            style={{
              flexFlow: "column",
              marginLeft: "8px",
              marginBottom: "6px",
            }}
          >
            <div
              className="userName"
              style={{ fontSize: "14px", fontWeight: "bold" }}
            >
              Anilly Moon
            </div>
            <div
              className="contactNo"
              style={{
                color: "darkgray",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              +910123456789
            </div>
          </div>
        </div>
        <div className="rightSideIcons" style={{ marginLeft: "auto" }}>
          <Tag
            style={{
              backgroundColor: "#26a187",
              fontSize: "12px",
              color: "#fff",
              borderRadius: "10px",
              padding: "2px 35px 2px 16px",
            }}
          >
            Tags
          </Tag>
          <PlusCircleFilled
            style={{
              fontSize: "22px",
              color: "#26a187",
            }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default AlphabetA;
