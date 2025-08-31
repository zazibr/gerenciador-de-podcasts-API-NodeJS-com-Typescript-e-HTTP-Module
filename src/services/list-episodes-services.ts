import { PodCastTransferModel } from "../models/pod-cast-transfer-model";
import { StatusCode } from "../utils/status-codes";

export const serviceListEpisodes = async (): Promise<PodCastTransferModel>  => {

    let responseFormat:PodCastTransferModel = {
        statusCode: 0,
        body: []    
    };
    
    const data = [
                    {
                        podcastName: "flow",
                        episode: "CBUM - Flow #319" ,
                        videoId:"pQSuQmUfS30",
                        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
                        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
                        category: ["saúde", "esporte", "bodybuilder"]
                    },
                    {
                        podcastName: "flow",
                        episode: "RUBENS BARRICHELLO - Flow #339" ,
                        videoId:"4KDGTdiOV4I",
                        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
                        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
                        category: ["esporte", "corrida"]
                    } ,
                    {
                        podcastName: "Programação Dinâmica",
                        episode: "Inteligência Artificial para Transcrição de Áudio com Whisper Open AI | IA na Prática #01" ,
                        videoId:"ftl8cKnjeDM",
                        cover: "https://i.ytimg.com/vi/ftl8cKnjeDM/maxresdefault.jpg",
                        link: "https://www.youtube.com/watch?v=ftl8cKnjeDM",
                        category: ["tecnologia", "Inteligência Artificial", "programação", "python", "Google Colab", "Transcrição de Vídeo", "Open AI"]
                    }    
                ];

    responseFormat.statusCode = StatusCode.OK
    responseFormat.body = data;
                
    return responseFormat;
}