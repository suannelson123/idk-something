import React from 'react';
import { stylesWrapper } from './styles'
import { Navbar } from './components/components'
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  FooterLinks,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from './container/index'

const App = () => (
  <div className='flex items-center flex-col justify-center relative'>
    <div className='overlay'></div>
    <div className='w-full flex flex-col items-center justify-center '>
      <div className={`${stylesWrapper}`}>
        <Navbar />
      </div>
      <div className={`${stylesWrapper}`}>
        <Header />
      </div>
    </div>
    <div className={`${stylesWrapper}`}>
      <AboutUs />
    </div>

    <div className='w-full flex flex-col items-center justify-center bg-[var(--color-black)]'>
      <div className={stylesWrapper}>
        <SpecialMenu />
      </div>
    </div>
    <div className='w-full flex flex-col items-center justify-center'>
      <div className={stylesWrapper}>
        <Chef />
      </div>
    </div>

    <div className='w-full flex flex-col items-center justify-center'>
      <div className={stylesWrapper}>
        <Intro />
      </div>
    </div>
    <div className='w-full flex flex-col items-center justify-center'>
      <div className={stylesWrapper}>
        <Laurels />
      </div>
    </div>
    <div className='w-full flex flex-col items-center justify-center'>
      <div className={stylesWrapper}>
        <Gallery />
      </div>
    </div>

    <div className='w-full flex flex-col items-center justify-center'>
      <div className={stylesWrapper}>
        <FindUs />
      </div>
    </div>

    <div className='w-full flex flex-col items-center justify-center'>
      <div className={stylesWrapper}>
        <Footer />
      </div>
    </div>
    <div className='w-full flex flex-col items-center justify-center'>
      <div className={stylesWrapper} >
        <FooterLinks />
      </div>
    </div>
  </div>
);

export default App;
