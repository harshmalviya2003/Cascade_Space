"use client"
import Head from 'next/head';
import Header from '@/components/Header';
import { Hero } from '@/components/Hero';
import Mission from '@/components/Mission';
import Edges from '@/components/Edges';
import Cards from '@/components/Cards';
import Benefits from '@/components/Benefits';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="body">
      <Head>
        <title>Akari</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="https://cdn.prod.website-files.com/64952529b14166d061398d7f/6497fba5523008c12d575481_32.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="https://cdn.prod.website-files.com/64952529b14166d061398d7f/6497fb9f2b216bfcaa3766b0_256.png" />
      </Head>

      <Header />
      <Hero />
      <Mission />
      <Edges />
      <Cards />
      <Benefits />
      <Footer />
    </div>
  );
}
