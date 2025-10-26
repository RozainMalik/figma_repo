import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuestion} from '@fortawesome/free-solid-svg-icons'
import { faGrip } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import sampleImage from "./assets/image.jpg"
import {useRef} from 'react'


function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [images, setImages] = useState([]);
  const scrollRef = useRef(null);

const handleAddImage = () => {
  setImages([...images, sampleImage]);
};

const scrollLeft = () => {
  scrollRef.current.scrollBy({ left: -110, behavior: 'smooth' });
};

const scrollRight = () => {
  scrollRef.current.scrollBy({ left: 110, behavior: 'smooth' });
};
  
  const content = ()=>{
      switch(activeTab){
        case "about":
          return " Anne has over five years of experience in providing comprehensive feedback and support for authors globally. With a master's degree in English and a bachelor's degree in journalism and communication, Anne is capable of improving the quality of a piece of work to increase reader audience and interest. Incorporating Anne into the team is sure to improve the content of your website and enhance your content strategy.";
        case "experiences":
          return "I have spent five years as an executive assistant with Wiler, Inc. in administrative support roles. As the current executive assistant to the CFO, I frequently collaborate with other administrative assistants to perform calendar management, coordinate international travel and assemble research reports for the financial specialists in our six offices around the world. At the beginning of last year, I optimized our email filtering system to improve office communication and reduce the amount of missed messages by 28%. I understand that your company depends a lot on email communication, so I want to use my organizational abilities to achieve faster communication processes in this office.";
        case "recommend":
          return " On our team, Dylan analyzes complex problems by developing new software and testing it regularly. He improved our internal software security, decreasing threats by 30% in one year. Last year, he began to work on our external software systems for clients. In only eight months, he produced a new software system that generated over $200,000 in revenue for a client.In addition to his excellent technical engineering skills, Dylan is ready for a leadership role. Over the last five years, he has grown into a valuable resource for his colleagues. He helps them whenever he can by answering questions and training new team members. He's incredibly dedicated to our company, working hard to ensure each project is successful. He has won our team's Employee of the Month nine times, and although we'll miss him in our department, I know he is ready for more responsibilities. ";
        default:
          return " ";
      }
  };


  return (
    <>
      <div className='flex flex-col justify-end items-end bg-gradient-to-r from-[#373E44] to-[#191B1F] w-[1100px] h-[650px] rounded-3xl shadow-xl/45'>
        
        
        {/* first div. */}
        <div className='flex flex-col bg-[#4A4E54] w-[550px] h-[350px] rounded-xl shadow-xl/45 p-2 mr-15 mt-10 m-5'>
          <div className='flex flex-row m-2'>
             <FontAwesomeIcon icon={faQuestion} className='text-gray-200 m-2'/>
             <div className='w-200 h-12 bg-black rounded-2xl flex flex-row justify-around text-gray-200 m-2  mr-3.5'>
              <div onClick={()=>setActiveTab("about")} className={`m-1 font-sans rounded-xl w-full text-center ${activeTab === "about" ? "bg-[#373E44]" : "hover:bg-[#373E44]"}`}>
                <p className='m-1 text-gray-400'>About Me</p>
              </div>

              <div onClick={()=>setActiveTab("experiences")} className={`m-1 font-sans rounded-xl w-full text-center ${activeTab === "experiences" ? "bg-[#373E44]" : "hover:bg-[#373E44]"}`}>
                <p className='m-1 text-gray-400'>Experiences</p>
              </div>

              <div onClick={()=>setActiveTab("recommend")} className={`m-1 font-sans rounded-xl w-full text-center ${activeTab === "recommend" ? "bg-[#373E44]" : "hover:bg-[#373E44]"}`}>
                <p className='m-1 text-gray-400'>Recommended</p>
              </div>

             </div>
          </div>

          <div className='flex flex-row m-2 items-center cursor-pointer'>
            <div className="flex justify-center items-center w-12 h-12">
              <FontAwesomeIcon icon={faGrip} className="text-gray-200 text-2xl" />
            </div>
             <div className='w-full max-h-[140px] text-gray-400 overflow-y-auto p-2'>
              <p>
                {content()}
              </p>          
             </div>
          </div>
             
        </div>
       
        <div className='bg-[#4A4E54] w-[400px] h-1.5 mr-36 rounded-2xl shadow-lg shadow-white bg-gradient-to-r from-[#888989] to-[#363C43]'></div>
       
       
       
       
        {/* second div. */}
        <div className='flex flex-col bg-[#4A4E54] w-[550px] h-[350px] rounded-xl shadow-xl/45 p-2 mr-15 m-5'>
          <div className='flex flex-row m-2  justify-around'>
             <FontAwesomeIcon icon={faQuestion} className='text-gray-200 m-2'/>

             <div className='w-35 h-12 bg-black rounded-2xl flex flex-row justify-around text-gray-200 m-2 '>
              <div className={`m-1 font-sans rounded-xl w-full text-center`}>
                <p className='m-1 text-white text-xl'>Gallery</p>
              </div>
             </div>

             <div onClick={handleAddImage} className='w-35 h-12 bg-gradient-to-r from-[#303439] to-[#161718] rounded-4xl flex flex-row justify-around text-gray-200 m-2 ml-20 mr-3.5 shadow-[0_0_5px_#ffff] cursor-pointer'>
              <div className={`m-1 font-sans rounded-xl w-full text-center flex flex-row p-1`}>
                <FontAwesomeIcon icon={faPlus} className='text-gray-200 m-2'/>
                <p className='m-1 text-white'>Add Image</p>
              </div>
             </div>

             <div onClick={scrollRight} className='w-12 h-12 bg-gradient-to-r from-[#303439] to-[#161718] rounded-4xl flex flex-row justify-around text-gray-200 m-1 mr-3 cursor-pointer'>
              <div className={`m-1 font-sans rounded-xl w-full text-center flex flex-row p-1`}>
                <FontAwesomeIcon icon={faArrowRight} className='text-gray-200 m-2'/>
              </div>
             </div>
             <div onClick={scrollLeft} className='w-12 h-12 bg-gradient-to-r from-[#303439] to-[#161718] rounded-4xl flex flex-row justify-around text-gray-200 m-1 mr-3.5 cursor-pointer'>
              <div className={`m-1 font-sans rounded-xl w-full text-center flex flex-row p-1`}>
                <FontAwesomeIcon icon={faArrowLeft} className='text-gray-200 m-2'/>
              </div>
             </div>
          </div>
          
          <div className='flex flex-row m-1 items-center'>
              <div className="flex justify-center items-center w-12 h-12">
                <FontAwesomeIcon icon={faGrip} className="text-gray-200 text-2xl" />
              </div>
              <div ref={scrollRef} className='flex flex-row overflow-x-auto space-x-2 p-2'>
                {images.map((img, index) => (
                  <div key={index} className='w-35 h-40 bg-gray-700 rounded-xl flex-shrink-0 hover: rounded-xl hover:scale-110 hover:-rotate-10 hover:grayscale hover:shadow-[0_0_10px_#000]'>
                    <img src={img} alt={`img-${index}`} className='w-full h-full object-cover rounded-xl' />
                  </div>
                ))}
              </div>
          </div>
        </div>

        <div className='bg-[#4A4E54] w-[400px] h-1.5 mr-36 rounded-2xl shadow-lg shadow-white bg-gradient-to-r from-[#888989] to-[#363C43] mb-8'></div>

      </div>
    </>
  )
}

export default App
