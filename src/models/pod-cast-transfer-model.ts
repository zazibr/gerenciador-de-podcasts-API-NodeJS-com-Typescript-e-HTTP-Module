import { PodCastModel } from "./podcast-model";

export interface PodCastTransferModel {
    statusCode : number,
    body: PodCastModel[];
}