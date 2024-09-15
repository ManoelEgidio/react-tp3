import React from 'react';
import { useForm } from 'react-hook-form';

const Exercise04 = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Formulário com useForm</h1>
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

export default Exercise04;
