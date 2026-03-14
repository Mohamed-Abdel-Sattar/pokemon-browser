import type { FC } from 'react';

import { Helmet } from 'react-helmet';

import type { FacebookCatalog } from './facebook';

import Facebook from './facebook';
import Twitter from './twitter';

interface SEOProps {
  title: string;
  titleTemplate: string;
  description: string;
  pathname: string;
  article?: boolean;
  siteLanguage?: string;
  siteLocale?: string;
  twitterUsername?: string | null;
  author?: string;
  datePublished?: string | null;
  dateModified?: string | null;
  facebookCatalog?: FacebookCatalog | null;
}

interface SeoData {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
}

const SEO: FC<SEOProps> = ({
  title,
  titleTemplate,
  description,
  pathname,
  article = false,
  siteLanguage,
  siteLocale,
  twitterUsername,
  author = 'Mohamed Abdel Sattar',
  datePublished,
  dateModified,
  facebookCatalog,
}) => {
  const seo: SeoData = {
    title: title.slice(0, 70),
    description: description.slice(0, 160),
    datePublished: datePublished ?? new Date().toISOString(),
    dateModified: dateModified ?? new Date().toISOString(),
  };
  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')
  // Structured Data Testing Tool >>
  // https://search.google.com/structured-data/testing-tool

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: pathname,
    headline: seo.description,
    inLanguage: siteLanguage,
    mainEntityOfPage: pathname,
    description: seo.description,
    name: seo.title,
    author: {
      '@type': 'Person',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author,
    },
    copyrightYear: '2020',
    creator: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Person',
      name: author,
    },
    datePublished: seo.datePublished,
    dateModified: seo.dateModified,
  };

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': pathname,
        name: 'Homepage',
      },
      position: 1,
    },
  ];

  let schemaArticle: Record<string, unknown> | null = null;

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: author,
      },
      copyrightYear: '2019',
      creator: {
        '@type': 'Person',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: author,
      },
      datePublished: seo.datePublished,
      dateModified: seo.dateModified,
      description: seo.description,
      headline: seo.title,
      inLanguage: siteLanguage,
      url: pathname,
      name: seo.title,
      mainEntityOfPage: pathname,
    };
    // Push current blog post into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': pathname,
        name: seo.title,
      },
      position: 2,
    });
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  };

  return (
    <>
      <Helmet title={seo.title} titleTemplate={`%s | ${titleTemplate}`}>
        <link rel="canonical" href={pathname} />
        <meta name="description" content={seo.description} />
        {!article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
        {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      <Facebook
        desc={seo.description}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={pathname}
        locale={siteLocale ? siteLocale : 'en_gb'}
        facebookCatalog={facebookCatalog ?? null}
      />
      <Twitter title={seo.title} desc={seo.description} username={twitterUsername ?? null} />
    </>
  );
};

export default SEO;
