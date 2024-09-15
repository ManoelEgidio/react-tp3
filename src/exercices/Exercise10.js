import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore'; 

const Exercise10 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      setUsers(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Usuários do Firestore</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Nome: {user.name} - Email: {user.email} - Telefone: {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise10;
