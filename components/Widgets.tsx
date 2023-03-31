import { IoSearchCircleOutline } from "react-icons/io5";

function Widgets() {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
        <div className="flex items-center bg-[#202327] p-3 rounded-full relative">
          <IoSearchCircleOutline className="text-gray-500 h-5 w-5 z-50" />
          <input
            type="text"
            className="bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-full focus:bg-black focus:shadow-lg"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">What's happening</h4>
        

    <div className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center justify-between">
      <div className="space-y-0.5">
        <p className="text-[#6e767d] text-xs font-medium">Tsunami</p>
        <h6 className="font-bold max-w-[250px] text-sm">
          31
        </h6>
        <p className="text-[#6e767d] text-xs font-medium max-w-[250px]">
          Trending with{" "}    
            <span className="tag" >
              62
            </span> 
        </p>
      </div>

     <img src="" className="w-[70px] h-[70px] object-contain rounded-2xl " alt="" />
    </div>



        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
          Show more
        </button>
      </div>

      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>

          <div
            className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center"
            key={31}
          >
            <img src="" className="w-[50px] h-[50px] object-contain rounded-full" alt="" />
            <div className="ml-4 leading-5 group">
              <h4 className="font-bold group-hover:underline">
                Elon Ma
              </h4>
              <h5 className="text-gray-500 text-[15px]">@Elon Ma</h5>
            </div>
            <button className="ml-auto bg-[#1d9bf0] text-black rounded-full font-bold text-sm py-1.5 px-3.5">
              Follow
            </button>
          </div>

          <div
            className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center"
            key={31}
          >
            <img src="" className="w-[50px] h-[50px] object-contain rounded-full" alt="" />
            <div className="ml-4 leading-5 group">
              <h4 className="font-bold group-hover:underline">
                Elon Ma
              </h4>
              <h5 className="text-gray-500 text-[15px]">@Elon Ma</h5>
            </div>
            <button className="ml-auto bg-[#1d9bf0] text-black rounded-full font-bold text-sm py-1.5 px-3.5">
              Follow
            </button>
          </div>

                    <div
            className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center"
            key={31}
          >
            <img src="" className="w-[50px] h-[50px] object-contain rounded-full" alt="" />
            <div className="ml-4 leading-5 group">
              <h4 className="font-bold group-hover:underline">
                Elon Ma
              </h4>
              <h5 className="text-gray-500 text-[15px]">@Elon Ma</h5>
            </div>
            <button className="ml-auto bg-[#1d9bf0] text-black rounded-full font-bold text-sm py-1.5 px-3.5">
              Follow
            </button>
          </div>

                    <div
            className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center"
            key={31}
          >
            <img src="" className="w-[50px] h-[50px] object-contain rounded-full" alt="" />
            <div className="ml-4 leading-5 group">
              <h4 className="font-bold group-hover:underline">
                Elon Ma
              </h4>
              <h5 className="text-gray-500 text-[15px]">@Elon Ma</h5>
            </div>
            <button className="ml-auto bg-[#1d9bf0] text-black rounded-full font-bold text-sm py-1.5 px-3.5">
              Follow
            </button>
          </div>

        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
          Show more
        </button>
      </div>
    </div>
  );
}

export default Widgets;