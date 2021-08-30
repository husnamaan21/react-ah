import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DoneAllSharpIcon from '@material-ui/icons/DoneAllSharp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import  PropTypes  from 'prop-types';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 325,
    marginTop:50,
    color:'secondary'
  },
  media: {
    height: 120,
    width: 280,
    paddingTop: '57.25%', // 16:9
  },
  text: {
   
    textTransform:'uppercase'
  },
  price: {
    marginTop: 15
  },

   desingner: {
    marginTop: 10
  },
  heart : {
      color: 'red'
  },
 cart : {
    color: 'black'
},
img: {
  color: 'white',
  width:10,
  },
  avatar4: {
    backgroundColor: 'grey',
  },
  tick:{
    color : 'white',
  }
 
}));

function Cards(props) {
    const classes = useStyles();
 

  return (
    <Card className={classes.root}  elevation={3}>
      <CardHeader
        avatar={
          <Avatar  className={classes.avatar4} >
                <IconButton aria-label="tick" className={classes.tick}>
          <DoneAllSharpIcon />
           </IconButton>
          
         
          </Avatar>
        }
      
        title= {
        <Typography className={classes.text}  variant="h6" color="textSecondary"  >
        {props.title}
        {props.ele}
       </Typography>
       }
        subheader="NIKE "
        
     
       
       
      />
      <CardMedia
        className={classes.media}
        image={props.img}
    
      />
      <CardContent>
        <Typography  className={classes.price} variant="body1" color="textSecondary"  component="h3">
         Price ${props.price}
        </Typography>
        <Typography  className={classes.desingner} variant="body1" color="textSecondary" component="p">
         {props.desingner}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton className={classes.heart}  aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton className={classes.cart}  aria-label="shopping-cart">
          <ShoppingCartIcon />
        </IconButton>
       
      </CardActions>
     
    </Card>
  );



}
Cards.propTypes={
  price : PropTypes.string,
  title:PropTypes.string,
  ele:PropTypes.element,
  author:PropTypes.string.isRequired
};


Cards.defaultProps={
  author:'Husna Maan'
}

            
      

export default Cards;
