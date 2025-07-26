import React, { useEffect, useState } from "react";
import {
  Table,
  Tag,
  Button,
  Popconfirm,
  Input,
  Select,
  DatePicker,
  Row,
  Col,
} from "antd";
import { useTask } from "../hooks/useTask";
import { Task } from "../services/task";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const { Option } = Select;

const statusColor = {
  todo: "gray",
  "in-progress": "blue",
  done: "green",
};

export default function TaskList() {
  const { tasks, handlegetAll, handleDelete } = useTask();
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | undefined>();
  const [dateFilter, setDateFilter] = useState<string | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    handlegetAll();
  }, []);

  useEffect(() => {
    // Lọc theo keyword, trạng thái và ngày
    const newTasks = tasks.filter((task) => {
      const matchSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchStatus = statusFilter ? task.status === statusFilter : true;
      const matchDate = dateFilter ? task.dueDate === dateFilter : true;
      return matchSearch && matchStatus && matchDate;
    });
    setFilteredTasks(newTasks);
  }, [search, statusFilter, dateFilter, tasks]);

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
            onClick={() => navigate(`/tasks/edit/${task.id}`)}
            style={{ marginRight: 8 }}
          >
            Sửa
          </Button>
          <Popconfirm
            title="Bạn chắc chắn muốn xoá công việc này?"
            onConfirm={() => handleDelete(String(task.id))}
            okText="Xoá"
            cancelText="Huỷ"
          >
            <Button danger type="link">
              Xoá
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ textAlign: "center" }}>Danh sách công việc</h2>

      {/* Thanh lọc & tìm kiếm */}
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={8}>
          <Input
            placeholder="Tìm kiếm theo tiêu đề"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
        <Col span={8}>
          <Select
            allowClear
            placeholder="Lọc theo trạng thái"
            style={{ width: "100%" }}
            value={statusFilter}
            onChange={(value) => setStatusFilter(value)}
          >
            <Option value="todo">Chưa bắt đầu</Option>
            <Option value="in-progress">Đang làm</Option>
            <Option value="done">Đã hoàn thành</Option>
          </Select>
        </Col>
        <Col span={8}>
          <DatePicker
            style={{ width: "100%" }}
            placeholder="Lọc theo ngày hết hạn"
            onChange={(date) =>
              setDateFilter(date ? date.format("YYYY-MM-DD") : undefined)
            }
          />
        </Col>
      </Row>

      <Table
        dataSource={filteredTasks.map((task) => ({ ...task, key: task.id }))}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}
