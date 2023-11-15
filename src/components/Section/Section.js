import {SectionFeedBack, Title} from './Section.styled'

export const Section = ({ title, children }) => (
  <SectionFeedBack>
    <Title>{title}</Title>
    {children}
  </SectionFeedBack>
);