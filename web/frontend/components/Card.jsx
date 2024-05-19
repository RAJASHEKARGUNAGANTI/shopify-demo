import { Layout, LegacyCard } from '@shopify/polaris'
import React from 'react'

export const Card = ({title, data, product, collection, order, fulfilled, remaining}) => {
  return (
    <>
    <Layout.Section oneThird>
    <LegacyCard title={title} sectioned>
    <h2>
    {product && data}
    {collection && data}
    {order && data}
    {fulfilled && data}
    {remaining && data}
    </h2>
    </LegacyCard>
    </Layout.Section>
    </>
  )
}

