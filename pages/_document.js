import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
						rel="stylesheet"
					/>
					<Script
						id="one-trust"
						strategy="beforeInteractive"
						src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
						data-domain-script="7e2dcece-49bc-481b-baa9-26108c2e4d14"
					/>
					<Script id="one-trust-optanonWrapper" type="text/javascript">
						function OptanonWrapper() {}
					</Script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
