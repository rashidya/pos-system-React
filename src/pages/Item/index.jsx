import {Component} from "react";
import {
    Button,
    Grid, Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,Tab,
    Tabs,
    TextField,
    Typography
} from "@mui/material";
import {withStyles} from "@mui/styles";

import {styleSheet} from "../Customer/style";


function createData(
    itemId,
    name,
    unitPrice,
    qty

) {
    return { itemId, name, unitPrice, qty};
}

const rows = [
    createData('I-001', 'Rice', 200.00, 10),
    createData('I-002', 'Rice', 200.00, 10),
    createData('I-003', 'Rice', 200.00, 10),
    createData('I-004', 'Rice', 200.00, 10)


];





class Item extends Component{
   constructor(props) {
       super(props);
   }

   render() {
       const {classes}=this.props;
       return(

           <Grid className={classes.container}>

               <Grid className={classes.nav}>
                   <Tabs  centered onChange={onchange}>
                       <Tab label="Home"  href="/" style={{color:'white',top:'7px'}} />

                       <Tab label="Customer"  href="/customer" style={{color:'white',top:'7px'}}/>

                       <Tab label="Item" href="/item" style={{color:'white',top:'7px'}}/>
                   </Tabs>
               </Grid>

               <Typography variant="h5" style={{left:0,right:0,top:0,bottom:0,margin:"auto",width:"max-content",padding:'3vh'}}>
                   Manage Item
               </Typography>

               <Grid style={{padding:'7vh',width:"max-content",left:0,right:0,top:0,bottom:0,margin:"auto"}}>
                   <Grid
                       component="form"
                       sx={{
                           '& .MuiTextField-root': { m: 1, width: '25ch' },
                       }}
                       noValidate
                       autoComplete="off"
                   >
                       <div >
                           <TextField
                               required
                               id="outlined-required"
                               label="Item Id"
                               placeholder="I-001"
                               style={{width:'15vw'}}
                           />

                           <TextField

                               id="outlined-required"
                               label="Name"
                               placeholder="Ex: Rice"
                               style={{width:'25vw'}}
                           />

                           <TextField

                               id="filled-number"
                               type="number"
                               label="Unit Price"
                               placeholder="Ex:100.00"
                               style={{width:'15vw'}}
                           />


                           <TextField

                               id="filled-number"
                               type="number"
                               label="Qty"
                               placeholder="Ex:100"
                               style={{width:'15vw'}}
                           />

                       </div>

                   </Grid>

               </Grid>

               <Grid style={{left:0,right:0,top:0,bottom:0,margin:"auto",width:"max-content",paddingBottom:"5vh"}}>
                   <Button variant="contained" color="success" style={{margin:"1vh"}}>
                       Save
                   </Button>
                   <Button variant="contained" color="warning" style={{margin:"1vh"}}>
                       Update
                   </Button>
                   <Button variant="contained" color="error" style={{margin:"1vh"}}>
                       Delete
                   </Button>
                   <Button variant="contained" color="info" style={{margin:"1vh"}}>
                       Cancel
                   </Button>
               </Grid>

               <Grid>
                   <TableContainer component={Paper} style={{width:'80vw',left:0,right:0,top:0,bottom:0,margin:"auto"}}>
                       <Table sx={{ minWidth: 600 }} aria-label="customized table">
                           <TableHead style={{backgroundColor:'black'}}>
                               <TableRow>
                                   <TableCell align="center" style={{fontWeight:'bolder',color:'white'}}>Item Id</TableCell>
                                   <TableCell align="center" style={{fontWeight:'bolder',color:'white'}}>Name</TableCell>
                                   <TableCell align="center" style={{fontWeight:'bolder',color:'white'}}>Unit Price</TableCell>
                                   <TableCell align="center" style={{fontWeight:'bolder',color:'white'}}>Qty</TableCell>

                               </TableRow>
                           </TableHead>
                           <TableBody>
                               {rows.map((row) => (
                                   <TableRow key={row.itemId} >
                                       <TableCell align="center" component="th" scope="row">
                                           {row.itemId}
                                       </TableCell>
                                       <TableCell align="center">{row.name}</TableCell>
                                       <TableCell align="center">{row.unitPrice}</TableCell>
                                       <TableCell align="center">{row.qty}</TableCell>
                                   </TableRow>
                               ))}
                           </TableBody>
                       </Table>
                   </TableContainer>
               </Grid>

           </Grid>



       );
   }

}

export default withStyles(styleSheet)(Item)