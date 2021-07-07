<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
        $email=$_POST['email'];
		$phone=$_POST['phone'];
		$msg=$_POST['message'];

		$to='Qstly.corporation@hotmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Form Submission';
		$message=" First Name :".$name."\n"."phone number :".$phone."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo '<script>alert("Thank you we will contact you soon");</script>';
		}
		else{
			echo '<script>alert("Something went wrong");</script>';
		}
	}
?>