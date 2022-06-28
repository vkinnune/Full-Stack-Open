const Header = ( { name } ) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Part = ( { part, exercises } ) => {
  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  )
}

const Content = ( { parts } ) => {
  return (
    <div>
	  {parts.map(part => <Part part={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Total = ( { parts } ) => {
	let total = 0
	parts.map(part => total += part.exercises)
	return (
	    <div>
	      <strong>Total of {total} exercises</strong>
	    </div>
	)
}

const Courses = ( { courses } ) => {
	return (
	    <div>
		{courses.map(course =>
			<>
			<Header name={course.name}/>
			<Content parts={course.parts} />
			<Total parts={course.parts} />
			</>
			)}
	    </div>
	)
}

const App = () => {
const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return <Courses courses={courses} />
}

export default App
