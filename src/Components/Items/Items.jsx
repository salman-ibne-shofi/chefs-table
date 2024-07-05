import { useEffect, useState } from "react";
import Item from "../Item/Item";

const Items = ({ handleAddToWanttocook }) => {
	const [Items, setItems] = useState([]);

	useEffect(() => {
		fetch("Items.json")
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);

	return (
		<div className="grid grid-cols-2 gap-4 w-2/3 mt-10">
			{Items.map((item) => (
				<Item
					key={item.recipe_id}
					item={item}
					handleAddToWanttocook={handleAddToWanttocook}
				></Item>
			))}
		</div>
	);
};

export default Items;
