import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {makeStyles} from "@material-ui/core";
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { categories: state.categories };
};

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
        bottom: 8
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const CategorySelect = ({categories, handleUpdateInput, selectEmpty}) => {

    const classes = useStyles();

    const [categorySelect, setSelect] = React.useState("");

    const handleSelect = (e) => {
        setSelect(e.target.value)
        handleUpdateInput(e, e.target.value)
    }

    // const handleSelectEmpty {
    //     if (selectEmpty === true) {
    //
    //     }
    // }

    return (
        <FormControl className={classes.formControl} variant="outlined">
            <InputLabel htmlFor="age-simple">Category</InputLabel>
            <Select
                name="category"
                value={categorySelect}
                input={<OutlinedInput />}
                onChange={handleSelect}
            >
                {categories.map((item) =>
                    <MenuItem key={item.id} value={item.category}>
                        {item.category}
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    );
}

export default connect(mapStateToProps)(CategorySelect);