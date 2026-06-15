import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>

      <button
        onClick={logout}
        style={{
          marginBottom: "20px",
          padding: "8px 16px",
        }}
      >
        Logout
      </button>

      <TaskForm />

      <TaskList />
    </div>
  );
}

export default Home;