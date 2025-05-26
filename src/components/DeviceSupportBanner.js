import React from 'react';

const devices = {
  mini: {
    name: 'Mini',
    image: '/img/hardware/autopi_mini/AutoPi_Mini_5_Top_right.png',
  },
  cm4: {
    name: 'TMU CM4',
    image: '/img/hardware/autopi_tmu_cm4/TMU_Floating_Topside_V1_scaled.png',
  },
  pro: {
    name: 'CAN-FD Pro',
    image: '/img/hardware/autopi_canfd_pro/canfd_pro_trans.png',
  },
};

export default function DeviceSupportBanner({ supported }) {
  if (!supported?.length) return null;

  return (
    <div
      style={{
        padding: '1rem',
        marginBottom: '1.5rem',
      }}
    >
      <strong>This guide is applicable to the following device/ devices:</strong>
      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
        {supported.map((key) => {
          const dev = devices[key];
          return (
            <div key={key} style={{ textAlign: 'center' }}>
              <img
                src={dev.image}
                alt={dev.name}
                style={{ height: '60px', marginBottom: '0.25rem' }}
              />
              <div>{dev.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
