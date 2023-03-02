import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import Logo from '@/assets/Logo.png'
import Link from './Link'

import Button from '@/shared/Button'
import ActionButton from '@/shared/ActionButton'

import { SelectedPage } from '@/shared/types'

type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const flexBetween: String = "flex items-center justify-between"

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToogled, setIsMenuToggled] = React.useState<boolean>(false)
  const isAboveMediumScreens: Boolean = useMediaQuery("(min-width: 1060px)")

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <figure>
              <a href="./"><img src={Logo} alt="logo" /></a>
            </figure>

            {
              isAboveMediumScreens ? 
              (
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link 
                      page={"Home"}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link 
                      page={"Benefits"}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link 
                      page={"Our Classes"}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link 
                      page={"Contact"}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>

                  <div className={`${flexBetween} gap-8`}>
                    <Button>Sign In</Button>
                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                  </div>
                </div>
              ) : (
                <button
                  className="rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToogled)}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              )
            }
            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar