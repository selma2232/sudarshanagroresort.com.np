import { useState } from 'react';
import { Play, X } from 'lucide-react';

const EnjoyAgro = ({ bg }) => {
  const [video, setVideo] = useState(false);

  return (
    <div className="relative">

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* DARK OVERLAY (important for luxury look) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-white px-6">
          <h1 className="text-3xl md:text-5xl font-serif mb-2">
            Enjoy Agro Tourism
          </h1>

          <h2 className="text-3xl md:text-5xl font-light text-[#c19b76] mb-6">
            #VisitKoshi2025
          </h2>

          {/* PLAY BUTTON (luxury style) */}
          <button
            onClick={() => setVideo(true)}
            className="group relative flex items-center justify-center w-20 h-20 rounded-full border border-white/50 backdrop-blur-md bg-white/10 hover:bg-[#c19b76] transition-all duration-300"
          >
            <Play className="text-white group-hover:scale-110 transition" size={28} />
          </button>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {video && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setVideo(false)}
            className="absolute top-6 right-6 text-white hover:text-[#c19b76] transition"
          >
            <X size={32} />
          </button>

          {/* VIDEO */}
          <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EnjoyAgro;
