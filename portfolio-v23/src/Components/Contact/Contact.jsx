import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Contact.css";

const Contact = () => {
	let schema = yup.object().shape({
		name: yup.string().required("Required"),
		email: yup.string().email().required("Required"),
		message: yup.string(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data) => {
		sendEmail(data);
		reset();
	};

	const form = useRef();

	const sendEmail = () => {
		emailjs.sendForm("service_vcf89og", "template_70dtiwg", form.current, "UX3t4Hr3wm3Es--Nw");
	};

	return (
		<section className="contact section" id="contact">
			<h2 className="section__title">Get in touch</h2>
			<span className="section__subtitle">Contact Me</span>
			<div className="contact__container container grid">
				<div className="contact__content">
					<h3 className="contact__title">Talk to me</h3>

					<div className="contact__info">
						<div className="contact__card">
							<i className="uil uil-envelope contact__card-icon"></i>

							<h3 className="contact__card-title">Email</h3>
							<span className="contact__card-data">maharishivashistha@gmail.com</span>

							<a href="mailto:maharishivashistha@gmail.com" className="contact__button">
								Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
							</a>
						</div>
						<div className="contact__card">
							<i className="uil uil-whatsapp contact__card-icon"></i>
							<h3 className="contact__card-title">Whatsapp</h3>
							<span className="contact__card-data">+91 - 6377113804</span>
							<a href="https://wa.me/916377113804?text=" className="contact__button">
								Text me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
							</a>
						</div>
						<div className="contact__card">
							<i className="uil uil-linkedin-alt contact__card-icon"></i>
							<h3 className="contact__card-title">LinkedIn</h3>
							<span className="contact__card-data">Maharshi Vashistha</span>
							<a href="https://www.linkedin.com/in/maharshi-vashistha-953bbb202/" className="contact__button">
								Connect with me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
							</a>
						</div>
					</div>
				</div>

				<div className="contact__content">
					<h3 className="contact__title">Send me a mail</h3>

					<form ref={form} onSubmit={handleSubmit(onSubmit)} className="contact__form">
						<div className="contact__form-div">
							<label className="contact__form-tag">Name</label>
							<input
								type="text"
								name="name"
								className="contact__form-input"
								placeholder="Intert your name"
								{...register("name")}
							/>
						</div>
						<div className="contact__form-div">
							<label className="contact__form-tag">Mail</label>
							<input
								type="email"
								name="email"
								className="contact__form-input"
								placeholder="Intert your email"
								{...register("email")}
							/>
						</div>
						<div className="contact__form-div  contact__form-area">
							<label className="contact__form-tag">Message</label>
							<textarea
								{...register("message")}
								name="message"
								cols="30"
								rows="10"
								className="contact__form-input"
								placeholder="Your message"
							></textarea>
						</div>
						<button className="button button--flex hello-btn">
							Send Message <i className="uil uil-message hello-btn-icon"></i>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
