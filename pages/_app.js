import "@/styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>FDC Dental Clinic</title>
        <meta name="description" content="FDC Dental Clinic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
