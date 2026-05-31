function Student(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h3>Course: {props.course}</h3>
      <h3>Marks: {props.marks}</h3>
      <hr />
    </div>
  )
}

export default Student