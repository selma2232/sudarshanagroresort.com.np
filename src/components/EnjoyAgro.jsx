import { useState } from 'react';
import { CirclePlay, X } from 'lucide-react';

const EnjoyAgro = ({ bg }) => {
  const [video, setVideo] = useState(false);

  const videohandler = () => {
    setVideo(true);
  };

  const cancle = () => {
    setVideo(false);
  };

  return (
    <div className="relative">
      <section 
        className="w-full bg-cover bg-center bg-fixed overflow-hidden" 
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="relative w-full h-[55vh] flex flex-col justify-center items-center text-white text-center px-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2">Enjoy Agro Tourism</h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-green-500 mb-5">#VisitKoshi2025</h2>
          <CirclePlay 
            className="cursor-pointer transition-transform transform hover:scale-110" 
            onClick={videohandler} 
            size={85} 
          />
        </div>
      </section>

      {/* Video Overlay */}
      {video && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative flex mb-6">
            <iframe
              className="w-full max-w-[860px] h-[250px] md:h-[350px] lg:h-[450px]"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <X 
              size={35} 
              className="absolute bottom-110 left-[calc(100%+10px)] mt-52 text-white cursor-pointer md:left-[calc(100%+20px)]" 
              onClick={cancle} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EnjoyAgro;
