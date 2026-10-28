import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, BookOpen, CheckCircle2, ChevronLeft, ChevronRight, Factory, GraduationCap, Headphones, Play, ShieldCheck, Volume2, XCircle, ClipboardCheck, Image as ImageIcon } from "lucide-react";
import { course } from "./rew450-course";
import "./style.css";

const figureFiles = {
  1: "figura-01-chave-geral.jpg",
  2: "figura-02-emergencia-botoeira-principal.jpg",
  3: "figura-03-emergencia-desenrolador.jpg",
  8: "figura-08-porta-acesso-desenrolador.jpg",
  9: "figura-09-tela-principal.jpg",
  10: "figura-10-estatisticas-producao.jpg",
  11: "figura-11-contato.jpg",
  12: "figura-12-alarmes.jpg",
  13: "figura-13-dados-produto.jpg",
  14: "figura-14-configuracoes.jpg",
  15: "figura-15-posicao-zero-prensa.jpg",
  16: "figura-16-liberacao-manual-freio.jpg",
  17: "figura-17-colador-rabichos.jpg",
  18: "figura-18-status-servodrive.jpg",
  19: "figura-19-botoeira-principal.jpg",
  20: "figura-20-botoeira-desenrolador.jpg",
  21: "figura-21-comando-homem-vivo-morto.jpg"
};

function getFigureNumbers(caption = "") {
  const numbers = new Set();
  for (const match of caption.matchAll(/Figuras?\s+(\d+)(?:\s+a\s+(\d+))?/gi)) {
    const start = Number(match[1]);
    const end = Number(match[2] || start);
    for (let n = start; n <= end; n++) numbers.add(n);
  }
  return [...numbers];
}


const allLessons = course.modules.flatMap((module, moduleIndex) =>
  module.topics.flatMap((topic, topicIndex) =>
    topic.parts.map((part, partIndex) => ({
      ...part, moduleId: module.id, moduleTitle: module.title, moduleIndex,
      topicId: topic.id, topicTitle: topic.title, topicIndex, partIndex,
      reference: topic.reference, key: `${module.id}-${topic.id}-${partIndex}`
    }))
  )
);

export default function App() {
  const [activeKey, setActiveKey] = useState(allLessons[0].key);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [passed, setPassed] = useState({});
  const [speaking, setSpeaking] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const active = allLessons.find(item => item.key === activeKey) || allLessons[0];
  const questions = active.questions;
  const quizDone = Boolean(submitted[active.key]);
  const score = questions.filter((q, i) => answers[`${active.key}-${i}`] === q.answer).length;
  const completed = Object.keys(passed).filter(key => passed[key]).length;
  const percent = Math.round(completed / allLessons.length * 100);
  const allPassed = completed === allLessons.length;

  useEffect(() => () => {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }, []);

  const moduleProgress = useMemo(() => course.modules.map(module => {
    const keys = allLessons.filter(l => l.moduleId === module.id).map(l => l.key);
    return { id: module.id, title: module.title, done: keys.filter(k => passed[k]).length, total: keys.length };
  }), [passed]);

  function stopNarration() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setSpeaking(false);
  }
  function narrate() {
    if (!("speechSynthesis" in window)) {
      window.alert("A narração automática não está disponível neste navegador.");
      return;
    }
    if (speaking) { stopNarration(); return; }
    const text = `${active.topicTitle}. ${active.title}. ${active.body}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    utterance.rate = 0.94;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  }
  function chooseLesson(key) {
    stopNarration();
    setActiveKey(key);
    setShowQuiz(false);
    setShowCertificate(false);
  }
  function submitQuiz() {
    setSubmitted(previous => ({ ...previous, [active.key]: true }));
    const currentScore = questions.filter((q, i) => answers[`${active.key}-${i}`] === q.answer).length;
    if (currentScore / questions.length >= 0.8) setPassed(previous => ({ ...previous, [active.key]: true }));
    else setPassed(previous => ({ ...previous, [active.key]: false }));
  }
  function retryQuiz() {
    setAnswers(previous => {
      const next = { ...previous };
      questions.forEach((_, i) => delete next[`${active.key}-${i}`]);
      return next;
    });
    setSubmitted(previous => ({ ...previous, [active.key]: false }));
    setPassed(previous => ({ ...previous, [active.key]: false }));
  }
  function go(delta) {
    const index = allLessons.findIndex(item => item.key === active.key);
    const next = Math.max(0, Math.min(allLessons.length - 1, index + delta));
    chooseLesson(allLessons[next].key);
  }

  return <div className="app">
    <header className="topbar">
      <button className="brand" onClick={() => { chooseLesson(allLessons[0].key); window.scrollTo({top:0,behavior:"smooth"}); }} aria-label="Voltar ao início">
        <span className="brandicon"><Factory size={22}/></span>
        <span>TRÓPICOS<small>ACADEMIA INDUSTRIAL</small></span>
      </button>
      <div className="topbar-right"><span className="safe"><ShieldCheck size={16}/> Aprendizagem com segurança</span><span className="course-chip">REW-450 AFH</span></div>
    </header>
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><GraduationCap size={15}/> TREINAMENTO INSTITUCIONAL</span>
          <h1>Rebobinadeira<br/><em>REW-450 AFH</em></h1>
          <p>Aprenda os conceitos de preparação, interface, comandos e segurança com explicações narradas e avaliações por etapa.</p>
          <div className="hero-meta"><span><BookOpen size={15}/> 2 módulos</span><span><Headphones size={15}/> Narrador em português</span><span><ClipboardCheck size={15}/> Avaliação por lição</span></div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="rings"/><div className="machine"><Factory size={82} strokeWidth={1.2}/></div><small>APRENDIZAGEM CONTÍNUA</small></div>
      </section>

      <section className="course-heading">
        <div><span className="eyebrow">MANUAL OFICIAL COMO REFERÊNCIA</span><h2>Trilha de aprendizagem</h2><p className="muted">{course.source}. O conteúdo deve ser validado pelo responsável técnico antes do uso operacional.</p></div>
        <div className="overall-progress"><strong>{percent}%</strong><span>concluído</span><div className="track"><span style={{width:`${percent}%`}}/></div></div>
      </section>

      <div className="training-layout">
        <aside className="sidebar">
          <div className="sidebar-title"><BookOpen size={18}/><b>Conteúdo do curso</b></div>
          {course.modules.map((module, mi) => {
            const mp = moduleProgress[mi];
            return <div className="module-group" key={module.id}>
              <div className="module-heading"><span>MÓDULO {mi + 1}</span><b>{mp.done}/{mp.total}</b></div>
              <h3>{module.title.replace(/^Módulo [12] — /, "")}</h3>
              <p>{module.description}</p>
              {module.topics.map(topic => <div className="topic-group" key={topic.id}>
                <div className="topic-label">{topic.id}. {topic.title}</div>
                {topic.parts.map((part, pi) => {
                  const key = `${module.id}-${topic.id}-${pi}`;
                  const selected = activeKey === key;
                  return <button key={key} className={`lesson-link ${selected ? "active" : ""}`} onClick={() => chooseLesson(key)}>
                    <span className="lesson-status">{passed[key] ? <CheckCircle2 size={16}/> : <span>{pi + 1}</span>}</span>
                    <span className="lesson-link-text"><strong>{part.title}</strong><small>{submitted[key] ? passed[key] ? "Aprovado" : "Refazer avaliação" : "Estudo + avaliação"}</small></span>
                    <ChevronRight size={15}/>
                  </button>;
                })}
              </div>)}
            </div>;
          })}
        </aside>

        <article className="lesson-panel">
          <div className="lesson-topline"><span className="eyebrow">{active.moduleTitle} · TÓPICO {active.topicId}</span><span className="ref-chip">{active.reference}</span></div>
          <h2>{active.topicTitle}</h2>
          <h3 className="part-title">{active.title}</h3>
          <div className="visual-panel">
            <div className="visual-grid"/>
            <div className="visual-caption"><ImageIcon size={16}/><span><b>Figuras originais do manual</b><small>{active.imageCaption}</small></span></div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:14,padding:"18px",position:"relative",zIndex:1,width:"100%"}}>
              {getFigureNumbers(active.imageCaption).filter(n => figureFiles[n]).map(n => (
                <figure key={n} style={{margin:0,background:"#fff",border:"1px solid #dfe7e1",borderRadius:10,padding:10,overflow:"hidden"}}>
                  <img src={`/figuras-rew450/${figureFiles[n]}`} alt={`Figura ${n} — manual da Rebobinadeira REW-450 AFH`} loading="lazy" style={{display:"block",width:"100%",height:190,objectFit:"contain",background:"#f7f8f6"}}/>
                  <figcaption style={{fontSize:12,color:"#52645a",paddingTop:8,fontWeight:600}}>Figura {n} — REW-450 AFH</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="lesson-copy"><p>{active.body}</p>
            <div className="narrator-bar"><span className="narrator-icon"><Volume2 size={19}/></span><div><b>Narrador virtual</b><small>Leitura em português brasileiro</small></div><button className={`listen-btn ${speaking ? "playing" : ""}`} onClick={narrate}>{speaking ? <XCircle size={16}/> : <Play size={16}/>} {speaking ? "Parar" : "Ouvir explicação"}</button></div>
            <div className="safety-note"><ShieldCheck size={20}/><div><b>Alerta de segurança</b><p>Este conteúdo é didático e não substitui o manual integral, os procedimentos internos, a capacitação prática supervisionada nem a autorização formal para operar. Nunca contorne proteções. Confirme cada procedimento com o responsável técnico.</p></div></div>
          </div>

          <section className="quiz-section">
            <div className="quiz-title"><div><span className="eyebrow">VERIFICAÇÃO DE APRENDIZAGEM</span><h3>Confira o que você aprendeu</h3></div><span className="pass-mark">Mínimo: 80%</span></div>
            {!showQuiz && !quizDone && <div className="quiz-intro"><p>Responda às {questions.length} perguntas para validar esta etapa. A aprovação exige pelo menos 80% de acertos.</p><button className="primary" onClick={() => setShowQuiz(true)}>Iniciar avaliação <ChevronRight size={17}/></button></div>}
            {(showQuiz || quizDone) && <div className="questions">
              {questions.map((q, qi) => <fieldset className="question" key={q.q} disabled={quizDone}>
                <legend>{qi + 1}. {q.q}</legend>
                {q.options.map((option, oi) => <label key={option} className={`option ${quizDone && oi === q.answer ? "correct" : ""} ${quizDone && answers[`${active.key}-${qi}`] === oi && oi !== q.answer ? "incorrect" : ""}`}>
                  <input type="radio" name={`${active.key}-${qi}`} checked={answers[`${active.key}-${qi}`] === oi} onChange={() => setAnswers(previous => ({...previous, [`${active.key}-${qi}`]: oi}))} disabled={quizDone}/>
                  <span>{option}</span>{quizDone && oi === q.answer && <CheckCircle2 size={17}/>}
                  {quizDone && answers[`${active.key}-${qi}`] === oi && oi !== q.answer && <XCircle size={17}/>}
                </label>)}
                {quizDone && <p className="answer-explanation"><b>Explicação:</b> {q.why}</p>}
              </fieldset>)}
              {!quizDone ? <button className="primary submit-quiz" onClick={submitQuiz} disabled={questions.some((_, i) => answers[`${active.key}-${i}`] === undefined)}>Corrigir avaliação <CheckCircle2 size={17}/></button> :
                <div className={`result-banner ${passed[active.key] ? "success" : "retry"}`}>
                  {passed[active.key] ? <CheckCircle2 size={23}/> : <XCircle size={23}/>}
                  <div><b>{passed[active.key] ? "Etapa aprovada!" : "Ainda não aprovado"}</b><p>Você acertou {score} de {questions.length} ({Math.round(score / questions.length * 100)}%). {passed[active.key] ? "Sua aprovação nesta etapa foi registrada nesta sessão." : "Revise a explicação e tente novamente."}</p></div>
                  {!passed[active.key] && <button className="secondary" onClick={retryQuiz}>Tentar novamente</button>}
                </div>}
            </div>}
          </section>
          <div className="lesson-footer"><button className="secondary" onClick={() => go(-1)} disabled={allLessons[0].key === active.key}><ChevronLeft size={17}/> Anterior</button><span>Etapa {allLessons.findIndex(l => l.key === active.key) + 1} de {allLessons.length}</span><button className="primary" onClick={() => { if (allLessons[allLessons.length - 1].key === active.key) { setShowCertificate(true); } else go(1); }} disabled={!passed[active.key] && allLessons[allLessons.length - 1].key !== active.key}>Próxima etapa <ChevronRight size={17}/></button></div>
          {showCertificate && <div className={`completion-card ${allPassed ? "complete" : ""}`}><GraduationCap size={26}/><div><b>{allPassed ? "Trilha concluída" : "Trilha ainda não aprovada"}</b><p>{allPassed ? "Todas as avaliações foram aprovadas nesta sessão. A emissão de certificado institucional depende da validação e integração do registro de treinamento." : `Você aprovou ${completed} de ${allLessons.length} etapas. Conclua as avaliações restantes para aprovação.`}</p></div></div>}
        </article>
      </div>

      <aside className="notice"><ShieldCheck size={22}/><div><b>Validação técnica e visual pendente</b><p>O conteúdo textual foi estruturado a partir dos tópicos identificados no manual. A correspondência e inserção das figuras originais, a revisão por especialista e os testes de compilação e publicação ainda precisam ser concluídos antes de considerar este treinamento pronto para uso.</p></div></aside>
    </main>
    <footer><span>© {new Date().getFullYear()} Trópicos · Academia Industrial</span><span><ShieldCheck size={14}/> Segurança, qualidade e aprendizagem contínua</span></footer>
  </div>;
}
