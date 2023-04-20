import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Logo(props) {
  return (
    <>
      <div className="flex items-center gap-2 hidden dark:block mt-2">
        <Image
          src="/logo-darkmode.png"
          alt="Logo"
          width={150}
          height={150}
        />
      </div>
      <div className="flex items-center gap-2 block dark:hidden mt-2">
        <Image
          src="/logo-lightmode.png"
          alt="Logo"
          width={150}
          height={150}
        />
      </div>
    </>
  )
}
