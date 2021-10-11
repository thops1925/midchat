import { Avatar, useChatContext } from 'stream-chat-react';
function ListMessage({ channel, type }) {
  const { channel: activeChannel, client } = useChatContext();
  return (
    <>
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
          <Avatar />
          <p className="ml-2 text-lg text-gray-300">Dr Lumen</p>
        </div>
      </div>
    </>
  );
}

export default ListMessage;
