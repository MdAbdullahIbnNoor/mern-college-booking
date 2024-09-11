import { useState } from 'react';
import axios from 'axios';

const useImageUpload = () => {
    const [image, setImage] = useState(null); // Image file
    const [imageUrl, setImageUrl] = useState(''); // Uploaded image URL
    const [isUploading, setIsUploading] = useState(false); // Track upload state
    const [error, setError] = useState(null); // Track any upload errors

    // Handle image input change
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        setImageUrl(''); // Clear the previous image URL
        setError(null); // Clear any previous errors
    };

    // Handle image upload
    const handleImageUpload = async () => {
        if (!image) {
            setError("Please select an image before uploading");
            return;
        }

        const formData = new FormData();
        formData.append('image', image); // Append image to FormData

        setIsUploading(true);
        try {
            const response = await axios.post('/api/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setImageUrl(response.data.imageUrl); // Save Cloudinary image URL
            setError(null); // Clear any previous errors
        } catch (error) {
            setError('Error uploading image');
            console.error(error);
        } finally {
            setIsUploading(false);
        }
    };

    return {
        imageUrl,
        isUploading,
        error,
        handleImageChange,
        handleImageUpload
    };
};

export default useImageUpload;
