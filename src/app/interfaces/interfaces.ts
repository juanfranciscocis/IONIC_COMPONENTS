export interface OptMenu {
  icono: string;
  name: string;
  direccion: string;
}

export interface NewsResp{
  status: string
  totalResults: number
  articles: Article[]
}

export interface Article {
  source: Source
  author?: string
  title?: string
  description?: string
  url: string
  urlToImage?: string
  publishedAt: string
  content: string
}

export interface Source {
  id?: string
  name: string
}



export interface Category {
  name: string;
  icon: string;
  color: string;
}
