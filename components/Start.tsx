import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import axios from "axios";
import { Inter } from 'next/font/google'
import Modal from './Modal';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { useSDK } from '@metamask/sdk-react';
import { useUser } from './UserContext';
import TikTokEmbed from './Tiktok';
import { setWalletProvider, servJoin} from '../service/service';
//mongo: FmJY5TK9tgsAJi1R
interface StartProps {
  user: any;
}
const Start = () => {
  
  const router = useRouter();
  const { sdk, connected, connecting, provider, chainId }:any = useSDK();  
  const { user, setUser } = useUser();
  const [isJoinModalOpen, setIsJoinModalOpen]:any = useState(false);

  useEffect(() => {
    if (connected && user) {
        setWalletProvider(provider);    
    }
  }, [user, connected]);
  
  
  const handleJoinList = async (event:any) => {
    let resp:any = await servJoin(user)
    if(resp.status){

    }
  
  }
  
  function handleJoinModal() {
    if(isJoinModalOpen){
      setIsJoinModalOpen(false);

    }else{
      setIsJoinModalOpen(true);

    }
  } 
    return(
        <>
        
        <div className="cs-height_90 cs-height_lg_80"></div>
          <section style={{marginTop:'33px'}}>
            <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 ">
                <p className="text-center" style={{
                    fontSize: '18px',
                    lineHeight: '34px',
                    color: 'white', // For text color
                    padding: '10px 20px', // Padding around the text
                    borderRadius: '15px', // Rounded corners
                    border: '2px solid #FFD600' // Solid border, optional, adjust the color as needed
                }}>
                    Introducing the creator app, where creativity meets blockchain in a revolutionary way
                </p>

                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                <Image
                      src="/img/home_1.jpg"
                      alt="Image"
                      className="cs-zoom_item"
                      width='600'
                      height='600'
                      style={{
                        borderRadius: '10px',
                        border: '3px solid #00B0FF'  // Add white border
                    }}
                      // onLoad={handleImageLoad}
                  />
                  <div className="text-center mt-3">                  
                  <button className="btn btn-primary discord-button">
                    <i className="fab fa-discord"></i> Join our Discord
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container pt-5">
            <div className="container">
                                                  
              {/* <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                  <TikTokEmbed />
                </div>
              </div> */}
            </div>
          </section>

        </>
    )
}
export default Start;
