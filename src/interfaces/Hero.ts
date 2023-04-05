export interface IHero {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
    custom: {
      width: string;
      height: string;
    };
  };
}
