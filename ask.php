<?php
  // Check if the form was submitted
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    $name = $_POST['name'];
    $address = $_POST['address'];
    $class = $_POST['class'];
    $section = $_POST['section'];
    $typing_test = $_POST['typing_test'];

    // Compose the email message
    $message = "Name: $name\nAddress: $address\nClass: $class\nSection: $section\nTyping Test: $typing_test";

    // Send the email
    mail("swarajsagarpradhan@gmail.com", "Form Submission", $message);
  }
?>
