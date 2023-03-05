import { motion } from 'framer-motion'

import Button from '@/components/Button'

import { ButtonVariants, SelectedPage, Sponsor } from "@/shared/types"
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
      <motion.div
        className="md:flex mx-auto w-5/6 max-w-[1200px] items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <section className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <header className="relative">
              <figure className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </figure>
            </header>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
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
          </motion.div>
        </section>

        <figure className="flex basis-3/5 justify-center
          z-10 md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </figure>
      </motion.div>
      {
        isAboveMediumScreens && (
          <section className="h-[150px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6 max-w-[1200px]">
              <figure className="flex w-3/5 items-center justify-between mx-auto">
                  <a href={Sponsor.Redbull}><img src={SponsorRedBull} alt="redbull-sponsor" /></a>
                  <a href={Sponsor.Forbes}><img src={SponsorForbes} alt="forbes-sponsor" /></a>
                  <a href={Sponsor.Fortune}><img src={SponsorFortune} alt="fortune-sponsor" /></a>
              </figure>
            </div>
          </section>
      )}
    </section>
  )
}

export default Home