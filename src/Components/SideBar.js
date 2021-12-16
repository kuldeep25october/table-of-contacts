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
        <div className="siderItems">
          <div className="d-flex flex-row ml-5 mr-5">
            <div className="siderItemsInner fs-4" onClick={() => toggle()}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
            <div className="audienceText text-xl-start pl-4">Audience</div>
            <div className="contactsUpdateTxt pl-4">100 Contacts</div>
          </div>
          <div className="includeTags mt-5">
            <label>Include Tags:</label>
            <ListGroup>
              <ListGroup.Item variant="secondary">Greeting</ListGroup.Item>
              <ListGroup.Item variant="light">Greeting</ListGroup.Item>
              <ListGroup.Item variant="secondary">Greeting</ListGroup.Item>
              <ListGroup.Item variant="light">Greeting</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="excludeTags mt-4">
            <label>Exclude Tags:</label>
            <ListGroup className="excludeTagsListGroup">
              <ListGroup.Item variant="secondary">Greeting</ListGroup.Item>
              <ListGroup.Item variant="light">Greeting</ListGroup.Item>
              <ListGroup.Item variant="secondary">Greeting</ListGroup.Item>
              <ListGroup.Item variant="light">Greeting</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="msgSent mt-4">
            <div className="form-group">
              <label>Message Sent:</label>
              <div className="form-group-row row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Min"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="msgRecvd mt-4">
            <div className="form-group">
              <label>Message Received:</label>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Min"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="saveBtn">
            <button type="submit" class="btn btn-primary">
              Save Filters
            </button>
          </div>
        </div>
      </Sider>
    </>
  );
};

export default SideBar;
