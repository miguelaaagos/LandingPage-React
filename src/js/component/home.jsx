import React from "react";
import Navbar from './Navbar.jsx';
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<section>
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
				<div className="row justify-content-center pt-3">
					<Card
						title="Card title"
						imageUrl="https://images.all-free-download.com/images/graphicwebp/cat_cat_face_cats_eyes_240527.webp"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
						buttonLabel="Find Out More!"
					/>

					<Card
						title="Card title"
						imageUrl="https://images.all-free-download.com/images/graphicwebp/cat_cat_face_cats_eyes_240527.webp"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
						buttonLabel="Find Out More!"
					/>

					<Card
						title="Card title"
						imageUrl="https://images.all-free-download.com/images/graphicwebp/cat_cat_face_cats_eyes_240527.webp"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
						buttonLabel="Find Out More!"
					/>

					<Card
						title="Card title"
						imageUrl="https://images.all-free-download.com/images/graphicwebp/cat_cat_face_cats_eyes_240527.webp"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
						buttonLabel="Find Out More!"
					/>
				</div>
			</section>
			<div className="row">
				<footer>
					<Footer
						title="© 2022 Copyright: "
						siteUrl="HamburguesasMC.com"
					/>
				</footer>
			</div>
		</div>
	);
};

export default Home;
