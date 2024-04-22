"use client";
import Script from "next/script";

const MouseflowAnalytics = () => {
  return (
    <>
      <Script id="mouseflow-analytics" strategy="afterInteractive">
        {`
            window._mfq = window._mfq || [];
            (function() {
              var mf = document.createElement("script");
              mf.type = "text/javascript"; mf.defer = true;
              mf.src = "//cdn.mouseflow.com/projects/418cecff-7e78-4f9e-b1dd-d1bf107270da.js";
              document.getElementsByTagName("head")[0].appendChild(mf);
            })();
        `}
      </Script>
    </>
  );
};

export default MouseflowAnalytics;
