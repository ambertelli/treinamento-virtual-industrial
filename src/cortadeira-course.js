// Conteúdo do treinamento. REGRA: apenas texto e figuras do
// "Manual de Operação - Cortadeira LS-30.1 AFH" (42 páginas, Serpa).
// Textos das seções reproduzem o manual; figuras são as imagens originais
// extraídas do PDF, com número e legenda do "Índice de Ilustrações".
// Onde o manual traz só figuras (sem texto), isso é sinalizado como pendente.

export const MANUAL_URL = `${import.meta.env.BASE_URL}Manual%20de%20Opera%C3%A7%C3%A3o%20-%20Cortadeira%20LS-30.1%20AFH.pdf`;
/** Página impressa no manual -> página do arquivo PDF (capa sem número). */
export const pdfPage = (printed) => printed + 1;

const CAPTIONS = [
  ["Chave Geral", 5],
  ["Botão Emergência Botoeira Principal", 6],
  ["Botão Emergência Botoeira Acesso Afiação", 6],
  ["Botão Emergência Botoeira Quadro Elétrico", 7],
  ["Travas Elétricas Portas Cárter", 8],
  ["Tela Principal", 9],
  ["Contato", 11],
  ["Alarmes", 12],
  ["Dados Produto", 14],
  ["Afiação Lâmina", 16],
  ["Mesa de Corte", 18],
  ["Configurações", 19],
  ["Controle Torque", 20],
  ["Corrente Drive", 21],
  ["Status Servo-drives", 24],
  ["Status Servo-drive Mesa de Corte", 25],
  ["Status Servo-drive Empurrador", 25],
  ["Tampas Acesso Ajuste Prensas", 26],
  ["Ajuste Abertura / Fechamento Prensas", 27],
  ["Detalhe Ajuste Prensas", 27],
  ["Ajuste Guias Faca de Corte", 28],
  ["Sistema Afiação Lâmina de Corte", 28],
  ["Detalhe Referência Ângulo Base Afiação", 29],
  ["Bomba Hidráulica Esticamento Lâmina de Corte", 30],
  ["Pistão Esticamento Lâmina de Corte", 30],
  ["Pressão Ideal de Trabalho", 31],
  ["Esticamento Corrente Empurradores", 31],
  ["Patins Mesa de Corte", 32],
  ["Detalhe Engraxadeira Patim", 32],
  ["Engraxadeira Patim Grupo Afiação", 33],
  ["Engraxadeira Patim Grupo Afiação", 33],
  ["Mancal Eixo Acionado Empurrador", 34],
  ["Mancal Oposto Eixo Acionado Empurrador", 34],
  ["Mancal Eixo Acionamento Mesa de Corte", 35],
  ["Mancal Eixo Acionamento Mesa de Corte", 35],
  ["Mancal Eixo Elevador de Log's", 36],
  ["Mancal Oposto Eixo Elevador de Log's", 36],
  ["Mancal Comporta Descarga (Superior)", 37],
  ["Mancal Oposto Comporta Descarga (Superior)", 37],
  ["Patim Elevador de Log's", 38],
  ["Mancal Comporta Carga (Inferior)", 38],
  ["Mancal Oposto Comporta Carga (Inferior)", 39],
  ["Corrente Empurrador", 39],
  ["Carro Empurrador e Guias Uhmw", 40],
  ["Redutores Empurrador e Ajuste Altura Mesa", 40],
  ["Redutor Elevador de Log's", 41],
  ["Redutor Transportador de Saída", 41],
];

export const FIGURES = CAPTIONS.map(([caption, page], i) => ({ n: i + 1, caption, page, url: MANUAL_URL + "#page=" + (page + 1) }));

const figs = (...ns) => ns.map((n) => FIGURES[n - 1]);
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);

export const PENDING_LABEL = "Confirmar no Manual de Operação oficial ou com instrutor autorizado.";

export const MODULES = [
  {
    id: "boas-vindas",
    code: "M00",
    chapter: "Introdução",
    title: "Boas-vindas e regras do treinamento",
    pages: [1, 4],
    intro: "Como usar este treinamento e seus limites.",
    sections: [
      {
        num: "—",
        title: "Sobre este material",
        page: 1,
        paragraphs: [
          "Bem-vindo ao Treinamento Virtual da Cortadeira LS-30.1 AFH. Todo o conteúdo e todas as figuras vêm do Manual de Operação do equipamento, organizado na mesma ordem dos capítulos: 1 – Habilitação e Homing Eixos, 2 – Telas e Configurações, 3 – Troca de Formatos e 4 – Pontos de Lubrificação.",
          "Este é um material didático e não é autorização para operar. Ele não substitui o Manual de Operação oficial, a capacitação prática autorizada nem os procedimentos de segurança da empresa.",
          "Cada seção mostra o número e a página do manual. Use o botão de página para abrir o PDF original exatamente naquele ponto. Onde o manual traz apenas figuras, sem texto explicativo, o treinamento indica que o assunto deve ser confirmado com instrutor autorizado.",
        ],
      },
    ],
    questions: [
      {
        prompt: "Concluir este treinamento virtual autoriza você a operar a cortadeira?",
        options: ["Sim, ao final do curso", "Não; é material didático e não substitui a capacitação prática autorizada", "Sim, se acertar todas as perguntas"],
        correct: 1,
        explanation: "O curso é didático. A operação depende de capacitação prática autorizada, do manual oficial e dos procedimentos de segurança da empresa.",
        ref: "Regras do treinamento",
      },
    ],
  },
  {
    id: "cap1-seguranca",
    code: "M01",
    chapter: "1 – Habilitação e Homing Eixos",
    title: "Chave geral, emergências e portas do cárter",
    pages: [5, 8],
    intro: "Seções 1.1 a 1.3: condições de segurança antes de habilitar a máquina.",
    sections: [
      {
        num: "1.1",
        title: "Chave Geral",
        page: 5,
        paragraphs: [
          "Antes de iniciar a operação do equipamento, verifique se todas as condições de segurança foram cumpridas, se a área restrita interna ao cárter de proteção encontra-se livre de pessoas ou objetos depositados sobre as estruturas da máquina.",
          "Acione a chave de seccionamento geral (Figura 1) instalada na porta do quadro elétrico. A confirmação de comandos elétricos energizados é feita por meio de sinalização luminosa na cor branca instalada acima da chave geral.",
        ],
        figures: figs(1),
      },
      {
        num: "1.2",
        title: "Botões de Emergência",
        page: 5,
        paragraphs: [
          "Verifique se os botões de parada em emergência estão destravados, tal ação é feita girando os botões em sentido horário, de forma que a indicação verde em sua base fique visível.",
          "Os botões de parada em emergência são 3 e estão dispostos nas seguintes posições: botoeira principal de operação (Figura 2), botoeira de emergência acesso afiação (Figura 3), botoeira de emergência acesso quadro elétrico (Figura 4).",
          "Os botões de emergência interrompem instantaneamente a operação do equipamento, bloqueando de forma rápida os movimentos em curso, independente do término do processo.",
        ],
        figures: figs(2, 3, 4),
      },
      {
        num: "1.3",
        title: "Portas Cárter Proteção",
        page: 7,
        paragraphs: [
          "As portas dos cárteres de proteção da máquina precisam estar completamente fechadas para que ela possa ser habilitada. Após habilitação as mesmas são travadas eletricamente, garantindo a segurança do processo.",
          "Para acessar novamente a área interna do equipamento, faz-se necessária a desabilitação por meio de comando “Desabilita” na botoeira principal (Figura 2), aguardando-se alguns segundos pela completa imobilização dos motores, quando finalmente as travas elétricas são liberadas.",
          "É impossível habilitar o funcionamento do equipamento com portas abertas.",
        ],
        figures: figs(5),
      },
    ],
    questions: [
      {
        prompt: "Como se confirma que os comandos elétricos estão energizados após acionar a chave geral?",
        options: ["Pelo LED verde no botão Habilita Cortadeira", "Pela sinalização luminosa branca instalada acima da chave geral", "Pela sirene de partida"],
        correct: 1,
        explanation: "Seção 1.1: a confirmação é feita por sinalização luminosa na cor branca instalada acima da chave geral (Figura 1).",
        ref: "1.1 – pág. 5",
      },
      {
        prompt: "Quantos botões de parada em emergência existem e onde ficam?",
        options: ["Dois: botoeira principal e porta do cárter", "Três: botoeira principal, acesso afiação e acesso quadro elétrico", "Um, apenas na botoeira principal"],
        correct: 1,
        explanation: "Seção 1.2: são 3 botões — botoeira principal (Fig. 2), acesso afiação (Fig. 3) e acesso quadro elétrico (Fig. 4).",
        ref: "1.2 – págs. 5–7",
      },
      {
        prompt: "Como verificar se um botão de emergência está destravado?",
        options: ["Girando-o no sentido horário até a indicação verde da base ficar visível", "Pressionando-o duas vezes", "Observando a luz branca do quadro"],
        correct: 0,
        explanation: "Seção 1.2: gira-se o botão em sentido horário, de forma que a indicação verde em sua base fique visível.",
        ref: "1.2 – pág. 5",
      },
      {
        prompt: "O que é necessário para acessar novamente a área interna do equipamento?",
        options: ["Abrir a porta logo após o fim do corte", "Comando “Desabilita” na botoeira principal e aguardar alguns segundos até a imobilização dos motores e liberação das travas", "Desligar a sinalização branca"],
        correct: 1,
        explanation: "Seção 1.3: desabilita-se pelo comando “Desabilita” e aguarda-se a completa imobilização dos motores, quando as travas elétricas são liberadas.",
        ref: "1.3 – pág. 7",
      },
    ],
  },
  {
    id: "cap1-habilitacao",
    code: "M02",
    chapter: "1 – Habilitação e Homing Eixos",
    title: "Procedimento de habilitação e ciclo automático",
    pages: [8, 9],
    intro: "Seções 1.4 e 1.5: habilitação, homing e partida do ciclo automático.",
    sections: [
      {
        num: "1.4",
        title: "Procedimento Habilitação",
        page: 8,
        paragraphs: [
          "Satisfeitos os requisitos citados para habilitação (chave geral conectada, botões de emergência destravados e portas do cárter de proteção fechadas), basta pressionar na botoeira principal (Figura 2) o botão “Habilita Cortadeira”.",
          "O led verde de indicação de habilitação se ilumina no próprio botão e uma sinalização sonora é ouvida durante o procedimento de busca de zero (‘homing’) dos servos motores que se segue. Finalizando-se este processo, a máquina encontra-se pronta para operação.",
        ],
        figures: figs(2),
      },
      {
        num: "1.5",
        title: "Ciclo Automático",
        page: 8,
        paragraphs: [
          "Estando o equipamento habilitado e pronto para operar, o operador deve iniciar o ciclo automático pressionando o botão “início ciclo automático” na botoeira principal (Figura 2).",
          "Por questão de segurança na partida do equipamento, o botão deve ser mantido pressionado por três segundos durante os quais a sirene de partida emitirá sinalização sonora, indicando às pessoas próximas que devem se afastar do equipamento em virtude da posta em marcha.",
          "Entrando o equipamento com sucesso em modo de operação automático, o led verde de indicação de ciclo automático ativo se ilumina no próprio botão, confirmando o modo de operação.",
          "Caso alguma pessoa de forma inadvertida ainda permaneça dentro da área delimitada de segurança da máquina, deve imediatamente pressionar o botão de emergência mais próximo (Figura 3 ou Figura 4), impedindo assim o funcionamento e notificando o operador que tenta colocar o equipamento em modo automático.",
        ],
        figures: figs(3, 4),
      },
    ],
    questions: [
      {
        prompt: "Quais são os requisitos para habilitar a cortadeira?",
        options: ["Chave geral conectada, botões de emergência destravados e portas do cárter fechadas", "Apenas a chave geral conectada", "Ciclo automático ativo e Bloqueio Log desligado"],
        correct: 0,
        explanation: "Seção 1.4 lista os três requisitos: chave geral conectada, emergências destravadas e portas do cárter fechadas.",
        ref: "1.4 – pág. 8",
      },
      {
        prompt: "O que ocorre logo após pressionar “Habilita Cortadeira”?",
        options: ["A mesa vai para a posição de troca de lâmina", "Acende o led verde e há sinalização sonora durante o homing dos servos motores", "O ciclo automático inicia sozinho"],
        correct: 1,
        explanation: "Seção 1.4: o led verde se ilumina e ouve-se sinalização sonora durante a busca de zero (homing) dos servos motores.",
        ref: "1.4 – pág. 8",
      },
      {
        prompt: "Por quanto tempo o botão “início ciclo automático” deve ser mantido pressionado?",
        options: ["Um toque rápido", "Três segundos, enquanto a sirene de partida sinaliza", "Dez segundos"],
        correct: 1,
        explanation: "Seção 1.5: por segurança na partida, o botão é mantido pressionado por três segundos durante os quais a sirene emite sinalização sonora.",
        ref: "1.5 – pág. 8",
      },
      {
        prompt: "Uma pessoa ainda está dentro da área delimitada de segurança durante a partida. O que ela deve fazer?",
        options: ["Sair rapidamente pela porta do cárter", "Pressionar imediatamente o botão de emergência mais próximo (Fig. 3 ou 4)", "Aguardar o fim do ciclo"],
        correct: 1,
        explanation: "Seção 1.5: deve pressionar imediatamente o botão de emergência mais próximo, impedindo o funcionamento e notificando o operador.",
        ref: "1.5 – págs. 8–9",
      },
    ],
  },
  {
    id: "cap2-tela",
    code: "M03",
    chapter: "2 – Telas e Configurações",
    title: "Tela Principal: navegação, memórias e acesso",
    pages: [9, 12],
    intro: "Seções 2.1.1 a 2.1.9 da Tela Principal.",
    sections: [
      {
        num: "2.1",
        title: "Tela Principal",
        page: 9,
        paragraphs: [
          "2.1.1 Dados Produto: direciona o operador para a tela de configuração do formato a ser produzido pela cortadeira.",
          "2.1.2 Afiação Lâmina: direciona o operador para a tela de configurações de afiação da lâmina de corte.",
          "2.1.3 Mesa de Corte: direciona o operador para a tela de configurações de funcionamento do movimento da mesa de corte.",
          "2.1.4 Configurações: direciona o operador para a tela de configurações gerais de funcionamento da cortadeira.",
        ],
        figures: figs(6),
      },
      {
        num: "2.1.5",
        title: "Seleciona Produto",
        page: 10,
        paragraphs: [
          "Ao ser pressionado, confirma a seleção do produto constante na caixa de memórias de produto logo abaixo. Este equipamento é dotado de memórias de produto que funcionam como receitas de funcionamento: todos os campos de todas as telas ficam com seus valores e configurações armazenados na respectiva memória de produto.",
          "Sempre que a memória de produto é modificada, todos os parâmetros recentemente alterados são automaticamente salvos na memória de produto anterior, e os parâmetros da nova memória de produto selecionada são tornados ativos. Não são necessários comandos manuais de leitura e gravação de receitas, visto que estes processos ocorrem de forma autônoma para o operador.",
          "2.1.6 Principal: direciona o operador para a tela principal da interface homem máquina.",
        ],
      },
      {
        num: "2.1.7",
        title: "Contato",
        page: 11,
        paragraphs: ["Direciona o operador para a tela de informações de contato da Serpa Indústria de Máquinas e Equipamentos Ltda."],
        figures: figs(7),
      },
      {
        num: "2.1.8",
        title: "Alarmes",
        page: 12,
        paragraphs: [
          "Direciona o operador para a tela de visualização de todo o histórico de falhas e alarmes registrados no equipamento. O comando “Clear” apaga a lista de alarme memorizada na interface e seus respectivos horários de disparo.",
        ],
        figures: figs(8),
      },
      {
        num: "2.1.9",
        title: "Entrar e Sair",
        page: 12,
        paragraphs: [
          "Executa os comandos de entrada e saída da segurança na interface homem máquina (‘login’ e ‘logout’). Diversos campos de configuração da interface são protegidos por senha, para que não sejam modificados de forma inadvertida por pessoas não habilitadas para tal.",
          "Sempre que o equipamento é reinicializado, é necessário entrar com a senha para alterar certos campos; após alteração, o operador pode efetuar o comando “Sair” para bloquear novamente os campos protegidos.",
          "Existem duas contas pré-programadas na interface: Manutenção (voltada para uso por parte do cliente final) e Desenvolvimento (voltada para uso pelo pessoal da SERPA Ltda).",
        ],
      },
    ],
    questions: [
      {
        prompt: "O que acontece com os parâmetros alterados quando se seleciona outra memória de produto?",
        options: ["São descartados", "São salvos automaticamente na memória anterior e a nova memória se torna ativa", "Precisam ser gravados manualmente"],
        correct: 1,
        explanation: "Seção 2.1.5: as alterações recentes são salvas automaticamente na memória anterior; não são necessários comandos manuais de leitura e gravação.",
        ref: "2.1.5 – pág. 10",
      },
      {
        prompt: "O que faz o comando “Clear” na tela de Alarmes?",
        options: ["Reinicia a máquina", "Apaga a lista de alarmes memorizada e seus horários de disparo", "Desabilita o alarme sonoro de partida"],
        correct: 1,
        explanation: "Seção 2.1.8: “Clear” apaga a lista de alarme memorizada na interface e os respectivos horários de disparo.",
        ref: "2.1.8 – pág. 12",
      },
      {
        prompt: "Quais contas pré-programadas existem na interface?",
        options: ["Operador e Supervisor", "Manutenção (cliente final) e Desenvolvimento (pessoal da SERPA)", "Administrador e Convidado"],
        correct: 1,
        explanation: "Seção 2.1.9: Manutenção, para o cliente final, e Desenvolvimento, para o pessoal da SERPA Ltda.",
        ref: "2.1.9 – pág. 12",
      },
    ],
  },
  {
    id: "cap2-funcoes",
    code: "M04",
    chapter: "2 – Telas e Configurações",
    title: "Força Corte, Força Carga, Bloqueio Log e indicações",
    pages: [12, 13],
    intro: "Seções 2.1.10 a 2.1.13 da Tela Principal.",
    sections: [
      {
        num: "2.1.10",
        title: "Força Corte",
        page: 12,
        paragraphs: [
          "Em modo automático, a cortadeira somente inicia um novo corte quando o sensor de verificação de produto na canaleta é atuado. No entanto, em alguns casos pode ser necessário cortar um produto que já foi parcialmente cortado e não está atuando o sensor de verificação de produto, ou mesmo pretende-se efetuar os comandos de corte sem um produto na canaleta de corte.",
          "Para estes casos é usada a função “Força Corte”, que tem sua ativação indicada por led verde ao lado do botão.",
        ],
        figures: figs(6),
      },
      {
        num: "2.1.11",
        title: "Força Carga",
        page: 13,
        paragraphs: [
          "O sistema de comporta superior (que descarrega o produto diretamente na canaleta de corte) não possui sensoriamento, sendo que pode ocorrer de um log ficar parado nesta posição, sem que o corte seja iniciado em ciclo automático.",
          "A carga de produto pode ser forçada mediante o acionamento desta função, sendo que a condição de acionamento exige que o equipamento esteja habilitado, em ciclo automático e com o bloqueio de log desativado.",
        ],
      },
      {
        num: "2.1.12",
        title: "Bloqueio Log",
        page: 13,
        paragraphs: [
          "Esta função, quando ativada, evita que a máquina inicie um novo ciclo de corte, mesmo que esteja habilitada em modo de operação automático e que um produto esteja posicionado na canaleta de corte. É usada para bloquear temporariamente a produção e tem sua atuação indicada por led vermelho ao lado do botão.",
        ],
      },
      {
        num: "2.1.13",
        title: "Avanço Log / Corte Atual",
        page: 13,
        paragraphs: [
          "Tratam-se de indicações do funcionamento da máquina. O Avanço Log indica a medida em milímetros de avanço do log que está atualmente em corte, sendo a posição zero o primeiro corte.",
          "O Corte Atual é a indicação do rolo que está sendo cortado no momento; por exemplo, para um log que produzirá 15 rolos bons, este indicador fará sua indicação sequencialmente de 0 até 15 rolos.",
        ],
      },
    ],
    questions: [
      {
        prompt: "Em modo automático, quando a cortadeira inicia um novo corte?",
        options: ["A cada três segundos", "Quando o sensor de verificação de produto na canaleta é atuado", "Quando o operador pressiona Força Carga"],
        correct: 1,
        explanation: "Seção 2.1.10: em modo automático, um novo corte só inicia quando o sensor de verificação de produto na canaleta é atuado.",
        ref: "2.1.10 – pág. 12",
      },
      {
        prompt: "Qual a condição para acionar a função Força Carga?",
        options: ["Máquina desabilitada", "Habilitada, em ciclo automático e com o bloqueio de log desativado", "Modo Ajuste ativo"],
        correct: 1,
        explanation: "Seção 2.1.11: exige equipamento habilitado, em ciclo automático e com bloqueio de log desativado.",
        ref: "2.1.11 – pág. 13",
      },
      {
        prompt: "Qual o efeito do Bloqueio Log e como é indicado?",
        options: ["Impede um novo ciclo de corte; led vermelho ao lado do botão", "Força a carga do log; led verde", "Desliga a máquina; luz branca"],
        correct: 0,
        explanation: "Seção 2.1.12: evita que a máquina inicie novo ciclo de corte, bloqueando temporariamente a produção; indicado por led vermelho.",
        ref: "2.1.12 – pág. 13",
      },
    ],
  },
  {
    id: "cap2-dados",
    code: "M05",
    chapter: "2 – Telas e Configurações",
    title: "Dados Produto",
    pages: [14, 15],
    intro: "Seção 2.2: medidas do log, dos refilos e do corte.",
    sections: [
      {
        num: "2.2.1",
        title: "Medida Log",
        page: 14,
        paragraphs: [
          "É a medida total do log (rolo em sua medida original após rebobinamento), indicada em milímetros. Com base nessa medida, a máquina realiza todos os cálculos de avanço para corte, incluindo a otimização do primeiro avanço maior, para que não sejam efetuados movimentos de corte em falso.",
        ],
        figures: figs(9),
      },
      {
        num: "2.2.2",
        title: "Medida Refilo Final",
        page: 14,
        paragraphs: [
          "Esta medida não pode ser alterada pela interface, sendo uma consequência das outras medidas informadas, incluindo log, medida de corte e medida do refilo inicial. Aumentando-se a medida do Refilo Inicial, diminui-se automaticamente a medida deste campo. Trata-se da ponta ou extremidade do log a ser extraída próximo do empurrador de logs.",
        ],
      },
      {
        num: "2.2.3",
        title: "Medida Corte",
        page: 15,
        paragraphs: [
          "É a medida final dos rolos que se pretende produzir na cortadeira, dada em milímetros; pode-se otimizar tal medida para obter o maior aproveitamento de rolos do log a ser cortado. Pode ser alterada com precisão de milímetros.",
        ],
      },
      {
        num: "2.2.4",
        title: "Medida Refilo Inicial",
        page: 15,
        paragraphs: [
          "É a medida do primeiro refilo ou ponta a ser extraído do log quando este começa a ser cortado; sua medida pode ser alterada em milímetros e influencia diretamente na quantidade de rolos bons e no comprimento do refilo final que se obtém como consequência de sua medida.",
        ],
      },
      {
        num: "2.2.5",
        title: "Quantidade Cortes Bons",
        page: 15,
        paragraphs: [
          "É a medida que indica o aproveitamento que se fará do log que será cortado; otimizando-se a medida de corte e os refilos, obtém-se a indicação de quantos rolos serão aproveitados do referido log.",
          "2.2.6 Avanço Log / Corte Atual: as mesmas indicações descritas na Tela Principal (avanço do log em milímetros e rolo em corte no momento).",
        ],
      },
    ],
    questions: [
      {
        prompt: "A Medida Refilo Final pode ser alterada diretamente pela interface?",
        options: ["Sim, em milímetros", "Não; é consequência das medidas de log, corte e refilo inicial", "Sim, com a senha de Manutenção"],
        correct: 1,
        explanation: "Seção 2.2.2: não pode ser alterada pela interface; resulta das outras medidas informadas.",
        ref: "2.2.2 – pág. 14",
      },
      {
        prompt: "Ao aumentar a Medida Refilo Inicial, o que ocorre com o Refilo Final?",
        options: ["Aumenta", "Diminui automaticamente", "Não se altera"],
        correct: 1,
        explanation: "Seção 2.2.2: aumentando-se o Refilo Inicial, diminui-se automaticamente a medida do Refilo Final.",
        ref: "2.2.2 – pág. 14",
      },
      {
        prompt: "Para que a máquina usa a Medida Log?",
        options: ["Para todos os cálculos de avanço para corte, incluindo a otimização do primeiro avanço", "Apenas para exibir na tela", "Para definir a velocidade da lâmina"],
        correct: 0,
        explanation: "Seção 2.2.1: com base nessa medida a máquina realiza todos os cálculos de avanço, evitando movimentos de corte em falso.",
        ref: "2.2.1 – pág. 14",
      },
    ],
  },
  {
    id: "cap2-afiacao",
    code: "M06",
    chapter: "2 – Telas e Configurações",
    title: "Afiação Lâmina",
    pages: [16, 17],
    intro: "Seção 2.3: controles e comandos da tela de afiação.",
    sections: [
      {
        num: "2.3.1",
        title: "Controle Afiação",
        page: 16,
        paragraphs: [
          "Controle responsável pela aproximação dos rebolos de afiação da lâmina de corte. Pode ter seu funcionamento definido como modo manual ou automático, sendo o modo escolhido sinalizado pelos respectivos led’s vermelho e verde.",
          "Intervalo Cortes: quantidade de cortes efetivados pela máquina entre os ciclos de afiação. Tempo Afiação: tempo de contato dos rebolos com a lâmina de corte durante cada ciclo de afiação. Intervalo Atual: contagem efetiva de cortes efetuados para o próximo ciclo de afiação.",
          "O consumo (desgaste) da lâmina de corte pode ser modulado ajustando os parâmetros Intervalo Cortes e Tempo Afiação. Devem usar-se o maior intervalo e o menor tempo possível de forma que a lâmina ainda efetue um bom corte, aumentando assim a vida útil do conjunto rebolos / lâmina.",
        ],
        figures: figs(10),
      },
      {
        num: "2.3.2",
        title: "Controle Aproximação",
        page: 16,
        paragraphs: [
          "Controle responsável pela aproximação do conjunto de afiação em direção da lâmina de corte, compensando o desgaste da mesma. Sempre que a lâmina é afiada, ocorre um pequeno desgaste que faz com que os rebolos fiquem distantes dela. Esta função visa compensar tal desgaste, mantendo os rebolos sempre em contato com a lâmina na posição ideal. Pode funcionar em modo manual ou automático (led’s vermelho e verde).",
          "Intervalo Cortes: quantidade de cortes entre os ciclos de aproximação dos rebolos. Quantidade de Pulsos: o atuador da aproximação é um cilindro pneumático com rolamento catraca, que a cada avanço aciona o fuso de avanço por uma fração de seu giro; a quantidade de pulsos é o número de atuações deste cilindro a cada ciclo de aproximação. Intervalo Atual: contagem efetiva de cortes para o próximo ciclo de aproximação.",
        ],
      },
      {
        num: "2.3.3–2.3.5",
        title: "Afiação P, Afiação F e Aproxima",
        page: 17,
        paragraphs: [
          "Afiação P: comando de afiação parcial; mantém os rebolos em contato com a lâmina pelo tempo determinado no parâmetro “Tempo Afiação”. Usado para comandos manuais quando o modo automático não está ativo, ou para afiações suplementares, em caso de necessidade verificada pelo operador.",
          "Afiação F: comando de afiação fixo; mantém os rebolos em contato com a lâmina de forma fixa até que o comando seja manualmente desinserido. Utilizado principalmente para deixar uma lâmina nova em afiação contínua até que fique pronta para o uso.",
          "Aproxima: comando de aproximação manual. Efetua um ciclo de aproximação manual do conjunto afiação quando o modo automático de aproximação não está ativo, ou quando se deseja uma aproximação suplementar, compensando o afastamento.",
        ],
      },
    ],
    questions: [
      {
        prompt: "Segundo o manual, como aumentar a vida útil do conjunto rebolos / lâmina?",
        options: ["Menor intervalo e maior tempo de afiação", "Maior intervalo e menor tempo possível, mantendo um bom corte", "Usar sempre Afiação F"],
        correct: 1,
        explanation: "Seção 2.3.1: devem usar-se o maior intervalo e o menor tempo possível de forma que a lâmina ainda efetue um bom corte.",
        ref: "2.3.1 – pág. 16",
      },
      {
        prompt: "Para que serve principalmente o comando Afiação F?",
        options: ["Para deixar uma lâmina nova em afiação contínua até ficar pronta para uso", "Para afiação de 3 segundos", "Para aproximar o conjunto de afiação"],
        correct: 0,
        explanation: "Seção 2.3.4: mantém os rebolos em contato até ser desinserido; usado principalmente com lâmina nova.",
        ref: "2.3.4 – pág. 17",
      },
      {
        prompt: "O que é a Quantidade de Pulsos no Controle Aproximação?",
        options: ["Número de cortes entre afiações", "Número de atuações do cilindro pneumático com rolamento catraca a cada ciclo de aproximação", "Velocidade da lâmina"],
        correct: 1,
        explanation: "Seção 2.3.2: é o número de atuações do cilindro que aciona o fuso de avanço a cada ciclo de aproximação.",
        ref: "2.3.2 – pág. 17",
      },
    ],
  },
  {
    id: "cap2-mesa",
    code: "M07",
    chapter: "2 – Telas e Configurações",
    title: "Mesa de Corte",
    pages: [18, 19],
    intro: "Seção 2.4: posição e velocidades da mesa de corte.",
    sections: [
      {
        num: "2.4.1–2.4.2",
        title: "Posição Atual Mesa de Corte",
        page: 18,
        paragraphs: [
          "Indicação atual da posição de avanço da mesa de corte em milímetros. Serve como referência para verificação da movimentação no corte e pode ser verificada também por meio da representação gráfica da posição.",
          "O gráfico de barras é uma representação gráfica do ciclo completo de avanço da mesa de corte, desde sua partida até o retorno para posição de origem.",
        ],
        figures: figs(11),
      },
      {
        num: "2.4.3–2.4.4",
        title: "Velocidade Avanço e Retorno Mesa",
        page: 18,
        paragraphs: [
          "Velocidade Avanço Mesa: velocidade com a qual a mesa avança o produto em direção à lâmina de corte. Pode ser modulada de forma que o corte ocorra sem vibração, queima do produto, ou mesmo desvios laterais por excesso de velocidade.",
          "Velocidade Retorno Mesa: velocidade com a qual a mesa de corte retorna à sua posição de origem após ter completado o ciclo de corte.",
        ],
      },
      {
        num: "2.4.5–2.4.6",
        title: "Velocidade Primeiro e Último Corte",
        page: 19,
        paragraphs: [
          "Velocidade Primeiro Corte: velocidade modulada no primeiro corte para extração do primeiro refilo do log. É uma variação da velocidade de avanço da mesa: definida em 100%, o primeiro corte é efetivado com a mesma velocidade dos demais. Diferentes percentuais podem ser usados de acordo com a dificuldade de corte do produto, sempre como percentuais da velocidade dos demais cortes.",
          "Velocidade Último Corte: funciona da mesma forma, porém altera a velocidade de extração do refilo final do log.",
        ],
      },
    ],
    questions: [
      {
        prompt: "Velocidade Primeiro Corte definida em 100% significa:",
        options: ["Velocidade máxima da máquina", "O primeiro corte usa a mesma velocidade dos demais cortes", "Que o primeiro refilo não é extraído"],
        correct: 1,
        explanation: "Seção 2.4.5: em 100%, o primeiro corte é efetivado com a mesma velocidade dos demais cortes.",
        ref: "2.4.5 – pág. 19",
      },
      {
        prompt: "Com que objetivo a Velocidade Avanço Mesa pode ser modulada?",
        options: ["Para que o corte ocorra sem vibração, queima do produto ou desvios laterais", "Para reduzir o ruído em stand-by", "Para acelerar o homing"],
        correct: 0,
        explanation: "Seção 2.4.3: modula-se para evitar vibração, queima do produto e desvios laterais por excesso de velocidade.",
        ref: "2.4.3 – pág. 18",
      },
    ],
  },
  {
    id: "cap2-config-a",
    code: "M08",
    chapter: "2 – Telas e Configurações",
    title: "Configurações: torque, corrente, prensa, lâmina e ajuste",
    pages: [19, 22],
    intro: "Seções 2.5.1 a 2.5.5.",
    sections: [
      {
        num: "2.5",
        title: "Configurações",
        page: 19,
        paragraphs: ["Tela de configurações gerais de funcionamento da cortadeira."],
        figures: figs(12),
      },
      {
        num: "2.5.1",
        title: "Controle Torque",
        page: 20,
        paragraphs: [
          "O controle de torque atua na máquina como uma embreagem de segurança eletrônica. Sempre que se comanda um movimento em um servo motor, existe uma diferença entre a posição real do eixo e a posição desejada pelo controlador, chamada de erro de seguimento.",
          "Estipula-se um limite máximo admissível para este erro em cada um dos eixos (Empurrador e Mesa de Corte); caso o eixo seja submetido a uma força maior do que a costumeira, o erro de seguimento será significativamente incrementado, excedendo o limite programado e desabilitando a máquina por segurança, com a indicação de erro de seguimento no referido eixo.",
          "Com o aumento da velocidade de processo, o erro de seguimento é também incrementado, sendo necessária a correção para mais do limite programado neste caso.",
        ],
        figures: figs(13),
      },
      {
        num: "2.5.2",
        title: "Corrente Drive",
        page: 21,
        paragraphs: [
          "Caso o erro de seguimento não aumente significativamente com o aumento do esforço nos eixos ou da velocidade de processo, isso indica que a potência do eixo foi superdimensionada. Para sensibilizar o erro de seguimento, nesta tela limita-se a corrente de operação de cada servo motor, diminuindo sua força e aumentando o erro de seguimento demonstrado em operação.",
          "As correntes positivas e negativas para cada eixo devem ser ajustadas proporcionalmente, visto tratarem-se de correntes de aceleração e frenagem dos eixos respectivamente.",
        ],
        figures: figs(14),
      },
      {
        num: "2.5.3",
        title: "Ajuste Prensa",
        page: 21,
        paragraphs: [
          "Aciona o cilindro pneumático de fechamento das prensas de corte. É utilizado para mantê-las fechadas enquanto se ajusta a pressão de fechamento com um log posicionado no interior das prensas. Sua atuação é indicada por led amarelo próximo do botão de comando.",
        ],
      },
      {
        num: "2.5.4",
        title: "Posição Troca Lâmina",
        page: 22,
        paragraphs: [
          "Desloca a mesa de corte para sua posição de zero, fazendo com que o acesso para troca da lâmina de corte fique livre. Sempre que comandada esta função, a mesa vai para posição zero e a máquina é automaticamente desabilitada. A indicação de atuação é feita por led amarelo próximo do botão.",
        ],
        pending: "O manual descreve o comando, mas não o procedimento de troca da lâmina.",
      },
      {
        num: "2.5.5",
        title: "Modo Ajuste",
        page: 22,
        paragraphs: [
          "Neste modo, a máquina efetua seu ciclo de trabalho em baixa velocidade, para que o operador possa verificar se todos os ajustes foram efetivados corretamente. As velocidades programadas no avanço e retorno da mesa de corte são ignoradas quando o modo de ajuste estiver ativo.",
        ],
      },
    ],
    questions: [
      {
        prompt: "Como o manual descreve o Controle Torque?",
        options: ["Como uma embreagem de segurança eletrônica baseada no erro de seguimento", "Como um freio mecânico da lâmina", "Como o controle de velocidade da mesa"],
        correct: 0,
        explanation: "Seção 2.5.1: atua como embreagem de segurança eletrônica; se o erro de seguimento exceder o limite, a máquina é desabilitada por segurança.",
        ref: "2.5.1 – pág. 20",
      },
      {
        prompt: "O que acontece ao comandar Posição Troca Lâmina?",
        options: ["A lâmina para de girar e a máquina segue habilitada", "A mesa vai para a posição zero e a máquina é automaticamente desabilitada", "Abrem-se as portas do cárter"],
        correct: 1,
        explanation: "Seção 2.5.4: a mesa vai para posição zero e a máquina é automaticamente desabilitada; led amarelo indica a atuação.",
        ref: "2.5.4 – pág. 22",
      },
      {
        prompt: "No Modo Ajuste, o que ocorre com as velocidades programadas de avanço e retorno da mesa?",
        options: ["São ignoradas; o ciclo é feito em baixa velocidade", "São dobradas", "São mantidas"],
        correct: 0,
        explanation: "Seção 2.5.5: o ciclo é executado em baixa velocidade e as velocidades programadas são ignoradas.",
        ref: "2.5.5 – pág. 22",
      },
    ],
  },
  {
    id: "cap2-config-b",
    code: "M09",
    chapter: "2 – Telas e Configurações",
    title: "Configurações: relógio, offset, velocidades e tempos",
    pages: [22, 23],
    intro: "Seções 2.5.6 a 2.5.12.",
    sections: [
      {
        num: "2.5.6–2.5.7",
        title: "Relógio e Fuso Horário",
        page: 22,
        paragraphs: [
          "Relógio: ajuste do relógio e data exibidos nas telas da interface homem máquina.",
          "Fuso Horário: ajuste do fuso horário do relógio de tempo real interno da interface homem máquina.",
        ],
      },
      {
        num: "2.5.8",
        title: "Ajustes Offset",
        page: 22,
        paragraphs: [
          "Ajustam o offset, ou posição inicial dos eixos da Mesa de Corte e Empurradores após executarem o seu ciclo de zero.",
          "No eixo do empurrador, serve para que a posição inicial de trabalho seja definida próxima do log a ser cortado, evitando deslocamento desnecessário e diminuindo o tempo de processo. No eixo da mesa de corte, deve ser definido de forma que a mesa inicie o movimento de corte já com a lâmina bem próxima do log, diminuindo o tempo de processo.",
        ],
      },
      {
        num: "2.5.9",
        title: "Velocidades",
        page: 22,
        paragraphs: [
          "Define as velocidades de Rotação e de Stand-by da lâmina de corte. A velocidade de rotação pode ser ajustada para obter o melhor corte possível sem que ocorra a queima do produto, com marcas escuras. A velocidade de stand-by é útil para diminuir o ruído, consumo elétrico e desgaste do conjunto de lâmina quando a máquina não estiver efetivamente cortando um produto.",
        ],
      },
      {
        num: "2.5.10–2.5.12",
        title: "Curso Total, Tempo Stand-by e Tempo Elevador",
        page: 23,
        paragraphs: [
          "Curso Total Mesa de Corte: limite máximo do movimento de avanço da mesa de corte. Pode ser ajustado para que a lâmina nunca saia de dentro do log no final do curso, mesmo cortando logs de menor diâmetro.",
          "Tempo Stand-by: tempo que a máquina deve aguardar, sem produto para corte e habilitada, para comutar da velocidade de operação para a velocidade de Stand-by.",
          "Tempo Elevador: em máquinas com grupo elevador de logs na alimentação, define o período em que a plataforma permanece na posição superior, para garantir que o log possa rolar e chegar na comporta de descarga superior. Tempos muito altos podem comprometer o ciclo de carregamento; o tempo ideal deve simplesmente garantir a saída do log do plano elevador.",
        ],
      },
    ],
    questions: [
      {
        prompt: "Para que serve a velocidade de Stand-by da lâmina?",
        options: ["Para diminuir ruído, consumo elétrico e desgaste quando a máquina não está cortando", "Para cortar logs de menor diâmetro", "Para afiar a lâmina"],
        correct: 0,
        explanation: "Seção 2.5.9: reduz ruído, consumo elétrico e desgaste do conjunto de lâmina fora do corte efetivo.",
        ref: "2.5.9 – págs. 22–23",
      },
      {
        prompt: "Qual o tempo ideal do Tempo Elevador?",
        options: ["O maior possível", "O suficiente para garantir a saída do log do plano elevador", "Sempre igual ao Tempo Stand-by"],
        correct: 1,
        explanation: "Seção 2.5.12: tempos muito altos comprometem o ciclo; o ideal deve simplesmente garantir a saída do log do plano elevador.",
        ref: "2.5.12 – pág. 23",
      },
    ],
  },
  {
    id: "cap2-servos",
    code: "M10",
    chapter: "2 – Telas e Configurações",
    title: "Status Servo-drives",
    pages: [24, 25],
    intro: "Seção 2.6: estado dos servo-drives dos dois eixos.",
    sections: [
      {
        num: "2.6",
        title: "Status Servo-drives",
        page: 24,
        paragraphs: [
          "Nesta tela pode-se observar o funcionamento dos servo-drives de ambos os eixos da cortadeira. A sinalização verde de cada um indica o estado de habilitação e a sinalização vermelha indica falha ativa. Para mais detalhes de cada servo-drive, deve-se apertar em cima do respectivo quadro.",
        ],
        figures: figs(15),
      },
      {
        num: "2.6.1–2.6.2",
        title: "Servo-drive Mesa de Corte e Servo-drive Empurrador",
        page: 25,
        paragraphs: ["O manual apresenta as telas de detalhe de cada servo-drive (Figuras 16 e 17)."],
        figures: figs(16, 17),
        pending: "O manual mostra só as telas, sem explicar cada campo de detalhe.",
      },
    ],
    questions: [
      {
        prompt: "Na tela Status Servo-drives, o que indica a sinalização vermelha?",
        options: ["Habilitação", "Falha ativa", "Modo Ajuste"],
        correct: 1,
        explanation: "Seção 2.6: verde indica habilitação e vermelho indica falha ativa.",
        ref: "2.6 – pág. 24",
      },
    ],
  },
  {
    id: "cap3-formatos",
    code: "M11",
    chapter: "3 – Troca de Formatos",
    title: "Troca de Formatos",
    pages: [26, 31],
    intro: "Capítulo 3: prensas sistema íris, guias da faca, afiação e esticamentos.",
    sections: [
      {
        num: "3",
        title: "Ajuste das prensas sistema íris",
        page: 26,
        paragraphs: [
          "Ao trocar o formato da cortadeira, deve-se ajustar as prensas sistema íris para que se ajustem ao diâmetro do log a ser cortado. Este procedimento é efetuado abrindo-se as tampas parafusadas de acesso superior às prensas.",
          "O ajuste de abertura e fechamento dá-se rotacionando o eixo estriado e posteriormente travando o movimento do mesmo por meio da contraporca posicionada no eixo.",
        ],
        figures: figs(18, 19, 20),
      },
      {
        num: "3",
        title: "Guias da faca de corte",
        page: 27,
        paragraphs: [
          "Existe entre as prensas um sistema com guias de material endurecido que servem para manter a lâmina de corte alinhada e o corte preciso. Tais guias devem ser reguladas sempre o mais próximo possível do log, aumentando assim sua eficiência.",
          "O ajuste das guias é efetuado por meio de manípulos em ambos os lados das prensas, sendo sua posição determinada por meio de réguas numeradas.",
        ],
        figures: figs(21),
      },
      {
        num: "3",
        title: "Afiação e esticamento (figuras do manual)",
        page: 28,
        paragraphs: ["O manual apresenta as figuras abaixo sobre o sistema de afiação, o esticamento da lâmina de corte, a pressão ideal de trabalho e o esticamento da corrente dos empurradores."],
        figures: figs(22, 23, 24, 25, 26, 27),
        pending: "Estas figuras não têm texto explicativo no manual. Valores, sequência e execução devem ser confirmados com instrutor autorizado.",
      },
    ],
    questions: [
      {
        prompt: "Na troca de formato, como é feito o ajuste de abertura e fechamento das prensas íris?",
        options: ["Pela tela Configurações", "Rotacionando o eixo estriado e travando com a contraporca do eixo", "Pelo comando Ajuste Prensa somente"],
        correct: 1,
        explanation: "Capítulo 3: rotaciona-se o eixo estriado e depois trava-se o movimento pela contraporca, com acesso pelas tampas parafusadas superiores.",
        ref: "3 – pág. 26",
      },
      {
        prompt: "Como devem ser reguladas as guias de material endurecido entre as prensas?",
        options: ["O mais afastado possível do log", "O mais próximo possível do log, por manípulos e réguas numeradas", "Apenas pela Serpa"],
        correct: 1,
        explanation: "Capítulo 3: devem ficar o mais próximo possível do log; ajuste por manípulos dos dois lados e posição por réguas numeradas.",
        ref: "3 – pág. 27",
      },
    ],
  },
  {
    id: "cap4-lubrificacao",
    code: "M12",
    chapter: "4 – Pontos de Lubrificação",
    title: "Pontos de Lubrificação",
    pages: [32, 41],
    intro: "Capítulo 4: localização dos pontos de lubrificação mostrados no manual.",
    sections: [
      {
        num: "4",
        title: "Mesa de corte e grupo afiação",
        page: 32,
        paragraphs: ["Patins da mesa de corte, detalhe da engraxadeira e engraxadeiras dos patins do grupo afiação."],
        figures: figs(28, 29, 30, 31),
      },
      {
        num: "4",
        title: "Mancais",
        page: 34,
        paragraphs: ["Mancais do empurrador, da mesa de corte, do elevador de log's e das comportas de descarga (superior) e de carga (inferior)."],
        figures: figs(...range(32, 42).filter((n) => n !== 40)),
      },
      {
        num: "4",
        title: "Elevador, empurrador e redutores",
        page: 38,
        paragraphs: ["Patim do elevador de log's, corrente e carro do empurrador com guias UHMW e redutores."],
        figures: figs(40, 43, 44, 45, 46, 47),
      },
    ],
    questions: [
      {
        prompt: "Segundo o capítulo 4, qual destes é um ponto de lubrificação mostrado no manual?",
        options: ["Mancal Comporta Descarga (Superior)", "Chave Geral", "Tela Principal"],
        correct: 0,
        explanation: "O capítulo 4 mostra, entre outros, o Mancal Comporta Descarga (Superior) na Figura 38, pág. 37.",
        ref: "4 – pág. 37",
      },
    ],
  },
];

// O capítulo 4 traz apenas figuras. Aviso aplicado a todas as suas seções.
for (const s of MODULES[MODULES.length - 1].sections) {
  s.pending = "O manual mostra apenas a localização. Lubrificante, quantidade e periodicidade não constam: confirmar com instrutor autorizado e plano de manutenção da empresa.";
}

export function narrationFor(m) {
  const parts = m.sections.map((s) => {
    const figText = s.figures?.length
      ? ` Observe ${s.figures.length > 1 ? "as figuras" : "a figura"} ${s.figures.map((f) => f.n).join(", ")}.`
      : "";
    const pend = s.pending ? ` Atenção: ${s.pending}` : "";
    return `Seção ${s.num === "—" ? "" : s.num + ", "}${s.title}, página ${s.page}. ${s.paragraphs.join(" ")}${figText}${pend}`;
  });
  return `${m.chapter}. ${m.title}. ${parts.join(" ")}`;
}

export const TOTAL_QUESTIONS = MODULES.reduce((a, m) => a + m.questions.length, 0);
export const qid = (m, i) => `${m.id}:${i}`;

export function scorePercent(answers) {
  let ok = 0;
  for (const m of MODULES) m.questions.forEach((q, i) => answers[qid(m, i)] === q.correct && ok++);
  return Math.round((ok / TOTAL_QUESTIONS) * 100);
}