import React from 'react';

const Todos = ({ todos, deleteTodo }) => {

    const todoList = todos.length ? (
        todos.map(
            todo => (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content} </span>
                    <button onClick={() => { deleteTodo(todo.id) }}> Done </button>
                </div>
            )
        )
    ) : (<p className="center">No Todos</p>)

    return (
        <div className="todos collection">
            {todoList}
        </div>
    );
}

export default Todos;