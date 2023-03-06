$(document).ready(() => {

    // signup login page hide show with Jquery
    $(".loginform").hide();
    $(".loginicon").hide();

    $("#signuplink").click(() => {
        $(".signupform").slideDown(500);
        $(".loginform").hide();
        $("#loginlink").removeClass("active");
        $("#signuplink").addClass("active");
        $(".signupicon").slideDown(300);
        $(".loginicon").hide();
    });

    $("#loginlink").click(() => {
        $(".loginform").slideDown(500);
        $(".signupform").hide();
        $("#signuplink").removeClass("active");
        $("#loginlink").addClass("active");
        $(".loginicon").slideDown(300);
        $(".signupicon").hide();
    });

    //Signup form Validation with Jquery
    var nameerr = true;
    var emailerr = true;
    var passerr = true;
    var confirmerr = true;
    var loginemailerr = true;
    var loginpasserr = true;
    $("#name").keyup(function () {
        namecheck();
    });

    $("#email").keyup(function () {
        emailcheck();
    })

    $("#pass").keyup(function () {
        passcheck();
    })

    $("#confirmpass").keyup(function () {
        confirmpasscheck();
    })

    function namecheck() {
        var name = $("#name").val();
        var nametext = $("#nametext");

        if (name == '') {
            nametext.text("*Please Fill Name");
            nameerr = false;
            return false;
        }
        else {
            nametext.text("");
        }

        if (!/^[A-Za-z ]+$/.test(name)) {
            nametext.text("*Name contains only alphabets");
            nameerr = false;
            return false;
        }
        else {
            nametext.text("");
        }

        if (name.length < 3 || name.length > 10) {
            nametext.text("*Name must be between 3 and 10");
            nameerr = false;
            return false;
        }
        else {
            nametext.text("");
        }
    }

    function emailcheck() {
        var email = $("#email").val();
        var emailtext = $("#emailtext");
        var emailregex = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

        if (email == '') {
            emailtext.text("*Please Fill Email");
            emailerr = false;
            return false;
        }
        else {
            emailtext.text("");
        }

        if (!emailregex.test(email)) {
            emailtext.text("*Enter Valid Email");
            emailerr = false;
            return false;
        }
        else {
            emailtext.text("");
        }
    }

    function passcheck() {
        let pass = $("#pass").val();
        let passtext = $("#passtext");
        let passregex = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;

        if (pass == '') {
            passtext.text("*Please Fill Password");
            passerr = false;
            return false;
        }
        else {
            passtext.text("");
        }

        if (pass.length < 6) {
            passtext.text("*Password must be greater than 6 length");
            passerr = false;
            return false;
        }
        else {
            passtext.text("");
        }

        if (!passregex.test(pass)) {
            passtext.text("*Pass must contain at least 1 special character");
            passerr = false;
            return false;
        }
        else {
            passtext.text("");
        }
    }

    function confirmpasscheck() {
        let pass = $("#pass").val();
        let confirmpass = $("#confirmpass").val();
        let confirmtext = $("#confirmtext");

        if (confirmpass == '') {
            confirmtext.text("*Please Confirm Password Again");
            confirmerr = false;
            return false;
        }
        else {
            confirmtext.text("");
        }

        if (confirmpass != pass) {
            confirmtext.text("*Confirm pass doesn' match the pass");
            confirmerr = false;
            return false;
        }
        else {
            confirmtext.text("");
        }
    }

    $("#signupbtn").click(function () {
        nameerr = true;
        emailerr = true;
        passerr = true;
        confirmerr = true;

        namecheck();
        emailcheck();
        passcheck();
        confirmpasscheck();

        if ((nameerr == true) && (emailerr == true) && (passerr == true) && (confirmerr == true)) {
            swal('Good job!', 'You Have Been Registered Succesfully', 'success');
            document.getElementById("resetsignup").reset();
        }
        else {
            return false;
        }
    })

    //Login form validation with Jquery

    $("#loginemail").keyup(function () {
        loginemailcheck();
    });

    $("#loginpass").keyup(function () {
        loginpasscheck();
    });

    function loginemailcheck() {
        var loginemail = $("#loginemail").val();
        var loginemailtxt = $("#loginemailtxt");
        var loginemailregex = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

        if (loginemail == '') {
            loginemailtxt.text("*Email Required to login");
            loginemailerr = false;
            return false;
        }
        else {
            loginemailtxt.text("");
        }

        if (!loginemailregex.test(loginemail)) {
            loginemailtxt.text("*Enter Valid Email");
            loginemailerr = false;
            return false;
        }
        else {
            loginemailtxt.text("");
        }
    }

    function loginpasscheck() {
        let loginpass = $("#loginpass").val();
        let loginpasstext = $("#loginpasstxt");
        let loginpassregex = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;

        if (loginpass == '') {
            loginpasstext.text("*Enter Password to login");
            loginpasserr = false;
            return false;
        }
        else {
            loginpasstext.text("");
        }

        if ((loginpass.length < 6) || (!loginpassregex.test(loginpass))) {
            loginpasstext.text("*Your Password doen't match");
            loginpasserr = false;
            return false;
        }
        else {
            loginpasstext.text("");
        }
    }

    $("#loginbtn").click(function () {
        loginemailerr = true;
        loginpasserr = true;

        loginemailcheck();
        loginpasscheck();

        if ((loginemailerr == true) && (loginpasserr == true)) {
            swal('Welcome!', 'Your Login Succesfully', 'success');
            document.getElementById("resetlogin").reset();
        }
        else {
            return false;
        }
    })

    //Back 2 Top Arraw Display on scroll
    $('.back2top').hide();
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y >= 200) {
            $('.back2top').show("slow");
        } else {
            $('.back2top').hide("slow");
        }
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
                            <div class="footer_logo mb-3">
                                <img src="./images/logo-white.png" width="200px"></img>
                            </div>
                            <p class="pt-2">141 , Apple Square , Anand mahal road , adajan , surat-394211</p> 
                            <p class="pt-3">+91 63457 12392</p>
                            <p class="pt-3">info@dhruvoelectronics.com</p>
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
                                    <a href="#"><img src="./images/googleplay.jpeg" alt=""></a>
                                </li>
                                <li class="py-3 ms-lg-0 ms-md-4 ms-0">
                                    <a href="#"><img src="./images/appstore.jpeg" alt=""></a>
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
    let FutureDate = new Date("6 May 2023");
    let myDate = FutureDate - CurrentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hrs = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let mins = Math.floor(myDate / 1000 / 60) % 60;
    let secs = Math.floor(myDate / 1000) % 60;

    dayItem.innerHTML = days;
    hrsItem.innerHTML = hrs;
    minsItem.innerHTML = mins;
    secsItem.innerHTML = secs;
}

CountDown();
setInterval(CountDown, 1000);


