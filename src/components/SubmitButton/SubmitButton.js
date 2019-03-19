import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

  

function SubmitButton(props) {
    const { classes } = props;
    return (
      <div>
        <Button type="Submit" variant="contained" color="primary" className={classes.button}>
          Submit
        </Button>
      </div>
    );
};




SubmitButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(SubmitButton);