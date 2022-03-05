import React from "react"
import {Select , Button,Modal,Input} from "antd"
import {ShoppingCartOutlined} from "@ant-design/icons";
import { useState } from 'react';
import { useMoralis } from "react-moralis";
import axios from "axios";
const {Option} = Select;



 function Purchase ({item})
{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [delivery, setDelivery] = useState("");
    const {Moralis, account, chainId} = useMoralis();
    const getRate = () => {
       return axios({
          method: "GET",
          url: `https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=2b0550831fe44a08948d`,
        })
          .then((response) => {
              return response.data
            
          })
          .catch((error) => {
            console.log(error);
          });
          
      };

         
          
          
          const handleOk = async () => {

            // Get The Price of MATIC
        
            const options = {
              address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
              chain: "eth"
            };
            const price = await Moralis.Web3API.token.getTokenPrice(options);
            let obj = await getRate()
            let convert_rate = obj.USD_INR
            let matic_price_inr = price.usdPrice * convert_rate
            const priceItemMatic = item.price / matic_price_inr
            console.log(priceItemMatic)
            
            // Send Matic to book store owenr address
        
            const options1 = {
              type: "native", 
              amount: Moralis.Units.ETH(priceItemMatic), 
              receiver: "0xFf155b21702Cc99518f8b4852eBE4e4f2323E781"
            }
            let result = await Moralis.transfer(options1)
        
        
            //Save Transaction Details to DB
            const Transaction = Moralis.Object.extend("Transaction");
            const transaction = new Transaction();
        
            transaction.set("Customer", account);
            transaction.set("Delivery", delivery);
            transaction.set("Product", item.name);
        
            transaction.save()
            setIsModalVisible(false);
          }
        

    return (
        <>
      <span className="price"> Rs {item.price}</span>
      <p>No Import Fees & Free Shipping Included</p>
      <h1 style={{ color: "green" }}> In Stock </h1>
      <h3>Quantity</h3>
      <Select defaultValue={1} style={{ width: "100%" }}>
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
        <Option value={5}>5</Option>
      </Select>
      
      {chainId === "0x13881" &&
      <Button
      className="login"
      style={{ width: "100%", marginTop: "50px" }}
      onClick={()=>setIsModalVisible(true)}
    >
      <ShoppingCartOutlined /> Buy Now
    </Button>
}
    <Modal
        title="Purchase Product"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={()=>setIsModalVisible(false)}
      >
    <div style={{ display: "flex" }}>
          <img src={item.image} alt="product" style={{ width: "200px" }}></img>
          <div>
            <h3>{item.name}</h3>
            <h2>Rs. {item.price}</h2>
            <h4>Delivery Address</h4>
            <Input onChange={(value) => setDelivery(value.target.value)}></Input>
          </div>
        </div>

      </Modal>
      
      </>
    )
}
export default Purchase