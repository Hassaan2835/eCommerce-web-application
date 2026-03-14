import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Deals from '../components/Deals'
import CategorySection from '../components/CategorySection'
import Inquiry from '../components/Inquiry'
import RecommendedItems from '../components/RecommendedItems'
import ExtraServices from '../components/ExtraServices'
import RegionalSuppliers from '../components/RegionalSuppliers'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function Home() {
  const homeAndOutdoorProducts = [
    { name: 'Soft chairs', price: '19', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=400' },
    { name: 'Sofa & chair', price: '19', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400' },
    { name: 'Kitchen dishes', price: '19', image: 'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=400' },
    { name: 'Smart watches', price: '19', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=400' },
    { name: 'Kitchen mixer', price: '100', image: 'https://images.unsplash.com/photo-1578643463396-0997cb5328c1?auto=format&fit=crop&q=80&w=400' },
    { name: 'Blenders', price: '39', image: 'https://images.unsplash.com/photo-1585238341267-1cfec2046a55?auto=format&fit=crop&q=80&w=400' },
    { name: 'Home appliance', price: '19', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400' },
    { name: 'Coffee maker', price: '10', image: 'https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?auto=format&fit=crop&q=80&w=400' },
  ];

  const electronicsProducts = [
    { name: 'Smart watches', price: '19', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Cameras', price: '89', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Headphones', price: '10', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Smart watches', price: '90', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Gaming set', price: '35', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Laptops & PC', price: '340', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Smartphones', price: '19', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Electric kettle', price: '240', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eea50f5?auto=format&fit=crop&q=80&w=1000' },
  ];

  return (
    <>
      <main style={{ padding: '0 0 2rem' }}>
        <Hero />
        <Deals />
        <CategorySection 
          title="Home and outdoor" 
          bannerImage="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1000" 
          products={homeAndOutdoorProducts} 
        />
        <CategorySection 
          title="Consumer electronics and gadgets" 
          bannerImage="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1000" 
          products={electronicsProducts} 
        />
        <Inquiry />
        <RecommendedItems />
        <ExtraServices />
        <RegionalSuppliers />
        <Newsletter />
      </main>
    </>
  )
}

export default Home
