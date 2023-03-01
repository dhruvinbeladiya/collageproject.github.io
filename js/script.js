$(document).ready(() => {

    // signup login page hide show with Jquery
    $(".loginform").hide();

    $("#signuplink").click(() => {
        $(".signupform").show();
        $(".loginform").hide();
        $("#loginlink").removeClass("active");
        $("#signuplink").addClass("active");
    });
    
    $("#loginlink").click(() => {
        $(".loginform").show();
        $(".signupform").hide();
        $("#signuplink").removeClass("active");
        $("#loginlink").addClass("active");
    });

    // Footer Append In Every page with Jquery
    $('footer').append(
    `
        <div class="suscribe py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-9 col-sm-12 text-center">
                        <div class="suscribe_content">
                            <h3 class="fw-bold mb-3">Join Thousand of Happy Customers!</h3>
                            <p>Subscribe our newsletter & get latest news and updation!</p>
                            <form class="sub_mail">
                                <input type="email" class="form-control text-muted" placeholder="Your Email Adress"
                                    required>
                                <input type="submit" class="text-light" value="Get Started">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main_footer py-5 text-white">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-3 mb-md-0 mb-5">
                        <div class="footer_info">
                            <h5 class="text-white mb-4">Information</h5> 
                            <h6 class="mb-1">Address -</h6>
                            <p class="mb-3">141 , Apple Square , Anand mahal road , adajan , surat-394211</p> 
                            <h6 class="mb-1">Contact -</h6>
                            <p class="mb-3">+91 63457 12392</p>
                            <h6 class="mb-1">Email -</h6>
                            <p>info@dhruvoelectronics.com</p>
                        </div>
                    </div>
                    <div class="col-md-2 mb-md-0 mb-5">
                        <div class="footer_info">
                            <h5 class="text-white mb-3">Useful links</h5> 
                            <ul>
                                <li class="py-2"><a href="index.html">Home</a></li>
                                <li class="py-2"><a href="product.html">Product</a></li>
                                <li class="py-2"><a href="about.html">About</a></li>
                                <li class="py-2"><a href="services.html">Services</a></li>
                                <li class="py-2"><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2 mb-md-0 mb-5">
                        <div class="footer_info">
                            <h5 class="text-white mb-3">New Categories</h5> 
                            <ul>
                                <li class="py-2"><a href="#">Bluetooth</a></li>
                                <li class="py-2"><a href="#">Laptop</a></li>
                                <li class="py-2"><a href="#">Mobile</a></li>
                                <li class="py-2"><a href="#">Watch</a></li>
                                <li class="py-2"><a href="#">Speakers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2 mb-md-0 mb-5">
                        <div class="footer_info">
                            <h5 class="text-white mb-3">Help & Support</h5> 
                            <ul>
                                <li class="py-2"><a href="#">Documentation</a></li>
                                <li class="py-2"><a href="#">Live Chat</a></li>
                                <li class="py-2"><a href="#">Mail Us</a></li>
                                <li class="py-2"><a href="#">Privacy</a></li>
                                <li class="py-2"><a href="#">Faqs</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-12">
                        <div class="footer_info">
                            <h5 class="text-white mb-3">Help & Support</h5> 
                            <ul class="d-flex flex-lg-column flex-md-row flex-column">
                                <li class="py-3"> 
                                    <a href="#"><img src="./images/asset 49.jpeg" alt=""></a>
                                </li>
                                <li class="py-3 ms-lg-0 ms-md-4 ms-0">
                                    <a href="#"><img src="./images/asset 48.jpeg" alt=""></a>
                                </li>  
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_bottom py-4">
            <div class="container">
                <div class="row align-items-center text-md-start text-center">
                    <div class="col-md-6">
                        <p>© 2023 All Rights Reserved | Designd And Devloped By dhruvoelectronics.</p>
                    </div>
                    <div class="col-md-6 mt-md-0 mt-4">
                        <ul class="d-flex ftr_icon justify-content-md-end justify-content-center">
                            <li class="me-3"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li class="me-3"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            <li class="me-3"><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li class="me-3"><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      `
    );
});

// Header Navigation Js

const open_icon = document.querySelector(".mobile_icon");
const close_icon = document.querySelector(".close_icon");
const mobile_nav = document.querySelector(".mobile_nav");

const addActive = () => {
    mobile_nav.classList.add("active");
    open_icon.classList.add("mobile_bars");
}

const removeActive = () => {
    mobile_nav.classList.remove("active");
    open_icon.classList.remove("mobile_bars");
}

open_icon.addEventListener("click", addActive);
close_icon.addEventListener("click", removeActive);

// Countdown Timer Js

let dayItem = document.getElementById('days');
let hrsItem = document.getElementById('hrs');
let minsItem = document.getElementById('mins');
let secsItem = document.getElementById('secs');

const CountDown = () => {
    let CurrentDate = new Date();
    let FutureDate = new Date("6 April 2023");
    let myDate = FutureDate - CurrentDate;
    
    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hrs = Math.floor(myDate / 1000 / 60 / 60) %24;
    let mins = Math.floor(myDate / 1000 / 60 ) % 60;
    let secs = Math.floor(myDate / 1000 ) % 60;

    dayItem.innerHTML = days;
    hrsItem.innerHTML = hrs;
    minsItem.innerHTML = mins;
    secsItem.innerHTML = secs;
}

CountDown();
setInterval(CountDown,1000);



