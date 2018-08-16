import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    drawerMenu: payload =>
        dispatch({ type: "SET_DRAWER_MENU_STATE", payload }),
    openDialogModal: payload =>
        dispatch({ type: "SET_DIALOG_MODAL_STATE", payload })
})

class NavBarComp extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    nav() {
        //
    }

    toggleDrawer = (open) => () => {
        this.props.drawerMenu(open)
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleLogout = () => {
        this.props.openDialogModal({ open: true, title: "Log Out", content: "Are you sure want to log out?" })
    };

    render() {
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton style={styles.menuButton} color="inherit" aria-label="Menu"
                            onClick={this.toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" style={styles.flex}>
                            Photos
                        </Typography>
                        <Badge badgeContent={4} color="primary">
                            <MailIcon />
                        </Badge>
                        {auth && (
                            <div>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}>
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleLogout}>Log Out</MenuItem>
                                </Menu>
                            </div>
                        )}

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

//export default NavBar;
export const NavBar = withRouter(connect(mapStateToProps,
    mapDispatchToProps)(NavBarComp))