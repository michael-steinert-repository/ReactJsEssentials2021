import {FaTimes} from 'react-icons/fa';

/* Destructuring the Object prop into Task task */
const Task = ({task, deleteTask, toggleReminder}) => {
    const faTimesStyling = {
        color: "red",
        cursor: "pointer"
    };

    return (
        <div
            className={`task ${task.reminder ? "reminder" : ""}`}
            onDoubleClick={() => toggleReminder(task.id)}
        >
            <h3>
                {task.text}
                <FaTimes
                    style={faTimesStyling}
                    onClick={() => deleteTask(task.id)}
                />
            </h3>
        </div>
    );
}

export default Task;