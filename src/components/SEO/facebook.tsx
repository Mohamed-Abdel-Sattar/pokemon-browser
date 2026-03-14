import type { FC } from 'react';

import { Helmet } from 'react-helmet';

export interface FacebookCatalog {
  amount: string | number;
  currency: string;
  brand: string;
  availability?: boolean;
  condition: string;
  retailer_item_id: string;
}

interface FacebookProps {
  url: string;
  locale: string;
  type?: string;
  title: string;
  desc: string;
  image?: string;
  name?: string | null;
  facebookCatalog?: FacebookCatalog | null;
}

const Facebook: FC<FacebookProps> = ({ url, type = 'website', title, desc, locale, facebookCatalog = null }) => (
  <>
    <Helmet>
      <meta property="og:locale" content={locale} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image:alt" content={desc} />
    </Helmet>
    {!!facebookCatalog && (
      <Helmet>
        <meta property="og:price:amount" content={String(facebookCatalog.amount)} />
        <meta property="og:price:currency" content={facebookCatalog.currency} />
        <meta property="product:brand" content={facebookCatalog.brand} />
        <meta property="product:availability" content={facebookCatalog?.availability ? 'available for order' : 'discontinued'} />
        <meta property="product:condition" content={facebookCatalog.condition} />
        <meta property="product:locale" content={locale} />
        <meta property="product:price:amount" content={String(facebookCatalog.amount)} />
        <meta property="product:price:currency" content={facebookCatalog.currency} />
        <meta property="product:retailer_item_id" content={facebookCatalog.retailer_item_id} />
      </Helmet>
    )}
  </>
);

export default Facebook;
