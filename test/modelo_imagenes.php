<?php
class ModeloImagenes {
    private $connection;

    public function __construct() {
        $host = 'your_host';
        $username = 'your_username';
        $password = 'your_password';
        $database = 'your_database';

        $this->connection = new mysqli($host, $username, $password, $database);

        if ($this->connection->connect_error) {
            die("Connection failed: " . $this->connection->connect_error);
        }
    }

    public function getAllImages() {
        // Retrieve all images from the database
        $query = "SELECT * FROM images";
        $statement = $this->connection->prepare($query);
        $statement->execute();
        $result = $statement->get_result();

        if ($result->num_rows > 0) {
            $images = array();
            while ($row = $result->fetch_assoc()) {
                $images[] = $row;
            }
            return $images;
        } else {
            return array();
        }
    }

    public function deleteImage($imageId) {
        // Delete a specific image from the database based on its ID
        $query = "DELETE FROM images WHERE id = ?";
        $statement = $this->connection->prepare($query);
        $statement->bind_param("i", $imageId);
        $statement->execute();
    }

    public function deleteMultipleImages($imageIds) {
        // Delete multiple images from the database based on an array of image IDs
        $placeholders = implode(',', array_fill(0, count($imageIds), '?'));
        $query = "DELETE FROM images WHERE id IN ($placeholders)";
        $statement = $this->connection->prepare($query);
        $statement->bind_param(str_repeat("i", count($imageIds)), ...$imageIds);
        $statement->execute();
    }

    public function uploadImage($imageData) {
        // Upload an image to the database
        // Implement your logic here to handle the image upload and insertion into the database
    }
}

?>