
import React from 'react'
import firebase from 'firebase/app';
import GoogleButton from 'react-google-button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"#121212"
    },
}));

export default function SignIn(props) {

    const classes = useStyles();

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        props.auth.signInWithPopup(provider);
    }

    return (
        <div className={classes.root}>
            <GoogleButton onClick={signInWithGoogle} />
        </div>
    )
}