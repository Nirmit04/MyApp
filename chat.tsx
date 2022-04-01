import { View, Text } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
} from 'firebase/firestore';
import ChatConfig from './chatInit';
import firestore from '@react-native-firebase/firestore';
type Props = {}
let db: any = null;
const Chat = (props: Props) => {
    const [messages, setMessages] = useState<any>([]);

    useEffect(() => {
        // initializeFB();
        // try {
        // await ChatConfig.initialize();
        // db = (await ChatConfig.database()).db;
        // const collectionRef = collection(db, 'chats');
        // const q = query(collectionRef, orderBy('createdAt', 'desc'));
        // console.log(new Date());
        // let collection=firestore().collection('chats').doc('user1_user2').get()
        // console.log(collection);
        db = firestore().collection('messages').doc('user1_user2').collection('chats');
        const unsubscribe = db.orderBy('createdAt', 'desc').onSnapshot(function (doc: any) {
            let z = []
            for (let i = 0; i < doc.docs.length; i++) {
                z.push(doc.docs[i]._data)
            }
            console.log(z);

            setMessages(z);
        });

        // } catch (error) {
        //     console.log(error);

        // }
        return () => unsubscribe();
    }, [])
    async function initializeFB() {



    }
    const onSend = useCallback((messages = []) => {
        if (db) { messages[0].createdAt = (new Date().toString()); db.add(messages[0]); }
        // setMessages((previousMessages: any) => GiftedChat.append(previousMessages, messages))
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: 'red', width: '100%' }}>
            {/* <Text>Lalla</Text> */}
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 'user1',
                }}
            />
        </View>
    )
}

export default Chat