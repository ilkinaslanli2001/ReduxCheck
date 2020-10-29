import { Provider } from 'react-redux'
import '../styles/main.css'
import {createWrapper} from 'next-redux-wrapper'
import store from '../store/store'
function MyApp({ Component, pageProps }) {
    return <Provider store={store}>
              <Component {...pageProps} />
           
            </Provider>

  }
  
 
const makeStore = () => store
const wrapper = createWrapper(makeStore)
export default wrapper.withRedux(MyApp)