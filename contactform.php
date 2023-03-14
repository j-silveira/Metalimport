<?php

  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $to = "comercial@metalimport.net";

  $headers = "From: ".$fname.$lname "\r\n" .
  "CC: jorge.silveira@metalimport.net";

  $txt = "You have received an e-mail from ".$fname .$lname ."\r\nEmail: " .$email ."\r\n Message: " .$message;

  if($email!=NULL) {
    mail($to, $message, $headers);
  }

  headers('Location: thankyou.html');
?>
