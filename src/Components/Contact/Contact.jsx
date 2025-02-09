import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    email: '',
    phone: '',
    address: '',
    workingDays: '',
  });

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axios.get('/api/contact');
        setContactInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContactInfo();
  }, []);

};
const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/new-students', newStudent);
   
    } catch (error) {
      console.error(error);
    }
  };
  
  <form onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder="الاسم" onChange={handleChange} />
    <input type="email" name="email" placeholder="البريد الإلكتروني" onChange={handleChange} />
    <input type="tel" name="phone" placeholder="رقم الهاتف" onChange={handleChange} />
    <textarea name="message" placeholder="الرسالة" onChange={handleChange}></textarea>
    <button type="submit">إرسال</button>
  </form>