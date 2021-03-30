import { Button, Card, CardActionArea, CardActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
const BookCard = ({info}) => {
    const classes = useStyles();
    
    const handleDelete= ( id) =>{
        fetch(`http://localhost:4000/deleteEvent/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((result) => {
              if (result) {
                console.log("Event Deleted");
window.location.reload(false);
              }
  
            })
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-8 p-2">
<Card className={classes.root}>
      <CardActionArea  >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="350"
          width="100%"
          image={info.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="h5">
            {info.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="p">
            {info.author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button onClick={() => {handleDelete(info._id)}} size="small" color="primary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
</div>
    );
};

export default BookCard;