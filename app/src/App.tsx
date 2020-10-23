import React, { Fragment, useState } from 'react';
import './App.css';

type FormElem = React.FormEvent<HTMLFormElement>
type ChangeElem = React.ChangeEvent<HTMLInputElement>

const App = (): JSX.Element => {
  const [value, setValue] = useState<string>('')

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    setValue('')
  }

  const handleChange = (e: ChangeElem): void => {
    setValue(e.target.value)
  }

  return (
    <Fragment>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} required />
        <button type="submit">Add To Do</button>
      </form>
    </Fragment>
  )
}
export default App;
