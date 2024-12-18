export default function reducer(
	state,
	{ type, payload: { title, completed, step } }
) {
	switch (type) {
		case "add-task": {
			if (title === "") {
				return state;
			}

			let hasThisTask = false;
			state.forEach((task) => {
				if (task.title === title) {
					alert(`The Task: "${title}" already exists!`);
					hasThisTask = true;
				}
			});
			if (hasThisTask) {
				return state;
			}

			return [
				{ title: title, userId: 1, id: state.length + 1, completed: completed },
				...state,
			];
		}

		case "remove-task": {
			return state.filter((s) => {
				return !(s.title === title && s.completed === true);
			});
		}

		case "edit-task": {
			return state.map((task) => {
				if (task.title === title) {
					return { ...task, completed: !task.completed };
				} else {
					return task;
				}
			});
		}

		default: {
			throw Error("Unknown Action: " + type);
		}
	}
}
