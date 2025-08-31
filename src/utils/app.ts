import * as http from "http";
import { httpMethod } from "./http-methods";
import { Routes } from "../routes/routes";
import {getFilterEpisodes, getListEpisodes} from "../controllers/podcasts-controller";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

        const baseUrl = request.url?.split("?")[0] ?? "";

        if (request.method === httpMethod.GET && baseUrl === Routes.LIST) {
            await getListEpisodes(request, response);
        }

        if (request.method === httpMethod.GET && baseUrl === Routes.EPISODE) {
            await getFilterEpisodes(request, response);
        }        
    }