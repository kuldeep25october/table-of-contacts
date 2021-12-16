import { Layout } from "antd";
import SideBar from "./SideBar";
import React from "react";
import HeaderBar from "../Components/Header.js";
import ContentBar from "./Content";

const { Sider, Header, Content } = Layout;

const AppWrapper = ({ children }) => {
  return (
    <>
      <Layout className="layout" theme="light">
        <SideBar Sider={Sider} />
        <Layout className="site-layout" theme="light">
          <div className="mainPage">
            <HeaderBar Header={Header} />
            <ContentBar children={children} Content={Content} />
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default AppWrapper;
