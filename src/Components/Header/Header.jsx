import user from "../../assets/iamges/user-icon.png";
import search from "../../assets/iamges/search-icon.png";

const Header = () => {
	return (
		<div className="flex justify-between items-center mx-auto mt-10 container">
			<h1 className="text-4xl font-bold">Recipe Calories</h1>
			<div className="flex gap-10 text-[#150B2B70]">
				<a href="">Home</a>
				<a href="">Recipes</a>
				<a href="">About</a>
				<a href="">Search</a>
			</div>
			<div className="flex gap-3 search-container">
				<img className="search-icon" src={search} alt="" />
				<input
					className="search-input"
					type="text"
					placeholder="Search"
				/>
				<img src={user} alt="" />
			</div>
		</div>
	);
};

export default Header;
