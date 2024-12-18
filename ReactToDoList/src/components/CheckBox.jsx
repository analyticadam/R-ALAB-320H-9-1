export default function CheckBox({ state, setState }) {
	return (
		<input
			type="checkbox"
			checked={state}
			onChange={(evt) => setState(evt.target.checked)}
		/>
	);
}
