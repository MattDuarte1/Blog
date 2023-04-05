import { Icategory } from './Category';
import { IHero } from './Hero';
import { IPost } from './Post';
import { INewsLetter } from './NewsLetter';

export interface ISubscription {
  initialData: {
    homePage: InitialDataProps;
  };
  token: string;
  enabled: any;
}

export interface InitialDataProps {
  seo: {
    title: string;
    description: string;
  };
  heroSection: IHero;
  categorySection: Icategory[];
  postSection: IPost[];
  subscribeSection: INewsLetter;
}

export interface IError {
  code: string;
  message: string;
  fatal: boolean;
  response?: string;
}
