import React from 'react';
import { Route , Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import {auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data())
          this.setState({
            currentUser : {
              id: snapShot.uid,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({currentUser : userAuth})
      }
      
    })
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route path = "/" exact component = {HomePage}/>
          <Route path = "/shop/hats" exact component = {ShopPage}/>
          <Route path = "/signin" exact component = {SignInSignUp}/>
        </Switch>
      </div>
    );
  }
}


export default App;


