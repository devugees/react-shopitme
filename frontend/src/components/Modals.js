import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { FormControl } from 'material-ui/Form';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
    password: '',
    showPassword: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography gutterBottom>Click to get the full Modal experience!</Typography>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
        <div style={getModalStyle()} className={classes.paper}>
          <Typography variant="title" id="modal-title">
            Text in a modal
          </Typography>
          <Typography variant="subheading" id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <div className={classes.root}>
          <FormControl className={classNames(classes.margin, classes.textField)}>
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
              </InputAdornment>
            }
          />
          </FormControl>
      </div>
      <Button variant="raised" color="primary" className={classes.button}>
            Submit
          </Button>
          <Button variant="raised" color="secondary" className={classes.button}>
            Cancel
          </Button>
          </div>
        </Modal>
      </div>

    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const Modals = withStyles(styles)(SimpleModal);

export default Modals;