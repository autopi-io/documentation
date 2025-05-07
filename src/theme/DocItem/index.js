  import React from 'react';
  import OriginalDocItem from '@theme-original/DocItem';
  import styles from './customFooter.module.css';
  
  export default function DocItemWrapper(props) {
    return (
      <>
        <OriginalDocItem {...props} />
  
        <div className="container margin-top--lg">
          <div className="row">
            <div className="col--12">
              <div className={styles.customFooter}>
                <h2>Let's stay in touch!</h2>
                <p>
                  Thank you for choosing AutoPi. We're excited to see what you will achieve with your new device!
                </p>
                <div className={styles.cardGrid}>
                  <a href="https://shop.autopi.io" className={styles.card}>
                    <img src="/img/hardware/autopi_tmu_cm4/TMU_Floating_Topside_V1_scaled.png" alt="Buy AutoPi" />
                    <strong>Buy AutoPi device</strong>
                    <p>Check out our AutoPi shop and buy an AutoPi device.</p>
                  </a>
                  <a href="https://www.autopi.io/hardware/compare/" className={styles.card}>
                    <img src="/img/shared/autopi_devices_trans.png" alt="Compare devices" />
                    <strong>Compare all AutoPi devices</strong>
                    <p>Check which device fits your requirements the best.</p>
                  </a>
                  <a href="https://www.autopi.io/sales-inquiry/" className={styles.card}>
                    <img src="/img/shared/favicon.ico" alt="Sales team" />
                    <strong>Contact our sales team</strong>
                    <p>You can build on top of your AutoPi device.</p>
                  </a>
                  <a href="https://www.autopi.io/support/" className={styles.card}>
                    <img src="/img/shared/support_icon.png" alt="Support team" />
                    <strong>Contact our support team</strong>
                    <p>Let us know about your technical questions.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
