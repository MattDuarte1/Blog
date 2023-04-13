import Image from 'next/image';
import { IHero } from '@/interfaces/Hero';
import * as Styled from './styles';
import Heading from '@/atoms/Heading';
import { forwardRef } from 'react';

type HeroProps = {
  data?: IHero;
};

const Hero = forwardRef<HTMLDivElement, HeroProps>(
  ({ data, ...props }, ref) => {
    const width = Number(data?.image.custom.width);
    const height = Number(data?.image.custom.height);

    return (
      <Styled.Container id="hero" ref={ref} {...props}>
        <Styled.AsideLeft>
          <Heading color="black" size={'xxlarge'}>
            {data?.title}
          </Heading>
          <Styled.Description>{data?.description}</Styled.Description>
        </Styled.AsideLeft>
        <Styled.AsideRight>
          <Image
            src={data?.image.url as string}
            width={width}
            priority={true}
            height={height}
            alt={`${data?.image.alt}`}
          />
        </Styled.AsideRight>
      </Styled.Container>
    );
  },
);

Hero.displayName = 'Hero Component';

export default Hero;
