const express = require('express');
const multer = require('multer');
const { storage } = require('../config/cloudinaryConfig'); // Cloudinary config
const router = express.Router();

const upload = multer({ storage }); // Configure multer to use Cloudinary's storage

// POST route to upload image
router.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded!' });
    }

    // Get Cloudinary secure URL
    const imageUrl = req.file.path;
    return res.status(200).json({ imageUrl });
});

module.exports = router;
