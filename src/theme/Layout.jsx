import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import Head from '@docusaurus/Head';
import {Redirect, useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const AddTrailingSlashRedirect = () => {
  const location = useLocation();
  if (!location.pathname.endsWith('/')) {
    return <Redirect to={location.pathname + '/'} />;
  }
  return null;
};

export default function Layout(props) {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();

  return (
    /*
    <>
      <AddTrailingSlashRedirect />
      <OriginalLayout {...props} />
      <Head>
        <meta
          property="og:url"
          content={`${siteConfig.url}${location.pathname}`}
        />
        <link
          rel="canonical"
          href={`${siteConfig.url}${location.pathname}`}
        />
      </Head>
    </>
    */
  );
}