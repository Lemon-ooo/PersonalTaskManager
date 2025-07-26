const TaskList = () => {
  return (
    <div>
      TaskList
      <TaskForm
        onSubmit={(task) => {
          console.log("Task đã thêm:", task);
        }}
      />
    </div>
  );
};

export default TaskList;
