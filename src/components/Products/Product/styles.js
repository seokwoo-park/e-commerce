import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    height: '600px'
  },
  media: {
    height: '150px',
    paddingTop: '56.25%', // 16:9
    objectFit: 'contain',
    margin: 'auto',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: "30px"
  },
  cardPrice: {
    position: 'relative',
    left: '-10px',
    bottom: '5px'
  },
  cardDescription: {
    height: '170px',
  }
}));