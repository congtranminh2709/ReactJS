import React from 'react';
import {
    Input,
    Form,
    InputNumber,
  } from "antd";
  import axios from "axios";

function index(props) {
    const { form, onSubmit} = props;
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
        </Form>
        </>
    );
}

export default index;