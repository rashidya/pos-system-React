import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Tab, Tabs} from "@mui/material";
import homeImg from '../../assets/img/img1.png'


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
                       <Tab label="Home"  href="/" style={{color:'white',top:'7px'}} />

                       <Tab label="Customer"  href="/customer" style={{color:'white',top:'7px'}}/>

                       <Tab label="Item" href="/item" style={{color:'white',top:'7px'}}/>
                   </Tabs>
               </Grid>

               <Grid item lg={6} md={6} sm={6} xm={6}>
                   <Card sx={{ maxHeight: '80vw'}} >
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