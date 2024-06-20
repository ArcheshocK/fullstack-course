import { useState } from 'react'

const Display = ({ text }) => <h1>{text}</h1>
const Display2 = ({ text }) => <h2>{text}</h2>
const Statistic = ({ text, value }) => <div>{text} {value}</div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })

  const handleGoodClick = () => {
    setFeedback({ ...feedback, good: feedback.good + 1 })
  }

  const handleNeutralClick = () => {
    setFeedback(
      {
        ...feedback, 
        neutral: feedback.neutral + 1 
      }
    )
  }

  const handleBadClick = () => {
    setFeedback({ ...feedback, bad: feedback.bad + 1 })
  }

  return (
    <div>
      <Display text="give feedback" />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Display2 text="statistics" />
      <Statistic text="good" value={feedback.good} />
      <Statistic text="neutral" value={feedback.neutral} />
      <Statistic text="bad" value={feedback.bad} />
    </div>
  )
}

export default App;
