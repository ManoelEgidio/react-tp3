import React from 'react';
import { useForm } from 'react-hook-form';

const Exercise08 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Formulário com Validação de Email</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome:</label>
          <input type="text" {...register('name', { required: true })} />
          {errors.name && <p>Nome é obrigatório</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Email inválido'
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
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

export default Exercise08;
