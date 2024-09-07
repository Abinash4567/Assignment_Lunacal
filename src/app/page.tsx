import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import Image from "next/image";
import photo from "../../public/image.jpg"
import NavBar from "./components/navLiink";

export default function Home() {
  return (
  <div className="h-[100vh] w-[100vw] flex overflow-hidden p-10">

    <div className="h-[50vh] w-[50vw]"></div>

    <div>

      <div className="w-[650px] h-[250px] bg-[#353c44] rounded-3xl p-4 overflow-hidden">
        <div className="flex">


          <div className="w-[40px] mr-3 flex flex-col justify-between">
            <div><HiOutlineQuestionMarkCircle color="#949ca9" size={28}/></div>
            <div className="basis-1/2 -ml-2 px-[4px]">
              <div className="grid grid-cols-2 grid-rows-3 p-[1px]">
                  <div className="flex justify-center items-center bg-[#4a4d54] py-[6px] mr-[2px] mb-[2px]"></div>
                  <div className="flex justify-center items-center bg-[#4a4d54] py-[6px] mr-[2px] mb-[2px]"></div>
                  <div className="flex justify-center items-center bg-[#4a4d54] py-[6px] mr-[2px] mb-[2px]"></div>
                  <div className="flex justify-center items-center bg-[#4a4d54] py-[6px] mr-[2px] mb-[2px]"></div>
                  <div className="flex justify-center items-center bg-[#4a4d54] py-[6px] mr-[2px] mb-[2px]"></div>
                  <div className="flex justify-center items-center bg-[#4a4d54] py-[6px] mr-[2px] mb-[2px]"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <NavBar/>

            <div className="mt-5 pr-4 overflow-y-scroll h-[200px] text-[#818284] text-base font-extralight scroll">
            <div className="mb-6">Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            </div>


            <div className="mb-2">I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9–10 AM.  This is a...</div>lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, officia repellat voluptates officiis qui maxime hic dolores aspernatur vero iusto enim nemo ab suscipit doloribus libero soluta recusandae provident praesentium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum obcaecm, deserunt molestiae doloribus, voluptatem aperiam? Atque necessitatibus nam corrupti enim. Quo deleniti atque eum molestiae exercitationem, animi quia repudiandae dolores ipsum quod.
            Dignissimos voluptatibus incidunt repudiandae nisi possimus veritatis, vero architecto molestiae rem distinctio animi! Obcaecati reiciendis doloribus architecto asperiores, facere odit, expedita dolore hic autem deserunt fugit cumque itaque non temporibus!
            Esse quibusdam delectus saepe, magnam incidunt, laborum tempora blanditiis minima obcaecati voluptatibus quos aut hic sint necessitatibus ullam et repellendus eaque, alias dicta fugit quia? Molestiae explicabo veniam quod recusandae.
            </div>


          </div>
        </div>
      </div>

      <div className="px-12"><div className="bg-[#33373a] h-1 m-3 rounded-3xl"></div></div>

      <div className="w-[650px] h-[300px] bg-[#353c44] rounded-3xl p-4">
        <div className="flex mr-6">

          <div className="w-[30px] mr-3 flex flex-col justify-between">
            <div><HiOutlineQuestionMarkCircle color="#949ca9" size={28}/></div>
            <div className="basis-1/2 -ml-2 px-[4px]">
              <div className="grid grid-cols-2 grid-rows-3 p-[1px]">
                  <div className="flex justify-center items-center bg-[#4a4d54] py-[6px] mr-[2px] mb-[2px]"></div>
                  <div className="flex justify-center items-center bg-[#4a4d54] py-[6px] mr-[2px] mb-[2px]"></div>
                  <div className="flex justify-center items-center bg-[#4a4d54] py-[6px] mr-[2px] mb-[2px]"></div>
                  <div className="flex justify-center items-center bg-[#4a4d54] py-[6px] mr-[2px] mb-[2px]"></div>
                  <div className="flex justify-center items-center bg-[#4a4d54] py-[6px] mr-[2px] mb-[2px]"></div>
                  <div className="flex justify-center items-center bg-[#4a4d54] py-[6px] mr-[2px] mb-[2px]"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex justify-between">

              <div className="h-14 w-32 bg-[#161616] px-[28px] pt-[14px] rounded-2xl font-extrabold text-xl">Gallery</div>

              <div className="flex space-x-4">
                <div className="bg-[#3c434b] rounded-3xl text-sm font-extrabold h-12 px-4 py-[14px] border border-[#52555c] shadow-[6px_13px_7px_4px_#212429]">+ ADD IMAGE</div>
                <div className="flex mt-1 space-x-3">

                  <div className="rounded-full h-12 w-12 bg-[#2b2e33] px-[14px] py-[14px] shadow-[-9px_-1px_13px_5px_#2d3748]">
                    <FaArrowLeft size={20} color="#71787e"/>
                  </div>

                  <div className="rounded-full h-12 w-12 bg-[#2b2e33] px-[14px] py-[14px] shadow-[10px_-1px_13px_5px_#2d3748]">
                    <FaArrowRight size={20} color="#71787e"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 h-[200px]">
            <div className="mb-6 grid grid-cols-3 gap-4 place-content-stretch">
              <div className="h-[176px] bg-red-400 basis-1/3 rounded-3xl overflow-hidden">
                <Image src={photo} alt={"image"} object-fit="cover" fill={false}/>
              </div>
              <div className="h-[176px] bg-red-400 basis-1/3 rounded-3xl overflow-hidden">
                <Image src={photo} alt={"image"} object-fit="cover" fill={false}/>
              </div>
              <div className="h-[176px] bg-red-400 basis-1/3 rounded-3xl overflow-hidden">
                <Image src={photo} alt={"image"} object-fit="cover" fill={false}/>
              </div>
            </div>


          </div>
        </div>
      </div>

      </div>

      <div className="px-12"><div className="bg-[#33373a] h-1 mt-3 rounded-3xl"></div></div>
    </div>


  </div>);
}
