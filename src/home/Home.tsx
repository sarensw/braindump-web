import React, { ReactElement, useState } from 'react'
import { BuyMeCoffee } from '../components/BuyMeCoffee'
import { Discord } from '../components/Discord'
import { DownloadButton } from '../components/DownloadButton'
import { Feature } from '../components/Feature'
import { ThemeSwitcher } from '../components/ThemeSwitcher'
import { GoPro } from './GoPro'

const Home = (): ReactElement => {
  const version = '0.7.0'
  const build = '117'

  return (
    <>
      <div className='relative overflow-hidden pt-4'>
        <div className='mx-auto'>
          {/* <!-- header --> */}
          <div className='flex flex-row flex-grow items-center px-8 gap-2'>
            <img className='w-9 mr-1 hidden dark:inline' src='logo_thin_dark.svg' alt='' />
            <img className='w-9 mr-1 dark:hidden' src='logo_thin_light.svg' alt='' />
            <div className='text-xl font-mono'>Braindump</div>
            <div className='flex-grow' />
            <div>
              <ThemeSwitcher />
            </div>
            <div>
              <Discord />
            </div>
            <div>
              <BuyMeCoffee width='9rem' />
            </div>
          </div>

          {/* <!-- title --> */}
          <h1 className='mt-10 max-w-7xl mx-auto text-center text-5xl font-bold font-mono px-8 dark:text-white text-gray-800'>Write down thoughts. Fast.</h1>

          {/* <!-- description --> */}
          <div className='mt-6 max-w-xl mx-auto text-center text-lg px-8 font-light dark:text-gray-400 text-gray-500'>The digital notebook for developers, and makers. Ultra fast fuzzy search. Mouse or Keyboard only navigation. Pure markdown with auto formatting and indentation. Offline.</div>

          {/* version */}
          <div className='text-center mt-8 mb-1 text-gray-400 px-8 text-sm'>v{version}</div>

          {/* <!-- download --> */}
          <div className='mx-auto flex flex-row gap-4 justify-center flex-wrap px-8'>
            <DownloadButton
              platform='win'
              version={version}
              build={build}
            />
            <DownloadButton
              platform='darwin'
              version={version}
              build={build}
            />
            <DownloadButton
              platform='linux'
              version={version}
              build={build}
            />
          </div>

          {/* <!-- gif --> */}
          <div className='mt-6 mb-4 max-w-3xl mx-auto'>
            {/* <video playsInline autoPlay muted loop>
              <source src='v0.6.0_main.webm' type='video/webm' />
            </video> */}
            <img className='dark:block hidden' src='v0.7.0_features_dark.png' />
            <img className='dark:hidden' src='v0.7.0_features_light.png' />
          </div>

          {/* go pro section */}
          {/* <div className='mb-48'>
            <GoPro />
          </div> */}

          {/* feature section */}
          {/* <div className='mb-48'>
            <Feature />
          </div> */}
        </div>
      </div>
    </>
  )
}

export { Home }
