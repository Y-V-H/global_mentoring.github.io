import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import {store} from '../toolkit-store/index';
import LayoutWrapper from '../components/templates/layout-wrapper/layout-wrapper';
import '../components/index.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </Provider>
  )
}