import React, { Fragment, useState } from 'react';
import './App.css';

//variables for types that already exists
type FormElem = React.FormEvent<HTMLFormElement>
type ChangeElem = React.ChangeEvent<HTMLInputElement>

//interface creates new type
interface ITodo {
  text: string,
  complete: boolean
}

//you can extend interfaces and you can't extend types (similar to extending class)
// interface ITodo2 extends ITodo{
//   tag: string[]
// }

const App = (): JSX.Element => {
  const [value, setValue] = useState<string>('')
  //need to put the [] after ITodo because it needs to show that it is an array of ITodo objects
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const handleChange = (e: ChangeElem): void => {
    setValue(e.target.value)
  }

  const addTodo = (text: string): void => {
    //add new todoes to the copy of the current todos state
    const newTodos: ITodo[] = [...todos, { text, complete: false }]
    //set newTodos
    setTodos(newTodos)
  }

  const toggleCompleteTodo = (index: number): void => {
    //make a clone and do not alter previous state
    const updatedTodos: ITodo[] = [...todos]
    updatedTodos[index].complete = !updatedTodos[index].complete
    setTodos(updatedTodos)
  }

  const removeTodo = (index: number): void => {
    const updatedTodos: ITodo[] = [...todos]
    console.log('index to remove', index)
    updatedTodos.splice(index, 1)
    setTodos(updatedTodos)
  }

  return (
    <Fragment>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} required />
        {' '}
        <button type="submit">Add To Do</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <div key={index}>
            {index + 1}.
            {' '}
            <span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            {' '}
            <button type="button" onClick={() => toggleCompleteTodo(index)}>{todo.complete ? 'incomplete' : 'complete'}</button>
            <button type="button" onClick={() => removeTodo(index)}>Delete</button>
          </div>
        ))}
      </section>
    </Fragment>
  )
}
export default App;
