import TaskForm from "../components/TaskForm";

const TaskAdd = () => {
  return (
    <div>
      TaskAdd
      <TaskForm
        onSubmit={(task) => {
          console.log("Task đã thêm:", task);
        }}
      />
    </div>
  );
};

export default TaskAdd;
