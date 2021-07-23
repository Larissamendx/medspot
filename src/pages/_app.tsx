import { AuthContextProvider } from '../contexts/authContext'
import { ValidateContextProvider } from '../contexts/validateContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <AuthContextProvider> 
      <ValidateContextProvider>
        <Component {...pageProps} />
      </ValidateContextProvider>
    </AuthContextProvider >
    );
}

export default MyApp
