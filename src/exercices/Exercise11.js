import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import DataTable from 'react-data-table-component';

const Exercise11 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      setUsers(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  const columns = [
    { name: 'Nome', selector: row => row.name, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'Telefone', selector: row => row.phone, sortable: true }
  ];

  return (
    <div>
      <h1>Lista de Usuários com DataTable</h1>
      <DataTable
        columns={columns}
        data={users}
        pagination
      />
    </div>
  );
};

export default Exercise11;
