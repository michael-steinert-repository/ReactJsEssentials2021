import {useState} from 'react';

const AddTask = ({addTask}) => {
    const [text, setText] = useState("");
    const [reminder, setReminder] = useState(false);

    const submitTask = (event) => {
        event.preventDefault();
        if (!text) {
            alert("Please add Text");
            return;
        }

        addTask({text, reminder});
        setText("");
        setReminder(false);
    }

    return (
        <form
            className="add-form"
            onSubmit={submitTask}
        >
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    placeholder="Add Task"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={(event) => setReminder(event.currentTarget.checked)}
                />
            </div>
            <input type="submit" className="btn btn-block" value="Add Task"/>
        </form>
    );
}

export default AddTask;