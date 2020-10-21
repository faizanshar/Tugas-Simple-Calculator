import React , {Component} from  'react';
// import {Text,view} from 'react-native';
// import Calculator from './src/components/Calculator';
import {Provider} from 'react-redux';
import TabNav from './src/components/Tabnav'
import store from './src/components/Store'

class App extends Component {
  render() {
    return(
      <Provider store={store}>
          <TabNav/>
      </Provider>
    )
  }
}
export default App;