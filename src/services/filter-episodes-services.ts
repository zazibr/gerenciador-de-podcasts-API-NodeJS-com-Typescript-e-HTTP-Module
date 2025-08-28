import { repositoryPodcast } from "../repositories/podcasts-repository";

export const serviceFilterEspisodes = async (podcastName: string) => {
    const data = await  repositoryPodcast(podcastName);
    return data;
}