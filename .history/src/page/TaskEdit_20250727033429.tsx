import React, { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import { useParams } from "react-router-dom";
import { useTask } from "../hooks/useTask";
import { Task } from "../services/task";
import dayjs from "dayjs";

export default function TaskEdit() {
  const { id } = useParams();
  const { handleEdit, handleGetDetail } = useTask();
  const [initialValues, setInitialValues] = useState<any>(null);

  useEffect(() => {
    if (id) {
      handleGetDetail(id).then((data: Task | null) => {
        if (data) {
          setInitialValues({
            ...data,
            dueDate: dayjs(data.dueDate),
            status: getStatusLabel(data.status),
          });
        }
      });
    }
  }, [id]);

  function getStatusLabel(status: Task["status"]) {
    if (status === "todo") return "Chưa bắt đầu";
    if (status === "in-progress") return "Đang làm";
    if (status === "done") return "Đã hoàn thành";
    return "";
  }

  return (
    <>
      {initialValues && (
        <TaskForm
          onSubmit={(task: Task) => {
            if (typeof task.id === "string") {
              handleEdit(task, task.id);
            } else {
              // Optionally handle the error case here
              console.error("Task id is undefined or not a string");
            }
          }}
          initialValues={initialValues}
        />
      )}
    </>
  );
}
