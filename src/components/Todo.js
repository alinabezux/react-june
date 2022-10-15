const Todo = ({todo}) => {

    return (
        <div>
            <h3>{todo.id}) {todo.title} - <i>{todo.completed.toString()}</i></h3>
        </div>
    );
}

export {Todo}