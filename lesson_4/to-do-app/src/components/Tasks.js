import Task from "./Task";

export default function Tasks(props) {
  return (
    <div>
      {props.tasks.map((task) => {
        return(
          <Task task={task}/>
        )
      })}
    </div>
  )
}
