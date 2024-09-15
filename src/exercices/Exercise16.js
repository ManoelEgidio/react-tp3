import React, { useState } from 'react';

const Exercise16 = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);

  const handleSearch = async () => {
    if (cep.length !== 8 || isNaN(cep)) {
      alert('CEP inválido');
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        alert('CEP não encontrado');
      } else {
        setAddress(data);
      }
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
    }
  };

  return (
    <div>
      <h1>Buscar Endereço por CEP</h1>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      {address && (
        <div>
          <h2>Endereço:</h2>
          <p>Rua: {address.logradouro}</p>
          <p>Bairro: {address.bairro}</p>
          <p>Cidade: {address.localidade}</p>
          <p>Estado: {address.uf}</p>
        </div>
      )}
    </div>
  );
};

export default Exercise16;
