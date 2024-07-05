import PropTypes from "prop-types";

const Item = ({ item, handleAddToWanttocook }) => {
	const {
		recipe_image,
		recipe_name,
		short_description,
		ingredients,
		preparing_time,
		calories,
	} = item;
	return (
		<div className="border-2 p-4 rounded-xl">
			<img className="rounded-xl mb-4" src={recipe_image} alt="" />
			<h2 className="text-xl text-[#282828] font-bold">{recipe_name}</h2>
			<p className="text-[#878787] mt-3">{short_description}</p>
			<div className="border-y-2 p-4 mt-4">
				<p className="text-[#282828] font-semibold">
					Ingredients: {ingredients.length}
				</p>
				<div className="text-[#878787] ml-2 p-2">
					<li>{ingredients[0]}</li>
					<li>{ingredients[1]}</li>
					<li>{ingredients[2]}</li>
					<li>{ingredients[3]}</li>
					<li>{ingredients[5]}</li>
					<li>{ingredients[4]}</li>
				</div>
			</div>
			<div className="flex gap-10 mt-4">
				<div className="flex gap-2">
					<img src="https://i.ibb.co/kGtN6cp/clock-icon.png" alt="" />
					{preparing_time}
				</div>
				<div className="flex gap-2">
					<img src="https://i.ibb.co/pJJ5V5f/fire-icon.png" alt="" />
					{calories}
				</div>
			</div>
			<button
				onClick={handleAddToWanttocook}
				className="text-[#150B2B] font-bold border rounded-full px-5 py-2 bg-[#0BE58A] mt-4"
			>
				Want to Cook
			</button>
		</div>
	);
};

Item.PropTypes = {
	item: PropTypes.object.isRequired,
};

export default Item;
