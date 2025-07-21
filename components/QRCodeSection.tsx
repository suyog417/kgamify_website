"use client"

import { useQRCode } from 'next-qrcode'

export default function QRCodeSection() {
  const { Canvas } = useQRCode();

  return (
    <Canvas
                          text={'https://play.google.com/store/apps/details?id=com.app.kgamify&pcampaignid=web_share'}
                          options={{
                            errorCorrectionLevel: 'M',
                            margin: 0,
                            scale: 6,
                            width: 150,
                            color: {
                              dark: '#000000',
                              light: '#ffffff',
                            },
                          }}
                        />
  );
}