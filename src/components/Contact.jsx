import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

const Contact = ({ userRef, listing }) => {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function getLandlord() {
      const docRef = doc(db, "users", userRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("Couldn't get landloard data");
      }
    }
    getLandlord();
  }, [userRef]);

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      {landlord !== null && listing !== null && (
        <div className="flex flex-col w-full mt-6 ">
          <p className="mt-3  ">
            Contact {landlord.name} for the {listing.name}
          </p>
          <div className="mt-3 mb-6 ">
            <textarea
              name=""
              id=""
              rows="2"
              value={message}
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white 
              border border-gray-300 rounded transition duration-150 ease-in-out 
              focus:text-gray-700 focus:bg-white focus:border-slate-600
              "
            />
          </div>

          <a
            href={`mailto:${landlord.email}?Subject=${listing.name}&body=${message}`}
          >
            <button
              type="button"
              className="px-7 py-3 bg-blue-600 text-white rounded text-sm uppercase
              shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
              active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full
              text-center mb-6
              "
            >
              Send message
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default Contact;
