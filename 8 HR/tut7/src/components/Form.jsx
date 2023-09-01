import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// ! Requires yup, @hookform/resolvers, react-hook-form

function Form()
{
	let schema = yup.object().shape({
		fullName: yup.string().required("Required"),
		age: yup.number().positive().integer().min(18).required(),
		email: yup.string().email().required(),
		password: yup.string().min(8).required(),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), null], "Passwords don't match")
			.required(),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder="Full Name..." {...register("fullName")} />
			<p>{errors.fullName?.message}</p>
			<input type="number" placeholder="Age..." {...register("age")} />
			<input type="text" placeholder="Email..." {...register("email")} />
			<input type="password" placeholder="Password..." {...register("password")} />
			<input type="password" placeholder="Comfirm Password..." {...register("confirmPassword")} />
			<p>{errors.confirmPassword?.message}</p>
			<input type="submit" />
		</form>
	);
}

export default Form;
