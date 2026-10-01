import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';

import footerStyles from '../customFooter.module.css';
import styles from './styles.module.css';

function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;

  return {
    hidden,
    mobile: canRender ? <DocItemTOCMobile /> : undefined,
    desktop:
      canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
        <DocItemTOCDesktop />
      ) : undefined,
  };
}

function StayInTouch() {
  return (
    <div className={footerStyles.customFooter}>
      <h2>Stay connected with AutoPi</h2>
      <p>
        Explore our devices or contact our team for guidance and support.
      </p>
      <div className={footerStyles.cardGrid}>
        <a href="https://shop.autopi.io" className={footerStyles.card}>
          <img src="/img/hardware/autopi_tmu_cm4/TMU_Floating_Topside_V1_scaled.png" alt="Buy AutoPi" />
          <strong>Shop AutoPi devices</strong>
          <p>Browse our devices, accessories, and connectivity solutions.</p>
        </a>
        <a href="https://www.autopi.io/hardware/compare/" className={footerStyles.card}>
          <img src="/img/shared/autopi_devices_trans.png" alt="Compare devices" />
          <strong>Compare devices</strong>
          <p>Find the AutoPi device that best meets your requirements.</p>
        </a>
        <a href="https://www.autopi.io/sales-inquiry/" className={footerStyles.card}>
          <img src="/img/shared/favicon.ico" alt="Sales team" />
          <strong>Contact sales</strong>
          <p>Discuss your use case and identify the right solution.</p>
        </a>
        <a href="https://www.autopi.io/support/" className={footerStyles.card}>
          <img src="/img/shared/support_icon.png" alt="Support team" />
          <strong>Contact support</strong>
          <p>Get assistance with technical questions and product support.</p>
        </a>
      </div>
    </div>
  );
}

export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const {metadata} = useDoc();

  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
          <StayInTouch />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}