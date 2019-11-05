import React from 'react';

class BuilingList extends React.Component {

    

    render() {
        //console.log('This is my directory file', this.props.data);
        const { data, filterText, selectedUpdate } = this.props;

        const buildingList = data
            .filter(directory => {
                return (directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 || directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0)
            })
            .sort((a, b) => (a.code > b.code) ? 1 : -1)
            .map(directory => {
                return (
                    <tr
                        key={directory.id}
                        onClick={() => selectedUpdate(directory.id)}
                    >
                        <td>{directory.code} </td>
                        <td> {directory.name} </td>
                    </tr>
                )
            });
		
        //buildingList.sort((a, b) => (a.code > b.code) ? -1 : 1)
		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
