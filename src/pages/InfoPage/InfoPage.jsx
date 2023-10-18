import React from 'react';
import useStyles from './InfoPage.styles.ts';
import { Typography } from '@mui/material';
import Button from '@material-ui/core/Button';
import hiChat from '../../common/config/images/hiChat.png';
import { environment } from '../../globals.ts';

const InfoPage = () => {
  const classes = useStyles();

  const linkStyle = {
    textDecoration: 'none', // Remove the underline
  };

  return (
    <div className={`${classes.background}`}>
      <div className={classes.paragraph}>
        <Typography className={classes.typography}>המערכת נמצאת תחת עומס רב של משתמשים</Typography>
        <Typography className={classes.typography}> אנא נסו להתחבר שוב בעוד מספר דקות</Typography>
      </div>
      <a href={environment.link.reconnect} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        <Button className={classes.button} variant="contained" color="primary">
          לחץ כאן כדי לנסות שוב
        </Button>
      </a>
      <img src={hiChat} className={classes.img} />
    </div>
  );
};

export default InfoPage;
