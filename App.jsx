import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className="counter"><h1 className='count'>{count}</h1></div>
      <div className="rbutton">
      <button className='r' onClick={() => setCount(0)}>Reset</button>
      </div>
      <div className="ibuttons">
      <button className='i' onClick={() => setCount(count + 1)}>+1</button>
      <button className='i' onClick={() => setCount(count + 2)}>+2</button>
      <button className='i' onClick={() => setCount(count + 3)}>+3</button>
      <button className='i' onClick={() => setCount(count + 4)}>+4</button>
      <button className='i' onClick={() => setCount(count + 5)}>+5</button>
      </div>
      <div className="dbutton">
      <button className='i' onClick={() => setCount(count - 1)}>-1</button>
      <button className='i' onClick={() => setCount(count - 2)}>-2</button>
      <button className='i' onClick={() => setCount(count - 3)}>-3</button>
      <button className='i' onClick={() => setCount(count - 4)}>-4</button>
      <button className='i' onClick={() => setCount(count - 5)}>-5</button>
      </div>
      
     
      
        {console.log(count)}
    </div>
  )
}

export default App