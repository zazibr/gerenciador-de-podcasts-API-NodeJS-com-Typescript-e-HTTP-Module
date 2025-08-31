import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodCastTransferModel } from "../models/pod-cast-transfer-model";
import { StatusCode } from "../utils/status-codes";

export const serviceFilterEspisodes = async (podcastName: string): Promise<PodCastTransferModel> => {

    let responseFormat:PodCastTransferModel = {
        statusCode: 0,
        body: []    
    };

    const data = await repositoryPodcast(podcastName);

    if (!data || data.length === 0) {
        responseFormat.body = data;
        responseFormat.statusCode = StatusCode.NO_CONTENT;
        throw new Error("Nenhum epísódio encontrado");
    }
    responseFormat.statusCode = StatusCode.OK
    responseFormat.body = data;

    return responseFormat;
}