
export const getCollectionPathParams = (id: string): string => {
  return `/collection/${id}`;
}

export const getConfigurationPathParams = (): string => {
  return '/configuration';
}

export const getCreditsPathParams = (id: string): string => {
  return `/credit/${id}`;
}

export const getGenrePathParams = (): string => {
  return `/genre`;
}

export const getMoviePathParams = (id: string): string => {
  return `/movie/${id}`;
}

export const getPeoplePathParams = (id: string): string => {
  return `/person/${id}`;
}

export const getReviewPathParams = (id: string): string => {
  return `/review/${id}`;
}

export const getSearchPathParams = (): string => {
  return '/search';
}

export const getTvEpisodeGroupPathParams = (id: string): string => {
  return `${getTvPathParams()}/episode_group/${id}`;
}

export const getTvEpisodePathParams = (tvId: string, seasonNumber: string, episodeNumber: string): string => {
  return `${getTvSeasonPathParams(tvId, seasonNumber)}/episode/${episodeNumber}`
}

export const getTvPathParams = (id: string = ''): string => {
  return id ? `/tv/${id}` : '/tv';
}

export const getTvSeasonPathParams = (tvId: string, seasonNumber: string): string => {
  return `${getTvPathParams(tvId)}/season/${seasonNumber}`;
}