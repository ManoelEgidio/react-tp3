import React from 'react';
import { useForm } from 'react-hook-form';

const Exercise06 = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <h1>Formulário com saída JSON</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome:</label>
          <input type="text" {...register('name')} />
        </div>
        <div>
          <label>Telefone:</label>
          <input type="text" {...register('phone')} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Exercise06;
