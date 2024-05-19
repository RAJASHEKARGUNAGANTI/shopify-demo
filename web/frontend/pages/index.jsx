import { Layout, Page } from "@shopify/polaris";
import { OrderGraphs } from "../components/OrderGraphs";
import { Card } from "../components/Card";
import { OrderDetails } from "../components/OrderDetails";
import { useAuthenticatedFetch } from "../hooks";
import { useEffect, useState } from "react";

export default function HomePage() {
  let fetch = useAuthenticatedFetch();
  let [products, setProducts] = useState(0)
  let [collections, setCollections] = useState(0)
  let [orders, setOrders] = useState(0)
  let [fulfill, setFullfill] = useState(0)
  let [remain, setRemain] = useState(0)

  useEffect(async()=>{
    try {
      let request = await fetch("/api/products/count")
      let response = await request.json()
      // console.log(response);
      setProducts(response.count)
    } catch (error) {
      console.log(error)
    }
  },[])


  useEffect(async()=>{
    try {
      let request = await fetch("/api/collections/count")
      let response = await request.json()
      // console.log(response);
      setCollections(response.count)
    } catch (error) {
      console.log(error)
    }
  },[])

  useEffect(async()=>{
    try {
      let request = await fetch("/api/orders/all")
      let response = await request.json()
      setOrders(response.data.length);
      let full = response.data.filter(item=>item.fulfilment_status === "fulfilled");
      setFullfill(full.length);
      setRemain(response.data.length - full.length);
      // console.log(response);
      setCollections(response.count)
    } catch (error) {
      console.log(error)
    }
  },[])


  useEffect(async()=>{
    try {
      let request = await fetch("/api/2024-04/products")
      let response = await request.json()
      // console.log(response);
    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <Page fullWidth>
      <div className="home-section">
        <div className="graphs-section">
          <OrderGraphs />
        </div>
        <div className="card-section">
        <Layout>
        <Card title="Total Products" data={products} product />
        <Card title="Total Collections" data={collections} collection/>
        <Card title="Total Order" data={orders} order />
        <Card title="Fulfilled Order" data={fulfill} fulfilled />
        <Card title="Remaining Order"  data={remain} remaining />
        </Layout>
        </div>
        <div className="order-details-section">
        <OrderDetails/>
        </div>
      </div>
    </Page>
  );
}
