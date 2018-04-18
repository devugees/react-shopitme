import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';


const Submit = (props) => {
    const { classes } = this.props;
    return (
        <Button variant="raised" color="primary" onClick={this.props.handleSubmit} className={classes.buttonright}>
            {this.props.buttontext}
        </Button>
    );
};

export default Submit;