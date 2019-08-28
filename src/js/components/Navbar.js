import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { checkboxes: state.checkboxes };
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = props => {

    const classes = useStyles();

    const [toolbarState, setToolbarState] = React.useState({
        title: "",
        // actionButtonsType: "",
        // actionButtonsHidden: true
    });

    const onMount = (path) => {
        if (path === "/") {
            setToolbarState({title: "myLocations"})
        } else if (path === "/categories") {
            setToolbarState({title: "Categories"})
        } else if (path === "/locations") {
            setToolbarState({title: "Locations"})
        } else {
            setToolbarState({title: "Map"})
        }
    }

    useEffect(() => {
        onMount(props.location.pathname)
    }, [])

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {toolbarState.title}
                    </Typography>
                    <div className="action-buttons">
                    <Button
                        color="inherit"
                        onClick={() => console.log(props.location.pathname)}
                    >
                        Login
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => console.log(props.che)}
                    >
                        Sign Up
                    </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default connect(mapStateToProps)(Navbar);