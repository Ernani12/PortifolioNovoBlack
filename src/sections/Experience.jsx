import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">

              {/* Trabalho 1 */}
              <div
                onClick={() => setAnimationName('coding')}
                onPointerOver={() => setAnimationName('coding')}
                onPointerOut={() => setAnimationName('idle')}
                className="work-content_container group">
                <div className="flex flex-col h-full justify-start items-center py-2">
                  <div className="work-content_logo">
                    <img className="w-full h-full" src="/assets/e.jpg" alt="IBM Logo" />
                  </div>
                  <div className="work-content_bar" />
                </div>
                <div className="sm:p-5 px-2.5 py-5">
                  <p className="font-bold text-white-800">Java Developer Backend</p>
                  <p className="text-sm mb-5">Freelance-- <span>2022 - 2024</span></p>
                  <p className="group-hover:text-white transition-all ease-in-out duration-500">

                  <div> <h1>Metas:</h1> <p>Experiência em criar APIs REST e trabalhar em projetos como:</p>
                  <p>• Ecommerce: SpringBoot/Angular</p>
                  <p>• Lojas Varejo: Spring Boot/Thymeleaf </p>
                  <p>• Mapeamento e filtragem dados: Spring Boot/React </p>
                  <p>• Educacional Spring Boot/React</p>
                  </div>

                  <div className="mt-4">
                  <h1>Desafios:</h1>
                  • Foco principal em backend, mas com habilidades para lidar com o frontend quando necessário.
                  </div>

                  <div className="mt-4">
                    <h1>Tecnologias</h1> 
                    • Java, Spring Boot
                    </div>
                  </p>
                </div>
              </div>

              {/* Trabalho 2 */}
              <div
                onClick={() => setAnimationName('design')}
                onPointerOver={() => setAnimationName('design')}
                onPointerOut={() => setAnimationName('idle')}
                className="work-content_container group">
                <div className="flex flex-col h-full justify-start items-center py-2">
                  <div className="work-content_logo">
                    <img className="w-full h-full" src="/assets/mot.png" alt="Google Logo" />
                  </div>
                  <div className="work-content_bar" />
                </div>
                <div className="sm:p-5 px-2.5 py-5">
                  <p className="font-bold text-white-800">Motorola (Lenovo)</p>
                  <p className="text-sm mb-5">Desenvolvedor Backend  Developer Automaçao e Analista- <span>2012- 2013</span></p>
                  <p className="group-hover:text-white transition-all ease-in-out duration-500">

                  <div> <h1>Metas:</h1>
                    <p>• Implementar e manter bancos de dados eficientes para suportar as operações da linha de produção de celulares.</p>
                    <p>• Automatizar processos relacionados a documentação e inserção de dados para otimizar o fluxo de trabalho.</p>
                    <p>• Garantir a segurança e integridade dos dados armazenados.</p>
                  </div>
                  <div className="mt-4">
                    <h1>Desafios:</h1>
                    • Resolver problemas de cadastro e inserção de dados em tempo real, assegurando a continuidade da produção.
                    • Manter a comunicação clara e eficiente com equipes globais, fornecendo suporte técnico em inglês.
                    • Implementar melhorias contínuas em processos e prazos, alinhando-se aos padrões da empresa multinacional.
                  </div>
                  <div className="mt-4">
                    <h1>Tecnologias</h1> 
                    • MYSQL, HTML, CCS, JavaScript, Java(para automação de documentos) , GitHub
                    </div>
                  </p>
                </div>
              </div>

              {/* Trabalho 3 */}
              <div
                onClick={() => setAnimationName('management')}
                onPointerOver={() => setAnimationName('management')}
                onPointerOut={() => setAnimationName('idle')}
                className="work-content_container group">
                <div className="flex flex-col h-full justify-start items-center py-2">
                  <div className="work-content_logo">
                    <img className="w-full h-full" src="/assets/ibm.png" alt="Microsoft Logo" />
                  </div>
                  <div className="work-content_bar" />
                </div>
                <div className="sm:p-5 px-2.5 py-5">
                  <p className="font-bold text-white-800">IBM</p>
                  <p className="text-sm mb-5">Java Backend  Developer -- <span>2020 - 2022</span></p>
                  <p className="group-hover:text-white transition-all ease-in-out duration-500">
                  
                  <div>
                    <h1>Metas:</h1>
                    • Desenvolver no backend com Java para otimizar fluxos de trabalho e melhorar a eficiência das entregas.
                    • Realizar migrações de projetos utilizando Java 8/11 e Spring Boot, modernizando e mantendo aplicações internas..
                    • Documentação de software diagramas requisitos, modelagem, uml, entidades.
                    • Criar e manter APIs REST às necessidades dos clientes e padrões globais de mercado(migração)
                    </div>
                    <div className="mt-4">
                    <h1>Desafios:</h1>
                    • Assegurar a qualidade do código por meio de práticas de refatoração e testes unitários
                    • Garantir a estabilidade e a continuidade operacional de sistemas, realizando a manutenção de servidores e bancos de dados SQL.
                    • Gerenciar problemas de software para elaboração de cards de problemas de backlog (Jira)
                    • Gerenciamento de acesso interno de paginas, HTML, CSS e JavaScript para garantir uma navegação eficiente para os usuários.
                    • Colaborar com equipes globais em ambientes remotos, fornecendo suporte técnico em inglês e resolvendo problemas críticos.
                    </div>

                    <div className="mt-4">
                    <h1>Tecnologias:</h1>
                    • Java 8/11,17 Spring Boot, Hibernate, Maven, Hibernate, JPA, Thymeleaf, RestAPI, C/C++.
                    GitHub, GitDesktop Jira, Teams, Slack, SQL, Scrum, Kanban, HTML, CSS, JavaScript, MySQL Workbench
                    </div>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default WorkExperience;
