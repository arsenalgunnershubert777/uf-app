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
                
                
                <div className="viewBuilding">
                    <tr
                        key={directory.id}
                    >   
                    <p> {"Code: "} {directory.code} </p>
                    <p> {"Name: "} {directory.name} </p>
                    <p> {"Latitude: "} {this.displayBuildingLatitude(directory)} </p>
                    <p> {"Longitude: "} {this.displayBuildingLongitude(directory)} </p>
                    <p> {"Address: "} {this.displayBuildingAddress(directory)} </p>
                    </tr>
                </div>

                
            );
            });

        if (buildingDisplay.length === 0) {
            return (
                <div className="viewBuilding">
                    <p> Click on a building to view!</p>
                </div>
            )
        }
        else {
            return (
                <div>{buildingDisplay}</div>

            )
        }



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
