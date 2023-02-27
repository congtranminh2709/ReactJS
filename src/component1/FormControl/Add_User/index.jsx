import {
    Input,
    Form,
    InputNumber,
  } from "antd";
  import axios from "axios";
  import React from "react";

 
function index(props) {
    const {onSubmit, form} = props;
    const onHandleSubmit = async (data) => {
       onSubmit(data);
      };
    return (
        <div>
            <Form layout="vertical" autoComplete="on" onFinish={onHandleSubmit} form={form}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="age"
            rules={[
              {
                required: true,
                message: "Please input your age!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="address"
            label="address"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please input a valid email!",
              },
            ]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 6,
                message: "Password must be at least 6 characters!",
              },
              {
                max: 20,
                message: "Password must be at most 20 characters!",
              },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter and one number!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
        </div>
    );
}

export default index;