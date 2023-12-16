<?php

require_once getcwd() . '/src/php/modelos/modelo_imagenes.php';

/**
 * Class ImagenesController
 *
 * @package controladores
 */
class ImagenesController {
    
    /**
     * @var string $vista The view name
     */
    public $vista;
    
    /**
     * @var ModeloImagenes $modelo The image model
     */
    public $modelo;

    /**
     * ImagenesController constructor.
     */
    function __construct() {
        $this->vista = 'vista_imagenes'; // Set the default view name
        $this->modelo = new ModeloImagenes(); // Create a new instance of the image model
    }

    /**
     * Show the image
     *
     * @return mixed The images
     */
    public function mostrarImagen() {
        $this->vista = 'vista_imagenes'; // Set the view name
        $imagenes = $this->modelo->mostrarImagen(); // Get the images from the model
        return $imagenes; // Return the images
    }

    /**
     * Upload images
     */
    public function subirImagenes() {
        $this->modelo->agregarImagen($_FILES); // Add the uploaded images to the model
    }

    /**
     * Delete an image
     */
    public function borrarImagen() {
        $idImagen = (int)$_GET['idImagen']; // Get the image ID from the request
        $this->modelo->eliminarImagen($idImagen); // Delete the image from the model
    }

    /**
     * Show confirmation for image deletion
     *
     * @return mixed The image
     */
    public function confirmarBorrado() {
        $this->vista = 'confirmar_borrado'; // Set the view name
        $imagen = $this->modelo->mostrarImagenPorId((int)$_GET['idImagen']); // Get the image by ID from the model
        return $imagen; // Return the image
    }

    /**
     * Execute image deletion
     */
    public function ejecucionBorrado() {
        $idImagen = $_GET['idImagen']; // Get the image ID from the request
        $this->modelo->eliminarImagen($idImagen); // Delete the image from the model
        header('Location: index.php?controlador=Imagenes&action=mostrarImagen&borrado=BorradoCorrecto'); // Redirect to the image display page
    }

    /**
     * Show confirmation for image upload
     */
    public function confirmaSubida() {
        $archivos = $_FILES; // Get the uploaded files from the request

        // If no images were uploaded, echo an error message 

        if (empty($archivos['imagenes']['name'][0])) {
                header('Location: index.php?controlador=Imagenes&action=mostrarImagen&errorArchivoVacio=ArchivoVacio'); // Redirect to the image display page
                exit;
        } 
        

        // If no images were uploaded, redirect to extensionIncorrecta

        if (isset($archivos['imagenes'])) { // Check if any images were uploaded

            $allowedExtensions = array("jpg", "jpeg", "png", "gif", "webp"); // Define the allowed file extensions
            $maxSize = 5 * 1024 * 1024; // Define the maximum file size (5MB)
            
            $imagenes = $archivos['imagenes']; // Get the uploaded images

            // Filter files based on extensions and size
            $imagenesFiltradas = array_filter(range(0, count($imagenes['name']) - 1), function ($i) use ($imagenes, $allowedExtensions, $maxSize) {
        
                $extension = pathinfo($imagenes['name'][$i], PATHINFO_EXTENSION); // Get the file extension
                $size = $imagenes['size'][$i]; // Get the file size
        
                // Check if the extension is allowed and the size is within limits
                return in_array(strtolower($extension), $allowedExtensions) && $size <= $maxSize;
            });

            foreach ($imagenesFiltradas as $i) {
                // Check the hash of the file to see if it already exists in the database

                $hash = hash('sha256', file_get_contents($imagenes['tmp_name'][$i])); // Calculate the hash of the file content
                $imagen = $this->modelo->checkHash($hash); // Check if the image already exists in the model

                if ($imagen > 0) {
                    // If the image already exists, skip it
                    continue;
                }
                $base64Image = base64_encode(file_get_contents($imagenes['tmp_name'][$i])); // Convert the file content to base64
                $this->modelo->agregarImagen([
                    'name' => $imagenes['name'][$i],
                    'type' => $imagenes['type'][$i],
                    'error' => $imagenes['error'][$i],
                    'size' => $imagenes['size'][$i],
                    'base64' => $base64Image,
                    'hash' => $hash
                ]); // Add the image to the model
            }
        } 

        $this->vista = 'confirmacion_subida'; // Set the view name

    }
    
}

?>