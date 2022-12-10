export default interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  summary: string;
  image: Images;
};

export interface Images {
  medium: string;
  original: string;
}
