import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocationForm from '../LocationForm/LocationForm'
import LocationsList from '../LocationsList/LocationsList'

export default function LocationsScreen() {
    return (
        <div>
            <LocationForm />
            <LocationsList />
        </div>
    )
}