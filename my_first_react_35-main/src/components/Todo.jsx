import { useEffect, useState } from "react"

export default function Todo() {

    const [todos, setTodos] = useState([
        { id: 1, title: 'Купить молоко', completed: false },
        { id: 2, title: 'Накормить кота', completed: true },
        { id: 3, title: 'Забрать зарплату', completed: true },
    ])

    const [filteredTodos, setFilteredTodos] = useState([])

    const [newTodo, setNewTodo] = useState('')
    const [currentFilter, setCurrentFilter] = useState('All')

    useEffect(() => {

        if (currentFilter === 'Done') {
            setFilteredTodos(
                todos.filter(todo => todo.completed === true)
            )
        } else if (currentFilter === 'InProcess') {
            setFilteredTodos(
                todos.filter(todo => todo.completed === false)
            )
        } else {
            setFilteredTodos(todos)
        }

    }, [currentFilter, todos])

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {

                if (todo.id === id) {
                    todo.completed = !todo.completed
                }

                return todo
            })
        )
    }

    function addTodo() {
        setTodos(
            [
                ...todos,
                { id: todos.length + 1, title: newTodo, completed: false }
            ]
        )
    }

    function removeTodo(id) {
        setTodos(
            todos.filter(todo => {
                return todo.id !== id
            })
        )
    }

    return (
        <div>

            <h2>ToDo лист</h2>

            <div className="filters">
                <label>
                    Выполненные
                    <input type="radio" name="filter" onChange={() => setCurrentFilter('Done')} />
                </label>
                <label>
                    Не выполненные
                    <input type="radio" name="filter" onChange={() => setCurrentFilter('InProcess')} />
                </label>
                <label>
                    Все
                    <input type="radio" name="filter" onChange={() => setCurrentFilter('All')} />
                </label>
            </div>

            {
                filteredTodos.map(todo => (
                    <div className={todo.completed ? 'striked' : ''}>
                        <input onChange={() => toggleTodo(todo.id)} checked={todo.completed} type="checkbox" />
                        <span>{todo.title}</span>
                        <button onClick={() => removeTodo(todo.id)}>X</button>
                    </div>
                ))
            }

            <h2>Добавить дело</h2>

            <input type="text" value={newTodo} onInput={(event) => setNewTodo(event.target.value)} placeholder="Введите название дела" />
            <button onClick={() => addTodo()}>Добавить</button>


        </div>
    )

}