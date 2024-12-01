import React from 'react'
import Card from './component/Card'
const App = () => {
  const users=
  [
    {
        "name": "Alice Johnson",
        "age": 29,
        "profile": "Software Developer",
        "city": "San Francisco"
    },
    {
        "name": "Michael Smith",
        "age": 35,
        "profile": "Graphic Designer",
        "city": "New York"
    },
    {
        "name": "Emma Brown",
        "age": 42,
        "profile": "Teacher",
        "city": "Chicago"
    },
    {
        "name": "James Williams",
        "age": 24,
        "profile": "Data Scientist",
        "city": "Seattle"
    },
    {
        "name": "Sophia Davis",
        "age": 31,
        "profile": "Marketing Specialist",
        "city": "Austin"
    }
]

  return (
    <div>
    <div className='p-10'>
      {users.map(function(elem){
       return <Card username={elem.name} age={elem.age} city={elem.city} photu={elem.profile}/>

      })}
   
    </div>
    </div>
  )
}

export default App
