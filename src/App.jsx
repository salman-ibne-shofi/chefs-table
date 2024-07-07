import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Items from "./Components/Items/Items";
import Recipes from "./Components/Recipes/Recipes";
import Wanttocook from "./Components/Wanttocook/Wanttocook";

function App() {
	const [wanttocook, setWanttocook] = useState([]);
	const [cooking, setCooking] = useState([]);
	const [totaltime, setTotaltime] = useState(0);
	const [totalCalories, setTotalCalories] = useState(0);

	const handleAddToWanttocook = (item) => {
		if (wanttocook.some(cookItem => cookItem.recipe_id == item.recipe_id)) {
			alert("Already Exists!");
			return;
		}

		const newWanttocook = [...wanttocook, item];
		setWanttocook(newWanttocook);
	};

	const handleTotalTime = (time, calories, cookItem) => {
		setTotaltime(totaltime + time);
		setTotalCalories(totalCalories + calories);
		setWanttocook(wanttocook.filter((item) => item !== cookItem));
		setCooking((cooking) => [...cooking, cookItem]);
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
					cooking={cooking}
					handleTotalTime={handleTotalTime}
					totaltime={totaltime}
					totalCalories={totalCalories}
				></Wanttocook>
			</div>
		</>
	);
}

export default App;
