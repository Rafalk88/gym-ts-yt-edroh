import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import Button from '@/components/Button'
import { ButtonVariants, SelectedPage } from '@/shared/types'

import Logo from '@/assets/Logo.png'

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
                    <Button
                      variant={ButtonVariants.Link}
                      href="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    >Home</Button>
                    <Button
                      variant={ButtonVariants.Link}
                      href="Benefits"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    >Benefits</Button>
                    <Button
                      variant={ButtonVariants.Link}
                      href={"Our Classes"}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    >Our Classes</Button>
                    <Button
                      variant={ButtonVariants.Link}
                      href="Contact"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    >Contact</Button>
                  </div>

                  <div className={`${flexBetween} gap-8`}>
                    <p>Sign In</p>
                    <Button
                      variant={ButtonVariants.Action}
                      href={SelectedPage.ContactUs}
                      setSelectedPage={setSelectedPage}
                    >
                      Become a Member
                    </Button>
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