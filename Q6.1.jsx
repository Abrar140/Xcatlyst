import { useEffect } from "react";

function TaskList({ tasks }) {
    const [filteredTasks, setFilteredTasks] = useState();

    useEffect(()=>{
        // it will ensure that the filtered tasks are updated only when the tasks prop changes
        setFilteredTasks(tasks.filter(task => task.completed));

    },[filteredTasks])
    return (
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;  