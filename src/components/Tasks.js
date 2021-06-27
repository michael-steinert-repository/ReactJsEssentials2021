import Task from './Task';

/* Destructuring the Object prop into Array tasks */
const Tasks = ({tasks, deleteTask, toggleReminder}) => {
    return (
        <>
            {/* Function map() creates a List from an Array */}
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    deleteTask={deleteTask}
                    toggleReminder={toggleReminder}
                />
            ))}
        </>
    );
}


export default Tasks;