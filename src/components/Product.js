import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dateFormat, { masks } from "dateformat";


import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import { padding } from '@mui/system';

export default function Product() {
    const paperStyle={padding:'10 px 20 px', width:600, margin:"20 px auto"}
    const[Name,setName]=React.useState('')
    const[Description,setDescription]=React.useState('')
   // eslint-disable-next-line no-self-compare
   const [ProductPurchaseDate, setProductPurchaseDate] = React.useState(new Date());
   const [WarrantyPurchaseDate, setWarrantyPurchaseDate] = React.useState(new Date());
   const [WarrantyExpiryDate, setWarrantyExpiryDate] = React.useState(new Date());
   const handleClick=(e)=>{
        e.preventDefault()
        console.log( dateFormat(ProductPurchaseDate, "paddedShortDate", true));


        const Product={"name":Name,"description":Description,
            "productPurchaseDate":  dateFormat(ProductPurchaseDate, "dd/mm/yyyy", true) ,
            "warrantyPurchaseDate": dateFormat(WarrantyPurchaseDate, "dd/mm/yyyy", true) ,
            "warrantyExpiryDate":dateFormat(WarrantyExpiryDate, "dd/mm/yyyy", true) }
        console.log(Product)
        fetch("http://localhost:8080/warranty/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(Product)
        }).then(()=>{
            console.log("Added ")
            setName("")
            setDescription("")

        })
    }
  return (
    <Container>
        <Paper variant="elevation10" > 
        <h1 style={{color:"blue"}}> Add Product Warranty</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" value={Name}
       onChange={(e)=>setName(e.target.value)} />
      <TextField id="outlined-basic" label="Description" variant="outlined" value={Description}  
      onChange={(e)=>setDescription(e.target.value)} />
        <br/>
       <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Product Purchase Date" format="MM/dd/yyyy"
          value={ProductPurchaseDate} onChange={(newValue) => {   setProductPurchaseDate(newValue);  }}
          renderInput={(params) => <TextField {...params} />}
          />
         </LocalizationProvider>
         <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Warranty Purchase Date" format="MM/dd/yyyy"
            value={WarrantyPurchaseDate}  onChange={(newValue) => {setWarrantyPurchaseDate(newValue);  }}
          renderInput={(params) => <TextField {...params} />}
          />
         </LocalizationProvider>
         <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Warranty Expiry Date" format="MM/dd/yyyy"
          value={WarrantyExpiryDate}    onChange={(newValue) => { setWarrantyExpiryDate(newValue); }}
          
          renderInput={(params) => <TextField {...params} />}
          />
         </LocalizationProvider>
         <br/>
   </Box>
    <Button variant="contained" onClick={handleClick}>Submit</Button>
    </Paper>
    </Container>
    

  );
}