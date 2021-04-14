import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import {Redirect, useLocation} from '@docusaurus/router';

const AddTrailingSlashRedirect = () => {
  const location = useLocation();
  if (!location.pathname.endsWith('/')) {
    return <Redirect to={location.pathname + '/'} />;
  }
  return null;
};

export default function Layout(props) {
  return (
    <>
      <AddTrailingSlashRedirect />
      <OriginalLayout {...props} />
    </>
  );
}