import React from 'react';

class ViewBuilding extends React.Component {
    displayBuildingLatitude(directory) {

        try {
            return directory.coordinates.latitude
        }catch (e) {
            return 'latitude N/A'
        }
        
        
    }
    displayBuildingLongitude(directory) {

        try {
            return directory.coordinates.longitude
        } catch (e) {
            return 'longitude N/A'
        }


    }

    displayBuildingAddress(directory) {

        try {
            return directory.address
        } catch (e) {
            return 'address N/A'
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
                    <p> {this.displayBuildingLatitude(directory)} </p>
                    <p> {this.displayBuildingLongitude(directory)} </p>
                    <p> {this.displayBuildingAddress(directory)} </p>
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
