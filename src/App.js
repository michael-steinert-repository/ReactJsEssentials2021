import {useState, useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
    /* The State should be on the Top Level - so other Components can use it */
    const [tasks, setTasks] = useState([]);
    const [showAddTask, setShowAddTask] = useState(false);

    /* useEffect */
    useEffect(() => {
        const getTasks = async () => {
            const tasks = await fetchTasks();
            setTasks(tasks);
        }
        getTasks();
    }, []);

    /* Fetch Tasks from Json-Server */
    const fetchTasks = async () => {
        const response = await fetch("http://localhost:5000/tasks");
        const tasks = await response.json();
        return tasks;
    }

    /* Fetch Task from Json-Server */
    const fetchTask = async (_id) => {
        const response = await fetch(`http://localhost:5000/tasks/${_id}`);
        const tasks = await response.json();
        return tasks;
    }

    /* Add Task */
    const addTask = async (_task) => {
        const response = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(_task)
        });
        const task = await response.json();
        setTasks([...tasks, task]);
    }

    /* Delete Task - The State is passing down and the Events are passing up*/
    const deleteTask = async (_id) => {
        await fetch(`http://localhost:5000/tasks/${_id}`, {method: "DELETE"});
        /* Setting the State to the filtered Task */
        setTasks(tasks.filter((task) => {
                /* If the Expression is returning true these Element will stay in the Array otherwise its will be deleted */
                return task.id !== _id;
            }
        ))
    };

    /* Toggle Reminder */
    const toggleReminder = async (_id) => {
        let task = await fetchTask(_id);
        task = {...task, reminder: !task.reminder};

        const response = await fetch(`http://localhost:5000/tasks/${_id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(task)
        })

        task = await response.json();

        setTasks(tasks.map(_task => {
            if (_task.id === _id) {
                return {..._task, reminder: _task.reminder};
            }
            return _task;
        }))
    }

    return (
        <BrowserRouter>
            <div className="container">
                <Header
                    showAddTask={() => setShowAddTask(!showAddTask)}
                    showAdd={showAddTask}
                />
                <Route path="/" exec render={(props) => (
                    <>
                        {showAddTask && <AddTask addTask={addTask}/>}
                        {tasks.length > 0 ?
                            <Tasks
                                tasks={tasks}
                                deleteTask={deleteTask}
                                toggleReminder={toggleReminder}
                            />
                            :
                            <p>Tasks are empty</p>
                        }
                    </>
                )}/>
                <Route path="/about" component={About}/>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
