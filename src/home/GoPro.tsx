import React from 'react'

const GoPro: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div className='bg-gray-800 p-8 flex flex-col gap-4'>
      {/* subtitle */}
      <div className='text-4xl font-mono font-bold text-center text-white'>Go Pro</div>

      {/* buy button */}
      <a
        className='box-border p-3 px-6 text-black inline-block rounded self-center'
        style={{
          backgroundColor: '#29ABE2'
        }}
        target='_blank'
        href='https://sarensw.gumroad.com/l/bceuq'
        data-gumroad-single-product="true">Buy Braindmp Pro</a>

      <div className='grid grid-cols-1 md:grid-cols-2 py-4 gap-6'>
        <div className='flex flex-col gap-2'>
          <div
            className='font-bold font-mono text-2xl'
            style={{
              color: '#29ABE2'
            }}>Dark Mode</div>
          <div className='font-light text-lg text-white'>Enjoy working in the dark mode all night long.</div>
        </div>
        <div>
          <img src='v0.6.0_main.gif' />
        </div>
      </div>
    </div>
  )
}

export { GoPro }
