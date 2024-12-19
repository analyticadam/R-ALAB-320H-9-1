export default function ActionButton({
	children,
	dispatch,
	disabled,
	type,
	payload,
}) {
	return (
		<button
			onClick={() => dispatch({ type: type, payload: payload })}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
