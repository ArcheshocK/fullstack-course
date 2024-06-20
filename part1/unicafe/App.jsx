import { useState } from 'react'

const Display = ({text}) => <h1>{text}</h1>  
const Display2 = ({text}) => <h2>{text}</h2>  


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const text = 'give feedback'

  const increaseGood = () => {
    setGood(good + 1)
  }

  const increaseNeutral = () => { 
    setNeutral(neutral + 1)
  }

  const increaseBad = () => { 
    setBad(bad + 1)
  }

  return (
    <div>
      <Display text={text} />
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <Display2 text="statistics" />
    </div>
  )

} 

export default App