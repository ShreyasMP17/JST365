import React from "react";

const HowToPlay = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-lg">
        <button className="flex items-center space-x-2 text-gray-600 mb-4">
          <span className="text-lg">&#8592;</span>
          <span className="font-semibold">HOW TO PLAY</span>
        </button>
        
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">हिंदी</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
          चरण 1: 0-9 में से (3) संख्याएँ चुनना है। उदाहरण के लिए 2.3.4 दिए गए 0-9 में से आपकी पहली चुनी गई यादृच्छिक संख्याएँ होंगी। मनोरंजन में अधिक रोमांच और सार जोड़ने के लिए, संख्याओं को शामिल/जोड़ा जाता है (2+3+4) और एक अंतिम संख्या दी जाती है। इस उदाहरण में यह 9 है। अब, आपको इस संख्या का केवल एक अंक रखना है, यानी कि अंतिम। इस उदाहरण में, यह 9 होगा। तो आपका पहला ड्रा 2.3.4 9 होगा। संख्याओं का एक दूसरा सेट भी निकाला जाता है। प्रक्रिया चरण। की तरह ही है। दूसरा नंबर चुनने के नियम बिल्कुल पहले ड्रा के समान ही हैं। एक यादृच्छिक मामले के रूप में, आइए संख्याएँ 7.8.9 स्वीकार करें। इससे हमें 24 का योग प्राप्त होता है, हम फिर से केवल अंतिम अंक ही रखते हैं इसलिए संख्याओं के दूसरे ड्रा के लिए हमारी अंतिम पसंद 7.8.9 है। *4 हमारा आखिरी कार्ड इस जैसा होगा: 2,3,4 9 X 7,8,9. *4. यहाँ एक उदाहरण कार्ड है. 
           
          </p>
        </div>
        
        <div>
          <h2 className="text-lg font-bold mb-2">English</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
          Step 1: is to pick (3) numbers from 0-9. For example 2.3.4 would be your first picked random numbers from given 0-9. To add more thrill and substance to the diversion, the numbers are then included/added (2+3+4) and a last number is given. In this example it is 9. Now, you only have have to keep one digit of this number, that is the last one. In this example, it will be the 9. So your first draw would be 2.3.4 9. There are also a second set of numbers which is drawn. The process is similar just like step 1. The rules for picking 2nd number is exactly same as the first draw. As an random case, lets accept the numbers 7.8.9. This gives us a sum of 24, we again just only keep the last digit so our last pick for the second draw of numbers is 7.8.9.* 4 Our last card would resemble this: 2,3,4 9 X 7,8,9. * 4. Here is an example card.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;