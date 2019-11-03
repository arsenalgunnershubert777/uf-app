import React from 'react';

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
        alert('A building was removed: ' + this.state.code);
        event.preventDefault();
        //this.data
        this.data = this.data
            .filter(directory => {
                return directory.code.toLowerCase().indexOf(this.state.code.toLocaleLowerCase()) === -1
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
                    <input type="text" name="code" value={this.state.code} onChange={this.handleChange} />
                </label>
                
                <input type="submit" value="Submit" />
            </form>
        );

    }

}
export default RemoveBuilding;
