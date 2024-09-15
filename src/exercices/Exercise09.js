import React from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../firebaseConfig'; // Importar o Firestore
import { collection, addDoc } from 'firebase/firestore'; 

const Exercise09 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, 'users'), data);
      alert('Dados inseridos no Firestore com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar dados: ', error);
    }
  };

  return (
    <div>
      <h1>Formulário com Persistência no Firestore</h1>
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

export default Exercise09;
