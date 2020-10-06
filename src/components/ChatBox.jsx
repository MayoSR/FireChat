import React, { useRef, useState } from "react";
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import firebase from 'firebase/app';

const useStyles = makeStyles((theme) => ({
    chatRow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 10,
        left: 10,
        right: 10,
        '& > input': {
            background: "white"
        }

    },
    iconContainer: {
        padding: "8px",
        border: "1px solid black",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "10px",
        background: indigo[500],
        '& > svg': {
            color: "white"
        }
    }
}));

export default function ChatBox(props) {

    const [text, setText] = useState("")
    const classes = useStyles();
    const ipRef = useRef(null)
    const sendMessage = (e) => {
        firebase.firestore().collection('messages').add({
            username:props.user.currentUser.displayName.split(" ")[0],
            userId:props.user.currentUser.uid,
            text: text,
            createdAt:new Date().getTime()
        })
        ipRef.current.value = ""
    }

    const storeText = (e) => {
        setText(e.target.value)
    }


    return (
        <div className={classes.chatRow}>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Type here"
                size="small"
                InputProps={{
                    style: {
                        background: "white"
                    }
                }}
                onChange={storeText}
                inputRef={ipRef}
            />
            <div className={classes.iconContainer} onClick={sendMessage}>
                <SendIcon style={{ pointerEvents: "none" }} />
            </div>
        </div>
    )
}
