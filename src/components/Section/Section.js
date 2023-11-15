import {SectionFeedBack, Title} from './Section.styled'

export const Section = ({ title, children }) => {
  return (
    <SectionFeedBack>
      <Title>{title}</Title>
      {children}
    </SectionFeedBack>
  );
};