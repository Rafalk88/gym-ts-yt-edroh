export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export enum ButtonVariants {
  Basic = 'basic',
  Menu = 'menu',
  Action = 'action',
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum Sponsor {
  Redbull = 'https://www.redbull.com/pl-pl/?rbcid=19716337114&utm_source=Adwords&utm_medium=g&utm_campaign=19716337114&utm_content=648869728010&gclid=CjwKCAiAmJGgBhAZEiwA1JZolhgeeVBEr9V2EB_n0dmcmIqXNdkbSPfNTQNXL0HOEh_dhlIiuJho8xoChtYQAvD_BwE',
  Forbes = 'https://www.forbes.pl',
  Fortune = 'https://fortune.com'
}

export interface BenefitType {
  icon: JSX.Element
  title: String
  description: String
}