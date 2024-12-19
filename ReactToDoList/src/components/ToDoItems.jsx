import { useState } from "react";
import ActionButton from "./ActionButton"; // Assuming ActionButton is a custom component

function ToDoItems({ task, dispatch }) {
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(task.title || ""); // Fallback to empty string
	const [newCompleted, setNewCompleted] = useState(task.completed ?? false); // Fallback to false

	const handleSave = () => {
		if (newTitle.trim()) {
			dispatch({
				type: "edit-task",
				payload: { id: task.id, newTitle, newCompleted },
			});
			setIsEditing(false);
		} else {
			alert("Title cannot be empty.");
		}
	};

	return (
		<div>
			<div style={{ width: "100%", textAlign: "center", marginTop: "10px" }}>
				{isEditing ? (
					<input
						type="text"
						value={newTitle}
						onChange={(e) => setNewTitle(e.target.value)}
						placeholder="Edit task title"
					/>
				) : (
					<b>Task: {task.title}</b>
				)}
			</div>
			<div style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>
				{isEditing ? (
					<label>
						<input
							type="checkbox"
							checked={newCompleted}
							onChange={(e) => setNewCompleted(e.target.checked)} // Handle checkbox change directly
						/>
						Completed
					</label>
				) : (
					<b>Completed: {task.completed ? "Yes" : "No"}</b>
				)}
			</div>
			<div>
				{isEditing ? (
					<>
						<button onClick={handleSave}>Save</button>
						<button onClick={() => setIsEditing(false)}>Cancel</button>
					</>
				) : (
					<ActionButton
						type={"edit-task"}
						payload={{ title: task.title }}
						dispatch={() => setIsEditing(true)} // Enter editing mode
					>
						Edit
					</ActionButton>
				)}
				<ActionButton
					type="remove-task"
					payload={{ title: task.title }}
					dispatch={dispatch}
					disabled={!newCompleted} // Use newCompleted for disable logic
				>
					Delete
				</ActionButton>
			</div>
		</div>
	);
}

export default ToDoItems;
