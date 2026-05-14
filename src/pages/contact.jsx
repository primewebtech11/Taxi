export default function ContactPage() {
	return (
		<div>
			<header id="header">
				<div className="header-top">
				</div>
				<div className="container main-menu">
					<div className="row align-items-center justify-content-between d-flex">
						<a href="/"><img src="/assets/img/logo.png" alt="" title="" /></a>
						<nav id="nav-menu-container">
							<ul className="nav-menu">
								<li className="menu-active"><a href="/">Home</a></li>
								<li><a href="/about">About</a></li>
								<li><a href="/service">Services</a></li>
								<li><a href="/gallery">Gallery</a></li>
								<li className="menu-has-children"><a href="">Blog</a>
									<ul>
										<li><a href="/blog-home">Blog Home</a></li>
										<li><a href="/blog-single">Blog Single</a></li>
										<li className="menu-has-children"><a href="">Level 2</a>
											<ul>
												<li><a href="#">Item One</a></li>
												<li><a href="#">Item Two</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li><a href="/elements">Elements</a></li>
								<li><a href="/contact">Contact</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>


			<section className="banner-area relative about-banner" id="home">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								Contact Us
							</h1>
							<p className="text-white link-nav"><a href="/">Home </a>  <span className="lnr lnr-arrow-right"></span>  <a href="/contact"> Contact Us</a></p>
						</div>
					</div>
				</div>
			</section>



			<section className="contact-page-area section-gap">
				<div className="container">
					<div className="row">
						<div className="map-wrap" style={{ width: '100%', height: '445px' }} id="map"></div>
						<div className="col-lg-4 d-flex flex-column address-wrap">
							<div className="single-contact-address d-flex flex-row">
								<div className="icon">
									<span className="lnr lnr-home"></span>
								</div>
								<div className="contact-details">
									<h5>Binghamton, New York</h5>
									<p>
										4343 Hinkle Deegan Lake Road
									</p>
								</div>
							</div>
							<div className="single-contact-address d-flex flex-row">
								<div className="icon">
									<span className="lnr lnr-phone-handset"></span>
								</div>
								<div className="contact-details">
									<h5>00 (958) 9865 562</h5>
									<p>Mon to Fri 9am to 6 pm</p>
								</div>
							</div>
							<div className="single-contact-address d-flex flex-row">
								<div className="icon">
									<span className="lnr lnr-envelope"></span>
								</div>
								<div className="contact-details">
									<h5>support@colorlib.com</h5>
									<p>Send us your query anytime!</p>
								</div>
							</div>
						</div>
						<div className="col-lg-8">
							<form className="form-area contact-form text-right" id="myForm" action="mail.php" method="post">
								<div className="row">
									<div className="col-lg-6 form-group">
										<input name="name" placeholder="Enter your name" className="common-input mb-20 form-control" required type="text" />

										<input name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" className="common-input mb-20 form-control" required type="email" />

										<input name="subject" placeholder="Enter subject" className="common-input mb-20 form-control" required type="text" />
									</div>
									<div className="col-lg-6 form-group">
										<textarea className="common-textarea form-control" name="message" placeholder="Enter Messege" required></textarea>
									</div>
									<div className="col-lg-12">
										<div className="alert-msg" style={{ textAlign: 'left' }}></div>
										<button className="genric-btn primary" style={{ float: 'right' }}>Send Message</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>



			<footer className="footer-area section-gap">
				<div className="container">
					<div className="row">
						<div className="col-lg-2 col-md-6 col-sm-6">
							<div className="single-footer-widget">
								<h6>Quick links</h6>
								<ul>
									<li><a href="#">Jobs</a></li>
									<li><a href="#">Brand Assets</a></li>
									<li><a href="#">Investor Relations</a></li>
									<li><a href="#">Terms of Service</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6 col-sm-6">
							<div className="single-footer-widget">
								<h6>Features</h6>
								<ul>
									<li><a href="#">Jobs</a></li>
									<li><a href="#">Brand Assets</a></li>
									<li><a href="#">Investor Relations</a></li>
									<li><a href="#">Terms of Service</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6 col-sm-6">
							<div className="single-footer-widget">
								<h6>Resources</h6>
								<ul>
									<li><a href="#">Guides</a></li>
									<li><a href="#">Research</a></li>
									<li><a href="#">Experts</a></li>
									<li><a href="#">Agencies</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6 col-sm-6 social-widget">
							<div className="single-footer-widget">
								<h6>Follow Us</h6>
								<p>Let us be social</p>
								<div className="footer-social d-flex align-items-center">
									<a href="#"><i className="fa fa-facebook"></i></a>
									<a href="#"><i className="fa fa-twitter"></i></a>
									<a href="#"><i className="fa fa-dribbble"></i></a>
									<a href="#"><i className="fa fa-behance"></i></a>
								</div>
							</div>
						</div>
						<div className="col-lg-4  col-md-6 col-sm-6">
							<div className="single-footer-widget">
								<h6>Newsletter</h6>
								<p>Stay update with our latest</p>
								<div className="" id="mc_embed_signup">
									<form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="form-inline">
										<input className="form-control" name="EMAIL" placeholder="Enter Email" required type="email" />
										<button className="click-btn btn btn-default"><span className="lnr lnr-arrow-right"></span></button>
										<div style={{ position: 'absolute', left: '-5000px' }}>
											<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex="-1" value="" type="text" />
										</div>

										<div className="info"></div>
									</form>
								</div>
							</div>
						</div>
						<p className="mt-80 mx-auto footer-text col-lg-12">

							Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>

						</p>
					</div>
				</div>
				<img className="footer-bottom" src="/assets/img/footer-bottom.png" alt="" />
			</footer>
		</div>
	);
}
