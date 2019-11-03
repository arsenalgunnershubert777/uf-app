import React from 'react';

class ViewBuilding extends React.Component {
    displayBuildingLatitude(directory) {

        try {
            return directory.coordinates.latitude
        }catch (e) {
            return 'N/A'
        }
        
        
    }
    displayBuildingLongitude(directory) {

        try {
            return directory.coordinates.longitude
        } catch (e) {
            return 'N/A'
        }


    }

    displayBuildingAddress(directory) {

        try {
            return directory.address
        } catch (e) {
            return 'N/A'
        }


    }



    render() {
        const { data, selectedBuilding } = this.props;

        const buildingDisplay = data
        .filter(directory => {
            return directory.id === selectedBuilding
        })
        .map(directory => {
            return (


                <div>
                    <tr
                        key={directory.id}
                    >   
                        <p>
                            <td> {directory.code} </td>
                            <br/>
                            <td> {directory.name} </td>
                        </p>
                    </tr>
                    <p> {"Latitude: "} {this.displayBuildingLatitude(directory)} </p>
                    <p> {"Longitude: "} {this.displayBuildingLongitude(directory)} </p>
                    <p> {"Address: "} {this.displayBuildingAddress(directory)} </p>
                </div>
                /*
                <div>
                    <tr
                        key={directory.id}
                    />
                    
                    <p>
                        <td> {directory.code} </td>
                        <td> {directory.name} </td>
                        <td> {directory.coordinates.latitude} </td>
                        <td> {directory.coordinates.longitude} </td>
                        <td> {directory.address} </td>
                    </p>
                </div>*/
                
            );
        });

        return <div>{buildingDisplay}</div>

        /*
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);*/
	}
}
export default ViewBuilding;
