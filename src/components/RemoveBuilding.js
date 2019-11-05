import React from 'react';
import { MdRemoveCircleOutline} from 'react-icons/md';
class RemoveBuilding extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            code: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.data = this.props.data;
    }

    handleChange(event) {
        const name = event.target.name;

        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit(event) {

        event.preventDefault();
        //this.data
        const length = this.data.length
        this.data = this.data
            .filter(directory => {
                return directory.code.toUpperCase() !== (this.state.code.toUpperCase().trim())
        })
        const newLength = this.data.length
        if (newLength < length) {
            alert('A building was removed: ' + this.state.code.toUpperCase().trim());
        }
        else {
            alert('Building not found');
        }
        console.log(this.data)
        this.props.updateData(this.data)
    }

    render() {
        this.data = this.props.data;
        return (
            <div>

                <form
                    className = "removeBuilding"
                    onSubmit={this.handleSubmit}>
                    <p> Remove a building!</p>
                    <label>
                    Code:
                        <input className="side" type="text" name="code" value={this.state.code} onChange={this.handleChange} />
                    </label>
                    <div className="submitButton">
                        <button type="submit">
                            <MdRemoveCircleOutline/>
                        </button>
                    </div>
                </form>
            </div>
        );

    }

}
export default RemoveBuilding;
