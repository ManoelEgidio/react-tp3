import React from 'react';
import { useForm } from 'react-hook-form';

const Exercise05 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Formulário com regex para telefone</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome:</label>
          <input type="text" {...register('name', { required: true })} />
          {errors.name && <p>Nome é obrigatório</p>}
        </div>
        <div>
          <label>Telefone:</label>
          <input type="text" {...register('phone', { 
            required: true, 
            pattern: /^[0-9]+$/ 
          })} />
          {errors.phone && <p>Telefone inválido. Somente números são permitidos.</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Exercise05;
