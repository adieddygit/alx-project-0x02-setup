import Head from 'next/head';
import { FC } from 'react';
import Header from '@/components/layout/Header'

const Greeting: FC = ()=>{
  return(
    <>
      <Head>
        <meta name='description' content='SoloForge: Mastering Project Autonomy'/>
        <title>Next.js Project Setup and Basics</title>
      </Head>

      <main>
        <Header title=''/>
        <div className='flex items-center justify-center h-screen m-4'>
        <h1 className='text-4xl sm:text-4xl md:text-3xl font-extrabold text-green-700'>Welcome, We are Glad to Have You As Our Guest</h1>
        </div>
      </main>
    </>
  )
};

export default Greeting;
