import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import Input, { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

export default class Textfield extends Component {
render() {
    console.log()
    return (
        <React.Fragment>
            <Grid item xs={this.props.gridItemSize[this.props.index]}>
                <TextField
                            id={this.props.index}
                            label={this.props.index.toUpperCase()}
                            placeholder={this.props.index.toUpperCase()}
                            onChange={this.props.handleChange(this.props.index)}
                            margin="normal"
                            required
                            fullWidth
                            value={this.props.value}
                />
            </Grid>
        </React.Fragment>
    )
  }
}


