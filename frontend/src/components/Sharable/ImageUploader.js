import React from 'react';
import useImageUpload from './hooks/useImageUpload'; // Import the custom hook

const ImageUploader = () => {
    const {
        imageUrl,
        isUploading,
        error,
        handleImageChange,
        handleImageUpload
    } = useImageUpload();

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleImageUpload} disabled={isUploading}>
                {isUploading ? 'Uploading...' : 'Upload Image'}
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Display the uploaded image */}
            {imageUrl && (
                <div>
                    <h4>Uploaded Image:</h4>
                    <img src={imageUrl} alt="Uploaded" style={{ width: '200px' }} />
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
