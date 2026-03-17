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

// Local Assets
import homeOutdoorBanner from '../assets/products/home_outdoor_banner.png'
import softChairImg from '../assets/products/soft_chair.png'
import lampImg from '../assets/products/lamp.png'
import airMattressImg from '../assets/products/air_mattress.png'
import clayPotImg from '../assets/products/clay_pot.png'
import juicerImg from '../assets/products/juicer.png'
import espressoMachineImg from '../assets/products/espresso_machine.png'
import fileOrganizerImg from '../assets/products/file_organizer.png'
import tallPlantImg from '../assets/products/tall_plant.png'

function Home() {
  const homeAndOutdoorProducts = [
    { name: 'Soft chairs', price: '19', image: softChairImg },
    { name: 'Sofa & chair', price: '19', image: lampImg },
    { name: 'Kitchen dishes', price: '19', image: airMattressImg },
    { name: 'Smart watches', price: '19', image: clayPotImg },
    { name: 'Kitchen mixer', price: '100', image: juicerImg },
    { name: 'Blenders', price: '39', image: espressoMachineImg },
    { name: 'Home appliance', price: '19', image: fileOrganizerImg },
    { name: 'Coffee maker', price: '10', image: tallPlantImg },
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
          bannerImage={homeOutdoorBanner} 
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
