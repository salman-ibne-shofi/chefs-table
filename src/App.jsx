import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Items from "./Components/Items/Items";
import Recipes from "./Components/Recipes/Recipes";
import Wanttocook from "./Components/Wanttocook/Wanttocook";

function App() {
	const [wanttocook, setWanttocook] = useState([]);
	const [totaltime, setTotaltime] = useState(0);

	const handleAddToWanttocook = (item) => {
		const newWanttocook = [...wanttocook, item];
		setWanttocook(newWanttocook);
	};

	const handleTotalTime = (time) => {
		setTotaltime(totaltime + time);
	};


	return (
		<>
			<Header></Header>
			<Banner></Banner>
			<Recipes></Recipes>
			<div className="flex container mx-auto mt-10 gap-4">
				<Items handleAddToWanttocook={handleAddToWanttocook}></Items>
				<Wanttocook
					wanttocook={wanttocook}
					handleTotalTime={handleTotalTime}
					totaltime={totaltime}
				></Wanttocook>
			</div>
		</>
	);
}

export default App;
