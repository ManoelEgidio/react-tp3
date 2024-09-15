import React from 'react';
import { useForm } from 'react-hook-form';

const Exercise07 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Formulário com 3 campos obrigatórios</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome:</label>
          <input type="text" {...register('name', { required: true })} />
          {errors.name && <p>Nome é obrigatório</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" {...register('email', { required: true })} />
          {errors.email && <p>Email é obrigatório</p>}
        </div>
        <div>
          <label>Telefone:</label>
          <input type="text" {...register('phone', { required: true })} />
          {errors.phone && <p>Telefone é obrigatório</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Exercise07;
