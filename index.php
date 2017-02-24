<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, shrink-to-fit=no, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="img/icon.png" />
    <title>Qubercomm - Compute Connect Cloud</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <!-- Sidebar CSS -->
    <link href="css/simple-sidebar.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="css/custom.css" rel="stylesheet">
    <!-- Icons -->
    <!-- IconMoon CSS -->
    <link href="fonts/css/iconmoon.css" rel="stylesheet">
    <!-- Linericons CSS -->
	  <link href="fonts/css/linearicon.css" rel="stylesheet">

</head>

<body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <div class="center-block form-log">
            <div class="row">
              <div class="col-md-12">
                <img class="center-block" id="logo" src="img/logo.jpg" alt="uber-logo">
                  <div class="profile">
                    <img class="center-block" src="img/profile.jpg" alt="profile">
                  </div>
                  <div class="form-group">
                    <h4>Username</h4>
                    <input type="text" class="form-control" autofocus="" name="username" placeholder="Type in username"/>
                    <h4>Password</h4>
                    <input type="password" class="form-control" name="password" placeholder="Type in password"/>
                    <div class="login-ad">
                      <form action="dashboard.html"><button type="submit" class="btn btn-primary btn-login form-control">LOGIN TO ACCOUNT</button></form>
                      <ul class="forgot">
                        <li><a href="#">Forgot password?</a></li>
                        <li><a href="#">Forgot username and password?</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div id="login-img" class="col-md-8 img-fluid">
          <div class="right-nav">
            <button type="ready-ts" class="btn btn-primary">Ready to Start?</button>
            <button type="signup" class="btn btn-primary">Signup Today!</button>
          </div>
            <div class="cot">
            <div class="connect">
              <h2>Connectivity of Things</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                 elit, sed do eiusmod tempor incididunt ut labore et
                 dolore magna aliqua.
              </p>
              <div class="p-button">
                <a href="#"><button type="play"class="btn btn-primary" name="play"><i class="icon icon-play3" style="font-size:20px; padding-left:3px;"></i></button>
                </a><a href="#"><span id="discover">Disover Qubercomm</span></a>
              </div>
            </div>
          </div>
          <footer>
            <ul class="ptf right">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>



    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Menu Toggle Script -->
    <script>
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    </script>

</body>

</html>
