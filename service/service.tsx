'use client';
import { useEffect } from 'react';
import Web3 from 'web3';
import dotenv from 'dotenv';
import {
    abi,
    contract,
    events,
  } from "../lib/abi/ipp"
  dotenv.config();
  let web3:any; // Declare web3 as a global variable
  let walletProvider:any; // Store the wallet provider reference
  export function setWalletProvider(provider:any) {
    walletProvider = provider;
  }
  export function getWalletProvider() {
    if (!walletProvider) {
      throw new Error('Wallet provider is not set. Please call setWalletProvider(provider) before using getWalletProvider.');
    }
    
    return walletProvider;
  }
  
  const getWeb3 = () => {
    return new Promise(async(resolve, reject) => {
        let provider = getWalletProvider()
        web3 = new Web3(provider);
        // console.log(provider)
        resolve(web3)
    
    });
  };
  
  export const servJoin = async (account:any) => {
    try {
      if(!web3){
        web3 = await getWeb3()
      }
      let value:any = 0.03
      const weiValue = web3.utils.toWei(value.toString(), 'ether');
      console.log(account, weiValue)
      let tract = new web3.eth.Contract(abi, contract);
      const receipt = await new Promise((resolve, reject) => {
        tract.methods.joinList(account)
          .send({ from: account, value:weiValue, gas:60000})
          .then((receipt:any) => {
            if(receipt.status){
              resolve(receipt);
            }else{
              resolve({status:false});
            }    
          }).catch((error:any) => {
              console.log(error)
          })
      });
      return receipt;
    } catch (error) {
      alert(error);
      throw new Error('Error calling serv method');
    }
  };