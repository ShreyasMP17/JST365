import React, { useState } from "react";

const SubmitIdeas = () => {
  const [idea, setIdea] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <button className="flex items-center text-gray-600 mb-4">
          <span className="text-lg font-semibold">&#8592; SUBMIT YOUR IDEAS</span>
        </button>
        <textarea
          className="w-full h-40 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Type Your Ideas Here..."
          maxLength={500}
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        ></textarea>
        <div className="text-right text-gray-500 text-sm mt-2">{idea.length}/500</div>
        <button
          className="w-full mt-4 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Submit Your Idea
        </button>
      </div>
    </div>
  );
};

export default SubmitIdeas;