import { api } from "@/services";
import { Form, Modal } from "antd";
import { data } from "autoprefixer";
import axios from "axios";
import React, {useEffect} from "react";
import User from "./FormControl/User/index";


function User_model(props) {
  const { onClose, onSuccess, onError, isAdd, user } = props;

  const onSubmit = async (data) => {
    try {
      if(isAdd) {
        const res = await api.post(
          `https://localhost:7272/api/User/register`,
          data
        );
      } else {
        const res = await api.put(
          `https://localhost:7272/api/User/${data.id}`,
          data
        );
      }
      onSuccess();
    } catch {
      onError();
    }
  };



  const [form] = Form.useForm();  
  useEffect(() => {
    form.setFieldsValue(user);
  }, [user])

const close = () => {
  onClose();
  form.resetFields();
}

  return (
    <>
      <Modal
        title="Thêm tài khoản"
        open={true}
        onOk={form.submit}
        onCancel={close}
      >
        <User form={form} onSubmit={onSubmit} isAdd={isAdd} />
      </Modal>
    </>
  );
}

export default User_model;
