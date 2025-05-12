"use client"
import { Hero } from '@/components/Hero';
import Mission from '@/components/Mission';
import Cards from '@/components/Cards';
import Benefits from '@/components/Benefits';

export default function Home() {
  return (
    <div className="body">
      <Hero />
      <Mission />
      
      <Cards />
      
      <Benefits />
      {/* <Edges /> */}
    </div>
  );
}
