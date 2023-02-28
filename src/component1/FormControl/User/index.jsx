import React from 'react';
import {
    Input,
    Form,
    InputNumber,
  } from "antd";
  import axios from "axios";

function index(props) {
    const { form, onSubmit, isAdd} = props;
    const onUpdate = async (data) => {
        onSubmit(data);
       };
    return (
        <>
            <Form
          layout="vertical"
          autoComplete="on"
          onFinish={onUpdate}
          form={form}
        >
          <Form.Item name="id" hidden>
            <Input hidden />
          </Form.Item>
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
          {isAdd && (
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
          </Form.Item>)
}
        </Form>
        </>
    );
}

export default index;