import React from 'react'
import { DownloadButton } from '../DownloadButton'
import { GoPro } from './GoPro'

const Home = () => {
  return (
    <>
      <div className='relative overflow-hidden pt-4'>
        <div className='max-w-7xl mx-auto'>
          {/* <!-- header --> */}
          <div className='flex flex-row flex-grow items-center px-8'>
            <img className='w-6 mr-1' src='logo_128x128.png' alt='' />
            {/* <Logo /> */}
            <div className='font-mono'>braindump</div>
            <div className='flex-grow' />
            <div />
          </div>

          {/* <!-- title --> */}
          <div className='mt-10 max-w-7xl mx-auto text-center text-5xl font-bold font-mono px-8'>Write down thoughts. Fast.</div>

          {/* <!-- description --> */}
          <div className='mt-6 max-w-xl mx-auto text-center text-lg px-8'>Offline notepad to quickly note down thoughts, meeting minutes, tasks and more. For developers. For techies. For keyboard lovers. Uses the Visual Studio Code editor underneath for a user experience that you are already used to.</div>

          {/* version */}
          <div className='text-center mt-8 mb-1 text-gray-500 px-8'>v0.6.3</div>

          {/* <!-- download --> */}
          <div className='mx-auto flex flex-row gap-4 justify-center flex-wrap px-8'>
            <DownloadButton
              platform='win'
              href='https://braindump-releases.s3.eu-central-1.amazonaws.com/Braindump_0.6.3_111/Braindump+Setup+0.6.3.exe'
            />
            <DownloadButton
              platform='darwin'
              href='https://braindump-releases.s3.eu-central-1.amazonaws.com/Braindump_0.6.3_111/Braindump-0.6.3.dmg'
            />
            <DownloadButton
              platform='linux'
              href='https://braindump-releases.s3.eu-central-1.amazonaws.com/Braindump_0.6.3_111/braindump-0.6.3.tar.gz'
              href2='https://braindump-releases.s3.eu-central-1.amazonaws.com/Braindump_0.6.3_111/braindump_0.6.3_amd64.deb'
              href3='https://braindump-releases.s3.eu-central-1.amazonaws.com/Braindump_0.6.3_111/braindump-0.6.3.x86_64.rpm'
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
