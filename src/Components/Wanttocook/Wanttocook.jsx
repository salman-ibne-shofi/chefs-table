import PropTypes from "prop-types";
import Wantcook from "../Wantcook/Wantcook";

const Wanttocook = ({ wanttocook }) => {
	return (
		<div className="w-1/3 border-2 p-2 rounded-xl">
			<h2 className="text-2xl font-bold text-center border-b p-2 text-[#282828]">
				Want To Cook: {wanttocook.length}
			</h2>
			<div>
				<div className="flex gap-28 p-6 mt-4 text-[#878787]">
					<a href="">Name</a>
					<a href="">Time</a>
					<a href="">Calories</a>
				</div>
				{wanttocook.map((wanttocook) => (
					<Wantcook
						key={wanttocook.recipe_id}
						wantcook={wanttocook}
					></Wantcook>
				))}
			</div>
			<div>
				<h2 className="text-xl font-bold text-center border-b p-2 text-[#282828]">
					Currently cooking:
				</h2>

				<div className="flex justify-between p-6 mt-4 text-[#878787]">
					<a href="">Name</a>
					<a href="">Time</a>
					<a href="">Calories</a>
				</div>
			</div>
		</div>
	);
};

Wanttocook.propTypes = {
	wanttocook: PropTypes.array,
};

export default Wanttocook;
