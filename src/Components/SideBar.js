import ListGroup from "react-bootstrap/ListGroup";
import React, { useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const SideBar = (props) => {
  const { Sider } = props;
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        width="300px"
      >
        <div className="siderItems" style={{ margin: "10px" }}>
          <div className="d-flex flex-row ml-5 mr-5">
            <div
              className="font-bold fs-4"
              style={{ position: "absolute", top: 0 }}
              onClick={() => toggle()}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
            <div
              className="font-bold text-xl-start pl-4"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                position: "absolute",
                left: "3rem",
                top: "5px",
              }}
            >
              Audience
            </div>
            <div
              style={{
                position: "absolute",
                right: 10,
                fontSize: "14px",
                color: "darkgray",
                fontWeight: "bold",
              }}
              className="pl-4"
            >
              100 Contacts
            </div>
          </div>
          <div className="includeTags mt-5">
            <label style={{ fontWeight: "bold" }}>Include Tags:</label>
            <ListGroup style={{ marginTop: 10, borderRadius:'12px', fontSize:'14px' }}>
              <ListGroup.Item variant="secondary">Greeting</ListGroup.Item>
              <ListGroup.Item variant="light">Greeting</ListGroup.Item>
              <ListGroup.Item variant="secondary">Greeting</ListGroup.Item>
              <ListGroup.Item variant="light">Greeting</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="excludeTags mt-4">
            <label style={{ fontWeight: "bold" }}>Exclude Tags:</label>
            <ListGroup style={{ marginTop: 10, marginBottom: 10, borderRadius:'12px', fontSize:'14px' }}>
              <ListGroup.Item variant="secondary">Greeting</ListGroup.Item>
              <ListGroup.Item variant="light">Greeting</ListGroup.Item>
              <ListGroup.Item variant="secondary">Greeting</ListGroup.Item>
              <ListGroup.Item variant="light">Greeting</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="msgSent mt-4">
            <div className="form-group">
              <label style={{ fontWeight: "bold" }}>Message Sent:</label>
              <div className="row" style={{ marginTop: 10 }}>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Min"
                    style={{backgroundColor:"#e2e3e5", fontSize:'14px'}}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Max"
                    style={{backgroundColor:"#e2e3e5", fontSize:'14px'}}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="msgRecvd mt-4">
            <div className="form-group">
              <label style={{ fontWeight: "bold" }}>Message Received:</label>
              <div className="row" style={{ marginTop: 10 }}>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Min"
                    style={{backgroundColor:"#e2e3e5", fontSize:'14px'}}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Max"
                    style={{backgroundColor:"#e2e3e5", fontSize:'14px'}}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="saveBtn">
            <button
              type="submit"
              class="btn btn-primary"
              style={{
                width: "93%",
                position: "absolute",
                bottom: "10px",
              }}
            >
              Save Filters
            </button>
          </div>
        </div>
      </Sider>
    </>
  );
};

export default SideBar;
