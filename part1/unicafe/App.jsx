import { useState } from 'react'

const Display = ({ text }) => <h1>{text}</h1>
const Display2 = ({ text }) => <h2>{text}</h2>
const StatisticLine = ({ text, value }) => (<div> {text} {value} </div>)
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({ feedback }) => {
  const calculateAverage = () => {
    if (feedback.total > 0) {
      return (feedback.good - feedback.bad) / feedback.total
    }
    return 0
  }

  const calculatePositivePercentage = () => {
    if (feedback.total > 0) {
      return (feedback.good / feedback.total) * 100
    }
    return 0
  }

  return (
    <div>
      <StatisticLine text="good" value={feedback.good} />
      <StatisticLine text="neutral" value={feedback.neutral} />
      <StatisticLine text="bad" value={feedback.bad} />
      <StatisticLine text="all" value={feedback.total} />
      <StatisticLine text="average" value={calculateAverage().toFixed(2)} />
      <StatisticLine text="positive" value={'%' + calculatePositivePercentage().toFixed(2)} />
    </div>
  )
}

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0, total: 0 });

  const handleGoodClick = () => {
    setFeedback({ ...feedback, good: feedback.good + 1, total: feedback.total + 1 });
  };

  const handleNeutralClick = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1,
      total: feedback.total + 1
    });
  };

  const handleBadClick = () => {
    setFeedback({ ...feedback, bad: feedback.bad + 1, total: feedback.total + 1 })
  }

  return (
    <div>
      <Display text="give feedback" />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Display2 text="statistics" />
      {feedback.total > 0 ? (
        <Statistics feedback={feedback} />
      ) : (
        <div>No feedback given</div>
      )}
    </div>
  )
}

export default App;
