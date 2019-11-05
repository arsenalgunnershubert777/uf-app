import React from 'react';
import { IoIosAddCircleOutline} from 'react-icons/io';
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
        
        event.preventDefault();
        if (this.state.code !== '' && this.data.filter(directory => {
            return directory.code.toLowerCase() === (this.state.code.toLowerCase().trim())
        }).length === 0) {

            this.data.push({
                id: this.state.idNum,
                code: this.state.code.toUpperCase().trim(),
                name: this.state.name,
                coordinates: {
                    latitude: this.state.lat,
                    longitude: this.state.long
                },
                address: this.state.addr
            })

            this.setState({
                idNum: this.state.idNum + 1
            })

            console.log(this.data)
            this.props.updateData(this.data)
            alert('A building was added: ' + this.state.code);
        }
        else {
            alert('Code ' + this.state.code + ' already used, input new code');
        }
    }

    render() {
        this.data = this.props.data;
        return (
            <form
                className = "addBuilding"
                onSubmit={this.handleSubmit}>
                <p> Add a building!</p>
                <label>
                    Code:
                <input className="side" type="text" name = "code" value={this.state.code} onChange={this.handleChange} />
                </label>
                <label>
                    Name:
                <input className="side" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Latitude:
                <input className="side" type="text" name="lat" value={this.state.lat} onChange={this.handleChange} />
                </label>
                <label>
                    Longitude:
                <input className="side" type="text" name="long" value={this.state.long} onChange={this.handleChange} />
                </label>
                <label>
                    Address:
                <input className="side" type="text" name="addr" value={this.state.addr} onChange={this.handleChange} />
                </label>
                <div className="submitButton">
                    <button type="submit">
                        <IoIosAddCircleOutline/>
                    </button>
                </div>
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
