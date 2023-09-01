<!DOCTYPE html>
<html lang="en">
<head> 


<?php
	
$url = $_SERVER['PHP_SELF'];
// Remove all illegal characters from a url
$url = filter_var($url, FILTER_SANITIZE_URL);

//get the page name
$page_name = basename($url);
//get the values from meta files a/c to $page
   if(isset($meta[$page_name])){
    $title= $meta[$page_name]['title'];
    $keywords= $meta[$page_name]['keywords'];
    $description= $meta[$page_name]['description'];
   }
   else{
       $title = "TheVissionConultant";
	     $keywords = "TheVissionConultant";
       $description = "TheVissionConultant is a consultant agency to help students to set the right goal of carrer or education";
   }

 $title .= " | TheVissionConultant";

	
?>
	<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="">
<meta name="keywords" content=" <?php  echo $keywords ;?>">
<meta name="description" content="<?php  echo $description ;?>">
<title><?php  echo $title ;  ?> </title>
<link rel="canonical" href="">

<?php
	//page level links 

	//get the values from page_level_links a/c to $page_name
	   if(isset($links[$page_name])){
      $page_level_css = $links[$page_name]['css'];//css files & libraries
      $page_level_js = $links[$page_name]['js'];//js files & libraries
      $assets_dir = $links[$page_name]['assets_dir'];//assets files path
      $page_dir = $links[$page_name]['page_dir'];//php pages path
	   } else{
		   $page_level_css="";
		   $page_level_js="";
		   $assets_dir="";
		   $page_dir="";
	   }

	?>
<script>
    // Render blocking JS:
    if (localStorage.theme) document.documentElement.setAttribute("data-theme", localStorage.theme);
    </script>

<!-- Favicon icon-->
<link rel="shortcut icon" type="image/x-icon" href="<?php echo $assets_dir; ?>assets/images/favicon/favicon.ico">



<!-- Libs CSS -->
<link href="<?php echo $assets_dir; ?>assets/fonts/feather/feather.css" rel="stylesheet">
<link href="<?php echo $assets_dir; ?>assets/libs/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet" />
<!-- <link href="<?php echo $assets_dir; ?>assets/libs/%40mdi/font/css/materialdesignicons.min.css" rel="stylesheet" />
<link href="<?php echo $assets_dir; ?>assets/libs/simplebar/dist/simplebar.min.css" rel="stylesheet"> -->




<!-- Theme CSS -->
<link rel="stylesheet" href="<?php echo $assets_dir; ?>assets/css/theme.min.css">
<link href="<?php echo $assets_dir; ?>assets/libs/tiny-slider/dist/tiny-slider.css" rel="stylesheet">
<style>
  
/* company logo */
.companyLogo{
  line-height:0px;
}
.companyLogo h1{
  font-weight:600;
  font-size:32px;
  font-family: 'Unbounded', cursive;
  color:#754ffe;
  padding:0px;
}

.companyLogo span{
  font-family:arial;
  letter-spacing:8px;
}


  /* header top */
.header_top a{
  text-decoration:none;
}
.header_top_info_box{
  display:flex;
  flex-direction:row-reverse;
  gap:20px;
}
.header_top .header_top_info{
  list-style:none;
  display:flex;
  flex-direction:row-reverse;
  justify-content:center;
  align-items:center;
  gap:20px;
  padding-top:3px;
}

.header_top_info_toogle{
  box-sizing:border-box;
  background:#754ffe;
  color:#fff;
  width:130px;
  padding:5px;
  position: relative;
  text-align:center;
}

.header_top_info_toogle a{
  text-decoration:none;
  color:#fff;
}
.header_top_info_toogle:hover{
  cursor:pointer;
}

.header_top_info_toogle ul{
  box-sizing:border-box;
  text-align:left;
  list-style:none;
  position:absolute;
  z-index: 111;
  background:#754ffe;
  width:130px;
  padding:5px;
  top:33px;
  left:0px;
  display:none;
  padding:2px auto 4px;
}

.header_top_info_toogle ul li{
  list-style:none;
  padding-left:0px;
}
.header_top_info_toogle:hover > ul{
  display:block;
}

@media(max-width: 992px){
  .header_top_info_box{
    font-size:12px;
  }
}

@media(max-width:768px){
  .header_top{
    display:none;
  }
}

</style>
</head>
<body class="bg-white ">
<header>
<div class="header_top">
  <div class="row container">
    <div class="col-12 header_top_info_box">
      <div class="header_top_info_toogle">
          <div class="active"> 
            <span id="top_bar_btn">Karachi Office </span>
          </div>
          <ul>
            <li id="top_bar_info_1"> Karachi Office</li>
            <li> <a  href="javascript:void(0);" id="top_bar_info_2">Islamabad Office</a></li>
          </ul>
      </div>
      <ul class="header_top_info" id="header_top_info1">
        <li > <i class="bi bi-geo-alt text-primary me-2"></i>   <span class="OfficeAddressKH"></span></li>
        <li> <i class="bi bi-clock text-primary me-2"></i> <span> Mon - Sat 10.00 - 6.00</span></li>
        <li> <i class="bi bi-envelope text-primary me-2"></i> <span class="ContactEmailKH"></span></a>
      </ul>
      <ul class="header_top_info" id="header_top_info2" style="display: none;">
        <li > <i class="bi bi-geo-alt text-primary me-2"></i>   <span class="OfficeAddressISL"></span></li>
        <li> <i class="bi bi-clock text-primary me-2"></i> <span> Mon - Sat 10.00 - 6.00</span></li>
        <li> <i class="bi bi-envelope text-primary me-2"></i> <span class="ContactEmailISL"></span></a>
      </ul>
  </div>
</div>
</div>
<style>
        /* CSS styles for the sticky navigation bar */
        .sticky {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
        }

        /* Add more styles for your navigation bar as needed */
    </style>
  <!-- navbar login -->
<nav class="navbar navbar-expand-lg" id="navbar">
  <div class="container px-0 ">
    <a class="navbar-brand text-dark" href="<?php  echo $page_dir; ?>index.php">
      <!-- <img src="<?php echo $assets_dir; ?>assets/images/brand/logo/logo.svg"
        alt=""> -->
       <div class="companyLogo">
          <h1>TheVission</h1>
          <span>Consultant</span>
       </div>
      </a>
        <div class="d-flex align-items-center order-lg-3 ms-lg-3">
          <div class="d-flex align-items-center">
          <a href="<?php echo $page_dir; ?>contact-us.php" class="btn btn-primary d-none d-md-block">Contact Now</a>
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
          <a class="nav-link" href="<?php echo $page_dir; ?>index.php">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarListing" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            Destination
          </a>
          <ul class="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarListing">

            <li>
            <a class="dropdown-item " href="<?php echo $page_dir; ?>top-countries.php">
                All Destinations
              </a>
              <a class="dropdown-item " href="<?php echo $page_dir; ?>country/study-in-uk.php">
                UK
              </a>
            </li>
            <li>
              <a class="dropdown-item " href="<?php echo $page_dir; ?>country/study-in-canada.php">
                Canada
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="<?php echo $page_dir; ?>country/study-in-usa.php">
                USA
              </a>
            </li>

          </ul>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link theme-subtext-color" href="<?php echo $page_dir; ?>immigration.php">Immigration</a>
        </li> -->
        <li class="nav-item">
          <a class="nav-link theme-subtext-color" href="<?php echo $page_dir; ?>events.php">Events</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarListing" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            About
          </a>
          <ul class="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarListing">

          <li>
            <a class="dropdown-item " href="<?php echo $page_dir; ?>company-history.php">
                Our History
              </a>
            </li>
            <!---
            <li>
              <a class="dropdown-item " href="<?php echo $page_dir; ?>our-team.php">
                Our Team
              </a>
            </li>
            <li>
              <a class="dropdown-item " href="<?php echo $page_dir; ?>success-stories.php" disabaled>
                Success Stories
              </a>
            </li> -->
            <li>
              <a class="dropdown-item" href="<?php echo $page_dir; ?>testimonial.php">
                Client Reviews
              </a>
            </li>

          </ul>
        </li>
      </ul>


    </div>
  </div>
</nav>

</header>
<!-- Page Content -->
  <main>