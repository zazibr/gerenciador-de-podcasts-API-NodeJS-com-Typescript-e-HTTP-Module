import { PodCastModel } from "../models/podcast-model";
import { serviceListEpisodes } from "../services/list-episodes-services";

export const repositoryPodcast = async (podcastName?: string): Promise<PodCastModel[]> => {
  const response  = await serviceListEpisodes();
  let filtredEpisodes = response.body;

  if (podcastName) {
    filtredEpisodes =  filtredEpisodes.filter(
      (podcast) => podcast.podcastName.toLowerCase() === podcastName.toLowerCase()
    );
  }

  return filtredEpisodes;
};