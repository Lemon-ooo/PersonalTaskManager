import React from "react";
import { Form, Input, DatePicker, Select, Button } from "antd";
import dayjs from "dayjs";
import type { Task } from "../services/task"; // Import Task đúng
import { useTask } from "../hooks/useTask";

const { TextArea } = Input;
const { Option } = Select;

// Map hiển thị status tiếng Việt -> status thật (API)
const statusMap: Record<string, Task["status"]> = {
  "Chưa bắt đầu": "todo",
  "Đang làm": "in-progress",
  "Đã hoàn thành": "done",
};

type Props = {
  onSubmit: (task: Task) => void;
};

export default function TaskForm({ onSubmit }: Props) {
  const [form] = Form.useForm();
  const { handleGetDetail } = useTask();
  const handleFinish = (values: any) => {
    const task: Task = {
      ...values,
      dueDate: values.dueDate.format("YYYY-MM-DD"),
      status: statusMap[values.status],
    };
    onSubmit(task);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      layout="vertical"
      style={{ maxWidth: 600, margin: "40px auto" }}
    >
      <h2 style={{ textAlign: "center" }}>Thêm công việc</h2>

      <Form.Item
        label="Tiêu đề"
        name="title"
        rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}
      >
        <Input placeholder="Nhập tiêu đề công việc" />
      </Form.Item>

      <Form.Item
        label="Mô tả ngắn"
        name="description"
        rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
      >
        <TextArea rows={3} placeholder="Nhập mô tả ngắn" />
      </Form.Item>

      <Form.Item
        label="Ngày hết hạn"
        name="dueDate"
        rules={[{ required: true, message: "Vui lòng chọn ngày hết hạn" }]}
      >
        <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Trạng thái"
        name="status"
        initialValue="Chưa bắt đầu"
        rules={[{ required: true, message: "Vui lòng chọn trạng thái" }]}
      >
        <Select>
          <Option value="Chưa bắt đầu">Chưa bắt đầu</Option>
          <Option value="Đang làm">Đang làm</Option>
          <Option value="Đã hoàn thành">Đã hoàn thành</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Thêm công việc
        </Button>
      </Form.Item>
    </Form>
  );
}
