import React, { useEffect } from "react";
import { Table, Tag, Button } from "antd";
import { useTask } from "../hooks/useTask";
import { Task } from "../services/task";

const statusColor = {
  todo: "gray",
  "in-progress": "blue",
  done: "green",
};

export default function TaskList() {
  const { tasks, handlegetAll, handleEdit, handleDelete } = useTask();

  useEffect(() => {
    handlegetAll();
  }, []);

  const columns = [
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Hạn chót",
      dataIndex: "dueDate",
      key: "dueDate",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: Task["status"]) => (
        <Tag color={statusColor[status]}>{status}</Tag>
      ),
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_: any, task: Task) => (
        <>
          <Button
            type="link"
            onClick={() => handleEdit(task)}
            style={{ marginRight: 8 }}
          >
            Sửa
          </Button>
          <Button
            danger
            type="link"
            onClick={() => handleDelete(String(task.id))}
          >
            Xóa
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ textAlign: "center" }}>Danh sách công việc</h2>
      <Table
        dataSource={tasks.map((task) => ({ ...task, key: task.id }))}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}
