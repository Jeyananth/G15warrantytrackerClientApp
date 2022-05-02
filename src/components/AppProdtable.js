import  React,{useState,useEffect} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'Product ID', width: 100 },
  { field: 'name', headerName: 'Product name', width: 200 },
  { field: 'description', headerName: 'Description', width: 150 },
  { field: 'productPurchaseDate', headerName: 'Product Purchase Date', type: 'date',width: 150,},
  { field: 'warrantyPurchaseDate', headerName: 'Warranty Purchase Date', type: 'date',width: 150,},
  { field: 'warrantyExpiryDate', headerName: 'Warranty Expiry Date', type: 'date',width: 150,}


];

const rows = [
  { id: 1, Name: 'Hero Honda 2 wheeler policy', Description: 'my bike policy ', ProductPurchaseDate: '27/10/2010',
  WarrantyPurchaseDate: '27/10/2022',WarrantyExpiryDate: '27/10/2022',},
  { id: 2, Name: 'Honda City car policy', Description: 'my car policy ', ProductPurchaseDate: '11/10/2017',
  WarrantyPurchaseDate: '11/10/2022',WarrantyExpiryDate: '27/10/2022'},

];

export default function AppMainProductList() {
    const[Products,setProducts]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/warranty/getall").
        then(res=>res.json()).then((result) =>{
            setProducts(result)
            console.log("Added ")
            console.log(result)
        })
    },[])
  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={Products}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
  );
}