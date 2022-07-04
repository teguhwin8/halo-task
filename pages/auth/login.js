import React, { useState } from "react";
import Auth from "../../components/layout/auth";
import Link from "next/link";
import validator from "validator";
import Head from "next/head";

export default function Login() {
	const [email, setemail] = useState("");
	const [validEmail, setValidEmail] = useState(true);
	const [validPassword, setValidPassword] = useState(true);
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		setValidEmail(validator.isEmail(email));
		setValidPassword(validator.isLength(password, { min: 8 }));
		if (email && password && validEmail && validPassword) {
			console.log("login");
		}
	};

	const handleInputEmail = (e) => {
		setemail(e.target.value);
		setValidEmail(validator.isEmail(e.target.value));
	};

	const handleInputPassword = (e) => {
		setPassword(e.target.value);
		setValidPassword(validator.isLength(e.target.value, { min: 8 }));
	};

	return (
		<Auth>
			<Head>
				<title>Login - HaloTask</title>
			</Head>
			<div className="card w-full max-w-[360px] xl:max-w-[400px]">
				<div className="card-body">
					<div className="text-center mb-4">
						<h1 className="mt-4 mb-6 font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-800">
							Login to HaloTask
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
                                onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
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
                                onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
							/>
							<div
								className={`text-red-400 text-xs pt-2 transition-al duration-150 ${
									!validPassword ? "opacity-1 h-auto" : "opacity-0 h-0"
								}`}
							>
								Password must be at least 8 characters
							</div>
						</div>
						<button
							className="button w-full tracking-widest uppercase"
							type="button"
							onClick={handleLogin}
						>
							Login Now
						</button>
						<div className="text-sm text-center my-5 py-5">
							<span className="text-gray-500">{`Don't have an account?`}</span>
							<Link href="/auth/register">
								<a className="text-indigo-400 ml-1">Register</a>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</Auth>
	);
}
