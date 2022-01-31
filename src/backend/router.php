<?php
$servername = "localhost";
$db = "hoursdb";
$username = "root";
$password = "mysql";

// Create connection 
$connection = new mysqli($servername, $username, $password, $db);

// Check connection
if($connection->connect_error){
    die("Connection failed: " . $connection->connect_error);
}

echo "Connected successfully\n";

$sql = "SELECT Date, Name, Time FROM lab_hours_tracker";
$result = $connection->query($sql);

echo $db . "\n";

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "".$row["Date"]." ".$row["Name"]." ".$row["Time"]."\n";
  }
} else {
  echo "0 results";
}

// Close connection and confirm connection
$connection->close();
echo "\nClosed connection";
?>