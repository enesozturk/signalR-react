import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import { NavBar } from '../container/NavBar'
import { AlertDialog } from '../container/DialogModal'
import { DrawerMenu } from './DrawerMenu'

const mapStateToProps = state => ({
    drawermenu: state.drawermenu
})

const mapDispatchToProps = dispatch => ({

})

class AppContainerComp extends Component {
    navigate(location) {
        this.props.history.push(location)
    }

    componentDidMount() {
        const user = localStorage.getItem('user')
        if (!user)
            this.navigate('/login')
    }

    render() {
        return (
            <div>
                <NavBar />
                <DrawerMenu />
                <AlertDialog />
                <div>
                    <Grid container spacing={24} style={{ padding: 24 }}>
                        <Grid item xs={12} sm={12} m={12} lg={12} xl={12}>
                            {this.props.children}
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export const AppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainerComp))