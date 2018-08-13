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
    render() {
        return (
            <div>
                <NavBar />
                <DrawerMenu />
                <AlertDialog />
                <div>
                    <Grid container spacing={24} style={{ padding: 24 }}>
                        <Grid item xs={12} sm={6} m={4} lg={4} xl={3}>
                            {this.props.children}
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export const AppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainerComp))