import React from 'react';
import ReactMapGL, {NavigationControl, Marker} from 'react-map-gl';
import MapMarker from '@material-ui/icons/Room';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { connect } from "react-redux";
import { dragMapMarker } from "../../actions/actions";

const mapStateToProps = state => {
    return { locations: state.locations };
};

const mapDispatchToProps = dispatch => {
    return {
        dragMapMarker: location => dispatch(dragMapMarker(location)),
    };
}

const TOKEN = 'pk.eyJ1IjoianNvcm9raW4iLCJhIjoiY2p6cmdzejZqMTdtYzNucjJraXF6bjh2NCJ9.9kSI3FXVtdjHAYRS6ycVZQ';

const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

const mapStyle = {
    marker: {
        color: "#4350AF"
    }
}

// const mapStyles = makeStyles(theme => ({
//     icon: {
//         color: theme.palette.primary.light
//     }
// }))


const ListMap = props => {

    const [latLong, setLatLong] = React.useState([]);

    // const [mapLoaded, setMapState] = React.useState(false);

    const [viewport, setViewport] = React.useState({
        latitude: 41.3,
        longitude: -2.2,
        zoom: 1,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: 500
    });

    // useEffect(() => {
    //     setMapState(true)
    // }, [])

    const onMarkerDragEnd = (e, id) => {
        props.dragMapMarker({
            latitude: e.lngLat[1],
            longitude: e.lngLat[0],
            id: id
        })
        // e.longitude === e.lngLat[0]

        // locations.map((item) => {
        //     console.log(item)
        //     if (item.id === props.selectedItems.) {
        //         return {
        //             ...item,
        //             name: action.payload.name,
        //             address: action.payload.address,
        //             latitude: action.payload.latitude,
        //             longitude: action.payload.longitude,
        //             category: action.payload.category,
        //         }
            };

        return (
            <ReactMapGL
                {...viewport}
                onViewportChange={(viewport) => setViewport(viewport)}
                mapStyle="mapbox://styles/jsorokin/cjzrhsoji1kte1coj7ad3ersw"
                mapboxApiAccessToken={TOKEN}
                doubleClickZoom={false}
                touchZoom={false}
                scrollZoom={false}
            >
                <div className="nav" style={navStyle}>
                    <NavigationControl/>
                </div>
                {props.locations.map(item => {
                        if (props.selectedItems.includes(item.id)) {

                            return (
                                <Marker key={item.id}
                                        latitude={parseFloat(item.latitude)}
                                        longitude={parseFloat(item.longitude)}
                                        offsetLeft={-20}
                                        offsetTop={-40}
                                        draggable
                                        onDragEnd={(e) => onMarkerDragEnd(e, item.id)}
                                >
                                    <Tooltip title={item.name}>
                                        <IconButton aria-label="marker">
                                            <MapMarker style={mapStyle.marker}/>
                                        </IconButton>
                                    </Tooltip>
                                </Marker>
                            )
                        }
                    }
                )}
            </ReactMapGL>
        );
    }

export default connect(mapStateToProps, mapDispatchToProps)(ListMap);

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyDZhCe5wH5AmsE1cNa1Guxr-Ght16-KBSE'
//     // apiKey: 'AIzaSyC3gS0DfO3bWf3AzOscmnL7nx92Hgn__Oo'
// })(ListMap);

// import { Map, GoogleApiWrapper } from 'google-maps-react';
//
// const mapStyles = {
//     width: '50%',
//     height: '50%'
// };
//
// const ListMap = (props) => {
//
//     return (
//         <div className="Map">
//             <Map
//                 google={props.google}
//                 zoom={8}
//                 style={mapStyles}
//                 initialCenter={{ lat: 47.444, lng: -122.176}}
//             />
//         </div>
//     );
// }
//
// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyDZhCe5wH5AmsE1cNa1Guxr-Ght16-KBSE'
//     // apiKey: 'AIzaSyC3gS0DfO3bWf3AzOscmnL7nx92Hgn__Oo'
// })(ListMap);