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

// Local Assets - Home & Outdoor
import homeOutdoorBanner from '../assets/products/home_outdoor_banner.png'
import softChairImg from '../assets/products/soft_chair.png'
import lampImg from '../assets/products/lamp.png'
import airMattressImg from '../assets/products/air_mattress.png'
import clayPotImg from '../assets/products/clay_pot.png'
import juicerImg from '../assets/products/juicer.png'
import espressoMachineImg from '../assets/products/espresso_machine.png'
import fileOrganizerImg from '../assets/products/file_organizer.png'
import tallPlantImg from '../assets/products/tall_plant.png'

// Local Assets - Electronics
import electronicsBanner from '../assets/electronics/electronics_banner.png'
import smartwatchSilverImg from '../assets/electronics/smartwatch_silver.png'
import dslrCameraImg from '../assets/electronics/dslr_camera.png'
import whiteHeadphonesImg from '../assets/electronics/white_headphones.png'
import blackKettleImg from '../assets/electronics/black_kettle.png'
import gamingHeadphonesImg from '../assets/electronics/gaming_headphones.png'
import laptopSunsetImg from '../assets/electronics/laptop_sunset.png'

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
    { name: 'Smart watches', price: '19', image: smartwatchSilverImg },
    { name: 'Cameras', price: '89', image: dslrCameraImg },
    { name: 'Headphones', price: '10', image: whiteHeadphonesImg },
    { name: 'Smart watches', price: '90', image: blackKettleImg },
    { name: 'Gaming set', price: '35', image: gamingHeadphonesImg },
    { name: 'Laptops & PC', price: '340', image: laptopSunsetImg },
    { name: 'Smartphones', price: '19', image: 'https://img.icons8.com/color/480/ipad.png' },
    { name: 'Electric kettle', price: '240', image: 'https://img.icons8.com/color/480/kettle.png' },
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
          bannerImage={electronicsBanner} 
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
