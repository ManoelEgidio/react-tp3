import React, { useState } from 'react';

const Exercise03 = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Nome e telefone são obrigatórios.');
    } else if (isNaN(formData.phone)) {
      setError('O telefone deve ser numérico.');
    } else {
      setError('');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <h1>Formulário com validação numérica</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Telefone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <button type="submit">Enviar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Exercise03;
