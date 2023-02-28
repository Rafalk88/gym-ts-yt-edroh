import AnchorLink from "react-anchor-link-smooth-scroll"
import PropTypes from 'prop-types'

type Props = {
  page: string
  selectedPage: string
  setSelectedPage: (value: string) => void
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage: string = page.toLowerCase().replace(/ /g,"")

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-500
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

Link.propTypes = {
  page: PropTypes.string,
  selectedPage: PropTypes.string.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
}

export default Link