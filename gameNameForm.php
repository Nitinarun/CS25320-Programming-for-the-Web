<?php echo $_POST['username']; ?>

<?php
/* Checking if username was submitted*/
if(isset($POST ['submit'])){
	$username = $_POST['username'];

/*If form is not empty, connect to the server*/
if(!empty($username){
	$dbHostname = "db.dcs.aber.ac.uk"; 
	$dbPortnumber = "5432";
	$dbName = "cs25320_21_22_ara16";
	$dbUsername = "ara16";
	$dbPassword = "2312May19";
	
	/*Establishing the connection*/
	$conn = pg_connect("host = $dbHostname, port = $dbPortnumber,  dbname = $dbName, user = $dbUsername, password = $dbPassword");
	
	/*Check connection*/
	if ($conn->connect_error) {
	  die("Connection failed: " . $conn->.pg_error());
	}
	echo "Connected successfully";
	
	} else {
		echo "All fields are required to be filled";
		die();
	}
}
?>

