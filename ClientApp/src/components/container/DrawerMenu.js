import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'

import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';

const mapStateToProps = state => ({
    drawermenu: state.drawermenu
})

const mapDispatchToProps = dispatch => ({
    drawerMenu: payload =>
        dispatch({ type: "SET_DRAWER_MENU_STATE", payload })
})

class DrawerMenuComp extends Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.props.drawerMenu(open)
        this.setState({
            [side]: open,
        });
    };

    render() {
        return (
            <Drawer open={this.props.drawermenu.open} onClose={this.toggleDrawer('left', false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('left', false)}
                    onKeyDown={this.toggleDrawer('left', false)}
                >
                    <div>
                        <List>
                            <div>
                                <ListItem button>
                                    <ListItemIcon>
                                        <Home />
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </ListItem>
                            </div>
                        </List>
                        <Divider />
                    </div>
                </div>
            </Drawer>
        );
    }
}

export const DrawerMenu = withRouter(connect(mapStateToProps, mapDispatchToProps)(DrawerMenuComp))