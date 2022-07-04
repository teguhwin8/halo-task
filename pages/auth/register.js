import React, { useState } from "react";
import Auth from "../../components/layout/auth";
import Link from "next/link";
import Head from "next/head";
import validator from "validator";

export default function Login() {
	const [email, setemail] = useState("");
	const [validEmail, setValidEmail] = useState(true);
	const [password, setPassword] = useState("");
	const [validPassword, setValidPassword] = useState(true);
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [validPasswordConfirmation, setValidPasswordConfirmation] =
		useState(true);
	const [passwordIsMatch, setPasswordIsMatch] = useState(true);

	const handleRegister = async (e) => {
		setValidEmail(validator.isEmail(email));
		setValidPassword(validator.isLength(password, { min: 8 }));
		setPasswordIsMatch(password === passwordConfirmation);
		setValidPasswordConfirmation(
			validator.isLength(passwordConfirmation, { min: 8 }),
		);
		if (
			email &&
			password &&
			validEmail &&
			validPassword &&
			passwordIsMatch &&
			validPasswordConfirmation
		) {
			console.log("Register");
		}
	};

	const handleInputEmail = (e) => {
		setemail(e.target.value);
		setValidEmail(validator.isEmail(e.target.value));
	};

	const handleInputPassword = (e) => {
		setPassword(e.target.value);
		setValidPassword(validator.isLength(e.target.value, { min: 8 }));
		setPasswordIsMatch(passwordConfirmation === e.target.value);
	};

	const handleInputPasswordConfirmation = (e) => {
		setPasswordConfirmation(e.target.value);
		setValidPasswordConfirmation(
			validator.isLength(e.target.value, { min: 8 }),
		);
		setPasswordIsMatch(password === e.target.value);
	};

	return (
		<Auth>
			<Head>
				<title>Create an Account - HaloTask</title>
			</Head>
			<div className="card w-full max-w-[360px] xl:max-w-[400px]">
				<div className="card-body">
					<div className="text-center mb-4">
						<h1 className="mb-6 font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-800">
							Create an Account <br /> HaloTask
						</h1>
					</div>
					<form>
						<div className="form-group">
							<label className="mb-2" htmlFor="email">
								Email
							</label>
							<input
								type="email"
								placeholder="youremail@domain.com"
								className={`form-control w-full ${
									!validEmail ? "border-red-400" : "border-gray-200"
								}`}
								onChange={handleInputEmail}
								onKeyPress={(e) => e.key === "Enter" && handleRegister(e)}
							/>
							<div
								className={`text-red-400 text-xs pt-2 transition-al duration-150 ${
									!validEmail ? "opacity-1 h-auto" : "opacity-0 h-0"
								}`}
							>
								Please enter a valid email
							</div>
						</div>
						<div className="form-group">
							<label className="mb-2" htmlFor="password">
								Password
							</label>
							<input
								type="password"
								placeholder="Your password"
								className={`form-control w-full ${
									!validPassword ? "border-red-400" : "border-gray-200"
								}`}
								onChange={handleInputPassword}
								onKeyPress={(e) => e.key === "Enter" && handleRegister(e)}
							/>
							<div
								className={`text-red-400 text-xs pt-2 transition-al duration-150 ${
									!validPassword ? "opacity-1 h-auto" : "opacity-0 h-0"
								}`}
							>
								Password must be at least 8 characters
							</div>
						</div>
						<div className="form-group">
							<label className="mb-2" htmlFor="passwordConfirmation">
								Re-Type Your Password
							</label>
							<input
								id="passwordConfirmation"
								type="password"
								placeholder="Re type your password again"
								className={`form-control w-full ${
									!validPasswordConfirmation || !passwordIsMatch
										? "border-red-400"
										: "border-gray-200"
								}`}
								onChange={handleInputPasswordConfirmation}
								onKeyPress={(e) => e.key === "Enter" && handleRegister(e)}
							/>
							<div
								className={`text-red-400 text-xs pt-2 transition-al duration-150 ${
									!passwordIsMatch ? "opacity-1 h-auto" : "opacity-0 h-0"
								}`}
							>
								Password confirmation did not match
							</div>
							<div
								className={`text-red-400 text-xs pt-2 transition-al duration-150 ${
									!validPasswordConfirmation
										? "opacity-1 h-auto"
										: "opacity-0 h-0"
								}`}
							>
								Password confirmation must be at least 8 characters
							</div>
						</div>
						<button
							className="button w-full tracking-wide uppercase"
							type="button"
							onClick={handleRegister}
						>
							Register Now
						</button>
						<div className="text-sm text-center my-5 py-5">
							<span className="text-gray-500">{`Already have an account?`}</span>
							<Link href="/auth/login">
								<a className="text-indigo-400 ml-1">Login</a>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</Auth>
	);
}
