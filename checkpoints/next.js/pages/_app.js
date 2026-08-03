import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="min-vh-100">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
