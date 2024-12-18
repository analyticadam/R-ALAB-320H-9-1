export default function ActionButton({ children, dispatch, type, payload }) {
	return (
		<button onClick={() => dispatch({ type: type, payload: payload })}>
			{children}
		</button>
	);
}
