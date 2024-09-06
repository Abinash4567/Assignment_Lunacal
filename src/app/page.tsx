import NavBar from "./components/navLiink";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

export default function Home() {
  return (
  <div className="h-[100vh] w-[100vw] flex justify-center items-center">

      <div className="w-[690px] h-[300px] bg-[#353c44] rounded-3xl p-4">
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

            <div className="mt-5 pr-4 overflow-y-scroll h-[200px] text-[#818284] text-xl font-extralight scroll">
            <div className="mb-6">Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            </div>


            <div className="mb-2">I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9–10 AM.  This is a...</div>lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, officia repellat voluptates officiis qui maxime hic dolores aspernatur vero iusto enim nemo ab suscipit doloribus libero soluta recusandae provident praesentium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum obcaecm, deserunt molestiae doloribus, voluptatem aperiam? Atque necessitatibus nam corrupti enim. Quo deleniti atque eum molestiae exercitationem, animi quia repudiandae dolores ipsum quod.
            Dignissimos voluptatibus incidunt repudiandae nisi possimus veritatis, vero architecto molestiae rem distinctio animi! Obcaecati reiciendis doloribus architecto asperiores, facere odit, expedita dolore hic autem deserunt fugit cumque itaque non temporibus!
            Esse quibusdam delectus saepe, magnam incidunt, laborum tempora blanditiis minima obcaecati voluptatibus quos aut hic sint necessitatibus ullam et repellendus eaque, alias dicta fugit quia? Molestiae explicabo veniam quod recusandae.
            </div>


          </div>
        </div>
      </div>

  </div>);
}
