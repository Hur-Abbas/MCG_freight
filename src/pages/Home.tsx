import React from 'react'
import {Button} from "@heroui/react";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/HeroSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import Reasontochoose from '@/components/sections/Reasontochoose';
import ShippingMetrix from '@/components/sections/ShippingMetrix';
import Poweredby from '@/components/sections/Poweredby';
import Trackshipment from '@/components/sections/Trackshipment';
import FreightOperations from '@/components/sections/FreightOperations';
import FAQs from '@/components/sections/FAQs';
import BeforeFooter from '@/components/sections/BeforeFooter';
import NewSection from '@/components/sections/NewSection';



const Home = () => {
  return (
    <>
      <Header />  
      <HeroSection />
      <SolutionsSection />
      <Reasontochoose />
      <ShippingMetrix />
      <Poweredby />
      <Trackshipment />
      <FreightOperations />
      <FAQs />
      <BeforeFooter />
      <Footer />
      <NewSection />
    </>
  )
}

export default Home