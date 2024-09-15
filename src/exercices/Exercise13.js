import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // Importar o Firestore
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import DataTable from 'react-data-table-component';

const Exercise13 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      setUsers(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'users', id));
    setUsers(users.filter(user => user.id !== id)); // Remove o item da lista
  };

  const columns = [
    { name: 'Nome', selector: row => row.name, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'Telefone', selector: row => row.phone, sortable: true },
    {
      name: 'Ações',
      cell: row => <button onClick={() => handleDelete(row.id)}>Excluir</button>
    }
  ];

  return (
    <div>
      <h1>Excluir Usuários do Firestore</h1>
      <DataTable
        columns={columns}
        data={users}
        pagination
      />
    </div>
  );
};

export default Exercise13;
