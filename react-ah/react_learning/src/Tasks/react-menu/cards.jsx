

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './style.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  name: {
    textTransform: 'capitalize',
    color: 'crimson',
    textAlign: 'center',
    marginTop: 10,
  }
});

export default function Cards({ item }) {
  const classes = useStyles();

  return (
    <div className="main">
      <Card className={classes.root}>
        <CardActionArea>
          <Typography gutterBottom variant="h5" component="h3" className={classes.name}>
            {item.title}
          </Typography>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={item.img}

          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h4">
              price : ${item.price}
            </Typography>
            <Typography variant="body2" className={classes.name} component="p">
              {item.desc}
            </Typography>
          </CardContent>
        </CardActionArea>

      </Card>
    </div>
  );
}
