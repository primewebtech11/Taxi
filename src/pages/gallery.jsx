import Footer from "./Footer";
import Navbar from "./Navbar";

export default function GalleryPage() {
	return (
		<div>
			<header id="header">
				<div className="header-top">
				</div>
				<Navbar/>
			</header>


			<section className="banner-area relative about-banner" id="home">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								Gallery
							</h1>
							<p className="text-white link-nav"><a href="/">Home </a>  <span className="lnr lnr-arrow-right"></span>  <a href="/gallery"> Gallery</a></p>
						</div>
					</div>
				</div>
			</section>



			<section className="image-gallery-area section-gap">
				<div className="container">
					<div className="row section-title">
						<h1>Image Gallery that we like to share</h1>
						<p>Who are in extremely love with eco friendly system.</p>
					</div>
					<div className="row">
						<div className="col-lg-4 single-gallery">
							<a href="img/g1.jpg" className="img-gal"><img className="img-fluid" src="/assets/img/g1.jpg" alt="" /></a>
							<a href="img/g4.jpg" className="img-gal"><img className="img-fluid" src="/assets/img/g4.jpg" alt="" /></a>
							<a href="img/g1.jpg" className="img-gal"><img className="img-fluid" src="/assets/img/g1.jpg" alt="" /></a>
							<a href="img/g4.jpg" className="img-gal"><img className="img-fluid" src="/assets/img/g4.jpg" alt="" /></a>
						</div>
						<div className="col-lg-4 single-gallery">
							<a href="img/g2.jpg" className="img-gal"><img className="img-fluid" src="/assets/img/g2.jpg" alt="" /></a>
							<a href="img/g5.jpg" className="img-gal"><img className="img-fluid" src="/assets/img/g5.jpg" alt="" /></a>
							<a href="img/g2.jpg" className="img-gal"><img className="img-fluid" src="/assets/img/g2.jpg" alt="" /></a>
							<a href="img/g5.jpg" className="img-gal"><img className="img-fluid" src="/assets/img/g5.jpg" alt="" /></a>
						</div>
						<div className="col-lg-4 single-gallery">
							<a href="img/g3.jpg" className="img-gal"><img className="img-fluid" src="/assets/img/g3.jpg" alt="" /></a>
							<a href="img/g6.jpg" className="img-gal"><img className="img-fluid" src="/assets/img/g6.jpg" alt="" /></a>
							<a href="img/g3.jpg" className="img-gal"><img className="img-fluid" src="/assets/img/g3.jpg" alt="" /></a>
							<a href="img/g6.jpg" className="img-gal"><img className="img-fluid" src="/assets/img/g6.jpg" alt="" /></a>
						</div>
					</div>
				</div>
			</section>



			<section className="home-calltoaction-area relative">
				<div className="container">
					<div className="overlay overlay-bg"></div>
					<div className="row align-items-center section-gap">
						<div className="col-lg-8">
							<h1>Experience Great Support</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
							</p>
						</div>
						<div className="col-lg-4 btn-left">
							<a href="#" className="primary-btn">Reach Our Support Team</a>
						</div>
					</div>
				</div>
			</section>



			<Footer/>
		</div>
	);
}
