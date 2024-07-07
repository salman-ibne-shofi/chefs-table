import PropTypes from "prop-types";

const Wantcook = ({ wantcook, handleTotalTime }) => {
	const { recipe_name, preparing_time, calories} = wantcook;

	return (
		<div className="flex justify-between items-center bg-[#28282810] text-[#28282870] font-semibold p-4">
			<h3>{recipe_name}</h3>
			<a href="">{preparing_time}</a>
			<a href="">{calories}</a>
			<button
				onClick={() => handleTotalTime(preparing_time)}
				className="button font-bold text-[#150B2B] bg-[#0BE58A] rounded-full p-2"
			>
				Preparing
			</button>
		</div>
	);
};

Wantcook.propTypes = {
	wantcook: PropTypes.object,
    handleTotalTime: PropTypes.func
};

export default Wantcook;
