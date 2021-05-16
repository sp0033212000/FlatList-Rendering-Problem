const RenderData = ({ item, onItemSelect, selectedItems }) => {
	const isSelected = selectedItems.some(
		(selectedItem) => selectedItem === item
	);

	return (
		<TouchableOpacity
			onPress={onItemSelect}
			style={[
				styles.item_btn,
				{ backgroundColor: isSelected ? "#7A7A7A" : "transparent" },
			]}
		>
			<Text>{item.name}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	item_btn: {
		height: 40,
		justifyContent: "center",
		alignItems: "center",
	},
});
