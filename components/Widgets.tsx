import { IoSearchCircleOutline } from "react-icons/io5";

function Widgets() {
  return (
    <div className="ml-8 hidden space-y-5 py-1 lg:inline xl:w-[450px]">
      <div className="sticky top-0 z-50 w-11/12 bg-black py-1.5 xl:w-9/12">
        <div className="relative flex items-center rounded-full bg-[#202327] p-3">
          <IoSearchCircleOutline className="z-50 h-5 w-5 text-gray-500" />
          <input
            type="text"
            className="absolute inset-0 w-full rounded-full border border-transparent bg-transparent pl-11 text-[#d9d9d9] placeholder-gray-500 outline-none focus:border-[#1d9bf0] focus:bg-black focus:shadow-lg"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      <div className="w-11/12 space-y-3 rounded-xl bg-[#15181c] pt-2 text-[#d9d9d9] xl:w-9/12">
        <h4 className="px-4 text-xl font-bold">What's happening</h4>

        <div className="flex cursor-pointer items-center justify-between px-4 py-2 transition duration-200 ease-out hover:bg-white hover:bg-opacity-[0.03]">
          <div className="space-y-0.5">
            <p className="text-xs font-medium text-[#6e767d]">Tsunami</p>
            <h6 className="max-w-[250px] text-sm font-bold">#Latest</h6>
            <p className="max-w-[250px] text-xs font-medium text-[#6e767d]">
              Trending with <span className="tag">Earthquake</span>
            </p>
          </div>

          <img
            src=""
            className="h-[70px] w-[70px] rounded-2xl object-contain "
            alt=""
          />
        </div>

        <button className="flex w-full cursor-pointer items-center justify-between px-4 py-3 font-light text-[#1d9bf0] transition duration-200 ease-out hover:bg-white hover:bg-opacity-[0.03]">
          Show more
        </button>
      </div>

      <div className="w-11/12 space-y-3 rounded-xl bg-[#15181c] pt-2 text-[#d9d9d9] xl:w-9/12">
        <h4 className="px-4 text-xl font-bold">Who to follow</h4>

        <div
          className="flex cursor-pointer items-center px-4 py-2 transition duration-200 ease-out hover:bg-white hover:bg-opacity-[0.03]"
          key={31}>
          <img
            src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
            className="h-[50px] w-[50px] rounded-full object-contain"
            alt=""
          />
          <div className="group ml-4 leading-5">
            <h4 className="font-bold group-hover:underline">Elon Musk</h4>
            <h5 className="text-[15px] text-gray-500">@elonmush</h5>
          </div>
          <button className="ml-auto rounded-full bg-[#1d9bf0] px-3.5 py-1.5 text-sm font-bold text-black">
            Follow
          </button>
        </div>

        <div
          className="flex cursor-pointer items-center px-4 py-2 transition duration-200 ease-out hover:bg-white hover:bg-opacity-[0.03]"
          key={31}>
          <img
            src="https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg"
            className="h-[50px] w-[50px] rounded-full object-contain"
            alt=""
          />
          <div className="group ml-4 leading-5">
            <h4 className="font-bold group-hover:underline">Nasa</h4>
            <h5 className="text-[15px] text-gray-500">@nasa</h5>
          </div>
          <button className="ml-auto rounded-full bg-[#1d9bf0] px-3.5 py-1.5 text-sm font-bold text-black">
            Follow
          </button>
        </div>

        <div
          className="flex cursor-pointer items-center px-4 py-2 transition duration-200 ease-out hover:bg-white hover:bg-opacity-[0.03]"
          key={31}>
          <img
            src="https://pbs.twimg.com/profile_images/1619895559334273028/PHKS_mjX_400x400.jpg"
            className="h-[50px] w-[50px] rounded-full object-contain"
            alt=""
          />
          <div className="group ml-4 leading-5">
            <h4 className="font-bold group-hover:underline">NFL</h4>
            <h5 className="text-[15px] text-gray-500">@nfl</h5>
          </div>
          <button className="ml-auto rounded-full bg-[#1d9bf0] px-3.5 py-1.5 text-sm font-bold text-black">
            Follow
          </button>
        </div>

        <button className="flex w-full cursor-pointer items-center justify-between px-4 py-3 font-light text-[#1d9bf0] transition duration-200 ease-out hover:bg-white hover:bg-opacity-[0.03]">
          Show more
        </button>
      </div>
    </div>
  );
}

export default Widgets;
