import PropTypes from "prop-types";

const Cooking = ({ cookingItem }) => {
	const { recipe_name, preparing_time, calories } = cookingItem;

	return (
		<div className="flex justify-between items-center bg-[#28282810] text-[#28282870] font-semibold p-4">
			<h3>{recipe_name}</h3>
			<a href="">{preparing_time}</a>
			<a href="">{calories}</a>
			<button
				disabled
				className="opacity-0 button font-bold rounded-full p-2"
			>
				Preparing
			</button>
		</div>
	);
};

Cooking.propTypes = {
	cookingItem: PropTypes.object,
};

export default Cooking;
