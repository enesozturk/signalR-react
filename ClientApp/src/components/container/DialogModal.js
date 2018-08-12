import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const mapStateToProps = state => ({
    dialogModal: state.dialogModal
})

const mapDispatchToProps = dispatch => ({
    openDialogModal: payload =>
        dispatch({ type: "SET_DIALOG_MODAL_STATE", payload })
})


class AlertDialogComp extends React.Component {
    state = {
        open: false,
    };

    handleClose = () => {
        this.props.openDialogModal({ open: false })
    };

    render() {
        const { open, content, title } = this.props.dialogModal

        return (
            <div>
                <Dialog
                    open={open ? open : false}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{title ? title : ""}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {content ? content : ""}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Okay
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export const AlertDialog = withRouter(connect(mapStateToProps,
    mapDispatchToProps)(AlertDialogComp))