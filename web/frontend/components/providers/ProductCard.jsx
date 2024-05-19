import { Layout, LegacyCard } from "@shopify/polaris";
import React from "react";
import { NavLink } from "react-router-dom";

export const ProductCard = ({ title, image,price,handle, body }) => {
  let cleanedStr = body.replace(/<\/?p>/g, '')
  let shortenedStr = cleanedStr.substring(0, 30);
  let productUrl = `https://dev-xl.myshopify.com/products/${handle}`;
  let shortenedUrl = productUrl.substring(0, 40);

  return <>
  <Layout.Section oneThird>
  <LegacyCard title={title}
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }} >
  <img src={image} alt={title} width={300} height={300} style={{ padding: '10px', borderRadius:'20px' }} />
  <h2 style={{padding:"10px"}}>RS: {price}</h2>
  <NavLink to={`https://dev-xl.myshopify.com/products/${handle}`} 
  style={{padding:"10px" , color:"Blue", fontSize: '18px'}}
  > {shortenedStr}</NavLink>
  <NavLink to={`https://dev-xl.myshopify.com/products/${handle}`} 
  style={{padding:"10px" , color:"lightseagreen"}}
  > {shortenedUrl}</NavLink>
  </LegacyCard>
  </Layout.Section>
  </>
};


