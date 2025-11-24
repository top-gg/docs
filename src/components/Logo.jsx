import { useState, useEffect } from 'react'

export function Logo(props) {
  return (
    <div className="flex items-center gap-2">
      <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="120 120 580 580" focusable="false" width="50" height="61">
        <path fill="#ff3366" d="M655.711 247H330.71V572H397.113C422.599 572 447.042 561.876 465.064 543.854C483.086 525.832 493.21 501.389 493.21 475.902V409.5H559.613C585.099 409.5 609.542 399.375 627.564 381.354C645.586 363.332 655.711 338.889 655.711 313.402V247Z"></path>
        <path fill="#ff3366" d="M144 247H306.5V409.5H193.657C180.531 409.5 167.943 404.286 158.661 395.004C149.379 385.722 144.165 373.134 144.165 360.008L144 247Z"></path>
      </svg>
      <div className="flex flex-col">
        <span className={`text-2xl font-bold text-white hidden lg:block`}>Top.gg</span>
      </div>
    </div>
  )
}
