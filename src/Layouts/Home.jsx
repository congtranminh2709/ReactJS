import React, { useState } from "react";
import {
  UserOutlined,
  BellOutlined,
  AuditOutlined,
  BarChartOutlined,
  SettingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Dropdown, Row, Col } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import "./Home.css";
import { useNavigate } from "react-router-dom";
import user from "../assets/ic_Avatar.png";
import logo from "../assets/img_QuocHuy.png";
import axios from "axios";
import { api } from "@/services";

function Home(props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const Logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    await api.post("https://localhost:7272/api/User/logout", token);
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  const items = [
    {
      key: "1",
      label: (
        <a rel="noopener noreferrer" href="/login">
          Login
        </a>
      ),
    },
    {
      key: "2",
      label: "Logout",
      onClick: () => Logout(),
    },
  ];

  const listMenu = [
    {
      key: "1",
      icon: <BarChartOutlined />,
      label: "Báo cáo thống kê",
      path: "/",
      children: [
        {
          key: "1.1",
          icon: <UserOutlined />,
          label: "Create",
          path: "/create",
        },
      ],
    },

    {
      key: "2",
      icon: <SettingOutlined />,
      label: "Quản trị hệ thống",
      path: "/",
      children: [
        {
          key: "2.1",
          icon: <UserOutlined />,
          label: "Create",
          path: "/create",
        },
      ],
    },

    {
      key: "3",
      icon: <SearchOutlined />,
      label: "Tra cứu chung",
      path: "/",
      children: [
        {
          key: "3.1",
          icon: <UserOutlined />,
          label: "Create",
          path: "/create",
        },
      ],
    },
    {
      key: "4",
      icon: <AuditOutlined />,
      label: "Quản lí danh mục",
      path: "/",
      children: [
        {
          key: "4.1",
          icon: <UserOutlined />,
          label: "Create",
          path: "/create",
        },
      ],
    },

    {
      key: "5",
      icon: <AuditOutlined />,
      label: "Quản lí danh mục CSDG",
      path: "/",
      children: [
        {
          key: "5.1",
          icon: <UserOutlined />,
          label: "Create",
          path: "/create",
        },
      ],
    },
  ];
  const navigate = useNavigate();
  const redirect = (e) => {
    const path = listMenu.find((item) => item.key === e.key)?.path;
    navigate(path);
  };

  const current = () => {
    return (
      listMenu.find((item) => item.path === window.location.pathname)?.key || 1
    );
  };
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider breakpoint="lg" collapsedWidth="0" width={250}>
          <div />
          <center>
            <img src={logo} alt="logo" className="logo" />
          </center>
          <Menu
            theme="dark"
            mode="inline"
            items={listMenu}
            onClick={redirect}
            style={{ color: "white" }}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: "#001529",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                verticalAlign: "middle",
                gap: 40,
                marginRight: 16,
                float: "right",
              }}
            >
              <div>
                <BellOutlined className="text-2xl text-gray-500" />
              </div>
              <Dropdown menu={{ items }}>
                <div
                  className="flex justify-center align-middle items-center"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    verticalAlign: "middle",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={user}
                    style={{
                      borderRadius: 9999,
                      objectFit: "fill",
                      width: 40,
                      marginRight: 12,
                    }}
                    menu={{ items }}
                  />

                  <span className="text-sm text-teal-400" menu={{ items }}>
                    Admin
                  </span>
                </div>
              </Dropdown>
            </div>
            <div className="flex items-center justify-around text-center align-middle h-full overflow-hidden">
              <h6 className=" text-slate-50 font-sans">
                PHẦN MỀM QUẢN LÝ HỆ THỐNG BẢO ĐẢM VÀ KIỂM ĐỊNH CHẤT LƯỢNG GIÁO
                DỤC ĐẠI HỌC
              </h6>
            </div>
          </Header>

          <Content
            style={{
              margin: "10px 16px 0",
            }}
          >
            <Row>
              <Col span={12}>
                <h6 className="text-blue-400 align-middle float-left font-sans">
                  Danh sách nhân viên
                </h6>
              </Col>
              <Col span={12}>
                <span className="text-blue-400 align-middle float-right">
                  Trang chủ / <span className="text-gray-400">Tài khoản</span>
                </span>
              </Col>
            </Row>

            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              {props.children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
