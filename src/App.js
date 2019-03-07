import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchFireDataAction } from './actions/fetchFireDataAction';
import fire from './firebase-config';

/**
 * External Components
 */
import Rating from 'react-rating';

/**
 * Components
 */
import { ShowSiteRating } from './components/rating/showRating.component';
import { ShowUserDetails } from './components/userDetails/showUserDetails.component';

/**
 * Images
 */
import star from './assets/icons/star.png';
import star_filled from './assets/icons/star_filled.png';

class App extends Component {

  componentDidMount() {
    this.props.fetchFireDataAction();
  }

  getStarValue(event) {
    const timeStampInMs = Math.ceil(window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now());
    fire.database().ref('/rating').push({
      [timeStampInMs]: event
    });
    fire.database().ref('/userCurrentRating').set({
      [timeStampInMs]: event
    });
  }

  getCurrentUserRating() {
    const { userCurrentRating } = this.props.fireDataReducer.result;
    return userCurrentRating[Object.keys(userCurrentRating)[0]];
  }

  render() {
    if(this.props.fireDataReducer.loading) {
      return 'Loading...'
    } else {
      const { users, rating, accounts } = this.props.fireDataReducer.result;
      return (
        <div className="container">
          <ShowUserDetails users={users} accounts={accounts}></ShowUserDetails>
          <div>
            <p>We are on: </p>
            <ShowSiteRating rating={rating}></ShowSiteRating>
          </div>
          <div>
            <p>Rate Us: </p>
            <Rating
              emptySymbol={<img src={star} className="icon" alt="star"/>}
              fullSymbol={<img src={star_filled} className="icon" alt="star-filled"/>}
              onChange={this.getStarValue}
              initialRating={this.getCurrentUserRating()}
            />
          </div>
        </div>
        
      );
    }
    
    
  }
}

const mapStateToProps = state => ({
  ...state
 })
 const mapDispatchToProps = dispatch => ({
  fetchFireDataAction: () => dispatch(fetchFireDataAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
