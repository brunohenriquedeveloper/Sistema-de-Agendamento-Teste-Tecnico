<h1 align="center">App de Agendamentos – Teste Técnico (Full Stack Estágio)</h1>

<p align="center">
  <a href="#tecnologias-utilizadas">Tecnologias</a> •
  <a href="#funcionalidades-implementadas">Funcionalidades</a> •
  <a href="#estrutura-do-projeto">Estrutura</a> •
  <a href="#como-rodar-o-projeto">Rodar o projeto</a> •
  <a href="#endpoints-da-api">Endpoints</a> •
  <a href="#deploy">Deploy</a> •
  <a href="#demonstracao">Demonstração</a> •
  <a href="#extras">Extras</a> •
  <a href="#sobre-mim">Sobre mim</a>
</p>

<hr/>

<h2 id="tecnologias-utilizadas">Tecnologias Utilizadas ⚙️</h2>

<h3>Backend</h3>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>Nodemon</li>
  <li>dotenv</li>
</ul>

<h3>Frontend</h3>
<ul>
  <li>React.js</li>
  <li>Create React App</li>
  <li>React Icons</li>
  <li>Html</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<hr/>

<h2 id="funcionalidades-implementadas">Funcionalidades Implementadas 🚀</h2>

<h3>Backend</h3>
<ul>
  <li>POST /agendamentos – cria um agendamento</li>
  <li>GET /agendamentos – lista todos</li>
  <li>GET /agendamentos/:id – busca um agendamento</li>
  <li>PUT /agendamentos/:id – atualiza</li>
  <li>DELETE /agendamentos/:id – exclui</li>
  <li>Conexão com banco de dados MongoDB</li>
  <li>Tratamento básico de erros</li>
</ul>

<h3>Frontend</h3>
<ul>
  <li>Tela de listagem de agendamentos</li>
  <li>Formulário para criar agendamento</li>
  <li>Tela de edição</li>
  <li>Opção de excluir</li>
  <li>Consumo da API desenvolvida</li>
</ul>

<hr/>

<h2 id="estrutura-do-projeto">Estrutura do Projeto 🏗️</h2>

<pre>
backend/
  src/
    controllers/
    routes/
    models/
    db.js
    server.js

frontend/
  public/
  src/
    components/
    pages/
    api/
    App.js
    index.js
</pre>

<hr/>

<h2 id="como-rodar-o-projeto">🛠️ Como Rodar o Projeto</h2>

<h3>Backend</h3>
<pre>
cd backend
npm install
npm start
</pre>

<h3>Frontend</h3>
<pre>
cd frontend
npm install
npm start
</pre>

<hr/>

<h2 id="endpoints-da-api">🌐 Endpoints da API</h2>

<ul>
  <li><strong>POST /agendamentos</strong> – Criar agendamento</li>
  <li><strong>GET /agendamentos</strong> – Listar todos</li>
  <li><strong>GET /agendamentos/:id</strong> – Buscar por ID</li>
  <li><strong>PUT /agendamentos/:id</strong> – Atualizar agendamento</li>
  <li><strong>DELETE /agendamentos/:id</strong> – Excluir agendamento</li>
</ul>

<hr/>

<h2 id="deploy">Deploy 🚀</h2>

<p>O projeto está disponível publicamente:</p>

<ul>
  <li><strong>Frontend (Vercel):</strong> <a href="https://sistema-de-agendamento-teste-tecnic.vercel.app/">https://sistema-de-agendamento-teste-tecnic.vercel.app/</a></li>

  <li><strong>Backend (Render):</strong> <a href="https://sistema-de-agendamento-teste-tecnico.onrender.com">https://sistema-de-agendamento-teste-tecnico.onrender.com</a>  
  (Use <code>/agendamentos</code> para visualizar os dados.)</li>
</ul>

<p><strong>OBS:</strong> Como o backend está no Render (plano gratuito), a API entra em sleep mode.  
A primeira requisição pode levar cerca de 20 segundos.</p>

<hr/>

<h2 id="demonstracao">🖼️ Demonstração</h2>

<ul>
  <li><strong>Vídeo de demonstração:</strong>  
    <a href="https://youtu.be/QwWF-UOiUwI" target="_blank">https://youtu.be/QwWF-UOiUwI</a>
  </li>
</ul>

<table>
  <td>
    <h4><em>Página Inicial Desktop</em></h4>
    <img width="800px" src="imgs/Desktop 3.png">
  </td>
</table>

<table>
  <tr>
    <td>
      <h4><em>Página de Agendamentos</em></h4>
      <img width="800px" src="imgs/Desktop 2.png">
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>
      <h4><em>Página de Criar Agendamentos</em></h4>
      <img width="800px" src="imgs/Desktop 4.png">
    </td>
  </tr>
</table>

<br/>

<hr/>

<h2 id="extras">Extras Implementados ✨</h2>

<ul>
  <li><strong>Design Responsivo:</strong> Layout adaptado para diferentes tamanhos de tela (mobile, tablet e desktop).</li>

  <li><strong>Componentização:</strong> Componentes reutilizáveis e melhor organização da arquitetura do frontend.</li>

  <li><strong>UI Intuitiva:</strong> Interface simples, clara e fácil de navegar, seguindo boas práticas de UX.</li>

  <li><strong>Deploy Completo:</strong> Aplicação publicada com backend no Render e frontend na Vercel.</li>

  <li><strong>Gestão de Status:</strong> Funcionalidade para alterar status dos compromissos/tarefas diretamente na interface.</li>

  <li><strong>Função de Edição Aprimorada:</strong> Permite editar qualquer campo do agendamento de forma simples e rápida.</li>
</ul>


<hr/>

<h2 id="sobre-mim">Sobre Mim 👨🏻</h2>

<p>Meu nome é <strong>Bruno Henrique</strong>, sou desenvolvedor Full Stack e atualmente curso Ciência da Computação. Tenho experiência com JavaScript, React, Node.js, Express e MongoDB. Sou UX Designer formado pelo curso do Google, o que me proporcionou uma base sólida em usabilidade e experiência do usuário. </p>

<p>Também já atuei em um projeto de desenvolvimento de software para drones, onde adquiri conhecimento sobre integração entre hardware e software. Meu objetivo é evoluir como desenvolvedor e criar soluções modernas, eficientes e escaláveis.</p>

<p>
  <strong>LinkedIn:</strong> 
  <a href="https://www.linkedin.com/in/brunohenriquedeveloper/" target="_blank">https://www.linkedin.com/in/brunohenriquedeveloper/</a>  
  <br/>
  <strong>GitHub:</strong> 
  <a href="https://github.com/brunohenriquedeveloper" target="_blank">https://github.com/brunohenriquedeveloper</a>
</p>
