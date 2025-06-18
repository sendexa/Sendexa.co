import React from 'react';
import Head from 'next/head';

const PageName: React.FC = () => {
  return (
    <>
      <Head>
        <title>PageName - Your Website</title>
        <meta name='description' content='Page description goes here.' />
      </Head>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-4xl font-bold text-center mb-4'>PageName</h1>
        <p className='text-center text-gray-600'>Your content goes here.</p>
      </div>
    </>
  );
};

export default PageName;