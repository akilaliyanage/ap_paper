import React, { Component } from 'react'
class NewVeh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            model: '',
            type: '',
            name: '',
            cat:[],
            catagories: [],
            price:0
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

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log([e.target.name],e.target.value )
    }
    handleSubmit = () => {
        const data = {
            data: {
                code: this.state.code,
                model: this.state.model,
                type: this.state.type,
                name: this.state.name,
                catagories: this.state.cat,
                solidPrice : this.state.price
            }
        }

        fetch('http://localhost:3000/vehicle', {
            method: "POST",
           headers: {
                    'Content-Type': 'application/json'
                  },
        body : JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            console.log(data)
            alert("data saved successfully")
        }).catch(err => {
            alert(err)
        })

        window.location.reload()
    }
    handleChangeCat = (e) => {
        let { cat } = this.state;
        cat.push(e.target.value)
        console.log(cat)
        this.setState({cat : cat})
    }

    render() { 
        return (
            <div>
                <div class="alert alert-danger" role="alert">
                   New Vehicle
                </div>
                <input onChange={this.handleChange} name="code" className="form-control mt-1" type="text" placeholder="code" aria-label="default input example"></input>
                <input onChange={this.handleChange} name="model" className="form-control  mt-1" type="text" placeholder="model" aria-label="default input example"></input>
                <input onChange={this.handleChange} name="type" className="form-control  mt-1" type="text" placeholder="type" aria-label="default input example"></input>
                <input onChange={this.handleChange} name="name" className="form-control  mt-1" type="text" placeholder="name" aria-label="default input example"></input>
                <input onChange={this.handleChange} name="price" className="form-control  mt-1" type="number" placeholder="solid price" aria-label="default input example"></input>
                <select onChange={this.handleChangeCat} className="form-select mt-1" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    {this.state.catagories.map(item => {
                        return (
                            <option value={item._id}>{item.name}</option>
                        )
                    })}
                </select>
                <button onClick={this.handleSubmit} type="button" class="btn btn-primary mt-1" style={{width:'100%'}}>Primary</button>
            </div>
         );
    }
}
 
export default NewVeh;