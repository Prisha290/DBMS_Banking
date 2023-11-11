import React from 'react';
// import jsonData from './data.json'; // Import your JSON data
import { useLocation } from 'react-router-dom';

const TableComponent = (props) => {

  const location = useLocation();
  const { data } = location.data || {};
  // const {data}=props;
  // const {jsonData}=props.data
  return (
    <div>
      <h1>JSON Data as Table {data}</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;