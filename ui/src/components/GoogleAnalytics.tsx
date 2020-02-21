import * as React from 'react';
import Helmet from 'react-helmet';

const GoogleAnalytics = () => {
  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-61222473-29"></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-61222473-29');
        `}</script>
    </Helmet>
  );
};

export default GoogleAnalytics;
