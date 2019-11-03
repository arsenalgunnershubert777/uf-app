import React from 'react';

class AddBuilding extends React.Component {
    


    constructor(props) {
        super(props);
        this.state = {
            idNum: 149,
            code: '',
            name: '',
            lat: 'N/A',
            long: 'N/A',
            addr: 'N/A'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.data  = this.props.data;
    }

    handleChange(event) {
        const name = event.target.name;

        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A building was submitted: ' + this.state.name);
        event.preventDefault();
        this.data.push({
            id: this.state.idNum,
            code: this.state.code,
            name: this.state.name,
            coordinates: {
                latitude: this.state.lat,
                longitude: this.state.long
            },
            address: this.state.addr
        })

        this.setState({
            idNum : this.state.idNum + 1
        })

        console.log(this.data)
        this.props.updateData(this.data)
    }

    render() {
        this.data = this.props.data;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Code:
                <input type="text" name = "code" value={this.state.code} onChange={this.handleChange} />
                </label>
                <label>
                    Name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Latitude:
                <input type="text" name="lat" value={this.state.lat} onChange={this.handleChange} />
                </label>
                <label>
                    Longitude:
                <input type="text" name="long" value={this.state.long} onChange={this.handleChange} />
                </label>
                <label>
                    Address:
                <input type="text" name="addr" value={this.state.addr} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
        
    }



    /*filterUpdate() {
        //Here you will need to update the value of the filter with the value from the textbox
        const val = this.myValue.value
        this.props.filterUpdate(val)
    }

    render() {
        //const { data, selectedBuilding } = this.props;

        return (
            
            <header>
                <form>
                    <input
                        type="text"
                        ref={(value) => { this.myValue = value }}
                        placeholder="Type to add name ..."
                        onChange={this.filterUpdate.bind(this)}
                    />
                </form>
            </header>
            <header>
                <form>
                    <label>
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </header>
        );
    }*/
}
export default AddBuilding;
