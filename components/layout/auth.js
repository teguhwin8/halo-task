import Head from "next/head";

export default function Auth({ children }) {
	const leftSideStyle = {
		backgroundImage: "url('/login-background.jpg')",
		backgroundSize: "cover",
		backgroundPosition: "right",
	};
	return (
		<div>
			<Head>
				<title>Halo Task</title>
			</Head>
			<div
				className="flex h-screen w-full justify-center items-center"
				style={leftSideStyle}
			>
				{children}
			</div>
		</div>
	);
}
