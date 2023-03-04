import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { SelectedPage, ButtonVariants } from "@/shared/types"

type Props = {
  children: React.ReactNode
  variant?: String
  href: String
  selectedPage?: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Button = ({children, variant, href, selectedPage, setSelectedPage}: Props) => {  
  if (variant === ButtonVariants.Link) {
      const lowerCasePage = href.toLowerCase().replace(/ /g,"") as SelectedPage

      return (
        <AnchorLink
          className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
          transition duration-500 hover:text-primary-500
          `}
          href={`#${lowerCasePage}`}
          onClick={() => setSelectedPage(lowerCasePage)}
        >{children}</AnchorLink>
      )
    }

    if (variant === ButtonVariants.Action) {
      return (
        <AnchorLink
          className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
          href={`#${href}`}
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        >
          {children}
        </AnchorLink>
      )
    }
    
    return (
      <button
        className=""
        onClick={() => setSelectedPage(SelectedPage.Home)}
      >
        {children}
      </button>
    )
}

export default Button