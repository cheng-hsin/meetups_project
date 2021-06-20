import '../styles/globals.css';
import Layout_18 from '../components/layout/Layout_18';

function MyApp({ Component, pageProps }) {
  return (
    <Layout_18>
      <Component {...pageProps} />
    </Layout_18>
  );
}

export default MyApp;
