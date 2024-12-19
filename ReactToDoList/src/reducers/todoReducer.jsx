export default function reducer(
	state,
	{ type, payload: { title, completed, id, newTitle, newCompleted } }
) {
	switch (type) {
		case "add-task": {
			let nextID = state.length + 1;
			if (title === "") {
				return state;
			}

			let hasThisTask = false;
			state.forEach((task) => {
				if (task.title === title) {
					alert(`The Task: "${title}" already exists`);
					hasThisTask = true;
				}
			});

			if (hasThisTask) {
				return state;
			}

			return [
				{
					title: title,
					userId: 1,
					id: nextID++,
					completed: completed,
				},
				...state,
			];
		}

		case "remove-task": {
			return state.filter((s) => {
				return !(s.title === title && s.completed === true);
			});
		}

		case "edit-task": {
			return state.map((task) =>
				task.id === id
					? { ...task, title: newTitle, completed: newCompleted }
					: task
			);
		}

		default: {
			throw Error("Unknown Action: " + type);
		}
	}
}
