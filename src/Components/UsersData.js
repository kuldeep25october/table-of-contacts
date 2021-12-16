import React from "react";
import { Avatar, Tag } from "antd";
import {
  UserOutlined,
  CheckCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";

const UsersData = () => {
  return (
    <div className="parentContainer">
      <div className="alphabetA">
        {/* 1st user of alphabetA */}
        <div className="letterA">A</div>
        <div className="userInfo">
          <CheckCircleFilled className="checkCircleFilled" />
          <div className="userDetls">
            <Avatar
              className="userAvatar"
              size="large"
              icon={<UserOutlined />}
            />
            <div className="usrNmeAndCntct">
              <div className="userName">Anilly Moon</div>
              <div className="contactNo">+910123456789</div>
            </div>
          </div>
          <div className="rightSideIcons">
            <PlusCircleFilled className="plusCircleFilled" />
          </div>
        </div>
        {/* 2nd user of alphabetA */}
        <div className="userInfo">
          <CheckCircleFilled className="checkCircleFilled" />
          <div className="userDetls">
            <Avatar
              className="userAvatar"
              size="large"
              icon={<UserOutlined />}
            />
            <div className="usrNmeAndCntct">
              <div className="userName">Anilly Moon</div>
              <div className="contactNo">+910123456789</div>
            </div>
          </div>
          <div className="rightSideIcons">
            <Tag className="tags">Tags</Tag>
            <PlusCircleFilled className="plusCircleFilled" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersData;
