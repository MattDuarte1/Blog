import * as Styled from './styles';

type HtmlContentProps = {
  html: string;
};

const HtmlContent = ({ html }: HtmlContentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
};

export default HtmlContent;
