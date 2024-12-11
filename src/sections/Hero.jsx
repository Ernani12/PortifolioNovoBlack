import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import javaImage from '../../public/assets/java.png'; // Caminho para a imagem Java (ajuste conforme necessário)

import springBootImage from '../../public/assets/sp.png'; // Caminho para a imagem do Spring Boot
import myImage from '/assets/principal.png'; // Ajuste o caminho conforme necessário

import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { calculateSizes } from '../constants/index.js';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Ernani <span className="waving-hand">👋</span>
        </p>

        <div className="hero_tag flex flex-col items-center justify-center w-full h-auto text-gray_gradient">
          <p className="text-center mt-6 text-2xl sm:text-3xl font-bold">
            Creating software with Java
          </p>
          <img src={myImage} alt="Software Icon" className="w-[80%] max-w-[800px] h-auto relative z-0" />
      
          <div className="background-image-container absolute inset-0 flex justify-center items-center z-10">
            <img src={springBootImage} alt="Spring Boot Logo" className="spring-boot-image" />
          </div>

           {/* Imagem Java com efeito 3D saltando */}
           <div className="background-image-container absolute inset-0 flex justify-center items-center z-10">
            <img src={javaImage} alt="Java Logo" className="java-image" />
          </div>

        </div>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-[-50px] left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
