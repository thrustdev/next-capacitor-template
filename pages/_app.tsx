import GlobalStyles from '../components/GlobalStyles';

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default MyApp
