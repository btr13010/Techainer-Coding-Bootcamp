
export default function Task(props) {
  return (
    <div className={`task ${ props.task.reminder ? 'reminder' : '' }`}>
      <h3> {props.task.text} </h3>
      <p> {props.task.time} </p>
    </div>
  )
}
