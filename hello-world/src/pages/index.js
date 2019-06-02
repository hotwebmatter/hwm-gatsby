import React from "react"

export default () => (
<div id="i4c-draggable-container" style="position: fixed; z-index: 1499; width: 0px; height: 0px;"><div data-reactroot="" class="resolved" style="all: initial;"></div></div>
<nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">

            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#page-top">Hot Web Matter</a>
            </div>


            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden active">
                        <a href="#page-top"></a>
                    </li>
                    <li class="page-scroll">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#about">About</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

        </div>

    </nav>

    <header>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <img class="img-responsive" src="img/profile.png" alt="">
                    <div class="intro-text">
                        <span id="anagram" class="name">Matthew Obert</span>
                        <hr class="star-light">
                        <span class="skills">Web Developer - System Administrator - Server and Desktop Support</span>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <section id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Portfolio</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">
                
                    <div class="col-sm-4 portfolio-item">
                        <a href="#portfolioModal-2" class="portfolio-link" data-toggle="modal">
                            <div class="caption">
                                <div class="caption-content">
                                    <i class="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src="img/portfolio/vistra.png" class="img-responsive" alt="Screenshot of Radius Worldwide / Vistra International Expansion website">
                        </a>
                    </div>
                
                    <div class="col-sm-4 portfolio-item">
                        <a href="#portfolioModal-1" class="portfolio-link" data-toggle="modal">
                            <div class="caption">
                                <div class="caption-content">
                                    <i class="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src="img/portfolio/life-stories.png" class="img-responsive" alt="Screenshot of Life Stories campaign for Lifespan">
                        </a>
                    </div>
                
                    <div class="col-sm-4 portfolio-item">
                        <a href="#portfolioModal-3" class="portfolio-link" data-toggle="modal">
                            <div class="caption">
                                <div class="caption-content">
                                    <i class="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src="img/portfolio/lifespan-intranet.png" class="img-responsive" alt="image-alt">
                        </a>
                    </div>
                
            </div>
        </div>
    </section>

    <section class="success" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>About</h2>
                    <hr class="star-light">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-lg-offset-2">
                    <p>My background spans more than twenty years of diverse experience, united by common threads of community engagement and social responsibility.</p>
                </div>
                <div class="col-lg-4">
                    <p>I have worked in both corporate and non-profit environments, always utilizing the latest technology to support art, design, commerce and philanthropy.</p>
                </div>

            </div>
        </div>
    </section>



    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Contact Me</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <form name="sentMessage" id="contactForm" novalidate="">
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>Name</label>
                                <input type="text" class="form-control" placeholder="Name" id="name" required="" data-validation-required-message="Please enter your name.">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>Email Address</label>
                                <input type="email" class="form-control" placeholder="Email Address" id="email" required="" data-validation-required-message="Please enter your email address.">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>Phone Number</label>
                                <input type="tel" class="form-control" placeholder="Phone Number" id="phone" required="" data-validation-required-message="Please enter your phone number.">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>Message</label>
                                <textarea rows="5" class="form-control" placeholder="Message" id="message" required="" data-validation-required-message="Please enter a message."></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <br>
                        <div id="success"></div>
                        <div class="row">
                            <div class="form-group col-xs-12">
                                <button type="submit" class="btn btn-success btn-lg">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    


    <footer class="text-center">
        <div class="footer-above">
            <div class="container">
                <div class="row">
                    <div class="footer-col col-md-4">
                        <h3>Certifications &amp; Awards</h3>
                        <p>
                            
                                Acquia Certified Site Builder - Drupal 8 <br>
		                    
                                I won a hackathon in 2016 for my <a href="http://pvdpotholedb.hotwebmatter.com" target="_blank">Providence Pothole Database</a> project. <br>
		                    
                        </p>
                    </div>
                    <div class="footer-col col-md-4">
                        <h3>Around the Web</h3>
                        <ul class="list-inline">
                            
                            <li>
                                <a href="http://www.linkedin.com/in/mattobert" class="btn-social btn-outline"><i class="fa fa-fw fa-linkedin"></i></a>
                            </li>
		                    
                            <li>
                                <a href="http://github.com/hotwebmatter" class="btn-social btn-outline"><i class="fa fa-fw fa-github"></i></a>
                            </li>
		                    
                            <li>
                                <a href="https://twitter.com/hotwebmatter" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a>
                            </li>
		                    
                            <li>
                                <a href="https://www.facebook.com/matt.obert.pvd" class="btn-social btn-outline"><i class="fa fa-fw fa-facebook"></i></a>
                            </li>
		                    
                            <li>
                                <a href="http://cs50.stackexchange.com/users/12172/matt-obert" class="btn-social btn-outline"><i class="fa fa-fw fa-stack-overflow"></i></a>
                            </li>
		                    
                        </ul>
                    </div>
                    <div class="footer-col col-md-4">
                        <h3>Projects</h3>
                        <p>I am the Vice President of <a href="http://procomrad.org" target="_blank">Providence Community Radio</a>, broadcasting since 2018 on 101.1 FM, Wednesdays 6-10pm and Thursdays noon-6pm. </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        Copyright © Matthew Obert 2019
                    </div>
                </div>
            </div>
        </div>
    </footer>


    <div class="scroll-top page-scroll visible-xs visible-sm">
        <a class="btn btn-primary" href="#page-top">
            <i class="fa fa-chevron-up"></i>
        </a>
    </div>

 
    <div class="portfolio-modal modal fade" id="portfolioModal-2" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Vistra Rebranding</h2>
                            <hr class="star-primary">
                            <img src="img/portfolio/vistra.png" class="img-responsive img-centered" alt="Screenshot of Radius Worldwide / Vistra International Expansion website">
                            
                                <p>I rebranded the <a href="https://www.radiusworldwide.com" target="_blank">Radius Worldwide</a> website to follow the design guidelines of its new parent company, Vistra International Expansion, and developed a custom Drupal module with JavaScript behaviors for GDPR-compliant Marketo forms.</p>
                            
                            <ul class="list-inline item-details">
                                
                                    <li>Client:
                                        <strong><!-- a href="http://startbootstrap.com" -->Vistra / Oomph, Inc.<!-- /a -->
                                        </strong>
                                    </li>
                                
                                
                                    <li>Date:
                                        <strong><!-- a href="http://startbootstrap.com" -->February 2019<!-- /a -->
                                        </strong>
                                    </li>
                                
                                
                                    <li>Service:
                                        <strong><!-- a href="http://startbootstrap.com" -->Web Development<!-- /a -->
                                        </strong>
                                    </li>
                                
                            </ul>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="portfolio-modal modal fade" id="portfolioModal-1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Life Stories</h2>
                            <hr class="star-primary">
                            <img src="img/portfolio/life-stories.png" class="img-responsive img-centered" alt="Screenshot of Life Stories campaign for Lifespan">
                            
                                <p>I designed and launched the Drupal implementation of the <a href="https://www.lifespan.org/stories" target="_blank">Life Stories</a> campaign for <a href="https://www.oomphinc.com" target="_blank">Oomph</a>, using text, images and video from the <a href="https://www.nail.cc/" target="_blank">Nail</a> agency.</p>
                            
                            <ul class="list-inline item-details">
                                
                                    <li>Client:
                                        <strong><!-- a href="http://startbootstrap.com" -->Lifespan / Oomph, Inc.<!-- /a -->
                                        </strong>
                                    </li>
                                
                                
                                    <li>Date:
                                        <strong><!-- a href="http://startbootstrap.com" -->January 2019<!-- /a -->
                                        </strong>
                                    </li>
                                
                                
                                    <li>Service:
                                        <strong><!-- a href="http://startbootstrap.com" -->Web Development<!-- /a -->
                                        </strong>
                                    </li>
                                
                            </ul>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="portfolio-modal modal fade" id="portfolioModal-3" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Lifespan Intranet</h2>
                            <hr class="star-primary">
                            <img src="img/portfolio/lifespan-intranet.png" class="img-responsive img-centered" alt="image-alt">
                            
                                <p>I implemented several features for the launch of the new Lifespan Intranet, including custom Drupal modules, a user-editable content type for the Homepage Hero slideshow, and a Policy Search using Apache Solr search facets.</p>
                            
                            <ul class="list-inline item-details">
                                
                                    <li>Client:
                                        <strong><!-- a href="http://startbootstrap.com" -->Lifespan / Oomph, Inc.<!-- /a -->
                                        </strong>
                                    </li>
                                
                                
                                    <li>Date:
                                        <strong><!-- a href="http://startbootstrap.com" -->September 2018<!-- /a -->
                                        </strong>
                                    </li>
                                
                                
                                    <li>Service:
                                        <strong><!-- a href="http://startbootstrap.com" -->Web Development<!-- /a -->
                                        </strong>
                                    </li>
                                
                            </ul>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <script src="/js/jquery-1.11.0.js"></script>

    <script src="/js/bootstrap.min.js"></script>

    <script src="/js/jquery.easing.min.js"></script>
    <script src="/js/classie.js"></script>
    <script src="/js/cbpAnimatedHeader.js"></script>

    <script src="/js/jqBootstrapValidation.js"></script>
    
    <script src="/js/contact_me.js"></script>

    <script src="/js/freelancer.js"></script>

<div id="i4c-dialogs-container"></div>
)