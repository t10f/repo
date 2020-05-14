<html>
    <head>
    	<meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" href="https://res.cloudinary.com/openwolf/image/upload/v1576423583/EbookMD/favicon.ico" type="image/x-icon" />
        <title>eBookMD.com - Get Your Ebook</title>

     <link rel="stylesheet" type="text/css" href="olivia.css">
   
<style>
  #linkText{
    background-color: #257DC8;
    color: white;
    font-style: bold;
  }

  .main {
    margin-top: 20%;
  }
</style>
    </head>
    <body>
<div id="app" class="main">
   <header class="page-element"><div>
      <h1>
         <img  src="logo.svg" alt="Logo">
      </h1>

   </div></header>
   <main>
      <div id="slider" class="page-element"><div>
      
<h3>You are purchasing EbookXo ver5.1</h3>
<br>

Your Payment is: <b>$ 9.98 USD</b>
<br>
<br>
Please Enter Your Email Below:
<br>
<form id="my-form"
  action="https://formspree.io/mnqgnpbb"
  method="POST">
  <input placeholder="Your Email ID" class="input-form" type="email" name="email" required="" />
  <br><br>
<button id="my-form-button" style="color: white; background-color: #73A515" class="button accent">Pay Now ($9.98)</button>
</form>
<br><br>
<b>You will be redirected to PayPal to complete the payment.</b>
<br>
<b>Payment will be made to <u>FRENCHREVE LTD.</u></b>

<br>
<br>
 <h2 style="color: darkgreen" id="my-form-status"></h2>

      </div>

       
      </div></div>
   </main>
   <footer style="margin-top: 20%"  class="page-element"><div>
      <nav style="display: flex; justify-content: space-between;">
         <div class="page-bottom-nav">
            <h3>Get to know Us</h3>
            <ul>
               <li><a href="#">About Us</a></li>
               <li><a href="#">Blog</a></li>
               <li><a href="#">Careers</a></li>
               <li><a href="#">Investors Relation</a></li>
            </ul>
         </div>
         <div class="page-bottom-nav">
            <h3>Support</h3>
            <ul>
               <li><a href="#">Help & FAQs</a></li>
               <li><a href="#">Returns</a></li>
               <li><a href="#">Order Tracking</a></li>
               <li><a href="#">Shipping and Delivery</a></li>
            </ul>
         </div>
         <div class="page-bottom-nav">
            <h3>Got In touch</h3>
            <ul>
               <li><a href="#">Facebook</a></li>
               <li><a href="#">Instagram</a></li>
               <li><a href="#">Twitter</a></li>
            </ul>
         </div>
      </nav>
      <p>Copyright 2020 All rights reserved.</p>
   </div></footer>
</div>
   		
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Redirecting to PayPal..";
      window.location.href = "https://www.paypal.me/openwolf/9.98usd";

    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
</script>


<script type="text/javascript">
  document.getElementById("myBtn").addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});
</script>
    </body>
</html>
