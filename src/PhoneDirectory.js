import React, { Component } from 'react'
import AddSubscriber from './AddSubscriber'
import ShowSubscriber from './ShowSubscriber'
import {BrowserRouter as Router, Route  } from 'react-router-dom';

class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state = {
            subscribersList : [
                {
                    id: 1,
                     name: "Shilpa Bhat",
                     phone: "888888888"
                   },
                   {
                     id: 2,
                     name: "Shristi Gupta",
                     phone: "9999999999"
                   }
            ]
        };
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length > 0){
            newSubscriber.id = subscribersList[subscribersList.length -1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList : subscribersList});
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }

    render(){
        const subscribersList = this.state.subscribersList;
        return(
           // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler.bind(this)} />
          // <ShowSubscriber subscribersList={subscribersList} />
          <Router>
              <div className="main-container">
                  <Route exact path='/' render={(props) => <ShowSubscriber {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler.bind(this)} /> }  />
                  <Route path='/add' render={({history},props)=> <AddSubscriber {...props} history={history} addSubscriberHandler={this.addSubscriberHandler.bind(this)} />} />
              </div>
          </Router>
        )
    }
}

export default PhoneDirectory;
