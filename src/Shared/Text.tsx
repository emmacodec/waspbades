import React from 'react'

type Props = {
    children: React.ReactNode
}

const Text = ({children}: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-2xl font-bold tracking-widest uppercase">
        {children}
    </h1>
  )
}

export default Text;