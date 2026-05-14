export default function BlogHomePage() {
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


			<section className="banner-area relative blog-home-banner" id="home">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content blog-header-content col-lg-12">
							<h1 className="text-white">
								Dude You’re Getting
								a Telescope
							</h1>
							<p className="text-white">
								There is a moment in the life of any aspiring astronomer that it is time to buy that first
							</p>
							<a href="/blog-single" className="primary-btn">View More</a>
						</div>
					</div>
				</div>
			</section>



			<section className="top-category-widget-area pt-90 pb-90 ">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="single-cat-widget">
								<div className="content relative">
									<div className="overlay overlay-bg"></div>
									<a href="#" target="_blank">
										<div className="thumb">
											<img className="content-image img-fluid d-block mx-auto" src="/assets/img/blog/cat-widget1.jpg" alt="" />
										</div>
										<div className="content-details">
											<h4 className="content-title mx-auto text-uppercase">Social life</h4>
											<span></span>
											<p>Enjoy your social life together</p>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-cat-widget">
								<div className="content relative">
									<div className="overlay overlay-bg"></div>
									<a href="#" target="_blank">
										<div className="thumb">
											<img className="content-image img-fluid d-block mx-auto" src="/assets/img/blog/cat-widget2.jpg" alt="" />
										</div>
										<div className="content-details">
											<h4 className="content-title mx-auto text-uppercase">Politics</h4>
											<span></span>
											<p>Be a part of politics</p>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-cat-widget">
								<div className="content relative">
									<div className="overlay overlay-bg"></div>
									<a href="#" target="_blank">
										<div className="thumb">
											<img className="content-image img-fluid d-block mx-auto" src="/assets/img/blog/cat-widget3.jpg" alt="" />
										</div>
										<div className="content-details">
											<h4 className="content-title mx-auto text-uppercase">Food</h4>
											<span></span>
											<p>Let the food be finished</p>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>



			<section className="post-content-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 posts-list">
							<div className="single-post row">
								<div className="col-lg-3  col-md-3 meta-details">
									<ul className="tags">
										<li><a href="#">Food,</a></li>
										<li><a href="#">Technology,</a></li>
										<li><a href="#">Politics,</a></li>
										<li><a href="#">Lifestyle</a></li>
									</ul>
									<div className="user-details row">
										<p className="user-name col-lg-12 col-md-12 col-6"><a href="#">Mark wiens</a> <span className="lnr lnr-user"></span></p>
										<p className="date col-lg-12 col-md-12 col-6"><a href="#">12 Dec, 2017</a> <span className="lnr lnr-calendar-full"></span></p>
										<p className="view col-lg-12 col-md-12 col-6"><a href="#">1.2M Views</a> <span className="lnr lnr-eye"></span></p>
										<p className="comments col-lg-12 col-md-12 col-6"><a href="#">06 Comments</a> <span className="lnr lnr-bubble"></span></p>
									</div>
								</div>
								<div className="col-lg-9 col-md-9 ">
									<div className="feature-img">
										<img className="img-fluid" src="/assets/img/blog/feature-img1.jpg" alt="" />
									</div>
									<a className="posts-title" href="/blog-single"><h3>Astronomy Binoculars A Great Alternative</h3></a>
									<p className="excert">
										MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
									</p>
									<a href="/blog-single" className="primary-btn">View More</a>
								</div>
							</div>
							<div className="single-post row">
								<div className="col-lg-3  col-md-3 meta-details">
									<ul className="tags">
										<li><a href="#">Food,</a></li>
										<li><a href="#">Technology,</a></li>
										<li><a href="#">Politics,</a></li>
										<li><a href="#">Lifestyle</a></li>
									</ul>
									<div className="user-details row">
										<p className="user-name col-lg-12 col-md-12 col-6"><a href="#">Mark wiens</a> <span className="lnr lnr-user"></span></p>
										<p className="date col-lg-12 col-md-12 col-6"><a href="#">12 Dec, 2017</a> <span className="lnr lnr-calendar-full"></span></p>
										<p className="view col-lg-12 col-md-12 col-6"><a href="#">1.2M Views</a> <span className="lnr lnr-eye"></span></p>
										<p className="comments col-lg-12 col-md-12 col-6"><a href="#">06 Comments</a> <span className="lnr lnr-bubble"></span></p>
									</div>
								</div>
								<div className="col-lg-9 col-md-9 ">
									<div className="feature-img">
										<img className="img-fluid" src="/assets/img/blog/feature-img2.jpg" alt="" />
									</div>
									<a className="posts-title" href="/blog-single"><h3>The Basics Of Buying A Telescope</h3></a>
									<p className="excert">
										MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
									</p>
									<a href="/blog-single" className="primary-btn">View More</a>
								</div>
							</div>
							<div className="single-post row">
								<div className="col-lg-3  col-md-3 meta-details">
									<ul className="tags">
										<li><a href="#">Food,</a></li>
										<li><a href="#">Technology,</a></li>
										<li><a href="#">Politics,</a></li>
										<li><a href="#">Lifestyle</a></li>
									</ul>
									<div className="user-details row">
										<p className="user-name col-lg-12 col-md-12 col-6"><a href="#">Mark wiens</a> <span className="lnr lnr-user"></span></p>
										<p className="date col-lg-12 col-md-12 col-6"><a href="#">12 Dec, 2017</a> <span className="lnr lnr-calendar-full"></span></p>
										<p className="view col-lg-12 col-md-12 col-6"><a href="#">1.2M Views</a> <span className="lnr lnr-eye"></span></p>
										<p className="comments col-lg-12 col-md-12 col-6"><a href="#">06 Comments</a> <span className="lnr lnr-bubble"></span></p>
									</div>
								</div>
								<div className="col-lg-9 col-md-9">
									<div className="feature-img">
										<img className="img-fluid" src="/assets/img/blog/feature-img3.jpg" alt="" />
									</div>
									<a className="posts-title" href="/blog-single"><h3>The Glossary Of Telescopes</h3></a>
									<p className="excert">
										MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
									</p>
									<a href="/blog-single" className="primary-btn">View More</a>
								</div>
							</div>
							<div className="single-post row">
								<div className="col-lg-3  col-md-3 meta-details">
									<ul className="tags">
										<li><a href="#">Food,</a></li>
										<li><a href="#">Technology,</a></li>
										<li><a href="#">Politics,</a></li>
										<li><a href="#">Lifestyle</a></li>
									</ul>
									<div className="user-details row">
										<p className="user-name col-lg-12 col-md-12 col-6"><a href="#">Mark wiens</a> <span className="lnr lnr-user"></span></p>
										<p className="date col-lg-12 col-md-12 col-6"><a href="#">12 Dec, 2017</a> <span className="lnr lnr-calendar-full"></span></p>
										<p className="view col-lg-12 col-md-12 col-6"><a href="#">1.2M Views</a> <span className="lnr lnr-eye"></span></p>
										<p className="comments col-lg-12 col-md-12 col-6"><a href="#">06 Comments</a> <span className="lnr lnr-bubble"></span></p>
									</div>
								</div>
								<div className="col-lg-9 col-md-9">
									<div className="feature-img">
										<img className="img-fluid" src="/assets/img/blog/feature-img4.jpg" alt="" />
									</div>
									<a className="posts-title" href="/blog-single"><h3>The Night Sky</h3></a>
									<p className="excert">
										MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
									</p>
									<a href="/blog-single" className="primary-btn">View More</a>
								</div>
							</div>
							<div className="single-post row">
								<div className="col-lg-3 col-md-3 meta-details">
									<ul className="tags">
										<li><a href="#">Food,</a></li>
										<li><a href="#">Technology,</a></li>
										<li><a href="#">Politics,</a></li>
										<li><a href="#">Lifestyle</a></li>
									</ul>
									<div className="user-details row">
										<p className="user-name col-lg-12 col-md-12 col-6"><a href="#">Mark wiens</a> <span className="lnr lnr-user"></span></p>
										<p className="date col-lg-12 col-md-12 col-6"><a href="#">12 Dec, 2017</a> <span className="lnr lnr-calendar-full"></span></p>
										<p className="view col-lg-12 col-md-12 col-6"><a href="#">1.2M Views</a> <span className="lnr lnr-eye"></span></p>
										<p className="comments col-lg-12 col-md-12 col-6"><a href="#">06 Comments</a> <span className="lnr lnr-bubble"></span></p>
									</div>
								</div>
								<div className="col-lg-9 col-md-9">
									<div className="feature-img">
										<img className="img-fluid" src="/assets/img/blog/feature-img5.jpg" alt="" />
									</div>
									<a className="posts-title" href="/blog-single"><h3>Telescopes 101</h3></a>
									<p className="excert">
										MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
									</p>
									<a href="/blog-single" className="primary-btn">View More</a>
								</div>
							</div>
							<nav className="blog-pagination justify-content-center d-flex">
								<ul className="pagination">
									<li className="page-item">
										<a href="#" className="page-link" aria-label="Previous">
											<span aria-hidden="true">
												<span className="lnr lnr-chevron-left"></span>
											</span>
										</a>
									</li>
									<li className="page-item"><a href="#" className="page-link">01</a></li>
									<li className="page-item active"><a href="#" className="page-link">02</a></li>
									<li className="page-item"><a href="#" className="page-link">03</a></li>
									<li className="page-item"><a href="#" className="page-link">04</a></li>
									<li className="page-item"><a href="#" className="page-link">09</a></li>
									<li className="page-item">
										<a href="#" className="page-link" aria-label="Next">
											<span aria-hidden="true">
												<span className="lnr lnr-chevron-right"></span>
											</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<div className="col-lg-4 sidebar-widgets">
							<div className="widget-wrap">
								<div className="single-sidebar-widget search-widget">
									<form className="search-form" action="#">
										<input placeholder="Search Posts" name="search" type="text" />
										<button type="submit"><i className="fa fa-search"></i></button>
									</form>
								</div>
								<div className="single-sidebar-widget user-info-widget">
									<img src="/assets/img/blog/user-info.png" alt="" />
									<a href="#"><h4>Charlie Barber</h4></a>
									<p>
										Senior blog writer
									</p>
									<ul className="social-links">
										<li><a href="#"><i className="fa fa-facebook"></i></a></li>
										<li><a href="#"><i className="fa fa-twitter"></i></a></li>
										<li><a href="#"><i className="fa fa-github"></i></a></li>
										<li><a href="#"><i className="fa fa-behance"></i></a></li>
									</ul>
									<p>
										Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.
									</p>
								</div>
								<div className="single-sidebar-widget popular-post-widget">
									<h4 className="popular-title">Popular Posts</h4>
									<div className="popular-post-list">
										<div className="single-post-list d-flex flex-row align-items-center">
											<div className="thumb">
												<img className="img-fluid" src="/assets/img/blog/pp1.jpg" alt="" />
											</div>
											<div className="details">
												<a href="/blog-single"><h6>Space The Final Frontier</h6></a>
												<p>02 Hours ago</p>
											</div>
										</div>
										<div className="single-post-list d-flex flex-row align-items-center">
											<div className="thumb">
												<img className="img-fluid" src="/assets/img/blog/pp2.jpg" alt="" />
											</div>
											<div className="details">
												<a href="/blog-single"><h6>The Amazing Hubble</h6></a>
												<p>02 Hours ago</p>
											</div>
										</div>
										<div className="single-post-list d-flex flex-row align-items-center">
											<div className="thumb">
												<img className="img-fluid" src="/assets/img/blog/pp3.jpg" alt="" />
											</div>
											<div className="details">
												<a href="/blog-single"><h6>Astronomy Or Astrology</h6></a>
												<p>02 Hours ago</p>
											</div>
										</div>
										<div className="single-post-list d-flex flex-row align-items-center">
											<div className="thumb">
												<img className="img-fluid" src="/assets/img/blog/pp4.jpg" alt="" />
											</div>
											<div className="details">
												<a href="/blog-single"><h6>Asteroids telescope</h6></a>
												<p>02 Hours ago</p>
											</div>
										</div>
									</div>
								</div>
								<div className="single-sidebar-widget ads-widget">
									<a href="#"><img className="img-fluid" src="/assets/img/blog/ads-banner.jpg" alt="" /></a>
								</div>
								<div className="single-sidebar-widget post-category-widget">
									<h4 className="category-title">Post Catgories</h4>
									<ul className="cat-list">
										<li>
											<a href="#" className="d-flex justify-content-between">
												<p>Technology</p>
												<p>37</p>
											</a>
										</li>
										<li>
											<a href="#" className="d-flex justify-content-between">
												<p>Lifestyle</p>
												<p>24</p>
											</a>
										</li>
										<li>
											<a href="#" className="d-flex justify-content-between">
												<p>Fashion</p>
												<p>59</p>
											</a>
										</li>
										<li>
											<a href="#" className="d-flex justify-content-between">
												<p>Art</p>
												<p>29</p>
											</a>
										</li>
										<li>
											<a href="#" className="d-flex justify-content-between">
												<p>Food</p>
												<p>15</p>
											</a>
										</li>
										<li>
											<a href="#" className="d-flex justify-content-between">
												<p>Architecture</p>
												<p>09</p>
											</a>
										</li>
										<li>
											<a href="#" className="d-flex justify-content-between">
												<p>Adventure</p>
												<p>44</p>
											</a>
										</li>
									</ul>
								</div>
								<div className="single-sidebar-widget newsletter-widget">
									<h4 className="newsletter-title">Newsletter</h4>
									<p>
										Here, I focus on a range of items and features that we use in life without
										giving them a second thought.
									</p>
									<div className="form-group d-flex flex-row">
										<div className="col-autos">
											<div className="input-group">
												<div className="input-group-prepend">
													<div className="input-group-text"><i className="fa fa-envelope" aria-hidden="true"></i>
													</div>
												</div>
												<input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter email" />
											</div>
										</div>
										<a href="#" className="bbtns">Subcribe</a>
									</div>
									<p className="text-bottom">
										You can unsubscribe at any time
									</p>
								</div>
								<div className="single-sidebar-widget tag-cloud-widget">
									<h4 className="tagcloud-title">Tag Clouds</h4>
									<ul>
										<li><a href="#">Technology</a></li>
										<li><a href="#">Fashion</a></li>
										<li><a href="#">Architecture</a></li>
										<li><a href="#">Fashion</a></li>
										<li><a href="#">Food</a></li>
										<li><a href="#">Technology</a></li>
										<li><a href="#">Lifestyle</a></li>
										<li><a href="#">Art</a></li>
										<li><a href="#">Adventure</a></li>
										<li><a href="#">Food</a></li>
										<li><a href="#">Lifestyle</a></li>
										<li><a href="#">Adventure</a></li>
									</ul>
								</div>
							</div>
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
