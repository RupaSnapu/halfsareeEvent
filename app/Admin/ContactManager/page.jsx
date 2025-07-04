// "use client";

// import { useEffect, useState } from "react";
// import { db } from "../Firebase/config";
// import { collection, getDocs, orderBy, query } from "firebase/firestore";
// import CheckAuth from "../Firebase/CheckAuth";

// export default function ContactSubmissions() {
//   const [submissions, setSubmissions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchSubmissions = async () => {
//       try {
//         const q = query(collection(db, "contacts"), orderBy("createdAt", "desc")); // ✅ Corrected collection name
//         const snapshot = await getDocs(q);
//         const data = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setSubmissions(data);
//       } catch (err) {
//         console.error("Error fetching contact messages:", err);
//         setError("Failed to load submissions. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSubmissions();
//   }, []);

//   return (
//     <CheckAuth>
//       <div className="p-6 max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold text-center text-[#8b0000] mb-8">Contact Form Submissions</h1>

//         {loading && <p className="text-center text-gray-500">Loading submissions...</p>}
//         {error && <p className="text-center text-red-500">{error}</p>}
//         {!loading && submissions.length === 0 && !error && (
//           <p className="text-center text-gray-600">No submissions found.</p>
//         )}

//         {!loading && submissions.length > 0 && (
//           <div className="grid grid-cols-1 gap-6">
//             {submissions.map((msg) => (
//               <div
//                 key={msg.id}
//                 className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
//               >
//                 <p><strong>Name:</strong> {msg.name || "-"}</p>
//                 <p><strong>Email:</strong> {msg.email || "-"}</p>
//                 <p><strong>Phone:</strong> {msg.phone || "-"}</p>
//                 <p><strong>Location:</strong> {msg.location || "-"}</p>
//                 <p><strong>Service:</strong> {msg.service || "-"}</p>
//                 <p><strong>Message:</strong> {msg.message || "-"}</p>
//                 <p className="text-xs text-gray-500 mt-2">
//                   Submitted on:{" "}
//                   {msg.createdAt?.toDate?.()
//                     ? msg.createdAt.toDate().toLocaleString()
//                     : "Unknown"}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </CheckAuth>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { db } from "../Firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import CheckAuth from "../Firebase/CheckAuth";

export default function ContactSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSubmissions(data);
      } catch (err) {
        console.error("Error fetching contact messages:", err);
        setError("Failed to load submissions. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <CheckAuth>
      <div className="p-4 sm:p-6 max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#8b0000] mb-6 sm:mb-8">
          Contact Form Submissions
        </h1>

        {loading && <p className="text-center text-gray-500">Loading submissions...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && submissions.length === 0 && !error && (
          <p className="text-center text-gray-600">No submissions found.</p>
        )}

        {!loading && submissions.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {submissions.map((msg) => (
              <div
                key={msg.id}
                className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition text-sm sm:text-base"
              >
                <p><strong>Name:</strong> {msg.name || "-"}</p>
                <p><strong>Email:</strong> {msg.email || "-"}</p>
                <p>
                  <strong>Phone:</strong>{" "}
                  {msg.phone ? (
                    <a
                      href={`tel:${msg.phone}`}
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      {msg.phone}
                    </a>
                  ) : (
                    "-"
                  )}
                </p>
                <p><strong>Location:</strong> {msg.location || "-"}</p>
                <p><strong>Service:</strong> {msg.service || "-"}</p>
                <p><strong>Message:</strong> {msg.message?.trim() || "-"}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Submitted on:{" "}
                  {msg.createdAt?.toDate?.()
                    ? msg.createdAt.toDate().toLocaleString()
                    : "Unknown"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </CheckAuth>
  );
}
