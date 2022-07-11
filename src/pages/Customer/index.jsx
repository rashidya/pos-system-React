import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Component} from "react";
import {
    Button,
    Grid, Paper,
    Table,
    TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow,Tab,
    Tabs,
    TextField,
    Typography
} from "@mui/material";





function createData(
    customerId,
    name,
    address,
    contactNo

) {
    return { customerId, name, address, contactNo};
}

const rows = [
    createData('C-001', 'Rashmi', 'Galle', '077-0888888'),
    createData('C-002', 'Rashmi', 'Galle', '077-0888888'),
    createData('C-003', 'Rashmi', 'Galle', '077-0888888'),
    createData('C-004', 'Rashmi', 'Galle', '077-0888888'),

];





class Customer extends Component{
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
                   Manage Customer
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
                               label="Customer Id"
                               placeholder="C-001"
                               style={{width:'15vw'}}
                           />

                           <TextField

                               id="outlined-required"
                               label="Name"
                               placeholder="Ex: Rashmi Navodya"
                               style={{width:'25vw'}}
                           />

                           <TextField

                               id="outlined-required"
                               label="Address"
                               placeholder="Ex:Baddegama,Galle"
                               style={{width:'30vw'}}
                           />


                           <TextField

                               id="outlined-required"
                               label="Contact No"
                               placeholder="Ex:077-7878787"
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
                                   <TableCell align="center" style={{fontWeight:'bolder',color:'white'}}>Customer Id</TableCell>
                                   <TableCell align="center" style={{fontWeight:'bolder',color:'white'}}>Name</TableCell>
                                   <TableCell align="center" style={{fontWeight:'bolder',color:'white'}}>Address</TableCell>
                                   <TableCell align="center" style={{fontWeight:'bolder',color:'white'}}>Contact No</TableCell>

                               </TableRow>
                           </TableHead>
                           <TableBody>
                               {rows.map((row) => (
                                   <TableRow key={row.customerId} >
                                       <TableCell align="center" component="th" scope="row">
                                           {row.customerId}
                                       </TableCell>
                                       <TableCell align="center">{row.name}</TableCell>
                                       <TableCell align="center">{row.address}</TableCell>
                                       <TableCell align="center">{row.contactNo}</TableCell>
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

export default withStyles(styleSheet)(Customer)