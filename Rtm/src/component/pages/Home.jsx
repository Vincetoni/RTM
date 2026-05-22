import data from '../data/updated_mit_study_plan.json' with {type: 'json'}
import { useState, useEffect } from 'react';

export default Home => {
  const { overview, daily_schedule, weekly_structure, tools_and_resources, rules } = data;
  const date = new Date().toLocaleDateString()
  const time = new Date().toLocaleTimeString()
  const hour = new Date().getHours()
  const [greeting, setGreeting] = useState('')
  const [moood, setMood] = useState('')// setup moodCheck later

  useEffect(()=>{
    const updateGreetings = () =>{
      if (hour >= 5 && hour < 12){
        setGreeting('Good morning💙')
      } else if (hour >= 12 && hour < 17){
        setGreeting('Good Afternoon')
      } else if (hour >= 17 && hour < 21){
        setGreeting('Good Evening')
      } else {setGreeting('GoodNight')}
    }
    updateGreetings()
    const intervalId = setInterval(updateGreetings, 60000)
    return() => clearInterval(intervalId);
  },[])

  return (
    <div>
      <nav style={{padding:'10px'}}>
        <h1>{greeting}: Vincent</h1>
      </nav>
    </div>
  )
}