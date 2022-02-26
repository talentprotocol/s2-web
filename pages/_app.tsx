import type { AppProps } from "next/app";
import "normalize.css";
import GlobalStyles from "../atomic/_static/global-styles";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
