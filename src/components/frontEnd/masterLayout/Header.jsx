import React from 'react';

const Header = () => {
    return (
       <>
        <header class="tj-header-area header-absolute">
      <div class="container">
         <div class="row">
            <div class="col-12 d-flex flex-wrap align-items-center">
               <div class="logo-box">
                  <a href="index.html">
                     <img src="assets/img/logo/logo.png" alt="" />
                  </a>
               </div>
               <div class="header-info-list d-none d-md-inline-block">
                  <ul class="ul-reset">
                     <li><a href="mailto:mail@gerolddesign.com">mail@gerolddesign.com</a></li>
                  </ul>
               </div>
               <div class="header-menu" id="headerMenu">
                  <nav>
                     <ul>
                        <li class="has-dropdown">
                           <a href="index.html">Home</a>
                           <ul class="sub-menu">
                              <li class="has-dropdown">
                                 <a href="index.html">Dark Mode</a>
                                 <ul class="sub-menu">
                                    <li>
                                       <a href="index.html">Home One</a>
                                    </li>
                                    <li>
                                       <a href="index-2.html">Home Two</a>
                                    </li>
                                    <li>
                                       <a href="index-3.html">Home Three</a>
                                    </li>
                                 </ul>
                              </li>
                              <li class="has-dropdown">
                                 <a href="index-light.html">Light Mode</a>
                                 <ul class="sub-menu">
                                    <li>
                                       <a href="index-light.html">Home One</a>
                                    </li>
                                    <li>
                                       <a href="index-2-light.html">Home Two</a>
                                    </li>
                                    <li>
                                       <a href="index-3-light.html">Home Three</a>
                                    </li>
                                 </ul>
                              </li>
                           </ul>
                        </li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="portfolio.html">Portfolios</a></li>
                        <li class="has-dropdown current-menu-ancestor">
                           <a href="blog.html">Blog</a>
                           <ul class="sub-menu">
                              <li class="current-menu-item">
                                 <a href="blog.html">Blog</a>
                              </li>
                              <li>
                                 <a href="blog-details.html">Blog Details</a>
                              </li>
                           </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                     </ul>
                  </nav>
               </div>
               <div class="mobile-menu d-lg-none"></div>
               <div class="header-button">
                  <a href="#" class="btn tj-btn-primary">Hire me!</a>
               </div>
               <div class="menu-bar d-lg-none">
                  <button>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   </header>
   <header class="tj-header-area header-2 header-sticky sticky-out">
      <div class="container">
         <div class="row">
            <div class="col-12 d-flex flex-wrap align-items-center">
               <div class="logo-box">
                  <a href="index.html">
                     <img src="assets/img/logo/logo.png" alt="" />
                  </a>
               </div>
               <div class="header-info-list d-none d-md-inline-block">
                  <ul class="ul-reset">
                     <li><a href="mailto:mail@gerolddesign.com">mail@gerolddesign.com</a></li>
                  </ul>
               </div>
               <div class="header-menu">
                  <nav>
                     <ul>
                        <li class="has-dropdown">
                           <a href="index.html">Home</a>
                           <ul class="sub-menu">
                              <li class="has-dropdown">
                                 <a href="index.html">Dark Mode</a>
                                 <ul class="sub-menu">
                                    <li>
                                       <a href="index.html">Home One</a>
                                    </li>
                                    <li>
                                       <a href="index-2.html">Home Two</a>
                                    </li>
                                    <li>
                                       <a href="index-3.html">Home Three</a>
                                    </li>
                                 </ul>
                              </li>
                              <li class="has-dropdown">
                                 <a href="index-light.html">Light Mode</a>
                                 <ul class="sub-menu">
                                    <li>
                                       <a href="index-light.html">Home One</a>
                                    </li>
                                    <li>
                                       <a href="index-2-light.html">Home Two</a>
                                    </li>
                                    <li>
                                       <a href="index-3-light.html">Home Three</a>
                                    </li>
                                 </ul>
                              </li>
                           </ul>
                        </li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="portfolio.html">Portfolios</a></li>
                        <li class="has-dropdown current-menu-ancestor">
                           <a href="blog.html">Blog</a>
                           <ul class="sub-menu">
                              <li class="current-menu-item">
                                 <a href="blog.html">Blog</a>
                              </li>
                              <li>
                                 <a href="blog-details.html">Blog Details</a>
                              </li>
                           </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                     </ul>
                  </nav>
               </div>
               <div class="mobile-menu d-lg-none"></div>
               <div class="header-button">
                  <a href="#" class="btn tj-btn-primary">Hire me!</a>
               </div>
               <div class="menu-bar d-lg-none">
                  <button>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   </header></>
    );
};

export default Header;