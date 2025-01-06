import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  const initialCount = 0;
  const minCount = 1;
  const maxCount = 10; 

  return (
    <>
      <Counter initialCount={initialCount} minCount={minCount} maxCount={maxCount} />
    </>
  )
}

export default App
