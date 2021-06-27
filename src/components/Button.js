/* Destructuring the Object prop into Variable text and Function onAdd */
const Button = ({text, showAddTask, showAdd }) => {
    return (
        <button
            className="btn"
            onClick={showAddTask}
        >
            {text}
        </button>
    );
}

export default Button;