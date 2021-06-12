import React, { Component } from 'react'
class Vehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles : []
         }
    }

    componentDidMount() {
        this.fetchCat()
    }

    fetchCat = () => {
        fetch('http://localhost:3000/vehicle').then(res => res.json()).then(data => {
            this.setState({vehicles:data})
        }).catch(err => {
            console.log(err)
        })
    }
    render() { 
        return (
            <div>
                <div class="alert alert-primary" role="alert">
                   Catagories
                </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Veh ID</th>
                    <th scope="col">Veh name</th>
                    <th scope="col">Veh code</th>
                    <th scope="col">Veh model</th>
                    <th scope="col">Veh type</th>
                    </tr>
                </thead>
                <tbody>
                        {this.state.vehicles.map(item => {
                            return (
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.code}</td>
                                <td>{item.model}</td>
                                <td>{item.type}</td>
                            </tr>
                       )
                   })}
                </tbody>
            </table>
            </div>
         );
    }
}
 
export default Vehicles;