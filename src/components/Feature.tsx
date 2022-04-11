import React, { FunctionComponent, ReactElement } from 'react'

const Feature: FunctionComponent = (): ReactElement => {
  return (
    <div className='bg-gray-700'>
      <div className='grid grid-cols-2 max-w-2xl mx-auto py-4'>
        <div className='flex flex-col'>
          <div className='text-lg font-bold font-mono'>VIM mode</div>
        </div>
        <div>
          <img className='' src='v0.7.0_features_light.png' />
        </div>
      </div>
    </div>
  )
}

export { Feature }
