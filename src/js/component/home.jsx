import React from "react";
import Navbar from './Navbar.jsx';
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<Navbar
					navbarTitle="Start Bootstrap"
					item1="Home"
					item2="About"
					item3="Services"
					item4="Contact"
				/>
			</div>
			<div className="row">
				<Jumbotron
					title="A warm welcome!"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
					buttonLabel="Call to action!"
				/>
			</div>
			<div className="row justify-content-center">
				<Card
					title="Card title"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
					buttonLabel="Find Out More!"
				/>

				<Card
					title="Card title"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
					buttonLabel="Find Out More!"
				/>

				<Card
					title="Card title"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
					buttonLabel="Find Out More!"
				/>

				<Card
					title="Card title"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
					buttonLabel="Find Out More!"
				/>
			</div>

		</div>
	);
};

export default Home;
