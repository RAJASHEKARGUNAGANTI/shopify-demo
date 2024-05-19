import { Layout, LegacyCard } from "@shopify/polaris";
import React from "react";

export const OrderDetails = () => {
  return (
    <>
      <Layout>
        <Layout.Section>
          <LegacyCard title="Order Details" sectioned>
            <p className="text-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iure
              sequi nesciunt sapiente odio quibusdam architecto, pariatur
              doloribus possimus sint. Ea modi maxime eum voluptatibus saepe
              praesentium fugiat libero perspiciatis.
            </p>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </>
  );
};
