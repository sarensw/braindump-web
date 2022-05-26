import React, { FunctionComponent, ReactElement } from 'react'
import { validReleases } from '../releases'

interface DownloadVersionSwitcherProps {
  onChange: (build: string) => void
}

const DownloadVersionSwitcher: FunctionComponent<DownloadVersionSwitcherProps> = (props: DownloadVersionSwitcherProps): ReactElement => {
  return (
    <div className='mx-auto flex flex-row justify-center mt-8 mb-1'>
      <select
        className='bg-transparent border border-gray-500 my-2 text-sm text-center'
        onChange={(e) => props.onChange(e.target.value)}
      >
        {validReleases.map((release, index) => {
          return (
            <option
              key={index}
              selected={release.def}
              value={release.build}
            >{release.version}{release.pre ? '-alpha' : ''}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export { DownloadVersionSwitcher }
