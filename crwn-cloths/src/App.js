import React from "react";
import { Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route ,Redirect} from "react-router-dom";
//import Test from "./testfile";
import Shoppage from "./pages/shoppage";
import Header from "./components/header/header";
import SignInUp from "./pages/sign-in-up/sign-in-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";
import CheckOut from "./pages/checkout/checkout";

const Hatspage = (props) => {
  return (
    <div>
      {" "}
      <h1>Hatspage {props.match.url}</h1>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setvalue } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        await userRef.onSnapshot((snapshot) => {
          let id = snapshot.id;

          setvalue({ currentUser: id }); //this.setState({
          //currentUser:id

          //})
        });
      }
      setvalue(userAuth); //this.setState({
      //currentUser:null
      //})
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/hats" component={Hatspage} />
          <Route path="/shop" component={Shoppage} />
          <Route exact path="/checkout" component={CheckOut}/>
          <Route path="/signin" render={()=>this.props.currentUser?<Redirect to="/"/>:<SignInUp/>} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps=({user})=>({
  currentUser:user.currentUser
});

const mapDispatchToState = (dispatch) => {
  return {
    setvalue: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(App);
