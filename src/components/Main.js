import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userlist} from '../actions/index';
import { Link } from 'react-router-dom';

class Main extends Component{

  componentWillMount(){
    this.props.userlist();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.users !== nextProps.users) {

  //     clearTimeout(this.timeout);

  //     // Optionally do something with data

  //     if (!nextProps.isFetching) {
  //       this.startPoll();
  //     }
  //   }
  // }
  // componentWillUnmount() {
  //   clearTimeout(this.timeout);
  // }
  // startPoll() {
  //   this.timeout = setTimeout(() => this.props.userlist(), 15000);
  // }

// componentDidMount(){
// if(this.props.userlist()){
//   this.interval = setInterval(() => {
//         this.props.userlist()

//   }, 30000);
// }

//  }

  list(val){
    const icons = val.symbol.toLowerCase();
    const llink = "https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/32/icon/";
    return(
      <div key ={val.name} >
          <img height="32" width="32" src={llink + icons + ".png"} />
          {val.price_usd}

 </div>
    );
  }
  render(){
    return (
      <div className = "user-list">
        <h2> Users List </h2>
        {this.props.users.map(this.list)}
     </div>
    );
  }
}
function mapStateToProps(state){
return{
  users: state.users
}
}

export default connect(mapStateToProps, {userlist})(Main);


