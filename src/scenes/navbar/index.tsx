import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import Button from '@/components/Button'
import { ButtonVariants, SelectedPage } from '@/shared/types'

import Logo from '@/assets/Logo.png'

type Props = {
  isTopOfPage: Boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const flexBetween = "flex items-center justify-between"
const menu = [
  {id: 1, content: "Home"},
  {id: 2, content: "Benefits"},
  {id: 3, content: "Our Classes"},
  {id: 4, content: "Contact"},
]

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToogled, setIsMenuToggled] = React.useState<boolean>(false)
  const isAboveMediumScreens: Boolean = useMediaQuery("(min-width: 1060px)")
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6 max-w-[1200px]`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <figure>
              <a href="./"><img src={Logo} alt="logo" /></a>
            </figure>

            {
              isAboveMediumScreens ? 
              (
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    {
                      menu.map((item) => {
                        return (
                          <Button
                            key={item.id}
                            variant={ButtonVariants.Menu}
                            href={item.content}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                          >
                            {item.content}
                          </Button>
                        )
                      })
                    }
                  </div>

                  <div className={`${flexBetween} gap-8`}>
                    <Button
                      variant={ButtonVariants.Secondary}
                      href="./"
                      setSelectedPage={setSelectedPage}
                    >
                      Sign In
                    </Button>
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

      {!isAboveMediumScreens && isMenuToogled && (
        <section className="fixed right-0 bottom-0 z-40 h-full w-[300px]
        bg-primary-100 drop-shadow-xl"
        >
          <div className="flex justify-end p-12">
            <button
              type="button"
              onClick={() => setIsMenuToggled(!isMenuToogled)}
            >
              <XMarkIcon 
                className="h-6 w-6 text-gray-400"
              />
            </button>
          </div>

          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
          {
            menu.map((item) => {
              return (
                <Button
                  key={item.id}
                  variant={ButtonVariants.Menu}
                  href={item.content}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                >
                  {item.content}
                </Button>
              )
            })
          }
          </div>
        </section>
      )}
    </nav>
  )
}

export default Navbar