import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Navigation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#2B1E61",
          padding: "0 5%"
        }}
      >
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
           <Link  style={{textDecoration: 'none'}} to="/"> 
            <h4  className="text-light font-weight-bolder hover-none">LIGHT HOUSE</h4>
            </Link>
          </Typography>
          <Button color="inherit"><Link className="text-light" to="/">Home</Link></Button>
          <Button color="inherit"><Link className="text-light" to="/add-book">Admin</Link></Button>
          <Button color="inherit"><Link className="text-light" to="/checkout">Checkout</Link></Button>
          <Button color="inherit"><Link className="text-light" to="/order">ORDER</Link></Button>
          <Button color="inherit"><Link className="text-light" to="/login">Login</Link></Button>
          <img src={logo} alt="lg" height="35" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;