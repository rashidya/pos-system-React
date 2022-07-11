import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Component} from "react";
import {Grid, Tabs} from "@mui/material";
import {Tab} from "@mui/icons-material";






class Customer extends Component{
   constructor(props) {
       super(props);
   }

   render() {
       const {classes}=this.props;
       return(

           <Grid className={classes.container}>

               <Grid className={classes.navTabs}>
                   <Tabs  centered onChange={onchange}>
                       <Tab label="Home"  style={{color:'white',top:'7px'}}/>

                       <Tab label="Customer"  style={{color:'white',top:'7px'}}/>

                       <Tab label="Item" style={{color:'white',top:'7px'}}/>
                   </Tabs>
               </Grid>




           </Grid>



       )
   }

}

export default withStyles(styleSheet)(Customer)