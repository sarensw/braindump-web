import React from 'react'
import { BuyMeCoffee } from '../components/BuyMeCoffee'
import { Discord } from '../components/Discord'
import { DownloadButton } from '../components/DownloadButton'
import { GoPro } from './GoPro'

const Home = () => {
  const version = '0.7.0'
  const build = '117'

  return (
    <>
      <div className='relative overflow-hidden pt-4'>
        <div className='max-w-7xl mx-auto'>
          {/* <!-- header --> */}
          <div className='flex flex-row flex-grow items-center px-8 gap-2'>
            <img className='w-10 mr-1' src='logo.svg' alt='' />
            <div className='text-xl font-mono'>braindump</div>
            <div className='flex-grow' />
            <div>
              <Discord />
            </div>
            <div>
              <BuyMeCoffee width='9rem' />
            </div>
          </div>

          {/* <!-- title --> */}
          <div className='mt-10 max-w-7xl mx-auto text-center text-5xl font-bold font-mono px-8'>Write down thoughts. Fast.</div>

          {/* <!-- description --> */}
          <div className='mt-6 max-w-xl mx-auto text-center text-lg px-8'>Braindump is a plain-text Markdown based notepad that works completely offline. Write down your thoughts without thinking about structure first. For developers, makers, tech enthusiasts, and keyboard lovers.</div>

          {/* version */}
          <div className='text-center mt-8 mb-1 text-gray-500 px-8'>v{version}</div>

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
            <img src='v0.6.0_main.gif' />
          </div>

          {/* go pro section */}
          {/* <div className='mb-48'>
            <GoPro />
          </div> */}
        </div>
      </div>
    </>
  )
}

export { Home }
