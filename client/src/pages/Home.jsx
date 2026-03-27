import React, { useState, useEffect } from 'react'
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
import axios from 'axios'

function Home() {
  const [categoriesData, setCategoriesData] = useState([])
  const [dealsProducts, setDealsProducts] = useState([])
  const [recommendedProducts, setRecommendedProducts] = useState([])

  const categoryBanners = {
    'Electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1000&auto=format&fit=crop',
    'Clothing': 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000&auto=format&fit=crop',
    'Accessories': 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1000&auto=format&fit=crop',
    'Footwear': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
    'Beauty': 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop'
  }

  const defaultBanner = 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1000&auto=format&fit=crop'

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products?_t=${Date.now()}`)
        const data = response.data
        
        // Group by category
        const categories = {}
        data.forEach(p => {
          if (!categories[p.category]) categories[p.category] = []
          categories[p.category].push(p)
        })

        const catArray = Object.keys(categories).map(cat => ({
          title: cat,
          products: categories[cat].slice(0, 8),
          banner: categoryBanners[cat] || defaultBanner
        }))

        setCategoriesData(catArray)
        setDealsProducts(data.slice(0, 5)) 
        setRecommendedProducts(data.slice(5, 15)) 
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <>
      <main style={{ padding: '0 0 2rem' }}>
        <Hero />
        <Deals products={dealsProducts} />
        
        {categoriesData.map((cat, idx) => (
          <CategorySection 
            key={idx}
            title={cat.title} 
            bannerImage={cat.banner} 
            products={cat.products} 
          />
        ))}

        <Inquiry />
        <RecommendedItems products={recommendedProducts} />
        <ExtraServices />
        <RegionalSuppliers />
        <Newsletter />
      </main>
    </>
  )
}

export default Home
