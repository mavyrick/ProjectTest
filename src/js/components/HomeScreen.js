import React from 'react';

const homeStyle = {
    title: {
        textAlign: 'center'
    }
}

export default function HomeScreen() {
    return (
        <div>
            <h1 style={homeStyle.title}>
                Welcome to myLocations!
            </h1>
            <ul>
                <li>I wrote this application using only functional components using hooks.</li>
                <br />
                <li>The state is managed using Redux.</li>
                <br />
                <li>Try dragging the markers on the maps to choose new coordinates!</li>
                <br />
                <li>Using the checkboxes you can choose which locations are shown on the location page map.</li>
                <br />
                <li>I used the React Material UI library for many of the features.</li>
                <br />
                <li>For the maps I used react-map-gl and Mapbox.</li>
                <br />
                <li>The UI/UX still needs work. There are many design features I would like to work on in the future.</li>
                <br />
                <li>I didn't implement responsiveness to various screen sizes and devices so this is best viewed on desktop.</li>
            </ul>
            <h3>Let me know if you have any questions.</h3>
            <br />
            <h3>Thank you!</h3>
        </div>
    )
}