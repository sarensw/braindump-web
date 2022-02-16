import React from 'react'

interface DownloadButtonProps {
  platform: string,
  href: string,
  href2?: string,
  href3?: string
}

export const DownloadButton = ({ platform, href, href2 = '', href3 = '' }: DownloadButtonProps) => {
  return (
    <>
      <div className='flex flex-col gap-1'>
        <a className='bg-gray-800 p-3 rounded-sm gap-2 self-center flex flex-col items-center text-white w-44 place-content-center' href={href}>
          {platform === 'darwin' &&
            <>
              <svg viewBox='0 0 384 512' width='32'>
                <path fill='currentColor' d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
              </svg>
              <span className='font-bold'>Mac</span>
              <div className='text-xs'>macOS 10.11+</div>
            </>}
          {platform === 'linux' &&
            <>
              <svg viewBox='0 0 384 512' width='32'>
                <path fill='currentColor' d="M220.8,123.3c1,0.5 1.8,1.7 3,1.7c1.1,0 2.8,-0.4 2.9,-1.5c0.2,-1.4 -1.9,-2.3 -3.2,-2.9c-1.7,-0.7 -3.9,-1 -5.5,-0.1c-0.4,0.2 -0.8,0.7 -0.6,1.1c0.3,1.3 2.3,1.1 3.4,1.7Zm-21.9,1.7c1.2,0 2,-1.2 3,-1.7c1.1,-0.6 3.1,-0.4 3.5,-1.6c0.2,-0.4 -0.2,-0.9 -0.6,-1.1c-1.6,-0.9 -3.8,-0.6 -5.5,0.1c-1.3,0.6 -3.4,1.5 -3.2,2.9c0.1,1 1.8,1.5 2.8,1.4Zm221.1,278.8c-3.6,-4 -5.3,-11.6 -7.2,-19.7c-1.8,-8.1 -3.9,-16.8 -10.5,-22.4c-1.3,-1.1 -2.6,-2.1 -4,-2.9c-1.3,-0.8 -2.7,-1.5 -4.1,-2c9.2,-27.3 5.6,-54.5 -3.7,-79.1c-11.4,-30.1 -31.3,-56.4 -46.5,-74.4c-17.1,-21.5 -33.7,-41.9 -33.4,-72c0.5,-45.9 5.1,-131.2 -75.8,-131.3c-102.4,-0.2 -76.8,103.4 -77.9,135.2c-1.7,23.4 -6.4,41.8 -22.5,64.7c-18.9,22.5 -45.5,58.8 -58.1,96.7c-6,17.9 -8.8,36.1 -6.2,53.3c-6.5,5.8 -11.4,14.7 -16.6,20.2c-4.2,4.3 -10.3,5.9 -17,8.3c-6.7,2.4 -14,6 -18.5,14.5c-2.1,3.9 -2.8,8.1 -2.8,12.4c0,3.9 0.6,7.9 1.2,11.8c1.2,8.1 2.5,15.7 0.8,20.8c-5.2,14.4 -5.9,24.4 -2.2,31.7c3.8,7.3 11.4,10.5 20.1,12.3c17.3,3.6 40.8,2.7 59.3,12.5c19.8,10.4 39.9,14.1 55.9,10.4c11.6,-2.6 21.1,-9.6 25.9,-20.2c12.5,-0.1 26.3,-5.4 48.3,-6.6c14.9,-1.2 33.6,5.3 55.1,4.1c0.6,2.3 1.4,4.6 2.5,6.7v0.1c8.3,16.7 23.8,24.3 40.3,23c16.6,-1.3 34.1,-11 48.3,-27.9c13.6,-16.4 36,-23.2 50.9,-32.2c7.4,-4.5 13.4,-10.1 13.9,-18.3c0.4,-8.2 -4.4,-17.3 -15.5,-29.7Zm-196.3,-316.5c9.8,-22.2 34.2,-21.8 44,-0.4c6.5,14.2 3.6,30.9 -4.3,40.4c-1.6,-0.8 -5.9,-2.6 -12.6,-4.9c1.1,-1.2 3.1,-2.7 3.9,-4.6c4.8,-11.8 -0.2,-27 -9.1,-27.3c-7.3,-0.5 -13.9,10.8 -11.8,23c-4.1,-2 -9.4,-3.5 -13,-4.4c-1,-6.9 -0.3,-14.6 2.9,-21.8Zm-40.7,-11.5c10.1,0 20.8,14.2 19.1,33.5c-3.5,1 -7.1,2.5 -10.2,4.6c1.2,-8.9 -3.3,-20.1 -9.6,-19.6c-8.4,0.7 -9.8,21.2 -1.8,28.1c1,0.8 1.9,-0.2 -5.9,5.5c-15.6,-14.6 -10.5,-52.1 8.4,-52.1Zm-13.6,60.7c6.2,-4.6 13.6,-10 14.1,-10.5c4.7,-4.4 13.5,-14.2 27.9,-14.2c7.1,0 15.6,2.3 25.9,8.9c6.3,4.1 11.3,4.4 22.6,9.3c8.4,3.5 13.7,9.7 10.5,18.2c-2.6,7.1 -11,14.4 -22.7,18.1c-11.1,3.6 -19.8,16 -38.2,14.9c-3.9,-0.2 -7,-1 -9.6,-2.1c-8,-3.5 -12.2,-10.4 -20,-15c-8.6,-4.8 -13.2,-10.4 -14.7,-15.3c-1.4,-4.9 0,-9 4.2,-12.3Zm3.3,334c-2.7,35.1 -43.9,34.4 -75.3,18c-29.9,-15.8 -68.6,-6.5 -76.5,-21.9c-2.4,-4.7 -2.4,-12.7 2.6,-26.4v-0.2c2.4,-7.6 0.6,-16 -0.6,-23.9c-1.2,-7.8 -1.8,-15 0.9,-20c3.5,-6.7 8.5,-9.1 14.8,-11.3c10.3,-3.7 11.8,-3.4 19.6,-9.9c5.5,-5.7 9.5,-12.9 14.3,-18c5.1,-5.5 10,-8.1 17.7,-6.9c8.1,1.2 15.1,6.8 21.9,16l19.6,35.6c9.5,19.9 43.1,48.4 41,68.9Zm-1.4,-25.9c-4.1,-6.6 -9.6,-13.6 -14.4,-19.6c7.1,0 14.2,-2.2 16.7,-8.9c2.3,-6.2 0,-14.9 -7.4,-24.9c-13.5,-18.2 -38.3,-32.5 -38.3,-32.5c-13.5,-8.4 -21.1,-18.7 -24.6,-29.9c-3.5,-11.2 -3,-23.3 -0.3,-35.2c5.2,-22.9 18.6,-45.2 27.2,-59.2c2.3,-1.7 0.8,3.2 -8.7,20.8c-8.5,16.1 -24.4,53.3 -2.6,82.4c0.6,-20.7 5.5,-41.8 13.8,-61.5c12,-27.4 37.3,-74.9 39.3,-112.7c1.1,0.8 4.6,3.2 6.2,4.1c4.6,2.7 8.1,6.7 12.6,10.3c12.4,10 28.5,9.2 42.4,1.2c6.2,-3.5 11.2,-7.5 15.9,-9c9.9,-3.1 17.8,-8.6 22.3,-15c7.7,30.4 25.7,74.3 37.2,95.7c6.1,11.4 18.3,35.5 23.6,64.6c3.3,-0.1 7,0.4 10.9,1.4c13.8,-35.7 -11.7,-74.2 -23.3,-84.9c-4.7,-4.6 -4.9,-6.6 -2.6,-6.5c12.6,11.2 29.2,33.7 35.2,59c2.8,11.6 3.3,23.7 0.4,35.7c16.4,6.8 35.9,17.9 30.7,34.8c-2.2,-0.1 -3.2,0 -4.2,0c3.2,-10.1 -3.9,-17.6 -22.8,-26.1c-19.6,-8.6 -36,-8.6 -38.3,12.5c-12.1,4.2 -18.3,14.7 -21.4,27.3c-2.8,11.2 -3.6,24.7 -4.4,39.9c-0.5,7.7 -3.6,18 -6.8,29c-32.1,22.9 -76.7,32.9 -114.3,7.2Zm257.4,-11.5c-0.9,16.8 -41.2,19.9 -63.2,46.5c-13.2,15.7 -29.4,24.4 -43.6,25.5c-14.2,1.1 -26.5,-4.8 -33.7,-19.3c-4.7,-11.1 -2.4,-23.1 1.1,-36.3c3.7,-14.2 9.2,-28.8 9.9,-40.6c0.8,-15.2 1.7,-28.5 4.2,-38.7c2.6,-10.3 6.6,-17.2 13.7,-21.1c0.3,-0.2 0.7,-0.3 1,-0.5c0.8,13.2 7.3,26.6 18.8,29.5c12.6,3.3 30.7,-7.5 38.4,-16.3c9,-0.3 15.7,-0.9 22.6,5.1c9.9,8.5 7.1,30.3 17.1,41.6c10.6,11.6 14,19.5 13.7,24.6Zm-255.4,-284.4c2,1.9 4.7,4.5 8,7.1c6.6,5.2 15.8,10.6 27.3,10.6c11.6,0 22.5,-5.9 31.8,-10.8c4.9,-2.6 10.9,-7 14.8,-10.4c3.9,-3.4 5.9,-6.3 3.1,-6.6c-2.8,-0.3 -2.6,2.6 -6,5.1c-4.4,3.2 -9.7,7.4 -13.9,9.8c-7.4,4.2 -19.5,10.2 -29.9,10.2c-10.4,0 -18.7,-4.8 -24.9,-9.7c-3.1,-2.5 -5.7,-5 -7.7,-6.9c-1.5,-1.4 -1.9,-4.6 -4.3,-4.9c-1.4,-0.1 -1.8,3.7 1.7,6.5Z"></path>
              </svg>
              <span className='font-bold'>Linux</span>
              <div className='text-xs'>.tar.gz</div>
            </>}
          {platform === 'win' &&
            <>
              <svg viewBox='0 0 384 512' width='32'>
                <path fill='currentColor' d="M0,93.7l183.6,-25.3v177.4h-183.6v-152.1Zm0,324.6l183.6,25.3v-175.2h-183.6v149.9Zm203.8,28l244.2,33.7v-211.6h-244.2v177.9Zm0,-380.6v180.1h244.2v-213.8l-244.2,33.7Z"></path>
              </svg>
              <span className='font-bold'>Windows</span>
              <div className='text-xs'>Windows 7, 8, 10, 11</div>
            </>}
        </a>
        {platform === 'linux' &&
          <div className='grid grid-cols-2 text-xs gap-1 text-white'>
            <a className='bg-gray-800 text-center p-2' href={href2}>.deb</a>
            <a className='bg-gray-800 text-center p-2' href={href3}>.rpm</a>
          </div>}
      </div>
    </>
  )
}
