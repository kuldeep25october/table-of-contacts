import { Layout } from "antd";
import SideBar from "./SideBar";
import React from "react";
import HeaderBar from "./Header";
import ContentBar from "./Content";

const { Sider, Header, Content } = Layout;

const AppWrapper = ({ children }) => {
  return (
    <>
      <Layout theme="light" style={{ height: "100vh" }}>
        <SideBar Sider={Sider} />
        <Layout className="site-layout" theme="light">
          <div className="mainPage" style={{ margin: "10px 10px 10px 15px" }}>
            <HeaderBar Header={Header} />
            <ContentBar children={children} Content={Content} />
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default AppWrapper;
