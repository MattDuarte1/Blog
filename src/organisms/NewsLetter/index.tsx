import { INewsLetter } from '@/interfaces/NewsLetter';
import Button from '@/atoms/Button';
import Heading from '@/atoms/Heading';
import * as Styled from './styles';
import { forwardRef, useRef, useState } from 'react';
import { useEmailSender } from '@/funcs/sendEmail';

type NewsLetterProps = {
  data: INewsLetter;
};

const NewsLetter = forwardRef<HTMLDivElement, NewsLetterProps>(
  ({ data, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [fieldsDisabled, setFieldsDisabled] = useState(false);
    const sendEmail = useEmailSender(inputRef, setFieldsDisabled);

    const handleOnSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      sendEmail();
    };

    return (
      <Styled.Container ref={ref} {...props}>
        <Styled.Content>
          <img src={data.image.url} alt={data.image.alt} />
          <Heading as="h1" size="large">
            {data.title}
          </Heading>
          <span>{data.description}</span>

          <Styled.Form ref={formRef} onSubmit={handleOnSubmit}>
            <Styled.InputForm
              ref={inputRef}
              type="email"
              name="email"
              disabled={fieldsDisabled}
              placeholder="E-mail"
            />
            <Button
              disabled={fieldsDisabled}
              type="submit"
              text="Clique aqui"
            />
          </Styled.Form>
        </Styled.Content>
      </Styled.Container>
    );
  },
);

NewsLetter.displayName = 'NewsLetter Component';

export default NewsLetter;
