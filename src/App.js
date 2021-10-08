import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Typography } from 'antd';
import Logo from './components/assets/logo.png';

import obat from './components/obat';
import AboutUs from './components/aboutus';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

function App() {
  return (
  <Router>
    <Layout style={{background:'#000000'}}>
      <Header style={{background:'Blue', height:'100px'}}>
        <div style={{textAlign:'center', padding:' 10px 0 0 0', margin:'0 0 0 0'}}>
          <Text style={{fontFamily:'Roboto', color:'#FFFFFF', fontSize: '70px', fontStyle: 'oblique'}}>
          Toko Sehat
          <img
            style={{height:'60px', width:'60px', marginLeft:'8px'}}
            src= {Logo}
            alt="Gambar"
            className="Foto"
          />
          </Text>
          <Link to="/" style={{margin:'8px', fontFamily:'Roboto', color:'#FFFFFF', fontSize: '18px', float:'right'}}>Halaman Utama</Link>
          </div>
      </Header>
      <Content style={{textAlign:'center', display: 'inlineblock', background:'#333333'}}>
        <Switch>
          <Route path="/" exact component={obat} />
          <Route path="/aboutus" exact component={AboutUs} />
        </Switch>
      </Content>
      <Footer style={{background:'Blue',  width:'100%', color:'#000000'}}>
        <div style={{float: 'right'}}>
        <Link to="/aboutus" style={{margin:'8px', fontFamily:'Roboto', color:'#FFFFFF', fontSize: '18px'}}>ABOUT US</Link>
        </div>
        <div style={{ fontSize: '25px', textAlign:'center', fontFamily:'Roboto', color:'#FFFFFF'}}>
        KELOMPOK 32
        </div>
        </Footer>
    </Layout>
  </Router>
  )
}

export default App;