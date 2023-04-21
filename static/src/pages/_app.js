import GlobalContextProvider from "@/shared/contexts/GlobalContext";
import '../styles/_base.scss'

export default function App({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}
