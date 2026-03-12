import { useState } from "react";
import perfil from '../img/perfil-samara.jpg';
import banner from '../img/download.jpg';
import dimApp from '../img/classroom-dim-app.png';
import pwApp  from '../img/classroom-dim-app.png';

const CONFIG = {
  escola: "ETE Cícero Dias",
  curso: "Desenvolvimento de Sistemas",
  modulo: "Módulo 3 · Subsequente",
  periodo: "2025–2026",
  professora: {
    nome: "Samara Silvia Sabino",
    titulo: "Professora · Módulo 3",
    foto: perfil,
    email: "samarasilvia.educa@gmail.com",
  },
  bannerHub: banner,
};

// ============================================================
// DISCIPLINAS
// ============================================================
const disciplinas = [
  { id: "dim", codigo: "DE_242", nome: "Design de Interfaces Mobile",      ch: "40h",  cor: "teal",   icon: "📱", disponivel: true,  imagem: dimApp, descricao: "UI Mobile, Android vs. iOS, Figma Avançado e Componentização. Projeto: Protótipo de Alta Fidelidade.", ClassroomLink: "https://classroom.google.com/c/Nzk0MTMxNTM4NjQy?cjc=gzhkbuhg" },
  { id: "pw",  codigo: "DE_236", nome: "Programação em Novas Tecnologias", ch: "160h", cor: "indigo", icon: "💻", disponivel: true, imagem: pwApp,  descricao: "HTML5, CSS3, JavaScript, Segurança, Deploy e React. Desenvolvimento de projetos web do zero ao ar.", ClassroomLink: "https://classroom.google.com/c/Nzk0MTMxNjk0MDI4?cjc=x2dl66xl" },
];

const corMap = {
  teal:   { bg: "bg-teal-700",   border: "border-teal-400",   badge: "bg-teal-100 text-teal-800",     text: "text-teal-700"   },
  indigo: { bg: "bg-indigo-700", border: "border-indigo-400", badge: "bg-indigo-100 text-indigo-800", text: "text-indigo-700" },
};

// ============================================================
// DADOS — DIM
// ============================================================
const dimBlocos = [
  { id:1, label:"BLOCO 1", titulo:"Teoria UI: Ergonomia, Componentes e Plataformas", periodo:"Março – Abril",  color:"bg-teal-600",   foco:"Construir o vocabulário visual e conceitual da disciplina. Base teórica de como funciona o design para telas pequenas — ergonomia física, gramática visual, guias oficiais e padrões de navegação. O bloco fecha com os seminários temáticos." },
  { id:2, label:"BLOCO 2", titulo:"Bootcamp Figma",                                   periodo:"Maio – Junho",   color:"bg-cyan-600",    foco:"Laboratório guiado 100%. A turma constrói junto o app da Delicatte Confeitaria — do wireframe à alta fidelidade — aprendendo o Figma na prática para não travar no Projeto Final." },
  { id:3, label:"BLOCO 3", titulo:"A Fábrica: Projeto Final (App Startup)",           periodo:"Junho – Julho",  color:"bg-emerald-600", foco:"Com a teoria dominada e o Figma aprendido, cada grupo constrói o próprio app em Sprints. A avaliação foca na qualidade visual, na navegação interativa e na justificativa das decisões de design." },
];

const dimAulas = [
  { bloco:1, num:1,  tipo:"fixa",   entrega:null, asynch:null,          recurso:"2 vídeos sobre as perspectivas do design: Ted Talk e Norman Door.", titulo:"Fundamentos do Design — Conceitos e Perspectivas",         desc:"Design como produto, processo e função — além da estética. Subáreas do design (UX, UI, IxD, design de produto) e como se relacionam com tecnologia. Diferenças entre UX, UI, DCU e IxD na prática." },
  { bloco:1, num:2,  tipo:"fixa",   entrega:null, asynch:"Sala de aula invertida: postar antes da aula o vídeo 'What is UI Design?' do canal DesignCourse (YouTube, ~10 min).", recurso:null, titulo:"O que é UI Mobile? Contexto e Ecossistema",               desc:"Interface móvel e suas diferenças em relação ao desktop — tela pequena, toque, uso em movimento. Android vs. iOS: as duas plataformas e suas filosofias. Debate com análise de apps reais da turma." },
  { bloco:1, num:3,  tipo:"fixa",   entrega:null, asynch:null,          recurso:null, titulo:"O Corpo e a Tela: Ergonomia Mobile",                        desc:"Ergonomia física do celular — uso com uma mão, no sol, em movimento. A Regra do Dedo Gordo (44x44px mínimo) e a Thumb Zone: onde é natural clicar e onde o design atrapalha." },
  { bloco:1, num:4,  tipo:"fixa",   entrega:null, asynch:null,          recurso:null, titulo:"Gramática Visual — Cor, Tipografia e Hierarquia",            desc:"Princípios visuais fundamentais: hierarquia, contraste, alinhamento e espaçamento. Cor no mobile (regra 60-30-10) e tipografia (máximo 2 fontes, tamanhos mínimos). A Regra dos 8px e a importância do respiro." },
  { bloco:1, num:5,  tipo:"fixa",   entrega:null, asynch:null,          recurso:null, titulo:"Padrões de Navegação e Componentes",                        desc:"Como o usuário se move dentro de um app: Bottom Navigation Bar, Tabs e Hamburger Menu. Anatomia dos botões (Primary, Secondary, Ghost) e boas práticas em formulários mobile." },
  { bloco:1, num:6,  tipo:"fixa",   entrega:null, asynch:"Sala de aula invertida: postar antes o vídeo 'Material Design vs. Human Interface Guidelines' do canal Google Design (YouTube).", recurso:null, titulo:"Interação, Gestos e Feedback Visuais + Android vs. iOS",    desc:"Gestos invisíveis (Swipe, Pinch, Long Press), microinterações e a importância do feedback visual. Material Design (Google) vs. Human Interface Guidelines (Apple) — diferenças de navegação, tipografia e componentes." },
  { bloco:1, num:7,  tipo:"fixa",   entrega:null, asynch:"Sala de aula invertida: postar antes o vídeo 'O que são as heurísticas de Nielsen?' (YouTube).", recurso:null, titulo:"Heurísticas de Nielsen Aplicadas ao Mobile",                desc:"As 10 Heurísticas de Nielsen no contexto mobile — com foco nas mais críticas: visibilidade do status, controle do usuário, prevenção de erros e minimalismo. Safári Mobile: análise de heurísticas em apps reais com registro de prints e justificativas." },
  { bloco:1, num:8,  tipo:"fixa",   entrega:{ label:"🎤 Seminário Temático — 2pts", detail:"Apresentação em aula — Aula 08. Todos os grupos apresentam." }, asynch:null, recurso:null, titulo:"Seminários Temáticos",                                       desc:"Apresentação dos grupos sobre tendências e fundamentos de UI Mobile. Formato: 15 min de apresentação com slides e exemplos em apps reais + 5 min de debate com a turma." },
  { bloco:2, num:9,  tipo:"fixa",   entrega:null, asynch:null,          recurso:null, titulo:"Intro ao Figma e Baixa Fidelidade (Wireframes)",             desc:"O que é wireframe e por que ele vem antes do design visual. Tour na interface do Figma — frames, shapes e atalhos. Code-along: 4 wireframes iniciais da Delicatte (Login, Home, Produto, Carrinho) com a Regra dos 8px e Thumb Zone." },
  { bloco:2, num:10, tipo:"fixa",   entrega:null, asynch:null,          recurso:null, titulo:"Tipografia, Cores e Componentes",                            desc:"Criação de Estilos Locais de cores e fontes no Figma. Conceito de Componente aplicado na Barra de Navegação Inferior — construção, replicação nas telas e garantia de área de toque de 44px." },
  { bloco:2, num:11, tipo:"fixa",   entrega:null, asynch:null,          recurso:null, titulo:"Constraints e Design Responsivo",                            desc:"Constraints (ancoramento vertical e horizontal) para que o layout não quebre em telas de tamanhos diferentes. Prática com os cards de produtos da Delicatte em múltiplos frames." },
  { bloco:2, num:12, tipo:"fixa",   entrega:null, asynch:null,          recurso:null, titulo:"Alta Fidelidade (Imagens e UI Design)",                     desc:"Sombras realistas (Drop Shadow) e plugins essenciais: Unsplash para fotos e Iconify para ícones. Substituição dos blocos cinzas por imagens reais, Border Radius e acabamento visual profissional." },
  { bloco:2, num:13, tipo:"fixa",   entrega:null, asynch:null,          recurso:null, titulo:"Figma Avançado — Design System e Componentes Reutilizáveis", desc:"O que é um Design System e como construir uma biblioteca de componentes no Figma (botões, cards, inputs, ícones, nav bar). Consistência visual como heurística — H4 de Nielsen." },
  { bloco:2, num:14, tipo:"fixa",   entrega:{ label:"🖥️ Bootcamp Figma (Delicatte) — 2pts", detail:"Entrega via Classroom até o dia seguinte à Aula 14. Link do Figma com mínimo 3 telas conectadas." }, asynch:null, recurso:null, titulo:"Prototipagem Interativa (Prototype)",                        desc:"A aba Prototype do Figma — conexão de botões às telas e escolha de transições (Slide in, Dissolve). Construção do fluxo navegável completo da Delicatte e teste ao vivo com o botão Play." },
  { bloco:3, num:15, tipo:"fixa",   entrega:null, asynch:null,          recurso:null, titulo:"Briefing do Projeto Final + Sprint 1: Fluxo e Wireframes",   desc:"Apresentação dos briefings de startups disponíveis e escolha de tema por grupo. Criação do Trello com colunas ágeis. Sprint 1: persona, fluxo de telas, paleta e wireframes das 5 telas principais." },
  { bloco:3, num:16, tipo:"fixa",   entrega:null, asynch:null,          recurso:null, titulo:"Sprint 2: Design System do App",                            desc:"Definição da tipografia, paleta de cores e criação dos Master Components (botões, inputs, cards) do app — a base de consistência visual replicada em todas as telas." },
  { bloco:3, num:17, tipo:"fixa",   entrega:null, asynch:null,          recurso:null, titulo:"Sprint 3: UI Design (Alta Fidelidade)",                     desc:"Substituição dos wireframes por imagens e textos reais. Auditoria Visual da professora mesa a mesa — contraste, Thumb Zone e conformidade com Material Design ou HIG." },
  { bloco:3, num:18, tipo:"fixa",   entrega:null, asynch:null,          recurso:null, titulo:"Sprint 4: Prototipagem Interativa",                         desc:"Conexão de todas as telas do app — fluxo completo da abertura até o objetivo final, com transições suaves e microinterações de clique." },
  { bloco:3, num:19, tipo:"fixa",   entrega:null, asynch:null,          recurso:null, titulo:"Usability Lab",                                             desc:"Teste cruzado: cada grupo navega o app do outro via Figma Mirror e registra os bugs de navegação. Na sequência, os grupos corrigem os problemas identificados." },
  { bloco:3, num:20, tipo:"fixa",   entrega:{ label:"🚀 Projeto Final (App Startup) — 6pts", detail:"Apresentação presencial — Aula 20. Todos os grupos apresentam. Critérios: Trello (1pt), Pitch Visual (2pts), Qualidade do Figma (3pts)." }, asynch:null, recurso:null, titulo:"Grande Entrega — Projeto Final (Todos os Grupos)",         desc:"Apresentação final de todos os grupos com o protótipo navegado ao vivo no Figma — não screenshots. Avaliação do processo ágil (Trello), das justificativas visuais no pitch e da qualidade do protótipo." },
];

const dimAvaliacoes = [
  { icon:"🖥️", titulo:"Bootcamp Figma (Delicatte Confeitaria)", peso:"2 pts", quando:"Bloco 2 — entrega até o dia seguinte à Aula 14", formato:"Individual. Link do Figma enviado via Classroom.", estrutura:["Mínimo 3 telas conectadas e navegáveis (Login, Home, Produto)","Paleta de cores e tipografia aplicadas como Estilos Locais","Componente da Bottom Nav criado e replicado nas telas","Área de toque de 44px garantida nos botões principais"], criterio:"Fidelidade ao que foi construído em aula + funcionamento do fluxo interativo. O link precisa abrir e funcionar.", border:"border-teal-300", bg:"bg-teal-50", badgeBg:"bg-teal-600" },
  { icon:"🎤", titulo:"Seminário Temático de UI Mobile",         peso:"2 pts", quando:"Bloco 1 — Aula 08",                              formato:"Em grupo. 15 min de apresentação com slides visuais + 5 min de debate. Exemplos em apps reais obrigatórios.", estrutura:["Apresentação do tema com profundidade — não apenas definições","Mínimo 3 exemplos visuais em apps reais (prints ou vídeo de tela)","Conexão explícita com o conteúdo das aulas do Bloco 1","Debate com a turma: o grupo deve responder perguntas"], criterio:"Qualidade dos exemplos visuais, profundidade da análise e conexão com os conceitos da disciplina.", border:"border-cyan-300", bg:"bg-cyan-50", badgeBg:"bg-cyan-600" },
  { icon:"🚀", titulo:"Projeto Final — App Startup",             peso:"6 pts", quando:"Bloco 3 — Aula 20 (todos os grupos)",            formato:"Em grupo. Apresentação ao vivo com o protótipo navegado no Figma. O app deve rodar — não screenshots.", estrutura:["Processo Ágil (Trello): histórico de tarefas, colunas atualizadas ao longo do semestre (1pt)","Apresentação Oral: clareza, domínio, justificativa das decisões visuais baseadas em Android/iOS ou heurísticas (2pts)","Protótipo no Figma: qualidade visual em alta fidelidade, fluxo interativo completo, coerência com a persona da startup (3pts)"], criterio:"Qualidade da conexão entre as decisões de UI e os princípios aprendidos no Bloco 1. Profundidade vale mais que quantidade de telas.", border:"border-emerald-300", bg:"bg-emerald-50", badgeBg:"bg-emerald-600" },
];

const tipoInfo = {
  fixa:   { label:"Inegociável", color:"bg-blue-100 text-blue-800 border-blue-200",   desc:"Conteúdo fixo — acontece independente de qualquer imprevisto." },
  buffer: { label:"Flexível",    color:"bg-amber-100 text-amber-800 border-amber-200", desc:"Aula de reserva — pode ser usada para revisão, reposição ou aprofundamento." },
};


// ============================================================
// DADOS — PROG WEB
// ============================================================
const pwBlocos = [
  { id:1, label:"BLOCO 1", titulo:"Base Frontend — HTML, CSS e JavaScript", periodo:"Março – Abril", color:"bg-indigo-600", foco:"Construir a base real do desenvolvimento web com foco direto nos projetos. Cada conceito ensinado tem aplicação imediata — não é HTML pelo HTML, é HTML para fazer o projeto funcionar." },
  { id:2, label:"BLOCO 2", titulo:"Qualidade, Arquitetura e Segurança",      periodo:"Abril – Maio",  color:"bg-violet-600", foco:"Ir além do funciona e chegar no funciona bem. Performance, responsividade avançada, padrões de projeto, autenticação segura com JWT e boas práticas de desenvolvimento seguro." },
  { id:3, label:"BLOCO 3", titulo:"Infraestrutura e DevOps Leve",             periodo:"Maio – Junho",  color:"bg-blue-600",   foco:"Colocar o projeto no ar de verdade. Deploy prático, variáveis de ambiente, pipelines básicos com GitHub Actions — o que acontece entre o git push e o site funcionando." },
  { id:4, label:"BLOCO 4", titulo:"React — Exposição e Experimentação",       periodo:"Junho – Julho", color:"bg-sky-600",    foco:"Conhecer o React, entender por que ele existe e experimentar sem pressão. Sem cobrança no projeto final — a avaliação segue em HTML/CSS/JS. Quem quiser pode migrar o projeto como desafio." },
];

const pwAulas = [
  { bloco:1, num:1,  tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Apresentação + Introdução à Web e HTML", desc:"Como a disciplina funciona: formato de clínica, avaliação, o que cada grupo vai construir. O que é HTML, como o navegador lê o código, estrutura base (DOCTYPE, html, head, body). Primeiros elementos: títulos, parágrafos, links, imagens. Atributos id, class, href, src, alt. Prática: cada aluno cria o primeiro arquivo HTML do projeto." },
  { bloco:1, num:2,  tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Arquitetura e Estrutura de Pastas", desc:"Por que organização importa antes de começar a codar. MVC no frontend — separar HTML, CSS e JS como responsabilidades distintas. Atomic Design: átomos (botão), moléculas (campo de formulário), organismos (navbar). Estrutura de pastas padrão: css/, js/, assets/, components/. Citação ao Microfrontend — o que é, por que existe, onde o mercado usa. Cada grupo define e cria a estrutura de pastas do próprio projeto." },
  { bloco:1, num:3,  tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"HTML Semântico e Formulários", desc:"Por que header, main, section, article, nav e footer importam além do visual. Acessibilidade básica e SEO. Formulários completos: form, input, label, button, tipos de input (text, email, password, number), required, placeholder. Por que label e input andam juntos. Aplicação: cada grupo constrói a tela de login do projeto com HTML semântico correto." },
  { bloco:1, num:4,  tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"CSS — Seletores, Box Model e Variáveis", desc:"Margem vs padding, especificidade de seletores, box-sizing border-box. Variáveis CSS (custom properties) — definir paleta de cores e tipografia do projeto como variáveis reutilizáveis. Conexão com DIM: os tokens de cor definidos no Figma viram variáveis CSS. Cada grupo cria o arquivo de variáveis do projeto." },
  { bloco:1, num:5,  tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"CSS — Flexbox na Prática", desc:"Os 5 problemas que todo mundo encontra: centralizar card, montar navbar, alinhar em linha, distribuir espaço, empilhar em coluna. Aplicação: ClickServiços e Mala 4ever montam o layout da tela de login. Intranet monta o dashboard. BarberPro identifica onde o Flexbox está mal usado nos arquivos existentes." },
  { bloco:1, num:6,  tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"CSS — Responsividade e Mobile First", desc:"Media queries, breakpoints, unidades relativas (rem, %, vw). Por que mobile first é filosofia, não só CSS. Análise ao vivo do responsive.css do BarberPro — hamburger menu implementado, o que está certo, o que poderia melhorar. Conexão direta com o que a turma está fazendo em DIM." },
  { bloco:1, num:7,  tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"JavaScript — DOM e Eventos", desc:"O que é o DOM e como o JavaScript enxerga o HTML. querySelector, getElementById, addEventListener. Mostrar/esconder elementos, mudar texto, adicionar classe. Aplicação: validação visual de formulário em tempo real — campo vermelho ao sair vazio, mensagem de erro aparecendo. Todos os grupos implementam na tela de login." },
  { bloco:1, num:8,  tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"JavaScript — Funções, Escopo e Boas Práticas", desc:"Por que organizar código em funções. Diferença entre var, let e const. Arrow functions. Como o BarberPro organiza funções hoje e o que poderia ser mais limpo. Refatoração ao vivo: transformar o código de validação em funções nomeadas e reutilizáveis." },
  { bloco:1, num:9,  tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"JavaScript — Async/Await e Fetch API (Parte 1)", desc:"O que é assíncrono e por que o JavaScript precisa disso. Promises de forma visual. async/await como forma legível. O que é uma requisição HTTP — método, URL, headers, body, status code. Primeiro fetch ao vivo com API pública (JSONPlaceholder). Todos fazem juntos." },
  { bloco:1, num:10, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Fetch API (Parte 2) — Conectando ao Backend Real", desc:"GET e POST com JSON. Como montar o body, ler a resposta, tratar erros com try/catch e response.ok. Por grupo: ClickServiços faz GET no backend Java. Intranet faz GET na lista de funcionários. Mala 4ever é apresentado ao Back4App. BarberPro revisa o tratamento de erro — hoje têm console.error sem feedback visual para o usuário." },
  { bloco:1, num:11, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Back4App — Backend as a Service para MVPs", desc:"O que é BaaS e por que faz sentido para projetos sem backend pronto. Setup ao vivo: criar conta, criar classe no banco, inserir dado pelo painel visual, buscar via fetch no frontend. Até o fim da aula, Mala 4ever tem dados reais sendo exibidos na tela." },
  { bloco:1, num:12, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"LocalStorage e Gerenciamento de Sessão", desc:"O que é o localStorage, quando usar e quando não usar. Guardar token de sessão, verificar se o usuário está logado, redirecionar para login se necessário. Análise do BarberPro: três tokens diferentes (jwt_token, jwt_barber_token, jwt_admin_token) — por que fizeram assim e se é a melhor abordagem." },
  { bloco:1, num:13, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Renderização Dinâmica — Listas e Cards", desc:"Como transformar um array de dados da API em elementos HTML na tela. forEach, map, innerHTML, createElement — diferenças e quando usar. Empty state — o que mostrar quando não há dados. Cada grupo renderiza a primeira listagem real do projeto." },
  { bloco:1, num:14, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Formulários Completos — POST, Validação e Feedback Visual", desc:"Como enviar dados via fetch POST. Validação antes de enviar. Feedback visual completo: loading enquanto aguarda, mensagem de sucesso, mensagem de erro específica. Formulário de cadastro de cada projeto salvando dado real no backend. Fim do Bloco 1." },
  { bloco:1, num:15, tipo:"buffer", entrega:null, asynch:null, recurso:null, titulo:"Revisão do Bloco 1 + Clínica Aberta", desc:"Cada grupo apresenta o que construiu em 10 minutos. Feedback ao vivo. Grupos atrasados recebem atenção prioritária. Grupos adiantados recebem desafio extra. Aula flexível — pode ser usada para reposição ou aprofundamento." },
  { bloco:2, num:16, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Performance — O que Torna um Site Lento", desc:"Lighthouse aprofundado. LCP, FID e CLS em linguagem humana. Imagens sem otimização, CSS e JS bloqueando renderização. Cold start do Render e como minimizar a percepção disso no frontend: skeleton screen, loading state. Cada grupo roda o Lighthouse no próprio projeto e recebe lista de melhorias." },
  { bloco:2, num:17, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Responsividade Avançada — Além do Media Query", desc:"clamp() para tipografia fluida. Grid responsivo com auto-fill e auto-fit. Container queries — o que são e quando usar. Testar responsividade no DevTools de verdade, não só reduzir a janela. Conexão com DIM: o redesign mobile vira código mobile first." },
  { bloco:2, num:18, tipo:"fixa", entrega:{ label:"📁 README — entrega via Classroom", detail:"Cada grupo entrega o README do projeto com estrutura completa." }, asynch:null, recurso:null, titulo:"README e Documentação Técnica", desc:"Por que um README bem feito importa — para o time, para o portfólio, para um recrutador. Estrutura: o que faz, como rodar, endpoints, tecnologias, deploy, screenshots. Cada grupo escreve o README ao vivo. A entrega conta na apresentação final." },
  { bloco:2, num:19, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Padrões de Projeto — 5 Padrões nos Projetos Reais", desc:"Module Pattern — organizar JS sem poluir escopo global (o BarberPro tem JS inline em cada HTML — isso é o problema). Observer Pattern — eventos do DOM são Observer, addEventListener é Observer sem saber. Factory Pattern — função que cria elementos HTML (toda renderização de lista pode ser uma Factory). Strategy Pattern — diferentes validações como estratégias intercambiáveis. Singleton Pattern — API_URL centralizada (o BarberPro repete a URL em cada arquivo). Cada grupo identifica onde cada padrão aparece ou deveria aparecer no próprio projeto." },
  { bloco:2, num:20, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Desenvolvimento Seguro — Parte 1 (Palestra)", desc:"OWASP Top 10 contextualizado para os projetos da turma: XSS, CSRF, exposição de dados sensíveis, senhas em texto puro. Exemplos reais de vulnerabilidades em código parecido com o que estão escrevendo. Dinâmica: a professora mostra código vulnerável e pede para a turma identificar o problema antes de revelar. Baseado na palestra e no curso de Desenvolvimento Seguro." },
  { bloco:2, num:21, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Desenvolvimento Seguro — Parte 2 (JWT na Prática)", desc:"O que é JWT — quebrando o mito do nome (não tem nada de JavaScript, é um padrão que funciona em qualquer linguagem). Como o token é gerado: análise ao vivo do SecurityConfig, TokenService e SecurityFilter do BarberPro em Java. Como o frontend consome: fetch do login, capturar o token, salvar no localStorage, enviar no Authorization Bearer. O que fazer quando o token expira. Aplicação: ClickServiços e Intranet implementam o fluxo de login com JWT." },
  { bloco:2, num:22, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"JWT — Clínica de Implementação", desc:"Sem nova teoria — tempo de laboratório. A professora circula pelos grupos dando suporte. BarberPro melhora o tratamento de token expirado. ClickServiços e Intranet finalizam o fluxo completo de autenticação." },
  { bloco:2, num:23, tipo:"buffer", entrega:null, asynch:null, recurso:null, titulo:"Revisão do Bloco 2 + Clínica Aberta", desc:"Cada grupo apresenta com foco em qualidade: está responsivo? Tem feedback visual? JWT funciona? README feito? Aula flexível — pode ser usada para reposição ou aprofundamento de qualquer tema do Bloco 2." },
  { bloco:3, num:24, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Como a Web Funciona de Verdade", desc:"DNS, HTTP/HTTPS, o que acontece entre digitar uma URL e a página aparecer. CSR vs SSR — por que o Next.js existe, por que o React puro tem problema de SEO. Variáveis de ambiente — o que são e por que a API_URL nunca deve estar hardcoded no código (o problema real do BarberPro)." },
  { bloco:3, num:25, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Deploy na Prática — Frontend", desc:"GitHub Pages para projetos estáticos. Vercel como alternativa. Como configurar domínio e variáveis de ambiente. Todos os grupos fazem o primeiro deploy do frontend durante a aula. Mala 4ever e ClickServiços saem com o projeto no ar." },
  { bloco:3, num:26, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Deploy na Prática — Backend e Banco", desc:"Railway para backend Java. Render como alternativa. Neon para PostgreSQL gratuito. O BarberPro explica para a turma como configuraram (aprendizado entre pares). ClickServiços e Intranet migram o banco de H2 em memória para banco persistente." },
  { bloco:3, num:27, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Pipelines e CI/CD — Conceito e Prática Básica", desc:"O que é CI/CD em linguagem humana. GitHub Actions: criar um workflow que faz deploy automático ao fazer push na main. Por que isso importa — nunca mais funciona na minha máquina. Cada grupo configura um workflow básico no repositório." },
  { bloco:3, num:28, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Pré-Avaliação — Projeto no Ar", desc:"Cada grupo apresenta o projeto em produção. Checklist: está no ar? Fluxo principal funciona? README feito? Lighthouse acima de 70? JWT funcionando? Esse não é o momento da nota — é o ensaio para identificar o que ainda precisa resolver." },
  { bloco:4, num:29, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Por que o React Existe — O Problema que Ele Resolve", desc:"O problema real primeiro: re-renderização total com innerHTML. React resolve com o Virtual DOM — não é mágica, é uma solução inteligente para um problema concreto. O mesmo componente em HTML/JS puro e em React lado a lado. O ecossistema React: onde é usado, por que o mercado valoriza." },
  { bloco:4, num:30, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"Componentes, JSX e Props", desc:"Componente como função que retorna HTML. JSX como syntactic sugar. Props para passar dados para um componente. Construir ao vivo um card de profissional/serviço como componente React reutilizável. Vite para criar o projeto sem configuração manual." },
  { bloco:4, num:31, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"State e Hooks — useState e useEffect", desc:"O que é estado — dado que muda e precisa atualizar a interface. useState para guardar e atualizar. useEffect para buscar dados da API ao montar — o equivalente ao fetch que já fizeram, agora em React. Reescrever a listagem de dados usando hooks." },
  { bloco:4, num:32, tipo:"fixa", entrega:null, asynch:null, recurso:null, titulo:"React na Prática — Clínica Livre", desc:"Sem nova teoria. Quem quiser começa a reescrever o frontend em React. Quem preferir continua melhorando em HTML/CSS/JS. Sem pressão, sem cobrança — o objetivo é experimentar com segurança." },
  { bloco:4, num:33, tipo:"fixa", entrega:{ label:"🚀 Apresentação Final — 8pts", detail:"Todos os grupos apresentam o projeto em produção. Avaliado em HTML/CSS/JS. React é bônus, não critério." }, asynch:null, recurso:null, titulo:"Apresentação Final — Todos os Grupos", desc:"Projeto funcionando em produção. Funcionalidade — fluxo completo (3pts). UX Técnica — loading, erro, sucesso, validação (2pts). Performance e Deploy — Lighthouse acima de 70 (1pt). Apresentação oral (2pts). Total: 8pts. Um fluxo bem feito vale mais que muitas funcionalidades quebradas." },
  { bloco:4, num:34, tipo:"buffer", entrega:null, asynch:null, recurso:null, titulo:"Aula de Reserva — Reposição ou Aprofundamento", desc:"Aula flexível para reposição, aprofundamento ou devolução de feedback da avaliação final. Usada conforme necessidade real da turma." },
];

const pwAvaliacoes = [
  { icon:"🍰", titulo:"Delicatte Confeitaria — Projeto Guiado em Sala", peso:"2 pts", quando:"Bloco 1 — construção ao longo das aulas", formato:"Individual. Construção acompanhada em sala — cada aula avança uma parte do projeto.", estrutura:["Página da Delicatte Confeitaria construída junto com a professora ao longo do Bloco 1","Cobre na prática: HTML semântico, CSS com variáveis, Flexbox, responsividade e JavaScript","Entrega via Classroom ao fim do Bloco 1 — link do repositório ou arquivo funcional","O projeto precisa rodar no navegador sem erros"], criterio:"Participação e evolução ao longo das aulas. O que conta é ter construído junto — não é uma prova, é o registro do que foi aprendido em sala.", border:"border-pink-300", bg:"bg-pink-50", badgeBg:"bg-pink-600" },
  { icon:"🚀", titulo:"Projeto Final — Frontend Integrado ao Backend", peso:"8 pts", quando:"Bloco 4 — Aula 33 (todos os grupos)", formato:"Em grupo. Apresentação ao vivo com o projeto funcionando em produção. Avaliado em HTML/CSS/JS — React é bônus.", estrutura:["Funcionalidade — fluxo principal de ponta a ponta sem travar (3pts)","UX Técnica — loading states, mensagens de erro e sucesso, validação de formulário (2pts)","Performance e Deploy — projeto no ar com Lighthouse acima de 70 (1pt)","Apresentação Oral — clareza, domínio do código, justificativa das decisões técnicas (2pts)"], criterio:"O projeto precisa funcionar ao vivo. Um fluxo completo bem feito vale mais que muitas funcionalidades quebradas. README atualizado é obrigatório.", border:"border-violet-300", bg:"bg-violet-50", badgeBg:"bg-violet-600" },
];

// ============================================================
// PLANO PW
// ============================================================
function PlanoPW() {
  const [tab, setTab] = useState("aulas");
  const [expanded, setExpanded] = useState(null);
  const [expandedAv, setExpandedAv] = useState(null);
  const [showLegend, setShowLegend] = useState(false);

  return (
    <div>
      <div className="mb-4 p-3 sm:p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-sm text-indigo-800 leading-relaxed">
        Do primeiro HTML ao projeto no ar — <strong>desenvolvimento web completo com foco nos projetos reais da turma</strong>. A avaliação final é o projeto funcionando em produção.
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 mb-4">
        {pwAvaliacoes.map((av, i) => (
          <button key={i} onClick={() => { setTab("avaliacoes"); setExpandedAv(i); }}
            className={`rounded-xl border-2 ${av.border} ${av.bg} p-3 text-left cursor-pointer hover:shadow-md active:scale-95 transition-all touch-manipulation`}>
            <div className="flex sm:flex-col sm:items-center items-center gap-3 sm:gap-0">
              <div className="text-2xl sm:mb-1 flex-shrink-0">{av.icon}</div>
              <div className="flex-1 sm:flex-none">
                <div className={`inline-block text-white text-xs font-bold px-2 py-0.5 rounded-full ${av.badgeBg} mb-1`}>{av.peso}</div>
                <div className="text-xs text-gray-700 font-medium leading-tight">{av.titulo}</div>
              </div>
              <span className="text-gray-400 sm:hidden text-sm flex-shrink-0">›</span>
            </div>
          </button>
        ))}
      </div>

      <div className="flex gap-1 mb-4 bg-white border border-gray-200 p-1 rounded-xl shadow-sm">
        {[{ id:"aulas", label:"📅 Aulas" }, { id:"avaliacoes", label:"📊 Avaliações" }].map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all touch-manipulation ${tab === t.id ? "bg-gray-900 text-white shadow" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === "aulas" && (
        <div>
          <button onClick={() => setShowLegend(!showLegend)}
            className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1 font-medium mb-3 py-1 touch-manipulation">
            <span>{showLegend ? "▲" : "▼"}</span> O que significam as tags?
          </button>
          {showLegend && (
            <div className="mb-3 p-3 bg-white border border-gray-200 rounded-xl space-y-2">
              {Object.entries(tipoInfo).map(([k, v]) => (
                <div key={k} className="flex items-start gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded border font-medium flex-shrink-0 ${v.color}`}>{v.label}</span>
                  <span className="text-xs text-gray-600">{v.desc}</span>
                </div>
              ))}
              <div className="flex items-start gap-2">
                <span className="text-xs px-2 py-0.5 rounded border font-medium flex-shrink-0 bg-rose-50 text-rose-700 border-rose-200">Entrega</span>
                <span className="text-xs text-gray-600">Aula com atividade avaliativa — clique para ver detalhes.</span>
              </div>
            </div>
          )}
          <div className="space-y-1">
            {pwBlocos.map((bloco) => (
              <div key={bloco.id}>
                <div className={`${bloco.color} text-white rounded-xl px-4 py-3 mt-3 mb-2 shadow-sm`}>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-bold opacity-75 uppercase tracking-wider border border-white border-opacity-40 px-2 py-0.5 rounded-full">{bloco.label}</span>
                    <span className="text-xs opacity-75">{bloco.periodo}</span>
                  </div>
                  <div className="font-bold text-base">{bloco.titulo}</div>
                  <div className="mt-1 text-sm opacity-90 leading-relaxed">{bloco.foco}</div>
                </div>
                {pwAulas.filter(a => a.bloco === bloco.id).map((aula) => {
                  const cfg = tipoInfo[aula.tipo];
                  const key = `pw-${aula.bloco}-${aula.num}`;
                  const isOpen = expanded === key;
                  return (
                    <div key={key} onClick={() => setExpanded(isOpen ? null : key)}
                      className={`rounded-xl border cursor-pointer transition-all mb-1 shadow-sm touch-manipulation ${aula.tipo === "buffer" ? "border-amber-200 bg-amber-50" : "border-gray-200 bg-white hover:border-gray-300 active:bg-gray-50"}`}>
                      <div className="flex items-start gap-3 px-4 py-3.5">
                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">{aula.num}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-gray-900 text-sm">{aula.titulo}</span>
                            <span className={`text-xs px-2 py-0.5 rounded border font-medium ${cfg.color}`}>{cfg.label}</span>
                            {aula.entrega && <span className="text-xs px-2 py-0.5 rounded border bg-rose-50 text-rose-700 border-rose-200 font-medium">Entrega</span>}
                          </div>
                          {!isOpen && <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{aula.desc}</p>}
                        </div>
                        <span className="text-gray-400 text-xs flex-shrink-0 mt-2">{isOpen ? "▲" : "▼"}</span>
                      </div>
                      {isOpen && (
                        <div className="px-4 pb-4 border-t border-gray-100 pt-3 space-y-2">
                          <p className="text-sm text-gray-700 leading-relaxed">{aula.desc}</p>
                          {aula.entrega && (
                            <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 space-y-1">
                              <p className="font-semibold">{aula.entrega.label}</p>
                              <p>{aula.entrega.detail}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "avaliacoes" && (
        <div className="space-y-3">
          <div className="p-3 sm:p-4 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 shadow-sm">
            A disciplina vale <strong>10 pontos</strong>: 2pts na Delicatte construída em sala e 8pts no projeto final do grupo em produção. React é exposição — não é cobrado.
          </div>
          {pwAvaliacoes.map((av, i) => {
            const isOpen = expandedAv === i;
            return (
              <div key={i} onClick={() => setExpandedAv(isOpen ? null : i)}
                className={`rounded-xl border-2 cursor-pointer transition-all shadow-sm touch-manipulation active:opacity-90 ${av.border} ${av.bg}`}>
                <div className="flex items-start gap-3 px-4 py-3.5">
                  <span className="text-2xl flex-shrink-0">{av.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-gray-900 text-sm">{av.titulo}</span>
                      <span className={`text-white text-xs font-bold px-2 py-0.5 rounded-full ${av.badgeBg}`}>{av.peso}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{av.quando}</p>
                  </div>
                  <span className="text-gray-400 text-xs flex-shrink-0 mt-2">{isOpen ? "▲" : "▼"}</span>
                </div>
                {isOpen && (
                  <div className="px-4 pb-4 border-t border-gray-200 pt-3 space-y-3">
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Formato</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{av.formato}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">O que deve conter</p>
                      <ul className="space-y-2">
                        {av.estrutura.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-gray-400 mt-0.5 flex-shrink-0">→</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-white bg-opacity-70 rounded-lg border border-gray-200">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Critério de avaliação</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{av.criterio}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ============================================================
// PLANO DIM
// ============================================================
function PlanoDIM() {
  const [tab, setTab] = useState("aulas");
  const [expanded, setExpanded] = useState(null);
  const [expandedAv, setExpandedAv] = useState(null);
  const [showLegend, setShowLegend] = useState(false);

  return (
    <div>
      <div className="mb-4 p-3 sm:p-4 bg-teal-50 border border-teal-200 rounded-xl text-sm text-teal-800 leading-relaxed">
        Da ergonomia ao protótipo interativo — <strong>design de interfaces mobile do zero ao Figma profissional</strong>. No final do semestre, o app do grupo vai parecer real porque vai ser real.
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2 mb-4">
        {dimAvaliacoes.map((av, i) => (
          <button key={i} onClick={() => { setTab("avaliacoes"); setExpandedAv(i); }}
            className={`rounded-xl border-2 ${av.border} ${av.bg} p-3 text-left sm:text-center cursor-pointer hover:shadow-md active:scale-95 transition-all touch-manipulation`}>
            <div className="flex sm:flex-col sm:items-center items-center gap-3 sm:gap-0">
              <div className="text-2xl sm:mb-1 flex-shrink-0">{av.icon}</div>
              <div className="flex-1 sm:flex-none">
                <div className={`inline-block text-white text-xs font-bold px-2 py-0.5 rounded-full ${av.badgeBg} mb-1`}>{av.peso}</div>
                <div className="text-xs text-gray-700 font-medium leading-tight">{av.titulo}</div>
              </div>
              <span className="text-gray-400 sm:hidden text-sm flex-shrink-0">›</span>
            </div>
          </button>
        ))}
      </div>

      <div className="flex gap-1 mb-4 bg-white border border-gray-200 p-1 rounded-xl shadow-sm">
        {[{ id:"aulas", label:"📅 Aulas" }, { id:"avaliacoes", label:"📊 Avaliações" }].map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all touch-manipulation ${tab === t.id ? "bg-gray-900 text-white shadow" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === "aulas" && (
        <div>
          <button onClick={() => setShowLegend(!showLegend)}
            className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1 font-medium mb-3 py-1 touch-manipulation">
            <span>{showLegend ? "▲" : "▼"}</span> O que significam as tags?
          </button>
          {showLegend && (
            <div className="mb-3 p-3 bg-white border border-gray-200 rounded-xl space-y-2">
              {Object.entries(tipoInfo).map(([k, v]) => (
                <div key={k} className="flex items-start gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded border font-medium flex-shrink-0 ${v.color}`}>{v.label}</span>
                  <span className="text-xs text-gray-600">{v.desc}</span>
                </div>
              ))}
              <div className="flex items-start gap-2">
                <span className="text-xs px-2 py-0.5 rounded border font-medium flex-shrink-0 bg-rose-50 text-rose-700 border-rose-200">Entrega</span>
                <span className="text-xs text-gray-600">Aula com atividade avaliativa — clique para ver detalhes.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xs px-2 py-0.5 rounded border font-medium flex-shrink-0 bg-amber-50 text-amber-700 border-amber-200">🎓 Classroom</span>
                <span className="text-xs text-gray-600">Material complementar no Classroom — leitura ou vídeo para fazer antes ou depois da aula.</span>
              </div>
            </div>
          )}

          <div className="space-y-1">
            {dimBlocos.map((bloco) => (
              <div key={bloco.id}>
                <div className={`${bloco.color} text-white rounded-xl px-4 py-3 mt-3 mb-2 shadow-sm`}>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-bold opacity-75 uppercase tracking-wider border border-white border-opacity-40 px-2 py-0.5 rounded-full">{bloco.label}</span>
                    <span className="text-xs opacity-75">{bloco.periodo}</span>
                  </div>
                  <div className="font-bold text-base">{bloco.titulo}</div>
                  <div className="mt-1 text-sm opacity-90 leading-relaxed">{bloco.foco}</div>
                </div>
                {dimAulas.filter(a => a.bloco === bloco.id).map((aula) => {
                  const cfg = tipoInfo[aula.tipo];
                  const key = `${aula.bloco}-${aula.num}`;
                  const isOpen = expanded === key;
                  return (
                    <div key={key} onClick={() => setExpanded(isOpen ? null : key)}
                      className={`rounded-xl border cursor-pointer transition-all mb-1 shadow-sm touch-manipulation ${aula.tipo === "buffer" ? "border-amber-200 bg-amber-50" : "border-gray-200 bg-white hover:border-gray-300 active:bg-gray-50"}`}>
                      <div className="flex items-start gap-3 px-4 py-3.5">
                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">{aula.num}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-gray-900 text-sm">{aula.titulo}</span>
                            <span className={`text-xs px-2 py-0.5 rounded border font-medium ${cfg.color}`}>{cfg.label}</span>
                            {aula.entrega && <span className="text-xs px-2 py-0.5 rounded border bg-rose-50 text-rose-700 border-rose-200 font-medium">Entrega</span>}
                            {aula.asynch  && <span className="text-xs px-2 py-0.5 rounded border bg-amber-50 text-amber-700 border-amber-200 font-medium">🎓 Classroom</span>}
                          </div>
                          {!isOpen && <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{aula.desc}</p>}
                        </div>
                        <span className="text-gray-400 text-xs flex-shrink-0 mt-2">{isOpen ? "▲" : "▼"}</span>
                      </div>
                      {isOpen && (
                        <div className="px-4 pb-4 border-t border-gray-100 pt-3 space-y-2">
                          <p className="text-sm text-gray-700 leading-relaxed">{aula.desc}</p>
                          {aula.recurso && (
                            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700 space-y-1">
                              <p className="font-semibold">🎬 Recurso</p>
                              <p>{aula.recurso}</p>
                            </div>
                          )}
                          {aula.entrega && (
                            <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 space-y-1">
                              <p className="font-semibold">{aula.entrega.label}</p>
                              <p>{aula.entrega.detail}</p>
                            </div>
                          )}
                          {aula.asynch && (
                            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 space-y-1">
                              <p className="font-semibold">🎓 Material no Classroom</p>
                              <p>{aula.asynch}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "avaliacoes" && (
        <div className="space-y-3">
          <div className="p-3 sm:p-4 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 shadow-sm">
            A disciplina vale <strong>10 pontos</strong> distribuídos em 3 instrumentos avaliativos ao longo do semestre.
          </div>
          {dimAvaliacoes.map((av, i) => {
            const isOpen = expandedAv === i;
            return (
              <div key={i} onClick={() => setExpandedAv(isOpen ? null : i)}
                className={`rounded-xl border-2 cursor-pointer transition-all shadow-sm touch-manipulation active:opacity-90 ${av.border} ${av.bg}`}>
                <div className="flex items-start gap-3 px-4 py-3.5">
                  <span className="text-2xl flex-shrink-0">{av.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-gray-900 text-sm">{av.titulo}</span>
                      <span className={`text-white text-xs font-bold px-2 py-0.5 rounded-full ${av.badgeBg}`}>{av.peso}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{av.quando}</p>
                  </div>
                  <span className="text-gray-400 text-xs flex-shrink-0 mt-2">{isOpen ? "▲" : "▼"}</span>
                </div>
                {isOpen && (
                  <div className="px-4 pb-4 border-t border-gray-200 pt-3 space-y-3">
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Formato</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{av.formato}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">O que deve conter</p>
                      <ul className="space-y-2">
                        {av.estrutura.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-gray-400 mt-0.5 flex-shrink-0">→</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-white bg-opacity-70 rounded-lg border border-gray-200">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Critério de avaliação</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{av.criterio}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ============================================================
// PLANO EM BREVE
// ============================================================
function PlanoEmBreve({ disc }) {
  const c = corMap[disc.cor];
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-4">
      <div className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center text-3xl mb-4 shadow-lg`}>{disc.icon}</div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{disc.nome}</h2>
      <p className="text-gray-500 text-sm mb-4 max-w-xs leading-relaxed">{disc.descricao}</p>
      {disc.ClassroomLink && (
        <a href={disc.ClassroomLink} target="_blank" rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-3 ${c.badge} border ${c.border} hover:opacity-80 transition-all`}>
          🔗 Acessar Classroom
        </a>
      )}
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${c.badge} border ${c.border}`}>
        🕐 Plano em construção
      </div>
    </div>
  );
}

// ============================================================
// LAYOUT DESKTOP
// ============================================================
function DesktopLayout({ disciplinaAtiva, setDisciplinaAtiva }) {
  const disc = disciplinaAtiva ? disciplinas.find(d => d.id === disciplinaAtiva) : null;
  const c = disc ? corMap[disc.cor] : null;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-72 flex-shrink-0 flex flex-col bg-gray-900 text-white sticky top-0 h-screen overflow-y-auto">
        <div className="relative overflow-hidden px-6 pt-8 pb-6 border-b border-white border-opacity-10">
          {CONFIG.bannerHub && <img src={CONFIG.bannerHub} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />}
          <div className="relative">
            <div className="text-xs text-white opacity-40 uppercase tracking-widest mb-2">{CONFIG.escola}</div>
            <div className="text-lg font-bold leading-tight">Planos de Ensino</div>
            <div className="text-xs text-white opacity-50 mt-1">{CONFIG.curso}</div>
            <div className="text-xs text-white opacity-35 mt-0.5">{CONFIG.modulo}</div>
          </div>
        </div>

        <div className="px-4 py-4 border-b border-white border-opacity-10">
          <div className="flex items-center gap-3 bg-white bg-opacity-5 rounded-xl px-3 py-3">
            {CONFIG.professora.foto ? (
              <img src={CONFIG.professora.foto} alt={CONFIG.professora.nome} className="w-10 h-10 rounded-full object-cover border-2 border-white border-opacity-30 flex-shrink-0" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-xl flex-shrink-0">👩‍🏫</div>
            )}
            <div className="min-w-0">
              <div className="font-semibold text-sm truncate">{CONFIG.professora.nome}</div>
              <div className="text-white opacity-45 text-xs">{CONFIG.professora.titulo}</div>
              {CONFIG.professora.email && <div className="text-white opacity-30 text-xs truncate mt-0.5">{CONFIG.professora.email}</div>}
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          <div className="text-xs text-white opacity-25 uppercase tracking-widest px-3 mb-3">Disciplinas</div>
          <button onClick={() => setDisciplinaAtiva(null)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all touch-manipulation ${!disciplinaAtiva ? "bg-white bg-opacity-10 text-white" : "text-white opacity-50 hover:opacity-80 hover:bg-white hover:bg-opacity-5"}`}>
            <span className="text-base">🏠</span>
            <span>Painel Geral</span>
            {!disciplinaAtiva && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white opacity-60" />}
          </button>
          {disciplinas.map((d) => {
            const cor = corMap[d.cor];
            const isActive = disciplinaAtiva === d.id;
            return (
              <button key={d.id} onClick={() => setDisciplinaAtiva(d.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all touch-manipulation ${isActive ? "bg-white bg-opacity-10 text-white" : "text-white opacity-50 hover:opacity-80 hover:bg-white hover:bg-opacity-5"}`}>
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${cor.bg} ${!d.disponivel ? "opacity-35" : ""}`} />
                <span className="flex-1 text-left truncate">{d.nome}</span>
                {d.disponivel
                  ? <span className={`text-xs px-1.5 py-0.5 rounded-md font-semibold ${cor.badge} opacity-80`}>ativo</span>
                  : <span className={`text-xs px-1.5 py-0.5 rounded-md font-semibold ${cor.badge} opacity-80`}>ativo</span>
                }
              </button>
            );
          })}
        </nav>

        <div className="px-6 py-4 border-t border-white border-opacity-10">
          <p className="text-xs text-white opacity-20 text-center">{CONFIG.periodo}</p>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        {!disc ? (
          <div className="p-8 max-w-4xl mx-auto w-full">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-1">Olá! 👋</h1>
              <p className="text-gray-500">Selecione uma disciplina na barra lateral para ver o plano de ensino completo.</p>
            </div>
            <div className="grid grid-cols-2 gap-5 mb-8">
              {disciplinas.map((d) => {
                const cor = corMap[d.cor];
                return (
                  <div key={d.id} onClick={() => setDisciplinaAtiva(d.id)}
                    className={`bg-white rounded-2xl border-2 cursor-pointer transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden group ${d.disponivel ? cor.border : "border-gray-200"}`}>
                    <div className={`${cor.bg} relative overflow-hidden h-40`}>
                      {d.imagem && <img src={d.imagem} alt={d.nome} className="absolute inset-0 w-full h-full object-cover opacity-60" />}
                      <div className="absolute inset-0 bg-gradient-to-t from-black from-0% via-transparent to-transparent opacity-40" />
                      <div className="relative px-5 pt-5">
                        {d.disponivel
                          ? <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-white bg-opacity-25 text-white">Disponível</span>
                          : <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-black bg-opacity-30 text-white">Em breve</span>
                        }
                      </div>
                    </div>
                    <div className="px-5 py-4">
                      <div className="font-bold text-gray-900 text-base mb-1">{d.nome}</div>
                      <div className="text-xs text-gray-400 mb-2">{d.codigo} · {d.ch}</div>
                      <p className="text-xs text-gray-500 leading-relaxed mb-2">{d.descricao}</p>
                      {/* ✅ LINK CLASSROOM — painel home desktop */}
                      {d.ClassroomLink && (
                        <div onClick={e => e.stopPropagation()}>
                          <a href={d.ClassroomLink} target="_blank" rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:underline hover:text-blue-800 font-medium">
                            🔗 Acessar Classroom
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gray-400">{CONFIG.modulo}</span>
                      <span className={`text-xs font-semibold ${cor.text} group-hover:underline`}>{d.disponivel ? "Ver plano →" : "Em breve"}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                <div className="text-2xl mb-2">📅</div>
                <div className="font-semibold text-gray-800 mb-1">Período letivo</div>
                <div className="text-sm text-gray-500">{CONFIG.periodo}</div>
                <div className="text-xs text-gray-400 mt-1">{CONFIG.curso}</div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                <div className="text-2xl mb-2">📌</div>
                <div className="font-semibold text-gray-800 mb-1">Planos disponíveis</div>
                <div className="text-sm text-gray-500">{disciplinas.filter(d => d.disponivel).length} de {disciplinas.length} disciplinas</div>
                <div className="text-xs text-gray-400 mt-1">Os demais serão publicados em breve</div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* ✅ BANNER DESKTOP com link Classroom */}
            <div className={`relative ${c.bg} text-white`}>
              {disc.imagem && <img src={disc.imagem} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />}
              <div className="relative max-w-4xl mx-auto w-full px-8 py-8">
                <div className="text-xs opacity-60 font-medium uppercase tracking-widest mb-3">{disc.codigo} · {CONFIG.modulo}</div>
                <h2 className="text-3xl font-bold mb-2">{disc.nome}</h2>
                <p className="text-white opacity-70 text-sm max-w-xl leading-relaxed">{disc.descricao}</p>
                <div className="flex items-center gap-3 mt-4 flex-wrap">
                  <span className="text-xs bg-white bg-opacity-15 px-3 py-1 rounded-full">{disc.ch}</span>
                  <span className="text-xs bg-white bg-opacity-15 px-3 py-1 rounded-full">{CONFIG.periodo}</span>
                  {/* ✅ LINK CLASSROOM — banner desktop */}
                  {disc.ClassroomLink && (
                    <a href={disc.ClassroomLink} target="_blank" rel="noopener noreferrer"
                      className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full transition-all font-semibold">
                      🔗 Acessar Classroom
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="p-8 max-w-4xl mx-auto w-full">
              {disc.id === "dim" ? <PlanoDIM /> : <PlanoPW />}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// ============================================================
// LAYOUT MOBILE
// ============================================================
function MobileLayout({ disciplinaAtiva, setDisciplinaAtiva }) {
  const disc = disciplinaAtiva ? disciplinas.find(d => d.id === disciplinaAtiva) : null;
  const c = disc ? corMap[disc.cor] : null;

  if (disc) {
    return (
      <div className="max-w-3xl mx-auto w-full font-sans bg-gray-50 min-h-screen">
        <div className={`relative ${c.bg} text-white shadow-md`}>
          {disc.imagem && <img src={disc.imagem} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />}
          <div className="relative px-4 pt-5 pb-4">
            <button onClick={() => setDisciplinaAtiva(null)}
              className="flex items-center gap-1.5 text-sm text-white opacity-70 hover:opacity-100 mb-4 touch-manipulation">
              ← Voltar ao painel
            </button>
            <div className="flex items-start gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white bg-opacity-20 flex items-center justify-center text-3xl flex-shrink-0">{disc.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="text-xs opacity-70 font-medium uppercase tracking-wide">{disc.codigo} · {CONFIG.modulo}</div>
                <div className="text-xl font-bold leading-tight">{disc.nome}</div>
                <div className="text-xs opacity-75 mt-0.5">{disc.ch} · {CONFIG.periodo}</div>
                {/* ✅ LINK CLASSROOM — header mobile */}
                {disc.ClassroomLink && (
                  <div className="mt-2" onClick={e => e.stopPropagation()}>
                    <a href={disc.ClassroomLink} target="_blank" rel="noopener noreferrer"
                      className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full font-semibold transition-all inline-block">
                      🔗 Acessar Classroom
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          {disc.id === "dim" ? <PlanoDIM /> : <PlanoPW />}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto font-sans bg-gray-50 min-h-screen w-full">
      <div className="relative bg-gray-900 text-white overflow-hidden">
        {CONFIG.bannerHub && <img src={CONFIG.bannerHub} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />}
        <div className="relative px-4 py-6">
          <div className="text-xs text-white opacity-50 uppercase tracking-widest mb-1">{CONFIG.escola}</div>
          <h1 className="text-2xl font-bold">Planos de Ensino</h1>
          <p className="text-sm text-white opacity-70 mt-1">{CONFIG.curso} · {CONFIG.modulo}</p>
          <div className="mt-5 flex items-center gap-3 bg-white bg-opacity-10 rounded-2xl px-4 py-3.5 border border-white border-opacity-15">
            {CONFIG.professora.foto ? (
              <img src={CONFIG.professora.foto} alt={CONFIG.professora.nome} className="w-12 h-12 rounded-full object-cover border-2 border-white border-opacity-40 flex-shrink-0" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-2xl flex-shrink-0">👩‍🏫</div>
            )}
            <div>
              <div className="text-white font-semibold text-sm">{CONFIG.professora.nome}</div>
              <div className="text-white opacity-60 text-xs">{CONFIG.professora.titulo}</div>
              {CONFIG.professora.email && <div className="text-white opacity-50 text-xs mt-0.5">{CONFIG.professora.email}</div>}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-3">Selecione uma disciplina</p>
        <div className="space-y-3">
          {disciplinas.map((d) => {
            const cor = corMap[d.cor];
            return (
              <div key={d.id} onClick={() => setDisciplinaAtiva(d.id)}
                className={`bg-white rounded-2xl border-2 cursor-pointer transition-all shadow-sm hover:shadow-lg overflow-hidden touch-manipulation ${d.disponivel ? cor.border : "border-gray-200"}`}>
                {d.imagem ? (
                  <div className="relative h-28 overflow-hidden">
                    <img src={d.imagem} alt={d.nome} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 ${cor.bg} opacity-40`} />
                    <div className="absolute top-3 left-3"><span className="text-2xl">{d.icon}</span></div>
                    {d.disponivel
                      ? <span className={`absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-semibold ${cor.badge}`}>Disponível</span>
                      : <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-semibold bg-gray-100 text-gray-500">Em breve</span>}
                  </div>
                ) : (
                  <div className={`h-1.5 w-full ${cor.bg}`} />
                )}
                <div className="flex items-center gap-4 p-4">
                  {!d.imagem && (
                    <div className={`w-12 h-12 rounded-xl ${cor.bg} flex items-center justify-center text-2xl flex-shrink-0`}>{d.icon}</div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-gray-900 text-sm">{d.nome}</span>
                      {!d.imagem && (d.disponivel
                        ? <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${cor.badge}`}>Disponível</span>
                        : <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-gray-100 text-gray-500">Em breve</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{d.codigo} · {d.ch}</div>
                    <div className="text-xs text-gray-500 mt-1 leading-relaxed">{d.descricao}</div>
                    {/* ✅ LINK CLASSROOM — lista mobile */}
                    {d.ClassroomLink && (
                      <div className="mt-2" onClick={e => e.stopPropagation()}>
                        <a href={d.ClassroomLink} target="_blank" rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline font-medium">
                          🔗 Acessar Classroom
                        </a>
                      </div>
                    )}
                  </div>
                  <span className="text-gray-300 text-xl flex-shrink-0">›</span>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6 mb-2">Os planos serão disponibilizados ao longo do semestre.</p>
      </div>
    </div>
  );
}

// ============================================================
// APP
// ============================================================
export default function App() {
  const [disciplinaAtiva, setDisciplinaAtiva] = useState(null);
  return (
    <div className="font-sans">
      <div className="lg:hidden">
        <MobileLayout disciplinaAtiva={disciplinaAtiva} setDisciplinaAtiva={setDisciplinaAtiva} />
      </div>
      <div className="hidden lg:block">
        <DesktopLayout disciplinaAtiva={disciplinaAtiva} setDisciplinaAtiva={setDisciplinaAtiva} />
      </div>
    </div>
  );
}