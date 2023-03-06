import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { SelectedPage, ButtonVariants } from "@/shared/types"

type Props = {
  children: React.ReactNode
  variant?: String
  href: String
  selectedPage?: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
  [otherProps: string]: any
}

const Button = ({children, variant, href, selectedPage, setSelectedPage, ...otherProps}: Props) => {  
  if (variant === ButtonVariants.Basic) {
    const lowerCasePage = href.toLowerCase().replace(/ /g,"") as SelectedPage

    return (
      <AnchorLink
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        {...otherProps}
      >
        {children}
      </AnchorLink>
    )
  }

  if (variant === ButtonVariants.Menu) {
      const lowerCasePage = href.toLowerCase().replace(/ /g,"") as SelectedPage

      return (
        <AnchorLink
          className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
          transition duration-500 hover:text-primary-500
          `}
          href={`#${lowerCasePage}`}
          onClick={() => setSelectedPage(lowerCasePage)}
          {...otherProps}
        >{children}</AnchorLink>
      )
    }

    if (variant === ButtonVariants.Action) {
      return (
        <AnchorLink
          className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
          href={`#${href}`}
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          {...otherProps}
        >
          {children}
        </AnchorLink>
      )
    }
    
    return (
      <button
        className=""
        onClick={() => setSelectedPage(SelectedPage.Home)}
        {...otherProps}
      >
        {children}
      </button>
    )
}

export default Button