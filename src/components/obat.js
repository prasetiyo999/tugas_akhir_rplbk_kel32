import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Typography, Modal } from "antd";
import "antd/dist/antd.css";
const { Text } = Typography;
const { Meta } = Card;


function App(props) {
    const [count, setCount] = useState(0);
    const countUp = () => { setCount(count + 1);
    };
    const countDown = () => {setCount (count - 1);
    }; 
    
    useEffect(() => {
        if (count >0) {
            alert(`Jumlah Barang Dalam Kerabjang Telah Diubah`);
        }
    }, [count]);

    return (
        <div>
            <div style={{display: 'flex', flexDirection:'row',justifyContent: 'space-between'}}>
                    <Button type="danger" shape="round" style={{margin:'5px 5px 0px 5px'}} onClick={countDown}>
                        Kurangi Barang
                    </Button>
                    <Button type="primary" shape="round" style={{margin:'5px 5px 0px 5px'}} onClick={countUp}>
                        Tambah Barang
                    </Button>                
            </div>
            <Text>Total cart : {count}</Text>
            <br>
            </br>
            <Text>Total Harga : {props.harga *count}</Text>
            </div>
    );
}

export default class obat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obat: [],
            visible: false,
            name: "",
            price: "",
            image_link: "",
            description:"",
        };        
    }

    componentDidMount() {
        axios({
            method:"get",
            // url:"https://jsonplaceholder.typicode.com/users",
            url:"http://localhost:3000/obat",
            headers: {
            accept:"*/*",
            },
        })
        .then((data) => {
            console.log(data.data);
            this.setState({
            obat:data.data,
            });
        })
    
        .catch((error) => {
        console.log(error);
        });
    }
    handleOk = () => {
        this.setState({visible:false});
      };
      handleCancel = () => {
        this.setState({visible:false});
      };
      showModal = (data) => {
        this.setState({visible:true, description: data});
      }
    render() {
        return (
        <div>
            {this.state.obat.map((results) => {
                return (
                <div key={results.id} style={{textAlign:'center', display:'inline-block'}}>
                    <Card style={{textAlign:'center', display: 'inline-block', width:400, margin:'30px', boxShadow:'1px 2px 1px 1px', borderRadius:'30px'}}
                    cover={<img alt="gambar" Width="30px" Height="300px" src={results.image_link} />}>
                        <Meta title={results.name} description= {results.price} />
                        <div>
                             <App harga={results.price} />
                        </div>
                        <div>
                        <Button type="primary" style={{backgroundColor:'Green'}} shape="round" onClick={() => this.showModal(results.description)}>
                            Detail
                        </Button>
                        </div>
                    </Card>
                </div>
                );
            })}
            <Modal title="Detail Barang" visible={this.state.visible} onOk={this.handleOk} 
                        onCancel={this.handleCancel}><p>{this.state.description}</p>
                        </Modal> 
        </div>
        );
    }
}