

function infoOne() {
  document.querySelector(".header_top .container .headerInfo .info1").classList.add("active");
  document.querySelector(".header_top .container .headerInfo .info2").classList.remove("active");
  document.querySelector(".header_top .container .headerDropdown .btn").innerHTML = "Karachi Office";
}
function infoTwo() {
  document.querySelector(".header_top .container .headerInfo .info1").classList.remove("active");
  document.querySelector(".header_top .container .headerInfo .info2").classList.add("active");
  document.querySelector(".header_top .container .headerDropdown .btn").innerHTML = "Islamabad Office";
}

if(document.querySelector(".header_top")){
  document.querySelector(".header_top").innerHTML = `
  <div class="container">
  <div class="headerInfo">

    <div class="info info1 active">
      <div class="item">
        <i class="bi bi-geo-alt iconColor"></i> <span class="OfficeAddressKH"></span>
      </div>
      <div class="item">
        <i class="bi bi-clock iconColor"></i> <span>Mon-Sat (10am-6pm)</span>
      </div>
      <div class="item">
        <i class="bi bi-envelope iconColor"></i> <span class="ContactEmailKH"></span>
      </div>
    </div>

    <div class="info info2">
      <div class="item">
        <i class="bi bi-geo-alt iconColor"></i> <span class="OfficeAddressISL"></span>
      </div>
      <div class="item">
        <i class="bi bi-clock iconColor"></i> <span>Mon-Sat (10am-6pm)</span>
      </div>
      <div class="item">
        <i class="bi bi-envelope iconColor"></i> <span class="ContactEmailISL"></span>
      </div>
    </div>

  </div>
  <div class="headerDropdown dropdown">
    <button class="btn btn-outline-primary dropdown-toggle" id="navbarListing" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Karachi Office
    </button>
    <ul class="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarListing">
      <li>
        <a class="dropdown-item " href="javascript:void(0);" onclick="infoOne()">
          Karachi Office
        </a>
        <a class="dropdown-item " href="javascript:void(0);" onclick="infoTwo()">
          Islamabad Office
        </a>
      </li>
    </ul>
  </div>
  
</div>
  `
}

if(document.querySelector("nav")){
  document.querySelector("nav").classList.add("navbar")
  document.querySelector("nav").classList.add("navbar-expand-lg")
  document.querySelector("nav").classList.add("shadow")
  document.querySelector("nav").innerHTML = `
  <div class="container px-0 ">
      <a class="navbar-brand text-dark" href="index.html">
        <!-- <img src="assets/images/brand/logo/logo.svg"
          alt=""> -->
        <div class="companyLogo hvr-buzz-out">
            <h1>TheVission</h1>
            <span>Consultant</span>
        </div>
        </a>
          <div class="d-flex align-items-center order-lg-3 ms-lg-3">
            <div class="d-flex align-items-center">
            <a href="appointment.html" class="btn btn-primary d-none d-md-block">Free Appointment</a>
              </div>
              <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-default"
              aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
              <span class="icon-bar top-bar mt-0"></span>
              <span class="icon-bar middle-bar"></span>
              <span class="icon-bar bottom-bar"></span>
            </button>
          </div>
      <!-- Button -->

      <!-- Collapse -->
      <div class="collapse navbar-collapse" id="navbar-default">
        <ul class="navbar-nav ms-auto">

          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarListing" data-bs-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Study
            </a>
            <ul class="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarListing">

              <li>
              <a class="dropdown-item " href="top-countries.html">
                  All Destinations
                </a>
                </li>
                <li>
                <a class="dropdown-item " href="country/study-in-uk.php">
                  Study In UK
                </a>
              </li>
              <li>
                <a class="dropdown-item " href="country/study-in-canada.php">
                  Study In Canada
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="country/study-in-usa.php">
                  Study In USA
                </a>
              </li>

            </ul>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarListing" data-bs-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                Immigration
              </a>
              <ul class="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarListing">
                <li>
                  <a class="dropdown-item " href="immigration/immigration-to-canada.php">
                      Immigration To Canada
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="immigration/immigration-to-australia.php">
                  Immigration To Australia
                  </a>
                </li>
    
              </ul>
            </li>
          <li class="nav-item">
            <a class="nav-link theme-subtext-color" href="visiting-tourism.php">Vissiting & Tourism</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarListing" data-bs-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              About
            </a>
            <ul class="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarListing">

              <li>
                  <a class="dropdown-item " href="contact-us.php">
                      Contact Us
                    </a>
              </li>
              <li>
              <a class="dropdown-item " href="company-history.html">
                  Our History
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="testimonial.html">
                  Client Reviews
                </a>
              </li>

            </ul>
          </li>
        </ul>


      </div>
    </div>
  `
}

if(document.querySelector("footer")){
  document.querySelector("footer").classList.add("pt-lg-10")
  document.querySelector("footer").classList.add("pt-5")
  document.querySelector("footer").classList.add("footer")
  document.querySelector("footer").classList.add("bg-primary")
  document.querySelector("footer").classList.add("text-white")
  document.querySelector("footer").innerHTML = `
  <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <!-- about company -->
          <div class="mb-4">
            <a class="companyLogo hvr-buzz-out" href="index.html">
              <h1>TheVission</h1>
              <span>Consultant</span>
            </a>
            <div class="mt-4">
              <p class="text-center">Geek is feature-rich components and beautifully Bootstrap UIKit for developers,
                built with bootstrap
                responsive framework.</p>
              <!-- social media -->
              <div class="socialLinks">
                <a href="#" class="bi bi-facebook"></a>
                <a href="#" class="bi bi-twitter"></a>
                <a href="#" class="bi bi-instagram"></a>
              </div>
            </div>
          </div>
        </div>
        <div class="offset-lg-1 col-lg-2 col-md-3 col-6">
          <div class="mb-4">
            <!-- list -->
            <h3 class="fw-bold mb-3 text-white">Company</h3>
            <ul class="list-unstyled nav nav-footer flex-column nav-x-0">
              <li><a href="company-history.html" class="nav-link">About</a></li>
              <li><a href="feedback.html" class="nav-link">Feedback</a></li>
              <!-- <li><a href="blogs.php" class="nav-link">Blogs</a></li> -->
              <li><a href="top-countries.html" class="nav-link">Top Institute</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-6">
          <div class="mb-4">
            <!-- list -->
            <h3 class="fw-bold mb-3 text-white">Support</h3>
            <ul class="list-unstyled nav nav-footer flex-column nav-x-0">
              <li><a href="contact-us.php" class="nav-link">Help and Support</a></li>
              <li><a href="how-we-work.html" class="nav-link">How we work</a></li>
              <li><a href="testimonial.html" class="nav-link">Our Client Feedback</a></li>
              <li><a href="faq.html" class="nav-link">FAQ’s</a></li>
            </ul>

          </div>
        </div>
        <div class="col-lg-3 col-md-12">
          <!-- contact info -->
          <div class="mb-4 getTouch">
            <h3 class="fw-bold mb-3 text-white">Get in touch</h3>
            <div class="d-flex align-items-center justify-content-start mb-3">
              <i class="bi bi-geo-alt iconColor"></i>
              <div class="fw-semibold">
                <span>Karachi: </span><span class="OfficeAddressKH iconColor"></span> <br>
                <span>Islamabad: </span><span class="OfficeAddressISL iconColor"></span>
              </div>
            </div>
            <p class="mb-3 text-white "><i class="bi bi-envelope iconColor"></i> <a
                href="mailto:info@vissionconsult.com" class="ContactEmailKH iconColor fw-semibold">
              </a></p>
            <div class="d-flex align-items-center justify-content-start">
              <i class="bi bi-phone iconColor"></i>
              <div class="fw-semibold">
                <span>Karachi: </span><a href="tel:+92123467" class="ContactNoKH iconColor"></a> <br>
                <span>Islamabad: </span><a href="tel:+921234677" class="ContactNoISL iconColor"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center g-0 border-top py-2 mt-6">
        <!-- Desc -->
        <div class="col-lg-4 col-md-5 col-12">
          <span>© <span id="copyright2">
              <script>document.getElementById('copyright2').appendChild(document.createTextNode(new Date().getFullYear()))</script>
            </span> TheVissionConsulltant. All Rights Reserved</span>
        </div>

        <!-- Links -->
        <div class="col-12 col-md-7 col-lg-8 d-md-flex justify-content-end">
          <nav class="nav nav-footer">
            <a class="nav-link ps-0" href="privacy-policy.html">Privacy Policy</a>
            <a class="nav-link" href="term-condition.html">Terms of Use</a>
          </nav>
        </div>
      </div>
    </div>
  `
}

if(document.querySelector(".extras")){
  document.querySelector(".extras").innerHTML = `
  <div class="floating-container">
      <div class="floating-button">+</div>
      <div class="element-container">
        <a href="#" class="float-element">
          <i class="material-icons">phone</i>
        </a>
        <a href="mailto:info@vissionconsultant.com" class="float-element">
          <i class="material-icons">email</i>
        </a>
        <a href="#" class="float-element">
          <i class="bi bi-whatsapp"></i>
        </a>
      </div>
    </div>

    <!-- vertical left button -->
    <a class="vertical-button shadow" href="appointment.html">
      <i class="bi bi-telephone-fill iconColor"></i>
      <span>Need assistance? Click here.</span>
    </a>
  `
}

window.onload = (event) => {
event.preventDefault();


const ContactClassKH =document.querySelectorAll(".ContactNoKH");
    const EmailClassKH =document.querySelectorAll(".ContactEmailKH");
    const AddressClassKH =document.querySelectorAll(".OfficeAddressKH");

    const ContactClassISL =document.querySelectorAll(".ContactNoISL");
    const EmailClassISL =document.querySelectorAll(".ContactEmailISL");
    const AddressClassISL =document.querySelectorAll(".OfficeAddressISL");

      // Embed the JSON data directly into a JavaScript variable
      // const jsonData = <?php include 'includes/fetch-site-contact.php'; ?>;

      const jsonData = [{"id":"1","name":"Karachi","phone":"+92 12345 67","email":"info@vissionconsult.com","address":"Gulshan Iqbal Block-14, Karachi, Pakistan","status":"1"},{"id":"2","name":"Islamabad","phone":"+92 1234 677","email":"info@vissionconsult.com","address":"Gulshan Iqbal Block-14, Islamabad, Pakistan","status":"1"}];
            // Loop through the contacts and print each one
      jsonData.forEach((contact) => {
          if (contact.name === 'Karachi') {
              // Print KarachiContact in the "karachiContactData" container
              if(ContactClassKH.length > 0){
                ContactClassKH.forEach((phone)=>{
                  phone.append(contact.phone);
                })
              }
              if(EmailClassKH.length > 0){
                  EmailClassKH.forEach((email)=>{
                  email.innerHTML =contact.email;
                })
              }
              if(AddressClassKH.length > 0){
                AddressClassKH.forEach((address)=>{
                  address.append(contact.address);
                })
              }
              // karachiContactDataElement.innerHTML = `<h2>Karachi Contact</h2>${getContactHTML(contact)}`;
          } else {
             // Print IslambabadContact in the "IslambabadContactData" container
             if(ContactClassISL.length > 0){
                ContactClassISL.forEach((phone)=>{
                  phone.append(contact.phone);
                })
              }
              if(EmailClassISL.length > 0){
                  EmailClassISL.forEach((email)=>{
                  email.innerHTML =contact.email;
                })
              }
              if(AddressClassISL.length > 0){
                AddressClassISL.forEach((address)=>{
                  address.append(contact.address);
                })
              }
          }
      });


let slides = [
  {
      slideHTML:`
          <div class="swiper-slide" style="background-image: url('assets/images/banner/london1.jpg');">
            <div class="backtrop-container" >
              <div class="container text-light text-center">
                  <h1 class="title">Study in <span class="headingTyped"></span></h1>
                  <a href="register.php" class="btn btn-primary text-capitalize mt-2 btn-sm">Book Appointment</a>
              </div>
            </div>
          </div>
      `
  },
  // linear-gradient(to right, rgba(0, 0, 0, 0.6) 50%, transparent),
  {
      slideHTML:`
          <div class="swiper-slide" style="background-image: url('assets/images/banner/london4.jpg');">
            <div class="backtrop-container" >
              <div class="container text-light">
                  <h1 class="title">IELTS Preparation</h1>
                  <h3>Register as soon Possible</h3>
                  <a href="register.php" class="btn btn-primary text-capitalize mt-2 btn-sm">Book Appointment</a>
              </div>
              </div>
          </div>
      `
  },
]

if (document.querySelector(".bannerSlider")) {
  document.querySelector(".bannerSlider").classList.add("swiper")
  document.querySelector(".bannerSlider").innerHTML = `
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"></path>
      </svg>
      <div class="swiper-wrapper">
      </div>
      <div class="buttonsGroup">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
      </div>
      <div class="swiper-pagination"></div>
  `
  for (let i of slides) {
      document.querySelector(".bannerSlider .swiper-wrapper").innerHTML += `${i.slideHTML}`
  }
}

window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").classList.add("active")
  } else {
    document.querySelector(".navbar").classList.remove("active")
  }
}

var swiper = new Swiper(".bannerSlider", {
  spaceBetween: 0,
  //   loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiperTwo = new Swiper(".countrySlider", {
  spaceBetween: 40,
  slidesPerView:4,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints:{
    320:{
      slidesPerView:2,
      spaceBetween:20
    },
    480:{
      slidesPerView:3,
      spaceBetween:30
    },
    640:{
      slidesPerView:4,
      spaceBetween:30
    }
  }
});

};