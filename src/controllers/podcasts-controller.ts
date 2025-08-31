import {IncomingMessage,  ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-services";
import { serviceFilterEspisodes } from "../services/filter-episodes-services";
import { StatusCode } from "../utils/status-codes";
import { ContentType } from "../utils/content-type";
import { PodCastTransferModel } from "../models/pod-cast-transfer-model";

export const getListEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) => {

    const content: PodCastTransferModel = await serviceListEpisodes();

    response.writeHead(content.statusCode, {"Content-Type": ContentType.JSON});
    response.end(JSON.stringify(content));
    return;

};

export const getFilterEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) => {

    const queryString = request.url?.split("?")[1] ?? "";
    const params = new URLSearchParams(queryString);

    if (params.size != 1 || !params.has("p")) {
        response.writeHead(StatusCode.BAD_REQUEST , {"Content-Type": ContentType.JSON});
        response.end(JSON.stringify({message: "Parâmetro inválido"}));

        return;
    }

    const pesquisa = (params.get("p") ?? "").toString();
    if (pesquisa.length === 0) {
        response.writeHead(StatusCode.BAD_REQUEST , {"Content-Type": ContentType.JSON});
        response.end(JSON.stringify({message: "Parâmetro inválido"}));

        return;
    }


    try {
        const content: PodCastTransferModel = await serviceFilterEspisodes(pesquisa);
        response.writeHead(content.statusCode, {"Content-Type": ContentType.JSON});
        response.end(JSON.stringify(content.body));
        return;

    } catch (error: unknown ) {

        if (error instanceof Error && error.message === "Nenhum epísódio encontrado") {
            response.writeHead(StatusCode.NO_CONTENT);
            response.end();            
        } else {
            response.writeHead(StatusCode.INTERNAL_SERVER_ERROR, {"Content-Type": ContentType.JSON});
            response.end(JSON.stringify({message: "Erro interno do servidor"}));
        }
    }
 

}