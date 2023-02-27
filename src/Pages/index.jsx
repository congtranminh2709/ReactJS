import {Button,Col,notification,Row,Space,Table,Input,Modal,Form,InputNumber,} from "antd";
const { Search } = Input;
import {DeleteOutlined,EditOutlined,ExclamationCircleFilled,} from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import User_model from "@/component1/User_model";

function index(props) {
  const [data, setData] = useState([]);

  const [isAdd, setIsAdd] = useState(false);

  const { confirm } = Modal;

  const [user, setUser] = useState({});

  const getData = async () => {
    const res = await axios.get("https://localhost:7272/api/User");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const [keyword, setKeyword] = useState("");

  const [open, setOpen] = useState(false);


  const onClose = () => {
    setOpen(false);
    setUser({})
  }

  const onSuccess = async () =>{
    notification.open({
      message: "Thành công.",
      description: "Thêm thành công.",
    });

    onClose();

    await getData();

  }

  const onError = async () =>{
    notification.open({
      message: "Lỗi.",
      description: "Có lỗi xảy ra.",
    });

    onClose();

    await getData();
  }

  const handleOk = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  };

  const handleCancel = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  };
  const onUpdate = async (data) => {
    const res = await axios.put(
      `https://localhost:7272/api/User/${data.id}`,
      data
    );
    await getData();
    setIsEditModalOpen(false);
  };

  const onDelete = async (id) => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        try {
          const response = await axios.delete(
            `https://localhost:7272/api/User/${id}`
          );

          notification.open({
            message: "Thành công.",
            description: "Xóa thành công.",
          });
          console.log(response);

          await getData();
        } catch (error) {
          notification.open({
            message: "Lỗi.",
            description: "Có lỗi xảy ra.",
          });
        }
      },
    });
  };
  const getUser = async (id) => {
    const res = await axios.get(`https://localhost:7272/api/User/${id}`);
    setOpen(true);
    setUser(res.data);
    setIsAdd(false);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      align: "center",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "center",
    },
    {
      title: "Action",
      key: "Action",
      align: "center",

      render: (text, record) => (
        <Space size="middle">
          <EditOutlined onClick={() => getUser(record.id)} />
          <DeleteOutlined onClick={() => onDelete(record.id)} />
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Row>
        <Col span={12}>
          <Search
            placeholder="input search text"
            onChange={(e) => setKeyword(e.target.value)}
            enterButton
            className="w-80"
          />
        </Col>
        <Col span={12}>
          <div className=" float-right bg-blue-500 ">
            <Button
              type="primary"
              onClick={() => {setOpen(true); setIsAdd(true)}}
              className="rounded-2xl"
            >
              Create
            </Button>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "36px" }}>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={
              keyword != ""
                ? data.filter((item) => item.name.includes(keyword))
                : data
            }
            rowKey="id"
            pagination={{ defaultPageSize: 5 }}
          />
        </Col>
      </Row>
      {open && <User_model onClose = {onClose} onSuccess={onSuccess} onError={onError} isAdd={isAdd} user={user} />}
    </div>
  );
}
export default index;
