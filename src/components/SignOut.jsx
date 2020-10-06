import React from 'react'
import firebase from 'firebase/app';

export default function SignOut(props) {

    const auth = firebase.auth();

    return (
        auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}
