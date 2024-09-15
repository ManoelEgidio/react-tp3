import React from 'react';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Exercise15 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const auth = getAuth();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        alert('Login bem-sucedido!');
      })
      .catch((error) => {
        alert('Erro ao fazer login: ' + error.message);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input type="email" {...register('email', { required: true })} />
          {errors.email && <p>Email é obrigatório</p>}
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" {...register('password', { required: true })} />
          {errors.password && <p>Senha é obrigatória</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Exercise15;
