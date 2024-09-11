import React, { useState } from 'react';

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit the form data to the backend
  };

  return (
    <div className="admission-container">
      <h2>Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
        <input type="text" name="subject" placeholder="Subject" onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
        <input type="text" name="phone" placeholder="Phone" onChange={handleInputChange} />
        <input type="text" name="address" placeholder="Address" onChange={handleInputChange} />
        <input type="date" name="dob" placeholder="Date of Birth" onChange={handleInputChange} />
        <input type="file" name="image" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admission;
