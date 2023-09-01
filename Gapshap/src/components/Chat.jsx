import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase-config";
import { collection, addDoc, where, serverTimestamp, onSnapshot, query, orderBy } from "firebase/firestore";

import "../styles/Chat.css";

const Chat = ({ room }) => {
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState("");
	const messagesRef = collection(db, "messages");

	useEffect(() => {
		const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdAt"));
		const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
			let messages = [];
			snapshot.forEach((doc) => {
				messages.push({ ...doc.data(), id: doc.id });
			});
			setMessages(messages);
		});

		return () => unsubscribe();
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault(); // Don't want page to reload... arrgh

		if (newMessage === "") return;
		await addDoc(messagesRef, {
			text: newMessage,
			createdAt: serverTimestamp(),
			user: auth.currentUser.displayName,
			room,
		});

		setNewMessage("");
	};

	return (
		<div className="chat-app">
			<div className="header">
				<p className="room-name">Welcome to: {room}</p>
			</div>
			<div className="messages">
				{messages.map((message) => (
					<div key={message.id} className="message">
						<span className="user">{message.user}:</span> {message.text}
					</div>
				))}
			</div>
			<form onSubmit={handleSubmit} className="new-message-form">
				<input
					type="text"
					value={newMessage}
					onChange={(event) => setNewMessage(event.target.value)}
					className="new-message-input"
					placeholder="Type your message here..."
				/>
				<button type="submit" className="send-button">
					Send
				</button>
			</form>
		</div>
	);
};

export default Chat;
