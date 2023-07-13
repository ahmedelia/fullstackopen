
const Header = ({course}) => (
    <h1>{course}</h1>
)

const Part = ({part, excercises}) => (
    <>
    <p>{part} {excercises}</p>
    </>
)

const Content = (props) => {
    console.log(props)
  return (
    <>
      <Part part={props[0].name} excercises={props[0].exercises}/>
      <Part part={props[1].name} excercises={props[1].exercises}/>
      <Part part={props[2].name} excercises={props[2].exercises}/>
      <Part part={"Number of exercises"} excercises={props[0].exercises + props[1].exercises + props[2].exercises} />
    </>
  )
}

const App = () => {
  const course = {
      name : 'Half Stack application development',
      parts : [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        },
    ]
  }
  return (
    <div>
        <Header course={course.name} />
        <Content {...course.parts} />
    </div>
  )
}

export default App
