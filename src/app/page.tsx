import NavBar from "./components/navLiink";

export default function Home() {
  return (
  <div className="h-[100vh] w-[100vw] flex justify-center items-center">

      <div className="w-[690px] h-[300px] bg-[#353c44] rounded-3xl p-4 border-2">
        <div className="flex">


          <div className="w-[40px] bg-gree-500 mr-3 flex flex-col justify-between">
            <div>Hello</div>
            <div>New</div>
          </div>

          <div className="">
            <NavBar/>

            <div className="mt-5 pr-4 overflow-y-scroll h-[200px] text-[#818284] text-xl font-extralight pb-9 scroll">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ullam explicabo quod! Possimus, laborum eos tempora voluptatem totam pariatur, doloribus, libero aut id aspernatur labore repellat repudiandae iure asperiores beatae.
                Necessitatibus illo voluptatibus ad! Ea quae corrupti iusto dicta, officiis eligendi dolor repellendus deserunt assumenda, molestiae illum. Et consequuntur consequatur doloremque ipsam ab velit, repellat rem sequi corporis repudiandae qui.
                Non, maiores. Consequatur, odit harum corporis aperiam natus quia placeat. Repellendus voluptatem perspiciatis aliquam dolorem ut laboriosam placeat omnis nam beatae itaque veritatis sequi iure, facilis earum. Fugiat, eaque cum.
                Ab veritatis nobis tempore ducimus velit animi minima itaque exercitationem aliquam quam recusandae sequi quisquam ipsam, nesciunt doloremque et, earum voluptatibus impedit magnam quasi maxime doloribus labore quo suscipit! Illo.2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum temporibus architecto porro. Necessitatibus laboriosam dolorum autem similique omnis laudantium velit corrupti odio quaerat cupiditate, exercitationem libero? Omnis vitae deserunt vel. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe corporis quia a, repellendus unde quasi. Ad pariatur harum, explicabo earum perferendis aliquid magnam laudantium voluptates ratione veniam amet ex corrupti? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatibus tempora reprehenderit ratione doloremque harum? Facere, qui doloribus blanditiis eum placeat sed pariatur modi possimus voluptate repellat, accusamus, culpa est? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque porro quasi architecto minus. Unde rerum reiciendis porro error quae nulla, eligendi non, mollitia ipsam corrupti animi nobis, in maxime ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit libero quasi nesciunt, hic fugit voluptatibus quisquam. Quos, saepe dolore velit necessitatibus, unde culpa dolores, obcaecati iste dolorum sunt facilis consequatur.
            </div>


          </div>
        </div>
      </div>

  </div>);
}
