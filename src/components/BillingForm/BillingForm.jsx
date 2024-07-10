import React, { useState } from 'react';
import "./BillingForm.css"

const BillingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: 'Nigeria',
    address: '',
    state: '',
    phone: '',
    email: '',
    orderNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="billing-form-container">
      <form onSubmit={handleSubmit} className="billing-form">
        <div className="discount-code">
          <input type="text" placeholder="Discount code or gift card" />
          <button type="button">Apply</button>
        </div>
        <h2>Billing Details</h2>
        <div className="form-row">
          <input 
            type="text" 
            name="firstName" 
            placeholder="First name*" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last name*" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-row">
          <select 
            name="country" 
            value={formData.country} 
            onChange={handleChange} 
            required
          >
            <option value="Nigeria">Nigeria</option>
          </select>
        </div>
        <div className="form-row">
          <input 
            type="text" 
            name="address" 
            placeholder="House number and street name*" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-row">
          <input 
            type="text" 
            name="state" 
            placeholder="State/county*" 
            value={formData.state} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-row">
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone*" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-row">
          <input 
            type="email" 
            name="email" 
            placeholder="Email*" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-row">
          <textarea 
            name="orderNotes" 
            placeholder="Order notes (optional)" 
            value={formData.orderNotes} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-row">
          <button type="submit" className="continue-button">Continue to shipping</button>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;

