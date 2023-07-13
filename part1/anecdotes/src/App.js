import { useState } from 'react'
const randomNum = (limit) => (
  Math.floor(Math.random() * limit)
)
const Button = ({text, handelClick}) => (
  <button onClick={handelClick}>{text}</button>
)
const Display = ({text, vote}) => (
  <>
    <p>{text}</p>
    <p>has {vote} votes</p>
  </>
)
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const rand = randomNum(anecdotes.length);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(rand)
  const [maxSelected, setMaxSelected] = useState([rand, 0])
  console.log(maxSelected)
  const handelVote = () => {
    const temp = votes.slice()
    temp[selected]++;
    if (temp[selected] > maxSelected[1])
      setMaxSelected([selected, temp[selected]])

    setVotes(temp)
  }

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <Display text={anecdotes[selected]} vote={votes[selected]} />
      <Button text={"next anecdotes"} handelClick={() => setSelected(randomNum(anecdotes.length))}/>
      <Button text={"vote"} handelClick={handelVote} />
      <h1>Anecdotes with the most votes</h1>
      <Display text={anecdotes[maxSelected[0]]} vote={votes[maxSelected[0]]} />
    </div>
  )
}

export default App
