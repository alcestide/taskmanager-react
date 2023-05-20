import { FiTrash, FiEdit2, FiCheckSquare } from "react-icons/fi";
const Task = ({ task, index, deleteTask, getSingleTask, setToComplete }) => {
  return (
    <div className={task.completed ? "task completed" : "task"}>
      <p>
        <b>{index + 1}. </b>
        {task.name}
      </p>
      <div className="task-icons">
        <FiCheckSquare onClick={() => setToComplete(task)} />
        <FiEdit2 onClick={() => getSingleTask(task)} />
        <FiTrash onClick={() => deleteTask(task._id)} />
      </div>
    </div>
  )
}
export default Task
