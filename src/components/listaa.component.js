// listaa.component.js
import React, {Component} from 'react';

import axios from 'axios';
import TableRow from './TableRow';

export default class Listaa extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
      
    }
    
    
    
    
    
    
    // componentDidUpdate() {
      //     axios.get('http://localhost:4000/business')
      //     .then(response => {
        
    //       this.setState({ business: response.data });
    //     })
    //     .catch(function (error) {
    //     console.log(error);
    //     })
    //     }
    componentDidMount(){
      axios.get('http://localhost:4000/business')
      .then(response => {
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
      }
      
      tabRow(){
        return this.state.business.map(function(object, i){
          return <TableRow obj={object} key={i} />;
        });
      }

      componentDidUpdate() {
          axios.get('http://localhost:4000/business')
            .then(response => {
            //console.log(JSON.stringify(response.headers))
            //console.log(JSON.stringify({ business: response.data }))
            //console.log(JSON.stringify(this.state.business))
            //console.log(JSON.stringify(response.data) === JSON.stringify(this.state.business))
            if (JSON.stringify(response.data) !== JSON.stringify(this.state.business) ) {
              console.log(JSON.stringify(response.data) === JSON.stringify(this.state.business))
              this.setState({ business: response.data });
            }
            })
            .catch(function (error) {
              console.log(error);
        })
      }
      
      
    render() {
      return (
        <div>
          <h3 align="center">Business List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Person</th>
                <th>Business</th>
                <th>GST Number</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }