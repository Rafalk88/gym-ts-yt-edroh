import Button from '@/components/Button'

import { ButtonVariants, SelectedPage } from "@/shared/types"
import { useMediaQuery } from '@/hooks/useMediaQuery'

import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      <div className="">
        <section>
          <article>
            <header>
              <figure>
                <img src={HomePageText} alt="home-page-text" />
              </figure>
            </header>
            <p className="">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </article>
          <article>
            <Button
              variant={ButtonVariants.Action}
              href={SelectedPage.ContactUs}
              setSelectedPage={setSelectedPage}
            >
              Join Now
            </Button>

            <Button
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              variant={ButtonVariants.Basic}
              href={SelectedPage.ContactUs}
              setSelectedPage={setSelectedPage}
            >
              <p>Learn More</p>
            </Button>
          </article>
        </section>
        <figure>
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </figure>
      </div>
      {
        isAboveMediumScreens && (
          <section>
            <div>
              <figure>
                  <img src={SponsorRedBull} alt="redbull-sponsor" />
                  <img src={SponsorForbes} alt="forbes-sponsor" />
                  <img src={SponsorFortune} alt="fortune-sponsor" />
              </figure>
            </div>
          </section>
      )}
    </section>
  )
}

export default Home