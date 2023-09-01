</main>
<style>
  .footer .nav-link{
    color:#fff !important;
  }
</style>
      <!-- footer -->
      <footer class="pt-lg-10 pt-5 footer bg-primary text-white">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
                  <!-- about company -->
              <div class="mb-4">
<!--                <img src="assets/images/brand/logo/logo.svg" alt="" class="logo-inverse "> -->
                  <div class="companyLogo">
                      <h1 style="color:#fff;">TheVission</h1>
                      <span>Consultant</span>
                  </div>
                <div class="mt-4">
                  <p>Geek is feature-rich components and beautifully Bootstrap UIKit for developers, built with bootstrap responsive framework.</p>
                     <!-- social media -->
                  <div class="fs-4 mt-4">
                    <a href="<?php echo $page_dir; ?>#" class="mdi mdi-facebook fs-4 text-muted me-2"></a>
                    <a href="<?php echo $page_dir; ?>#" class="mdi mdi-twitter text-muted me-2"></a>
                    <a href="<?php echo $page_dir; ?>#" class="mdi mdi-instagram text-muted "></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="offset-lg-1 col-lg-2 col-md-3 col-6">
              <div class="mb-4">
                    <!-- list -->
                <h3 class="fw-bold mb-3">Company</h3>
                <ul class="list-unstyled nav nav-footer flex-column nav-x-0">
                  <li><a href="<?php echo $page_dir; ?>company-history.php" class="nav-link">About</a></li>
                  <li><a href="<?php echo $page_dir; ?>feedback.php" class="nav-link">Feedback</a></li>
                  <!-- <li><a href="<?php echo $page_dir; ?>blogs.php" class="nav-link">Blogs</a></li> -->
                  <li><a href="<?php echo $page_dir; ?>top-countries.php" class="nav-link">Top Institute</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-6">
              <div class="mb-4">
                    <!-- list -->
                <h3 class="fw-bold mb-3">Support</h3>
                <ul class="list-unstyled nav nav-footer flex-column nav-x-0">
                  <li><a href="<?php echo $page_dir; ?>contact-us.php" class="nav-link">Help and Support</a></li>
                  <li><a href="<?php echo $page_dir; ?>how-we-work.php" class="nav-link">How we work</a></li>
                  <li><a href="<?php echo $page_dir; ?>testimonial.php" class="nav-link">Our Client Feedback</a></li>
                  <li><a href="<?php echo $page_dir; ?>faq.php" class="nav-link">FAQ’s</a></li>
                </ul>

              </div>
            </div>
            <div class="col-lg-3 col-md-12">
                  <!-- contact info -->
              <div class="mb-4">
                <h3 class="fw-bold mb-3">Get in touch</h3>
                <p>
                 <b>Karachi: </b><span class="OfficeAddressKH"></span> <br>
                 <b>Islamabad: </b><span class="OfficeAddressISL"></span>
                </p>
                <p class="mb-1 text-white ">Email: <a href="javascript:void(0);">
                <span class="ContactEmailKH text-white"></span>
                </a></p>
                <p>Phone: <span class="fw-semibold">
                <b>Karachi: </b><span class="ContactNoKH"></span> <br>
                 <b>Islamabad: </b><span class="ContactNoISL"></span>
                </span></p>



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
                    <a class="nav-link ps-0" href="<?php echo $page_dir; ?>privacy-policy.php">Privacy Policy</a>
                    <a class="nav-link" href="<?php echo $page_dir; ?>terms-conditions.php">Terms of Use</a>
                </nav>
            </div>
        </div>
        </div>
      </footer>


  <!-- Scripts -->
  <script src="<?php echo $assets_dir; ?>assets/libs/typed.js/dist/typed.umd.js"></script>
    <!-- Libs JS -->
  <script src="<?php echo $assets_dir; ?>assets/libs/jquery/dist/jquery.min.js"></script>
  <script src="<?php echo $assets_dir; ?>assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="<?php echo $assets_dir; ?>assets/libs/simplebar/dist/simplebar.min.js"></script>
  <!-- Theme JS -->
  <script src="<?php echo $assets_dir; ?>assets/js/theme.min.js"></script>

  <script src="<?php echo $assets_dir; ?>assets/libs/tiny-slider/dist/min/tiny-slider.js"></script>
  <script src="<?php echo $assets_dir; ?>assets/libs/%40popperjs/core/dist/umd/popper.min.js"></script>
  <script src="<?php echo $assets_dir; ?>assets/libs/tippy.js/dist/tippy-bundle.umd.min.js"></script>

  <script src="<?php echo $assets_dir; ?>assets/js/vendors/tnsSlider.js"></script>
  <script src="<?php echo $assets_dir; ?>assets/js/vendors/tooltip.js"></script>


<script>const jsonData = <?php include $assets_dir.'includes/fetch-site-contact.php'; ?>;</script>
<script src="<?php echo $assets_dir; ?>assets/js/fetch-contact.js"></script>
</body>
</html>
