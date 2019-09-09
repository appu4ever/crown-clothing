import React from 'react';
import { Route , Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import {auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/users/users.action'

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
      
    })
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path = "/" exact component = {HomePage}/>
          <Route path = "/shop/hats" exact component = {ShopPage}/>
          <Route path = "/signin" exact render= {() => this.props.currentUser ? (<Redirect to = "/" />) : (<SignInSignUp />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ( { users }) => ({
  currentUser: users.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


