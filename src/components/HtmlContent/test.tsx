import HtmlContent from '.';
import { renderTheme } from '../../styles/render-theme';
import htmlMocked from './mock';

describe('<HtmlContent>', () => {
  it('Should render a HtmlContent', () => {
    const { container } = renderTheme(<HtmlContent html={htmlMocked} />);

    expect(container).toBeInTheDocument();
  });

  it('Should match snapshot component', () => {
    const { container } = renderTheme(<HtmlContent html={htmlMocked} />);

    expect(container).toMatchSnapshot();
  });
});
