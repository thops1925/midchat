// import { Avatar } from 'stream-chat-react';
import Avatar from '@mui/material/Avatar';

const ChannelList = () => {
  return (
    <div className="flex flex-row sm:w-1/6 md:1/4 lg:1/4 md:h-screen lg:h-screen sm:h-screen bg-blue-700 rounded-r-lg">
      <div className="flex-auto">
        <div className="flex justify-center text-gray-100 items-center h-24 font-bold text-2xl border-b-2 border-gray-300 shadow-lg">
          Thopz
        </div>
        <div className="flex justify-center mt-4 items-center px-4 bg-blue-300 rounded-lg m-2 h-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            placeholder="Search"
            className=" placeholder-gray-100 bg-blue-300 p-4 w-full h-12 rounded-lg outline-none focus-outline-none focus-ring text-gray-100"
          />
        </div>

        <div className="h-3/4">
          <div className="flex justify-between p-4">
            <div className="text-gray-300 font-bold">Channels</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-300 rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="h-1/3 flex-auto overflow-y-auto scrollbar-hide">
            <div className="text-gray-300 truncate p-2   hover:bg-blue-800 rounded-md mx-3">
              #DrLumen
            </div>
          </div>

          <div className="flex justify-between p-4">
            <div className="text-gray-300 font-bold">Direct Messages</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-300 rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="h-1/2 flex-auto overflow-y-auto scrollbar-hide ">
            <div className=" flex items-center p-3   hover:bg-blue-800 rounded-md mx-3">
              <Avatar sx={{ width: 32, height: 32 }} />
              <p className="ml-2 text-lg text-gray-300">Dr Lumen</p>
            </div>
            <div className=" flex items-center p-3   hover:bg-blue-800 rounded-md mx-3">
              <Avatar sx={{ width: 32, height: 32 }} />
              <p className="ml-2 text-lg text-gray-300">Dr Lumen</p>
            </div>
            <div className=" flex items-center p-3   hover:bg-blue-800 rounded-md mx-3">
              <Avatar sx={{ width: 32, height: 32 }} />
              <p className="ml-2 text-lg text-gray-300">Dr Lumen</p>
            </div>
            <div className=" flex items-center p-3   hover:bg-blue-800 rounded-md mx-3">
              <Avatar sx={{ width: 32, height: 32 }} />
              <p className="ml-2 text-lg text-gray-300">Dr Lumen</p>
            </div>
            <div className=" flex items-center p-3   hover:bg-blue-800 rounded-md mx-3">
              <Avatar sx={{ width: 32, height: 32 }} />
              <p className="ml-2 text-lg text-gray-300">Dr Lumen</p>
            </div>
            <div className=" flex items-center p-3   hover:bg-blue-800 rounded-md mx-3">
              <Avatar sx={{ width: 32, height: 32 }} />
              <p className="ml-2 text-lg text-gray-300">Dr Lumen</p>
            </div>
            <div className=" flex items-center p-3   hover:bg-blue-800 rounded-md mx-3">
              <Avatar sx={{ width: 32, height: 32 }} />
              <p className="ml-2 text-lg text-gray-300">Dr Lumen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelList;
