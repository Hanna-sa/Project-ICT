import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Dash.css';
import Navbar from '../components/Navbar';

const Dash = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios.get(" ")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="dash-container">
      <Navbar />

      <div className="table-container">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="id-column">INCOME</TableCell>
                <TableCell className="title-column">EXPENSE</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {datas.map((val, index) => (
                <TableRow key={index}>
                  <TableCell className="id-column">{val.id}</TableCell>
                  <TableCell className="title-column">{val.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Dash;
