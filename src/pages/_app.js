import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
        <title>Stanley Dsouza - Portfolio</title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 