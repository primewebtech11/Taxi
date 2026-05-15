import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="container main-menu">
					<div className="row align-items-center justify-content-between d-flex">
						<a href="/"><img src="/assets/img/logo.png" alt="" title="" /></a>
						<nav id="nav-menu-container">
							<ul className="nav-menu">
								<li className="menu-active"><a href="/">Home</a></li>
								<li><a href="/about">About</a></li>
								 <li><a href="/service">Services</a></li> 
								<li><a href="/gallery">Gallery</a></li>
								<li className="menu-has-children"><a href="/blog-home">Blog</a>
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
								 {/* <li><a href="/elements">Elements</a></li>  */}
								<li><a href="/contact">Contact</a></li>
							</ul>
						</nav>
					</div>
				</div>
    </>
  )
}

export default Navbar