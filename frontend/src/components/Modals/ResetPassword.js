import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Input, InputLabel, FormControl, Modal, Button } from '@material-ui/core';
import { crudAPI } from '../../helpers/helpers'

const styles = theme => ({
  modalStyle: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 40,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    textAlign: 'center'
  },
  cancel: {
    position: 'absolute',
    top: '8px',
    left: '16px',
    fontSize: '18px'
  },
  margin: {
    margin: theme.spacing.unit,
  },
  loginButtons: {
    width: '75%',
    margin: '10px'
  },
  error: {
    color: 'crimson',
    margin: '1rem auto',
    textAlign:'center'
  }
});

class ResetPassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      email: '',
      result: ''
    };
  }
  UNSAFE_componentWillReceiveProps(e){
    this.setState({ open: e.openForgotpass});
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  emailHandler = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  resetHandler = () => {
    
    crudAPI('POST','http://localhost:4000/forgot',{ email: this.state.email })
    .then( response => {
      this.setState({
        result: response
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handlelogin = (props, e) => {
    this.setState({ open: false });
    this.props.openLog(true)
  }

  render(props) {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classNames(classes.paper, classes.modalStyle)}>
            <div className={classes.container}>
              <FormControl className={classNames(classes.margin, classes.loginButtons)}>
                <InputLabel
                  FormLabelClasses={{
                    focused: classes.inputLabelFocused,
                  }}
                  htmlFor="custom-color-input2"
                >
                  E-mail
                </InputLabel>
                <Input
                  classes={{
                    underline: classes.inputUnderline,
                  }}
                  id="custom-color-input2"
                  onChange={this.emailHandler.bind(this)}
                />
              </FormControl>
            </div>
            <p className={classNames(classes.error)}>{this.state.result}</p>
            <Button variant="raised" onClick={this.resetHandler.bind(this)} color="default" className={classes.loginButtons}>
                Reset password 
            </Button>
            <Button variant="flat" onClick={this.props.openLog}>
                go back to Login!
            </Button>
            <Button variant="flat" onClick={this.props.regClick}>
                Don't have an Account? Register now
            </Button>
            <Button variant="fab" color="secondary" className={classes.cancel} onClick={this.handleClose}>
            X
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResetPassword);