import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // Importar o Firestore
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import DataTable from 'react-data-table-component';

const Exercise14 = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      setUsers(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  const handleRowClick = (row) => {
    setSelectedUser(row);
  };

  const handleUpdate = async () => {
    const docRef = doc(db, 'users', selectedUser.id);
    await updateDoc(docRef, selectedUser);
    alert('Usuário atualizado com sucesso');
  };

  const columns = [
    { name: 'Nome', selector: row => row.name, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'Telefone', selector: row => row.phone, sortable: true },
    {
      name: 'Ações',
      cell: row => <button onClick={() => handleRowClick(row)}>Editar</button>
    }
  ];

  return (
    <div>
      <h1>Editar Usuários do Firestore</h1>
      <DataTable
        columns={columns}
        data={users}
        pagination
      />
      
      {selectedUser && (
        <div>
          <h2>Editar Usuário</h2>
          <input
            type="text"
            value={selectedUser.name}
            onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
          />
          <input
            type="email"
            value={selectedUser.email}
            onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
          />
          <input
            type="text"
            value={selectedUser.phone}
            onChange={(e) => setSelectedUser({ ...selectedUser, phone: e.target.value })}
          />
          <button onClick={handleUpdate}>Atualizar</button>
        </div>
      )}
    </div>
  );
};

export default Exercise14;
