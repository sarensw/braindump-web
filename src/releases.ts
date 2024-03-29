
export interface Release {
  def: boolean
  pre: boolean
  version: string
  build: string
}

export const validReleases: Release[] = [
  {
    def: false,
    pre: false,
    version: '0.6.0',
    build: '103'
  },
  {
    def: false,
    pre: false,
    version: '0.6.1',
    build: '105'
  },
  {
    def: false,
    pre: false,
    version: '0.6.2',
    build: '109'
  },
  {
    def: false,
    pre: false,
    version: '0.6.3',
    build: '111'
  },
  {
    def: false,
    pre: false,
    version: '0.7.0',
    build: '117'
  },
  {
    def: false,
    pre: false,
    version: '0.8.0',
    build: '131'
  },
  {
    def: false,
    pre: false,
    version: '0.9.0',
    build: '139'
  },
  {
    def: true,
    pre: false,
    version: '0.9.1',
    build: '141'
  }
]

export const defaultReleaseIndex: number = 0
