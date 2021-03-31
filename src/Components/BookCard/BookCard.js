import { Button, Card, CardActionArea, CardActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) =>({
    root: {
      maxWidth: 500,
      maxHeight: 800
    },
    margin: {
      margin: theme.spacing(1),
      fontWeight: 800,
      color: 'green'
    }
  }));
const BookCard = ({info}) => {
    const classes = useStyles();
const handleBuy = (id) => {
console.log(id)
}
    return (
        <div className="col-lg-3 col-md-4 col-sm-5 p-2">
<Card className={classes.root}>
      <CardActionArea  >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={info.image}
          title="Book Name"
          height="400px"
          className=""
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="p">
            {info.name}
          </Typography>
          <Typography gutterBottom variant="p" component="p">
            {info.author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
      <Button size="small" className={classes.margin}>
          $ {info.price}
        </Button>
        <Button size="medium" onClick={() =>{handleBuy(info._id)}} color="primary" variant="outlined" >
       <Link style={{textDecoration: 'none'}} to={`/checkout/${info._id}`}> Buy Now </Link>
        </Button> 
      </CardActions>
    </Card>
</div>
    );
};

export default BookCard;