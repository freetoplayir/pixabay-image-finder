import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import ImageResults from './components/image-results/ImageResults';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <Search />
          <ImageResults />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
