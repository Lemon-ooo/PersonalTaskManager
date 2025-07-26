import React, { useEffect, useState } from "react";
import { useTask } from "../hooks/useTask";
import dayjs from "dayjs";

export default function StatisticsPage() {
  const { tasks, handlegetAll } = useTask();
  const [doneCount, setDoneCount] = useState(0);
  const [overdueCount, setOverdueCount] = useState(0);

  useEffect(() => {
    handlegetAll();
  }, []);

  useEffect(() => {
    const now = dayjs();

    const done = tasks.filter((task) => task.status === "done").length;
    const overdue = tasks.filter(
      (task) =>
        task.status !== "done" && dayjs(task.dueDate).isBefore(now, "day")
    ).length;

    setDoneCount(done);
    setOverdueCount(overdue);
  }, [tasks]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📊 Thống kê công việc</h1>
      <p>
        ✅ Số công việc đã hoàn thành: <strong>{doneCount}</strong>
      </p>
      <p>
        ❌ Số công việc đã quá hạn: <strong>{overdueCount}</strong>
      </p>
    </div>
  );
}
