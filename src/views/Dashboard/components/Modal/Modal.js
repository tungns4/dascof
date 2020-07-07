import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography, Dialog, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    margin: theme.spacing(3)
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  },
  buttons: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
}));

const Modal = props => {
  const {  open, onClose, children, title, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Dialog
      maxWidth= "lg"
      onClose={onClose}
      open={open}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <div className={classes.header}>
          <Typography
            align="center"
            gutterBottom
            variant="h3"
          >
            Link join class
          </Typography>
        </div>
        <div className={classes.buttons}>
          <Button
            color="primary"
            component="a"
            href={children}
            target="_blank"
            variant="contained"
          >
            {title}
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
