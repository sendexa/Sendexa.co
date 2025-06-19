import React from 'react';
import Head from 'next/head';
import { SMPPHero } from '@/components/smpp/SMPPHero';



export default function SMPPPage() {
  return (
    <>
      <Head>
        <title>SMPP Gateway - Carrier-Grade SMS Integration</title>
        <meta name="description" content="Direct SMPP connectivity to our global telecom infrastructure. Enjoy enterprise-grade SMS routing with maximum throughput and minimum latency." />
      </Head>
      <SMPPHero />
    </>
  );
}

