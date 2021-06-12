import React, { Component } from 'react'
class Catagories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catagories : []
         }
    }

    componentDidMount() {
        this.fetchCat()
    }

    fetchCat = () => {
        fetch('http://localhost:3000/catagory').then(res => res.json()).then(data => {
            this.setState({catagories:data})
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
                    <th scope="col">Cat ID</th>
                    <th scope="col">Cat name</th>
                    </tr>
                </thead>
                <tbody>
                        {this.state.catagories.map(item => {
                            return (
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                            </tr>
                       )
                   })}
                </tbody>
            </table>
            </div>
         );
    }
}
 
export default Catagories;