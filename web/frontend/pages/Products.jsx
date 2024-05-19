import React, { useEffect, useState } from "react";
import { useAuthenticatedFetch } from "../hooks";
import { Layout } from "@shopify/polaris";
import { ProductCard } from "../components/providers/ProductCard";


export default function Products() {
  const fetch = useAuthenticatedFetch();
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    try {
      let request = await fetch("/api/2024-04/products");
      let response = await request.json();
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Layout fullWidth>
        {products.map(product =>{
          return(
            <div style={{margin:'5px'}} key={product.id}>
            <ProductCard 
            title={product.title} 
            image={product.image.src} 
            price={product.variants[0].price} 
            handle={product.handle}
            body={product.body_html}
            />
            </div>
          )
        })}
      </Layout>
    </>
  );
}
