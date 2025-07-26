import React from "react";
import { Table, Tag, Button } from "antd";

type Task = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: "Chưa bắt đầu" | "Đang làm" | "Đã hoàn thành";
};

type Props = {
  tasks: Task[];
  onEdit?: (task: Task) => void;
  onDelete?: (id: number) => void;
};

const statusColor = {
  "Chưa bắt đầu": "gray",
  "Đang làm": "blue",
  "Đã hoàn thành": "green",
};

export default function TaskList({ tasks, onEdit, onDelete }: Props) {
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
            onClick={() => onEdit?.(task)}
            style={{ marginRight: 8 }}
          >
            Sửa
          </Button>
          <Button danger type="link" onClick={() => onDelete?.(task.id)}>
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
        dataSource={(tasks || []).map((task) => ({ ...task, key: task.id }))}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}
