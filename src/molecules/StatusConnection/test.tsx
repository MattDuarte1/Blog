import StatusConnection from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '@/styles/render-theme';

const statusMessage = {
  connecting: 'Conectando com o DatoCMS...',
  connected: 'Conectado ao DatoCMS, recebendo atualizações ao vivo!',
  closed: 'Conexão Desativada',
};

const mock = {
  message: 'Conexão Desativada',
  status: 'closed',
  error: null,
};

describe('<StatusConnection>', () => {
  it('Should render a StatusConnection Component when status closed', () => {
    const { container } = renderTheme(<StatusConnection {...mock} />);

    expect(container.firstElementChild).toBeInTheDocument();
    expect(container.querySelector('span')).toHaveStyle(
      `background-color: #BA1200`,
    );
    expect(container.querySelector('p').innerHTML).toBe(statusMessage.closed);
  });

  it('Should render StatusConnection Component when status connecting', () => {
    const newMock = {
      ...mock,
      status: 'connecting',
      message: statusMessage.connecting,
    };
    const { container } = renderTheme(<StatusConnection {...newMock} />);

    expect(container.querySelector('span')).toHaveStyle(
      `background-color: #F1C40F`,
    );
    expect(container.querySelector('p').innerHTML).toBe(newMock.message);
  });

  it('Should render StatusConnection Component when status connected', () => {
    const newMock2 = {
      ...mock,
      status: 'connected',
      message: statusMessage.connected,
    };
    const { container } = renderTheme(<StatusConnection {...newMock2} />);

    expect(container.querySelector('span')).toHaveStyle(
      `background-color: #1efc1e`,
    );
    expect(container.querySelector('p').innerHTML).toBe(newMock2.message);
  });

  it('Should render StatusConnection Component Error', () => {
    const newMock3 = {
      ...mock,
      error: {
        code: '11',
        message: 'deu ruim',
        fatal: true,
        response: 'string',
      },
    };
    renderTheme(<StatusConnection {...newMock3} />);

    expect(screen.getByText('deu ruim')).toBeInTheDocument();
  });

  it('Should match snapshot component', () => {
    const { container } = renderTheme(<StatusConnection {...mock} />);

    expect(container.firstElementChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        color: #FFFFFE;
        background-color: #2B2C34;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        padding: 1rem;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        font-weight: 700;
      }

      .c0 > p {
        font-size: 1.617rem;
      }

      .c1 {
        height: 0.75rem;
        width: 0.75rem;
        margin-right: 1rem;
        background-color: #BA1200;
        border-radius: 99999px;
        -webkit-animation: pulse 1s infinite;
        animation: pulse 1s infinite;
      }

      @media (max-width:700px) {
        .c0 > p {
          font-size: 1.2rem;
        }
      }

      <div
        class="c0"
      >
        <span
          class="c1"
        />
         
        <p>
          Conexão Desativada
        </p>
      </div>
    `);
  });
});
