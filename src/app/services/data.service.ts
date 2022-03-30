import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      skills: [
        {
            id: 1,
            title: 'Comprometimento',
            desc: 'Buscar ao máximo me empenhar para cumprir entregas da melhor forma e dentro dos prazos.',
            countLike: 0,
        },
        {
            id: 2,
            title: 'Estimulado por Desafios',
            desc: 'Todos precisamos de um estimulo para buscar sempre melhorar, o meu são os desafios. Desafios costumam me dar motivação para buscar sempre melhores soluções.',
            countLike: 0,
        },
        {
            id: 3,
            title: 'Ambição',
            desc: 'Procuro sempre evoluir na empresa onde estou atuando, buscando reconhecimento e posição melhor. Acredito que essa busca seja benéfico para ambos os lados.',
            countLike: 0,
        },
        {
            id: 4,
            title: 'Proatividade',
            desc: 'Solucionar problemas esta no sangue de um desenvolvedor, porém, costumo buscar sempre melhores soluções mesmo que nao seja solicitado no projeto.',
            countLike: 0,
        },
        {
            id: 5,
            title: 'Detalhista',
            desc: 'Ao me deparar com um problema, me esforço para que seja entregue com todos os atributos solicitados sejam concluídos da melhor maneira.',
            countLike: 0,
        },
        {
            id: 6,
            title: 'Inquietação',
            desc: 'Conhecimento nunca é demais. Costumo ter essa inquietação por buscar por conhecimento.',
            countLike: 0,
        },
        {
            id: 7,
            title: 'Inteligencia Emocional',
            desc: 'Costumo lidar com emoções principalmente no ambiente de trabalho com colegas. Trabalho bem a empatia para que sempre consiga ver o lado das pessoas.',
            countLike: 0,
        },
        {
            id: 8,
            title: 'Resolução de Conflitos',
            desc: 'Procuro entender ambos os lados de discações ou conflitos que tenham em alguma situação e buscar resolver de maneira que nao prejudique nenhum lado',
            countLike: 0,
        },
        {
            id: 9,
            title: 'Flexibilidade',
            desc: 'Mudança é uma coisa que nao me assusta. Inclusive estou bem acostumado a participar de vários projetos simultâneos e dar a mesma atenção e cuidado a todos eles.',
            countLike: 0,
        },
        {
            id: 10,
            title: 'Agilidade',
            desc: 'Entregas dentro dos prazos me motivam e procuro sempre fazer essas entregas antes do tempo estipulado.',
            countLike: 0,
        },
      ]
    };
  }
}