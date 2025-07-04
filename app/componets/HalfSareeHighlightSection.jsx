// // 'use client';
// // import React, { useRef, useEffect } from 'react';
// // import Link from 'next/link';

// // export default function HalfSareeHighlightSection() {
// //   const videoRef = useRef(null);

// //   useEffect(() => {
// //     const video = videoRef.current;
// //     if (video) video.play();
// //   }, []);

// //   return (
// //     <div className="w-full">
// //       {/* Message above video */}
// //       <div className="w-full mt-[-35px] text-black bg-rose-50 text-center py-6 px-4">
// //         <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-black mb-2">
// //           Capture Tradition with Half Saree Photography!
// //         </h2>
// //         <p className="text-sm sm:text-base text-gray-700 font-medium">
// //           Celebrate Elegance, Culture, and Coming of Age Moments
// //         </p>
// //       </div>

// //       <section className="relative w-full h-[90vh] overflow-hidden bg-black">
// //         {/* Background video */}
// //         <video
// //           ref={videoRef}
// //           className="absolute inset-0 w-full h-full object-cover opacity-80"
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //         >
// //           <source src="/videobar.mp4" type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>

// //         {/* Overlay */}
// //         <div className="absolute inset-0 bg-black/20 z-0" />

// //         {/* Foreground content */}
// //         <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 sm:px-10 lg:px-20 text-white">
// //           <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-rose-300 mb-2 drop-shadow-md">
// //             Step into Grace and Heritage
// //           </h2>

// //           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
// //             Half Saree Photography Redefined
// //           </h1>

// //           <p className="text-sm sm:text-base md:text-lg max-w-3xl mb-6 leading-relaxed drop-shadow-md">
// //             Commemorate the milestone of womanhood with stunning half saree portraits. 
// //             Blending tradition with modern elegance—capturing over 800+ ceremonies across the UK.
// //           </p>

// //           <Link
// //             href="/#gallery"
// //             className="bg-gradient-to-br from-rose-400 to-rose-800 hover:from-rose-200 hover:to-rose-500 hover:text-black text-white font-bold py-2 px-6 rounded-lg text-sm sm:text-base shadow-lg transition duration-300"
// //           >
// //             View Our Half Saree Gallery
// //           </Link>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }



'use client';

import { useEffect, useState, useCallback } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../Admin/Firebase/config';
import Image from 'next/image';

export default function HalfSareeHighlightSection() {
  const [videos, setVideos] = useState([]);
  const [heroVideoId, setHeroVideoId] = useState('');
  const [selectedVideoId, setSelectedVideoId] = useState('');
  const [showVideoGrid, setShowVideoGrid] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const q = query(collection(db, 'youtubeVideos'), orderBy('priority', 'asc'));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => doc.data());
        setVideos(data);
        if (data.length > 0) setHeroVideoId(data[0].videoId);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, []);

  const handleThumbnailClick = useCallback((videoId) => {
    setSelectedVideoId(videoId);
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedVideoId('');
    setShowModal(false);
  }, []);

  const heroVideoUrl = `https://www.youtube.com/embed/${heroVideoId}?autoplay=1&mute=1&loop=1&playlist=${heroVideoId}`;
  const modalVideoUrl = `https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&mute=0&loop=1&playlist=${selectedVideoId}`;

  return (
    <div className="w-full bg-black text-white relative ">
      {/* === HERO VIDEO === */}
      <div className="relative h-[90vh] mb-[50px] w-full overflow-hidden">
        {heroVideoId && (
          <div className="absolute inset-0 z-0 scale-[1.45] origin-center">
            <iframe
              src={heroVideoUrl}
              title="Featured Hero Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* === HERO TEXT OVERLAY === */}
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-xl sm:text-3xl font-bold text-rose-300 mb-2">
            Step into Grace and Heritage
          </h2>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white/50 mb-4">
            Half Saree Photography Redefined
          </h1>
          <p className="max-w-2xl text-sm sm:text-lg text-white/70 mb-6">
            Commemorate the milestone of womanhood with stunning half saree portraits.
            Blending tradition with modern elegance—capturing over 800+ ceremonies across the UK.
          </p>

          {/* === TOGGLE BUTTON === */}
          <button
            onClick={() => setShowVideoGrid(prev => !prev)}
            className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-6 rounded shadow transition"
          >
            {showVideoGrid ? 'Hide Videos' : 'View More Videos'}
          </button>
        </div>
      </div>

      {/* === VIDEO GRID === */}
      {showVideoGrid && (
        <div className="p-6 bg-[#f8cfd9] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
          {videos.map((video) => (
            <button
              key={video.videoId}
              onClick={() => handleThumbnailClick(video.videoId)}
              className="group transition-transform hover:scale-105 text-left"
            >
              <div className="overflow-hidden rounded shadow relative">
                <Image
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt="SnapU Photography"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-2 text-sm font-semibold">{video.title}</h3>
            </button>
          ))}
        </div>
      )}

      {/* === MODAL PLAYER === */}
      {showModal && selectedVideoId && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fadeIn">
          <div className="relative w-full max-w-6xl aspect-video mx-4 sm:mx-10">
            <iframe
              src={modalVideoUrl}
              title="Selected Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-2xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-rose-600 hover:bg-rose-700 text-white px-3 py-1 rounded-full text-sm shadow"
              aria-label="Close Video Modal"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}

      {/* === ANIMATIONS === */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}


// 'use client';

// import { useEffect, useState } from 'react';
// import { collection, getDocs, orderBy, query } from 'firebase/firestore';
// import { db } from '../Admin/Firebase/config';

// export default function HalfSareeHighlightSection() {
//   const [videos, setVideos] = useState([]);
//   const [heroVideoId, setHeroVideoId] = useState('');
//   const [selectedVideoId, setSelectedVideoId] = useState('');
//   const [showVideoGrid, setShowVideoGrid] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const q = query(collection(db, 'youtubeVideos'), orderBy('priority', 'asc'));
//         const snapshot = await getDocs(q);
//         const data = snapshot.docs.map((doc) => doc.data());
//         setVideos(data);
//         if (data.length > 0) setHeroVideoId(data[0].videoId);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   const handleThumbnailClick = (videoId) => {
//     setSelectedVideoId(videoId);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setSelectedVideoId('');
//     setShowModal(false);
//   };

//   return (
//     <div className="w-full bg-black text-white relative">
//       {/* === HERO VIDEO === */}
//       <div className="relative h-[90vh] w-full overflow-hidden">
//         {heroVideoId && (
//           <div
//             className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
//             style={{
//              transform: 'scale(1.45)',
//               transformOrigin: 'center center',
//             }}
//           >
//             <iframe
//               src={`https://www.youtube.com/embed/${heroVideoId}?autoplay=1&mute=1&loop=1&playlist=${heroVideoId}`}
//               title="Hero Video"
//               frameBorder="0"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//               className="w-full h-full object-cover"
//             />
//           </div>
//         )}

//         {/* === TEXT + BUTTON OVERLAY === */}
//         <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-center text-center px-4">
//           <h2 className="text-xl sm:text-3xl font-bold text-rose-300 mb-2">
//             Step into Grace and Heritage
//           </h2>
//           <h1 className="text-4xl text-white/50 sm:text-5xl font-extrabold mb-4">
//             Half Saree Photography Redefined
//           </h1>
//           <p className="max-w-2xl text-sm sm:text-lg text-white/70 mb-6">
//             Commemorate the milestone of womanhood with stunning half saree portraits.
//             Blending tradition with modern elegance—capturing over 800+ ceremonies across the UK.
//           </p>

//           {/* === TOGGLE BUTTON === */}
//           <button
//             onClick={() => setShowVideoGrid(!showVideoGrid)}
//             className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-6 rounded shadow"
//           >
//             {showVideoGrid ? 'Hide Videos' : 'View More Videos'}
//           </button>
//         </div>
//       </div>

//       {/* === VIDEO THUMBNAIL GRID === */}
//       {showVideoGrid && (
//         <div
//           className="p-6 bg-black grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//           style={{ animation: 'fadeIn 0.5s ease-in-out' }}
//         >
//           {videos.map((video) => (
//             <div
//               key={video.videoId}
//               className="cursor-pointer group transition-transform hover:scale-105"
//               onClick={() => handleThumbnailClick(video.videoId)}
//             >
//               <div className="overflow-hidden rounded shadow relative">
//                 <img
//                   src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
//                   alt={video.title}
//                   className="w-full h-auto"
//                 />
//               </div>
//               <h3 className="mt-2 text-sm font-semibold">{video.title}</h3>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* === MODAL PLAYER === */}
//       {showModal && selectedVideoId && (
//         <div
//           className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
//           style={{ animation: 'fadeIn 0.4s ease-in-out' }}
//         >
//           <div className="relative w-full max-w-6xl aspect-video mx-4 sm:mx-10">
//             <iframe
//               src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&mute=0&loop=1&playlist=${selectedVideoId}`}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//               className="w-full h-full rounded-lg shadow-2xl"
//             />
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 bg-rose-600 hover:bg-rose-700 text-white px-3 py-1 rounded-full text-sm shadow"
//             >
//               ✕ Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* === INTERNAL ANIMATIONS === */}
//       <style jsx>{`
//         @keyframes zoomIn {
//           0% {
//             transform: scale(1);
//           }
//           100% {
//             transform: scale(1.1);
//           }
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }




// 'use client';

// import { useEffect, useState } from 'react';
// import { collection, getDocs, orderBy, query } from 'firebase/firestore';
// import { db } from '../Admin/Firebase/config';

// export default function VideoGallerySection() {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideoId, setSelectedVideoId] = useState('');
//   const [showMore, setShowMore] = useState(false);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const q = query(collection(db, 'youtubeVideos'), orderBy('priority', 'asc'));
//         const snapshot = await getDocs(q);
//         const data = snapshot.docs.map((doc) => doc.data());
//         setVideos(data);
//         if (data.length > 0) setSelectedVideoId(data[0].videoId);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   return (
//     <div className="w-full bg-black text-white relative">
//       {/* HERO VIDEO BLOCK */}
//       <div className="relative h-[90vh] w-full overflow-hidden">
//         {selectedVideoId && (
//           <iframe
//             src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&mute=1&loop=1&playlist=${selectedVideoId}`}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//             className="absolute top-0 left-0 w-full h-full object-cover"
//           />
//         )}

//         {/* TEXT OVERLAY */}
//         <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-center text-center px-4">
//           <h2 className="text-xl sm:text-3xl font-bold text-rose-300 mb-2">
//             Step into Grace and Heritage
//           </h2>
//           <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
//             Half Saree Photography Redefined
//           </h1>
//           <p className="max-w-2xl text-sm sm:text-lg text-white mb-6">
//             Commemorate the milestone of womanhood with stunning half saree portraits. Blending tradition with modern elegance—capturing over 800+ ceremonies across the UK.
//           </p>

//           <button
//             onClick={() => setShowMore((prev) => !prev)}
//             className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-6 rounded shadow"
//           >
//             {showMore ? 'Hide Videos' : 'View More Videos'}
//           </button>
//         </div>
//       </div>

//       {/* MORE VIDEOS GRID */}
//       {showMore && (
//         <div className="p-6 bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {videos.map((video) => (
//             <div
//               key={video.videoId}
//               className="cursor-pointer group"
//               onClick={() => setSelectedVideoId(video.videoId)}
//             >
//               <div className="overflow-hidden rounded shadow relative">
//                 <img
//                   src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
//                   alt={video.title}
//                   className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <h3 className="mt-2 text-sm font-semibold">{video.title}</h3>
//               <p className="text-xs text-gray-400">Priority: {video.priority}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
