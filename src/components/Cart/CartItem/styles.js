import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  cardRoot:{
    height: "500px",
    objectFit: "contain",
    padding: "0px 10px"
  },
  media: {
    height: "300px",
    width: "200px",
    objectFit: "contain",
    margin: "auto",
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    height:"100px",
    width:"350px"
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));