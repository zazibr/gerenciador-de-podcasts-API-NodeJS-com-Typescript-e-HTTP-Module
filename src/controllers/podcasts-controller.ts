import {IncomingMessage,  ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-services";
import { serviceFilterEspisodes } from "../services/filter-episodes-services";

export const getListEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) => {

    const content = await serviceListEpisodes();

    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) => {

    const queryString = request.url?.split("?")[1] ?? "";
    const params = new URLSearchParams(queryString);

    if (params.size != 1 || !params.has("p")) {
        response.writeHead(400, {"Content-Type": "application/json"});
        response.end(JSON.stringify({message: "Parâmetro inválido"}));
        return;

    }

    const pesquisa = (params.get("p") ?? "").toString();

    const content = await serviceFilterEspisodes(pesquisa);
 
    if (content.length === 0) {
        response.writeHead(404, {"Content-Type": "application/json"});
        response.end(JSON.stringify({message: "Nenhum episódio encontrado"}));
        return;
    } else {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify(content));
    }

}