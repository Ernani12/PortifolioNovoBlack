import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Ernani</p>
              <p className="grid-subtext text-justify">
                
              Professional JR graduated in Computer Science from Unifei and passionate about technology, programming, logic, software development and applications
              , he likes the area and his main base is Java, and can also use React or Angular (developing) I studied at the COTUCA technical college on the Internet IT course where I gained knowledge in: Java, Delphi, PHP, SQL and tools for web services. (htmls, css, JavaScript, JSP), in which I did an internship at MOTOROLA (Lenovo). Current degree in Computer Science Bachelor - Federal University of Itajubá, dealing with technologies and languages ​​such as: Java, Python, React, Angular (JavaScript and Type), PHP, SQL, Spring, Mongo, Firebase, Django, REST API, C/ C++, PostgreeSQL, MySQL, Node, Github, Jira, similar for software development, with IBM/KYNDRYL internship.
              Hi if you need Java softwares backend and frontend, maybe fullstack web Rest API, automation, i could help you.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              My princibal Stack base its Java. I am learning Java since 2010-2013 in my technician colege COTUCA(Unicamp) width Java version 8. In this course i ve been studing CSS, HTML Delphi, JSP, PHP, SQL, C#. Although, my focus was POO (oriented objeted), in Java , building MVC projects, API, Rest, and others some apps in desktop in Java.
• Even in my University (UNIFEI), I was studing Computer Science with new languages and frameworks like Spring, Django, Angular, Hibernate librarys like React for developing Rest API, web applications with backend and Frontend too and i still study design patters too like Solid, Factor, Abstract, POO concepts: Overloading, Overriding, and reusing components.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Rjieka, Croatia and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">adrian@jsmastery.pro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
