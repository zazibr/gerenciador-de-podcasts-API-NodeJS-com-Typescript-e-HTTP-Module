# Podcast Manager 


### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episódios separados por categorias

### Domínio

Padcasts feitos em vídeo

### Funcionalidades (Features)
- Listar os episódios podcasts em sessões de categorias
    - [saúde, bodybuilder, esporte, corrida,  mentalidade, humor]
- Filtrar episódios por nome de podcast


## Como


#### Fature:

- Listar os episódios pdocasts em sessões de categorias

### Como vou implementar:
GET: retorna lista de eposódios

response:


````js

retorno = [
    {
        padcastName: "flow",
        episode: "CBUM - Flow #319" ,
        videoId:"pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        category: ["saúde", "esporte", "bodybuilder"]
    },
    {
        padcastName: "flow",
        episode: "RUBENS BARRICHELLO - Flow #339" ,
        videoId:"4KDGTdiOV4I",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        category: ["esporte", "corrida"]
    }    
];
````

GET: retorna lista de eposódios baseado em um parametro enviado pelo cliente do nome do podcast


### Arquitetura
![](arquitetura%20base.png)
