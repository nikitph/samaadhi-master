import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

const middleware = createReactNavigationReduxMiddleware("root", state => state.nav)
const addListener = createReduxBoundAddListener("root")

function ReduxNavigation (props) {
  const { dispatch, nav } = props
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav,
    addListener // <-- add this as well
  })

  return <AppNavigation navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
