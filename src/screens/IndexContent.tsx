import React from 'react';
import getConfig from 'next/config';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';

const { publicRuntimeConfig } = getConfig();

const useStyles = makeStyles((theme: Theme) => ({
  customButton: {
    backgroundColor: '#6f2da8',
    color: theme.palette.common.white,
    fontFamily: theme.accentFontFamily,
  },
}));

interface IndexProps { greeting: string }
const IndexContent: React.FC<IndexProps> = (props) => {
  const { greeting } = props;
  const classes = useStyles();

  return (
    <div>
      <h1>
        {greeting}
        {publicRuntimeConfig.greeting_emoji}
        !
      </h1>
      <Button variant="contained" className={classes.customButton}>A Simple Button</Button>
    </div>
  );
};

export default IndexContent;
