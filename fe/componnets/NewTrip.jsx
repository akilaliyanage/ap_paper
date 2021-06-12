import React, { Component } from 'react'
class NewTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehs: [],
            cats: [],
            vehicle: '',
            cat: '',
            hour: '',
            mins: '',
            sec: '',
            open1: 'modal',
            open2: '#exampleModal',
            price : 0
            
         }
    }

    componentDidMount() {
        fetch('http://localhost:3000/vehicle').then(res => res.json()).then(data => {
            this.setState({vehs : data})
        })

        fetch('http://localhost:3000/catagory').then(res => res.json()).then(data => {
            this.setState({cats : data})
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log([e.target.name],  e.target.value);
    }


    handleSubmit = () => {
        const data = {
            vahId: this.state.vehicle,
            catId: this.state.cat,
            hour: this.state.hour,
            mins: this.state.mins,
            secs : this.state.sec
        }

        fetch('http://localhost:3000/cal', {
            method: "POST",
           headers: {
                    'Content-Type': 'application/json'
                  },
        body : JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            this.setState({price : data})
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const price = <div class="alert alert-dark" role="alert">
            Trip price = { this.state.price.toFixed(2)}
                        </div>
        return (
            <div className="mt-3">
                <hr />
                <div class="alert alert-success" role="alert">
                   New trip 
                </div>

                {price}

                <div className="row">
                    <div className="col">
                        <select name="vehicle" onChange={this.handleChange} class="form-select" aria-label="Default select example">
                            <option selected>Select a vehicle</option>
                            {this.state.vehs.map(item => {
                                return (
                                    <option value={item._id}>{ item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="col">
                        <select name="cat" onChange={this.handleChange} class="form-select" aria-label="Default select example">
                            <option  selected>Select a Catagory</option>
                            {this.state.cats.map(item => {
                                return (
                                    <option value={item._id}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div class="mt-3">
                            <input name="hour" onChange={this.handleChange} type="text" class="form-control"  placeholder="enter the duration ex: 1h"/>
                            </div>

                        </div>
                        <div className="col">
                            <div class="mt-3">
                            <input name="mins" onChange={this.handleChange} type="text" class="form-control"  placeholder="enter the duration ex: 30m"/>
                            </div>

                        </div>
                        <div className="col">
                            <div class="mt-3">
                            <input name="sec" onChange={this.handleChange} type="text" class="form-control"  placeholder="enter the duration ex: 60s"/>
                            </div>

                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <button onClick={this.handleSubmit} className="btn btn-primary" style={{width:'100%'}}>Calculate</button>
                            </div>
                        </div>
                    </div>
                </div>

            

            </div>
         );
    }
}
 
export default NewTrip;