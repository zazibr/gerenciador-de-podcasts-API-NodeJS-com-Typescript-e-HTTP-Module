import * as http from "http";
import { app } from "./utils/app";

const server = http.createServer( app );

const port = process.env.PORT || 3333; 

server.listen(port, ()=>{
    console.log( `servidor iniciado na porta ${port}`);
});

