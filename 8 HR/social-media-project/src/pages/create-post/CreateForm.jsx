import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function CreateForm() {
	const [user] = useAuthState(auth);

	let schema = yup.object().shape({
		title: yup.string().required("You must add a title"),
		description: yup.string().max(100).required("You must add a description"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const postRef = collection(db, "posts");

	const onCreatePost = async (data) => {
		await addDoc(postRef, {
			...data,
			userName: user?.displayName,
			id: user?.uid,
		});
	};

	return (
		<form onSubmit={handleSubmit(onCreatePost)} className="create-form">
			<input type="text" placeholder="Title..." {...register("title")} className="create-form-title" />
			<p className="error-msg">{errors.title?.message}</p>
			<textarea type="text" placeholder="Description..." {...register("description")} className="create-form-description" />
			<p className="error-msg">{errors.description?.message}</p>
			<input type="submit" className="btn" />
		</form>
	);
}

export default CreateForm;
