export const typeTwo = (props) => {
	if (props.id.types) {
		return props.id.types[0] == "normal"
			? props.id.types[1].type.name
			: props.id.types[0].type.name
	}
}
