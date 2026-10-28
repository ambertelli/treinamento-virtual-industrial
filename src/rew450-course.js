export const course = {
  id: "rew450",
  title: "Rebobinadeira REW-450 AFH",
  subtitle: "Treinamento institucional baseado no manual de operação",
  source: "Manual de Operação — Rebobinadeira REW-450 AFH, 31 páginas",
  modules: [
    {
      id: "modulo-1",
      title: "Módulo 1 — Preparação e interface",
      description: "Habilitação do equipamento, condições de segurança, telas e configurações.",
      topics: [
        {
          id: "1",
          title: "Habilitação e Homing Eixo",
          reference: "Capítulo 1 do manual",
          parts: [
            { title: "Parte 1 — Condições prévias", body: "Antes de iniciar, confirme que a área interna protegida está livre de pessoas e objetos. A chave geral deve estar acionada conforme o procedimento autorizado. Verifique os botões de emergência e as portas de proteção.", imageCaption: "Figuras 1 a 8 — chave geral; botões de emergência da botoeira principal e do desenrolador; emergências nos acessos; portas de proteção frontal e do desenrolador", questions: [
              { q: "Antes de habilitar a máquina, o que deve ser confirmado na área protegida?", options: ["Que esteja livre de pessoas e objetos", "Que haja ferramentas disponíveis dentro do cárter", "Que uma porta fique aberta"], answer: 0, why: "O manual exige que a área interna do cárter esteja livre de pessoas e objetos." },
              { q: "Qual é a condição das portas de proteção para habilitação normal?", options: ["Podem ficar parcialmente abertas", "Devem estar completamente fechadas", "Não precisam ser verificadas"], answer: 1, why: "As portas precisam estar completamente fechadas e são monitoradas por sensores de segurança." }
            ]},
            { title: "Parte 2 — Habilitação e ciclo automático", body: "Com chave geral acionada, emergências destravadas e portas fechadas, pressione “Habilita Rebobinadeira” na botoeira principal. Para iniciar o ciclo automático, selecione Automático e mantenha “Início Ciclo” pressionado por três segundos, respeitando o aviso sonoro e mantendo as pessoas afastadas.", imageCaption: "Figura 2 — botão de emergência da botoeira principal. A botoeira principal completa está na Figura 19.", questions: [
              { q: "Quanto tempo o botão “Início Ciclo” deve ser mantido pressionado para a partida automática descrita no manual?", options: ["Um segundo", "Três segundos", "Dez segundos"], answer: 1, why: "O manual descreve manter o botão pressionado por três segundos, durante o aviso sonoro." },
              { q: "Se alguém permanecer dentro da área delimitada durante a partida, qual é a resposta segura descrita no manual?", options: ["Continuar a partida", "Pedir que a pessoa corra para fora com a máquina em movimento", "Acionar o botão de emergência mais próximo"], answer: 2, why: "O manual orienta acionar imediatamente a emergência mais próxima para impedir o funcionamento." }
            ]}
          ]
        },
        {
          id: "2",
          title: "Telas e Configurações",
          reference: "Capítulo 2 do manual",
          parts: [
            { title: "Parte 1 — Tela principal e informações", body: "A tela principal dá acesso a Dados Produto, Configurações, Colador Rabichos, Status Servodrive, Produção, Alarmes e outras funções. As telas de alarme e status ajudam a consultar falhas e condições do equipamento. Use credenciais autorizadas e não altere parâmetros protegidos sem autorização.", imageCaption: "Figuras 9 a 12 — tela principal; estatísticas de produção; contato; alarmes", questions: [
              { q: "Qual é a finalidade da tela de Alarmes?", options: ["Consultar o histórico de falhas e alarmes", "Aumentar automaticamente a velocidade", "Substituir a inspeção de segurança"], answer: 0, why: "O manual descreve a tela para visualizar o histórico de falhas e alarmes." },
              { q: "Como devem ser tratados os campos protegidos por senha?", options: ["Podem ser alterados por qualquer operador", "Devem ser alterados somente por pessoa autorizada", "Devem ser modificados para cada partida"], answer: 1, why: "A proteção por senha evita alterações inadvertidas por pessoas não habilitadas." }
            ]},
            { title: "Parte 2 — Dados do produto e parâmetros", body: "A tela Dados Produto reúne parâmetros como diâmetro do tubete, espessura do papel, diâmetro final do log, metragem curva e metragem do log. As Configurações incluem velocidade e ajustes específicos. Os valores dependem do produto e da receita aprovada; não copie nem invente valores sem referência técnica autorizada.", imageCaption: "Figuras 13 a 18 — dados do produto; configurações; posição zero da prensa; liberação manual do freio; colador de rabichos; status do servodrive da prensa", questions: [
              { q: "Qual parâmetro define o diâmetro final desejado do log?", options: ["Diâmetro Log", "Relógio", "Fuso horário"], answer: 0, why: "O manual define Diâmetro Log como a medida final desejada para o log." },
              { q: "O que fazer se houver dúvida sobre o valor de um parâmetro de produto?", options: ["Estimar um valor e testar em automático", "Usar qualquer receita disponível", "Consultar a receita aprovada e o responsável técnico"], answer: 2, why: "Os parâmetros devem ser definidos conforme o produto e a referência técnica aprovada." }
            ]}
          ]
        }
      ]
    },
    {
      id: "modulo-2",
      title: "Módulo 2 — Comandos e segurança",
      description: "Botoeiras, funções de comando e procedimentos de segurança.",
      topics: [
        {
          id: "3",
          title: "Botoeiras e Comandos",
          reference: "Capítulo 3 do manual",
          parts: [
            { title: "Parte 1 — Botoeira principal", body: "A botoeira principal reúne comandos como habilitar/desabilitar, manual/automático, prensa sobe/desce, início de ciclo, gofrador, tensão de papel, reinício após parada e reset de proteções. Antes de qualquer comando, confirme o estado do equipamento e siga a instrução específica do manual.", imageCaption: "Figura 19 — botoeira principal", questions: [
              { q: "Antes de usar um comando manual, qual é a prática correta?", options: ["Verificar o estado da máquina e seguir o procedimento autorizado", "Pressionar vários comandos ao mesmo tempo", "Ignorar alarmes ativos"], answer: 0, why: "Os comandos devem ser usados conforme o procedimento e as condições de segurança do equipamento." },
              { q: "O reset de proteções garante, por si só, que a máquina pode voltar a operar?", options: ["Sim, sempre", "Não; é necessário verificar a causa e restabelecer as condições seguras", "Sim, mesmo com portas abertas"], answer: 1, why: "Reset não substitui a verificação da causa da falha e das condições de segurança." }
            ]},
            { title: "Parte 2 — Botoeira do desenrolador", body: "A botoeira do desenrolador inclui comandos para punção, ajuste axial da bobina, correias, expulsão de tubete e reset de proteções. A expulsão de tubete possui pré-condições descritas no manual. Não execute movimentos sem confirmar área livre, posicionamento e procedimento autorizado.", imageCaption: "Figura 20 — botoeira do desenrolador", questions: [
              { q: "O que deve ser feito antes de acionar a expulsão de tubete?", options: ["Ignorar o posicionamento axial", "Confirmar as pré-condições descritas no manual, incluindo punção aberto e ajuste axial no limite indicado", "Abrir uma proteção e manter a máquina em automático"], answer: 1, why: "O manual estabelece pré-condições específicas para o comando de expulsão." },
              { q: "Se o operador não tiver certeza sobre o comando correto, deve:", options: ["Testar durante a produção", "Pedir ajuda ao responsável autorizado e consultar o manual", "Desativar os sensores"], answer: 1, why: "Dúvidas operacionais devem ser esclarecidas antes da execução; nunca se deve contornar proteções." }
            ]}
          ]
        },
        {
          id: "4",
          title: "Procedimentos de Segurança",
          reference: "Capítulo 4 do manual",
          parts: [
            { title: "Parte 1 — Operação normal", body: "A operação normal exige áreas de segurança liberadas, portas fechadas e nenhum botão de emergência atuado. Uma violação de segurança ou emergência provoca parada e desabilitação conforme descrito no manual. Não tente contornar sensores, intertravamentos ou dispositivos de proteção.", imageCaption: "Figuras 1 a 8 — chave geral, botões de emergência e portas de proteção; consultar também os procedimentos do Capítulo 4", questions: [
              { q: "Quais condições básicas são exigidas para a operação normal?", options: ["Áreas liberadas, portas fechadas e emergências destravadas", "Portas abertas e sensores ignorados", "Somente a chave geral ligada"], answer: 0, why: "O manual exige áreas de segurança liberadas, portas fechadas e nenhum botão de emergência atuado." },
              { q: "É permitido contornar um sensor de segurança para acelerar a produção?", options: ["Sim, com cuidado", "Somente em turnos noturnos", "Não, nunca como procedimento operacional"], answer: 2, why: "Dispositivos e intertravamentos de segurança não devem ser contornados." }
            ]},
            { title: "Parte 2 — Intervenções e portas abertas", body: "O manual descreve uma sequência específica para passagem de papel com portas abertas, usando velocidade segura limitada e comando manual do dispositivo homem vivo/morto. Essa condição especial não é autorização genérica para trabalhar com proteções abertas. Siga o procedimento integral, a formação exigida e as regras de bloqueio/isolamento aplicáveis.", imageCaption: "Figura 21 — comando de habilitação homem vivo/morto", questions: [
              { q: "A descrição de uma sequência especial com portas abertas autoriza qualquer intervenção com a máquina aberta?", options: ["Sim", "Não; somente a sequência específica, condições e controles previstos e autorizados", "Sim, desde que seja rápido"], answer: 1, why: "É uma condição específica e controlada, não uma autorização geral para operar com proteções abertas." },
              { q: "Em caso de dúvida sobre intervenção ou isolamento de energia, o que fazer?", options: ["Prosseguir devagar", "Consultar o procedimento formal e o responsável autorizado antes de intervir", "Confiar apenas na memória"], answer: 1, why: "Intervenções devem seguir os procedimentos formais de segurança e ser realizadas por pessoas autorizadas." }
            ]}
          ]
        }
      ]
    }
  ]
};
