import React from 'react'
import { DownloadButton } from './DownloadButton'
import { Logo } from './Logo'

const App = () => {
  return (
    <>
      <div className='relative overflow-hidden px-8 pt-4'>
        <div className='max-w-7xl mx-auto'>
          {/* <!-- header --> */}
          <div className='flex flex-row flex-grow items-center'>
            <img className='w-6 mr-1' src='logo_128x128.png' alt='' />
            {/* <Logo /> */}
            <div className='font-mono'>braindump</div>
            <div className='flex-grow' />
            <div />
          </div>

          {/* <!-- title --> */}
          <div className='mt-10 max-w-7xl mx-auto text-center text-5xl font-bold font-mono'>Write down thoughts. Fast.</div>

          {/* <!-- description --> */}
          <div className='mt-6 max-w-xl mx-auto text-center text-lg'>Offline notepad to quickly note down thoughts, meeting minutes, tasks and more. For developers. For techies. For keyboard lovers. Uses the Visual Studio Code editor underneath for a user experience that you are already used to.</div>

          {/* <!-- download --> */}
          <div className='mt-8 mx-auto flex flex-row gap-4 justify-center flex-wrap'>
            <DownloadButton
              platform='win'
              href='https://braindump-releases.s3.eu-central-1.amazonaws.com/Braindump_0.6.0_103/Braindump+Setup+0.6.0.exe'
            />
            <DownloadButton
              platform='darwin'
              href='https://braindump-releases.s3.eu-central-1.amazonaws.com/Braindump_0.6.0_103/Braindump-0.6.0.dmg'
            />
            <DownloadButton
              platform='linux'
              href='https://braindump-releases.s3.eu-central-1.amazonaws.com/Braindump_0.6.0_103/braindump-0.6.0.tar.gz'
              href2='https://braindump-releases.s3.eu-central-1.amazonaws.com/Braindump_0.6.0_103/braindump_0.6.0_amd64.deb'
              href3='https://braindump-releases.s3.eu-central-1.amazonaws.com/Braindump_0.6.0_103/braindump-0.6.0.x86_64.rpm'
            />
          </div>

          {/* <!-- gif --> */}
          <div className='mt-6 mb-10 max-w-3xl mx-auto'>
            <img src='v0.6.0_main.gif' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
