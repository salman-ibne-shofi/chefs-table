import PropTypes from "prop-types";
import Wantcook from "../Wantcook/Wantcook";

const Wanttocook = ({ wanttocook, handleTotalTime, totaltime }) => {
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
				{wanttocook.map((wanttocook) => (
					<Wantcook
						key={wanttocook.recipe_id}
						wantcook={wanttocook}
						handleTotalTime={handleTotalTime}
					></Wantcook>
				))}
			</div>
			<div>
				<h2 className="text-xl font-bold text-center border-b p-2 text-[#282828]">
					Currently cooking:
				</h2>

				<div className="flex gap-28 my-4 ml-4 text-[#878787] font-bold">
					<a href="">Name</a>
					<div className="flex gap-20">
						<a href="">Time</a>
						<a href="">Calories</a>
					</div>
				</div>
			</div>
			<div className="flex justify-end gap-10 text-[#878787] font-bold p-4">
				<a href="">Total Time = {totaltime} mins</a>
				<a href="">Total Calories = </a>
			</div>
		</div>
	);
};

Wanttocook.propTypes = {
	wanttocook: PropTypes.array,
	handleTotalTime: PropTypes.func,
    totaltime: PropTypes.number
};

export default Wanttocook;
