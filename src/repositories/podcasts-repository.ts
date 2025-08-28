// import fs from "fs";
// import path from "path";
// import { PodCastModel } from "../models/podcast-model";



// const pathData = path.join(__dirname, "/src/repositories/podcasts.json");

// export const repositoryPodcast = async (podcastName?: string): Promise<PodCastModel[]> => {
//     const data = fs.readFileSync(pathData, "utf-8");
//     let jsonFile = JSON.parse(data);

//     if (podcastName) {
//         jsonFile = jsonFile.filter((podcast: PodCastModel) => podcast.podcastName.toLowerCase() === podcastName.toLowerCase());
//     }
//     return jsonFile;
// }


import { PodCastModel } from "../models/podcast-model";
import { serviceListEpisodes } from "../services/list-episodes-services";

export const repositoryPodcast = async (podcastName?: string): Promise<PodCastModel[]> => {
  let jsonFile = await serviceListEpisodes();

  if (podcastName) {
    jsonFile =  jsonFile.filter(
      (podcast) => podcast.podcastName.toLowerCase() === podcastName.toLowerCase()
    );
  }

  return jsonFile;
};