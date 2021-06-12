import React, { Component } from 'react'
import Catagories from './componnets/Catagories'
import NewVeh from './componnets/NewVeh';
import Vehicles from './componnets/Vehicles';
import NewTrip from './componnets/NewTrip'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="m-5">
                <Catagories />
                <Vehicles />
                <NewVeh />
                <NewTrip/>
           </div>
         );
    }
}
 
export default App;