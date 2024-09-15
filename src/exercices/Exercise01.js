import React, { useState } from 'react';

const Exercise01 = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <h1>Formulário</h1>
      <form>
        <div>
          <label>Nome:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Telefone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default Exercise01;
