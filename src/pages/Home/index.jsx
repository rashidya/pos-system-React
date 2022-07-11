import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Avatar, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Tab, Tabs, Typography} from "@mui/material";
import * as PropTypes from "prop-types";
import homeImg from '../../assets/img/img1.png'
import PersonPinIcon from '@mui/icons-material/PersonPin';

const {Component} = require("react");



class Home extends Component{
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

               <Grid item lg={6} md={6} sm={6} xm={6}>
                   <Card sx={{ maxHeight: '92vh'}}>
                       <CardActionArea>
                           <CardMedia
                               component="img"
                               image={homeImg}
                               alt=""
                           />

                       </CardActionArea>
                   </Card>
               </Grid>

           </Grid>



       )
   }

}

export default withStyles(styleSheet)(Home)