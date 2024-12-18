import ActionButton from "./ActionButton";

function ToDoItems({ task, dispatch }) {
	return (
		<>
			<div style={{ width: "100%", textAlign: "center", marginTop: "10px" }}>
				<b>Task: {task.title}</b>
			</div>
			<div style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>
				<b>Completed: {task.completed ? "Yes" : "No"}</b>
			</div>
			<div>
				<ActionButton
					type="remove-task"
					payload={{ title: task.title }}
					dispatch={dispatch}
				>
					Delete
				</ActionButton>
			</div>
		</>
	);
}

export default ToDoItems;
