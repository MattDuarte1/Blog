export interface Icategory {
  readonly id: string;
  readonly title: string;
  image: {
    readonly url: string;
    readonly alt: string;
  };
}
