import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import "../src/config/firebase.config.js";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextNProgress />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
