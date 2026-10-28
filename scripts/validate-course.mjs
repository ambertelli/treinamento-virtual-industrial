import { readFileSync, existsSync } from "node:fs";
import { course } from "../src/rew450-course.js";

const app = readFileSync("src/App.jsx", "utf8");
const figureBlock = app.match(/const figureFiles = \{([\s\S]*?)\};/);
if (!figureBlock) throw new Error("Não foi encontrado o mapa figureFiles em src/App.jsx.");

const figureFiles = Object.fromEntries(
  [...figureBlock[1].matchAll(/(\d+):\s*"([^"]+\.jpg)"/g)]
    .map(([, number, file]) => [Number(number), file])
);

const lessons = [];
for (const module of course.modules ?? []) {
  if (!Array.isArray(module.topics)) throw new Error(`Módulo sem tópicos: ${module.id}`);
  for (const topic of module.topics) {
    if (!Array.isArray(topic.parts)) throw new Error(`Tópico sem etapas: ${topic.id}`);
    for (const part of topic.parts) lessons.push({ module, topic, part });
  }
}
if (!lessons.length) throw new Error("O curso não contém etapas.");

const problems = [];
for (const { module, topic, part } of lessons) {
  const label = `${module.id} / tópico ${topic.id} / ${part.title}`;
  if (!part.body?.trim()) problems.push(`${label}: explicação ausente`);
  if (!part.imageCaption?.trim()) problems.push(`${label}: legenda de figuras ausente`);
  if (!Array.isArray(part.questions) || part.questions.length < 2) {
    problems.push(`${label}: são necessárias pelo menos 2 perguntas`);
    continue;
  }
  for (const [index, question] of part.questions.entries()) {
    const qlabel = `${label}, pergunta ${index + 1}`;
    if (!question.q?.trim()) problems.push(`${qlabel}: enunciado ausente`);
    if (!Array.isArray(question.options) || question.options.length < 2) {
      problems.push(`${qlabel}: opções insuficientes`);
    } else if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.options.length) {
      problems.push(`${qlabel}: índice da resposta correta inválido`);
    }
    if (!question.why?.trim()) problems.push(`${qlabel}: explicação da resposta ausente`);
  }

  for (const match of part.imageCaption.matchAll(/Figuras?\s+(\d+)(?:\s+a\s+(\d+))?/gi)) {
    const start = Number(match[1]);
    const end = Number(match[2] || start);
    for (let number = start; number <= end; number++) {
      const file = figureFiles[number];
      if (!file) {
        problems.push(`${label}: Figura ${number} não está mapeada em App.jsx`);
      } else if (!existsSync(`public/figuras-rew450/${file}`)) {
        problems.push(`${label}: arquivo da Figura ${number} ausente (${file})`);
      }
    }
  }
}

if (problems.length) {
  console.error("Validação do treinamento falhou:");
  for (const problem of problems) console.error(`- ${problem}`);
  process.exit(1);
}
const questionCount = lessons.reduce((total, lesson) => total + lesson.part.questions.length, 0);
console.log(`Validação aprovada: ${course.modules.length} módulos, ${lessons.length} etapas, ${questionCount} perguntas e referências de figuras verificadas.`);
