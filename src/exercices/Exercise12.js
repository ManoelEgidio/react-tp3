import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // Importar o Firestore
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import DataTable from 'react-data-table-component';

const Exercise12 = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      setUsers(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  const handleRowClick = async (row) => {
    const docRef = doc(db, 'users', row.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setSelectedUser(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  const columns = [
    { name: 'Nome', selector: row => row.name, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'Telefone', selector: row => row.phone, sortable: true }
  ];

  return (
    <div>
      <h1>Selecionar Usuário para Edição</h1>
      <DataTable
        columns={columns}
        data={users}
        pagination
        onRowClicked={handleRowClick}
      />
      
      {selectedUser && (
        <div>
          <h2>Usuário Selecionado</h2>
          <p>Nome: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Telefone: {selectedUser.phone}</p>
        </div>
      )}
    </div>
  );
};

export default Exercise12;
