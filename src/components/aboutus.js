import React, { useState, useContext } from 'react';
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import Salim from './assets/Salim.jpg';
import Dwi from './assets/Winur.jpg';

const themes = { 
    light:{
        id: 1,
        foreground: '#000000',
        background: "#BBBBBB",
    },
    dark:{
        id: 2,
        foreground: "#656565",
        background: "#FFFFFF",
    },
};

const ThemeContext = React.createContext(themes.light);

export default function ContextUse(){
    const [theme, setTheme] = useState(themes.dark);
    const changeTheme = () =>{
        if (theme.id === themes.light.id){
            setTheme(themes.dark);
        }
        else{
            setTheme(themes.light);
        }
    };
    return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div style={{ background: theme.background, color: theme.foreground, textAlign:'center', fontFamily:'Roboto', fontSize:'24px', height:'83vh'}}>
            <Card style={{display:'inline-block', margin:'30px', background:'#F5F5F5', boxShadow:'0px 2px 2px', borderRadius:'5%'}}>
            <img style={{width:'200px', height:'200px', border:'solid #696969', borderRadius:'100%', margin:'2px', boxShadow:'1px 1px 1px'}} src={Dwi}></img>
                    <p style={{margin:'2px'}}>Dwi Nur Prasetiyo</p>
                    <p style={{margin:'2px'}}>21120118130070</p>
            </Card>
            <Card style={{display:'inline-block', margin:'30px', background:'#F5F5F5', boxShadow:'0px 2px 2px', borderRadius:'5%'}}>
            <img style={{width:'200px',height:'200px', border:'solid #696969', borderRadius:'100%', margin:'2px', boxShadow:'1px 1px 1px'}} src={Salim}></img>
                    <p style={{margin:'2px'}}>Nur Salim</p>
                    <p style={{margin:'2px'}}>21120118140103</p>
            </Card>
        <div>
            <ThemedButton />
        </div>
        </div>
    </ThemeContext.Provider>
    );
}

function ThemedButton() {
    const { theme, changeTheme } = useContext(ThemeContext);
    return (
    <Button style={{ background: theme.background,
        color:theme.foreground }}
        onClick={changeTheme}>
            Ganti Warna Tema
    </Button>
    );
}