import React, { ReactElement } from 'react'
import { useAppSelector } from '../hooks'

function Feature (props: { title: string, description: string, imageDark: string, imageLight: string }): ReactElement {
  const theme = useAppSelector(store => store.app.theme)

  return (
    <div className=''>
      <div className='grid grid-cols-2 max-w-2xl mx-auto py-4 gap-4'>
        <div className='flex flex-col'>
          <div className='text-lg font-bold font-mono'>{props.title}</div>
          <div className='font-light dark:text-gray-400 text-gray-500'>{props.description}</div>
        </div>
        <div>
          <img className='border border-gray-200 dark:border-gray-700' src={theme === 'dark' ? props.imageDark : props.imageLight} />
        </div>
      </div>
    </div>
  )
}

export { Feature }
