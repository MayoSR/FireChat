import React from 'react'

import { useCollectionData } from 'react-firebase-hooks/firestore';
import SignOut from './SignOut';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import firebase from 'firebase/app';
import ChatBox from './ChatBox';
import ChatMessage from './ChatMessage';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        background: "#121212"
    },
    chatBody:{
        margin:"65px 0px 50px 0px"
    },
    innerChatLeft :{
        display:"flex",
        justifyContent:"flex-start"
    },
    innerChatRight :{
        display:"flex",
        justifyContent:"flex-end"
    }
}));

export default function ChatRoom(props) {

    const classes = useStyles();

    const query = props.db.collection("messages").orderBy('createdAt').limit(25)
    const [messages] = useCollectionData(query, { idField: 'id' })

    const auth = props.auth;

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
                    <Typography variant="h6">Chat Window</Typography>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => auth.signOut()}
                        color="inherit"
                    >
                        <ExitToAppIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.chatBody}>
                {messages && messages.map((msg) => {
                    if(props.auth.currentUser.uid != msg.userId){
                        return (
                            <div className={classes.innerChatLeft}>
                                <ChatMessage user={auth} msg={msg} />
                            </div>
                        )
                    }
                    else{
                        return (
                            <div className={classes.innerChatRight}>
                                <ChatMessage user={auth} msg={msg} />
                            </div>
                        )
                    }
                })}
            </div>
            <ChatBox user={auth} />
        </div>
    )
}