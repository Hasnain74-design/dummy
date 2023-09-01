<?php

include $assets_dir."a/db/includes/conn.inc.php";



$sql = "SELECT * FROM website_contact_info WHERE status=1;";
$result = $conn->query($sql);
// Check if there is data and convert it to an associative array
$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
// Close the database connection
$conn->close();

// Send the data as JSON
// header("Content-type: application/json");
echo json_encode($data);