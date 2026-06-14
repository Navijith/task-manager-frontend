import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default Home;