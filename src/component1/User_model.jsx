import { Form, Modal } from "antd";
import { data } from "autoprefixer";
import axios from "axios";
import React, {useEffect} from "react";
import Add_User from "./FormControl/Add_User/index.jsx";
import Edit_User from "./FormControl/Edit_User/index.jsx";

function User_model(props) {
  const { onClose, onSuccess, onError, isAdd, user } = props;

  const onSubmit = async (data) => {
    try {
      if(isAdd) {
        const res = await axios.post(
          `https://localhost:7272/api/User/register`,
          data
        );
      } else {
        const res = await axios.put(
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
        {isAdd && <Add_User form={form} onSubmit={onSubmit} />}
        {!isAdd && <Edit_User form={form} onSubmit={onSubmit}/>}
      </Modal>
    </>
  );
}

export default User_model;
