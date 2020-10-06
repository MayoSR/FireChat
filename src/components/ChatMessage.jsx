import React from 'react'
import indigo from '@material-ui/core/colors/indigo';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    msgContainer :{
        padding:"8px 12px",
        margin:"10px",
        borderRadius:"10px",
        background:indigo[500],
        display:"flex",
        flexDirection:"column",
        width:"fit-content",
        color:"white",
    },
    message : {
        margin:0,
        fontSize:"14px",
        display:"inline-block",
        marginTop:"0px",
    },
    uname : {
        fontWeight:"bold",
        margin:0,
        marginBottom:"2px",
        fontSize:"12px",
        display:"inline-block",
    }
}));

export default function ChatMessage(props) {
    const classes = useStyles();
    return (
        
        <div className={classes.msgContainer}>
            <p className={classes.uname}>{props.msg.username}</p>
            <p className={classes.message}>{props.msg.text}</p>
        </div>
    )
    
}

