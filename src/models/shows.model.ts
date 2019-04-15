export interface ShowData {
  aliases: Array<string>;
  banner: string;
  firstAired: string;
  id: number;
  network: string;
  overview: string;
  seriesName: string;
  slug: string;
  status: string;
}

interface Show {
  data: Array<ShowData>;
  error: '';
}
