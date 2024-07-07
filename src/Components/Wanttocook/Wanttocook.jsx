import PropTypes from "prop-types";
import Wantcook from "../Wantcook/Wantcook";
import Cooking from "../Cooking/Cooking";

const Wanttocook = ({
	wanttocook,
	handleTotalTime,
	totaltime,
	totalCalories,
	cooking,
}) => {
    console.log(cooking);
	return (
		<div className="w-1/3 border-2  rounded-xl">
			<h2 className="text-2xl font-bold text-center border-b p-2 text-[#282828]">
				Want To Cook: {wanttocook.length}
			</h2>
			<div>
				<div className="flex gap-28 my-4 ml-4 text-[#878787] font-bold">
					<a href="">Name</a>
					<div className="flex gap-20">
						<a href="">Time</a>
						<a href="">Calories</a>
					</div>
				</div>
				{wanttocook.map((wanttocook, index) => (
					<Wantcook
						key={index}
						wantcook={wanttocook}
						handleTotalTime={handleTotalTime}
					></Wantcook>
				))}
			</div>
			<div>
				<h2 className="text-xl font-bold text-center border-b p-2 text-[#282828]">
					Currently Cooking: {cooking.length}
				</h2>

				<div className="flex gap-28 my-4 ml-4 text-[#878787] font-bold">
					<a href="">Name</a>
					<div className="flex gap-20">
						<a href="">Time</a>
						<a href="">Calories</a>
					</div>
				</div>

				{cooking && cooking.map((cookingItem, index) => {
					console.log(cookingItem.recipe_id);
					return (
						<Cooking
							key={index}
							cookingItem={cookingItem}
						></Cooking>
					);
				})}
			</div>
			<div className="flex justify-end gap-10 text-[#878787] font-bold p-4">
				<a href="">Total Time = {totaltime} mins</a>
				<a href="">Total Calories = {totalCalories} Calories</a>
			</div>
		</div>
	);
};

Wanttocook.propTypes = {
	wanttocook: PropTypes.array,
	cooking: PropTypes.array,
	handleTotalTime: PropTypes.func,
	totaltime: PropTypes.number,
	totalCalories: PropTypes.number,
};

export default Wanttocook;
