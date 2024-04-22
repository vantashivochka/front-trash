import Script from "next/script";
import React from "react";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Script id="google-conversion">
        {`
            gtag('event', 'conversion', {'send_to': 'AW-11248125481/V9YXCMSEt48ZEKmMw_Mp'});
        `}
      </Script>
      {children}
    </>
  );
};

export default Layout;
