export default function reducer(
	state,
	{ type, payload: { title, completed, step } }
) {
	switch (type) {
		case "add-task": {
			if (title === "") {
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

		default: {
			throw Error("Unknown Action: " + type);
		}
	}
}
