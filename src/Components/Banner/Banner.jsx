const Banner = () => {
	return (
		<div className="container mx-auto mt-10 bg-[url('./src/assets/iamges/banner.png')] bg-cover min-h-[500px] bg-no-repeat rounded-3xl flex justify-center items-center">
			<div className="text-center">
				<h1 className="text-3xl text-[#FFF] font-extrabold text-center mb-10">
					Discover an exceptional cooking <br /> class tailored for
					you!
				</h1>
				<p className="text-center text-[#FFF] mb-10">
					Cooking classes and Culinary Education have evolved into
					dynamic experiences that not only teach culinary <br />
					skills but also drive revenue generation, foster community,
					and eventually brand building.
				</p>
				<button className="border-none px-4 py-2 rounded-3xl bg-[#0BE58A] mr-2 font-semibold">
					Explore Now
				</button>
				<button className="border px-4 py-2 rounded-3xl ml-2 font-semibold text-[#FFF]">
					Our Feedback
				</button>
			</div>
		</div>
	);
};

export default Banner;
