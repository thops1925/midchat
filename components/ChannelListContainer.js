import Avatar from '@mui/material/Avatar';

function ChannelListContainer() {
  return (
    <div className="flex-1 h-screen ">
      <div className="flex space-y-between flex-col">
        <div className=" flex items-center p-3 border-b-2">
          <Avatar sx={{ width: 32, height: 32 }} />
          <p className="ml-2 text-lg font-bold text-gray-800">Dr Lumen</p>
        </div>
      </div>

      <div className="h-3/4 flex-none  p-4 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col-reverse">
          <div className="flex flex-row-reverse ">
            <Avatar />
            <p className="flex flex-nowrap bg-blue-200 p-5 rounded-sm max-w-lg text-justify min-w-min overflow-ellipsis	">
              sadfasdfsadfasdfsadfasdfsadfasdfsadfa
              sdfsadfasdfsadfasdfsadfasdfsadfasdfsadfasdf
              sadfasdfsadfasdfsadfasdfsadfasdfsadfasdfsadfasdfsadfasdfsadfa
              asfassadfasdfsadfasdfsadfasdfsadfasdfsadfa
              sdfsasadfasdfsadfasdfsadfasdfsadfasdfsadfasdf
              sadfasdfsadfasdfsadfasdfsadfasdfsadfasdfsadfasdfsadfasdfsadfa
              asfassadfasdfsadfasdfsadfasdfsadfasdfsadfa
              sdfsadfasdfsadfasdfsadfasdfsadfasdfsadfasdf
              sadfasdfsadfasdfsadfasdfsadfasdfsadfasdfsadfasdfsadfasdfsadfaassadf
              asfassadfasdfsadfasdfsadfasdfsadfasdfsadfa
              sdfsadfasdfsadfasdfsadfasdfsadfasdfsadfasdf
              sadfasdfsadfasdfsadfasdfsadfasdfsadfasdfsadfasdfsadfasdfsadfa
              asfas
            </p>
          </div>

          <div className="flex flex-row">
            <Avatar />
            <p className="inline-block bg-gray-200 rounded-sm p-5 max-w-lg text-justify overflow-ellipsis">
              messageasfddddddddddddddddddddddddddddsaffffffffffffffffffffffffffffff
              ffffffffsafffffffffffffffffsadffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffff
            </p>
          </div>
          <div className="flex flex-row-reverse space-x-2 space-x-reverse">
            <Avatar />
            <p className="bg-blue-200 p-5 rounded-sm">sadfasdf</p>
          </div>

          <div className="flex flex-row space-x-2">
            <Avatar />
            <div className="">message</div>
          </div>
          <div className="flex flex-row-reverse space-x-2 space-x-reverse">
            <Avatar />
            <p className="bg-blue-200 p-5 rounded-sm">sadfasdf</p>
          </div>

          <div className="flex flex-row space-x-2">
            <Avatar />
            <div className="">message</div>
          </div>
          <div className="flex flex-row-reverse space-x-2 space-x-reverse">
            <Avatar />
            <p className="bg-blue-200 p-5 rounded-sm">sadfasdf</p>
          </div>

          <div className="flex flex-row space-x-2">
            <Avatar />
            <div className="">message</div>
          </div>
          <div className="flex flex-row-reverse space-x-2 space-x-reverse">
            <Avatar />
            <p className="bg-blue-200 p-5 rounded-sm">sadfasdf</p>
          </div>

          <div className="flex flex-row space-x-2">
            <Avatar />
            <div className="">message</div>
          </div>
          <div className="flex flex-row-reverse space-x-2 space-x-reverse">
            <Avatar />
            <p className="bg-blue-200 p-5 rounded-sm">sadfasdf</p>
          </div>

          <div className="flex flex-row space-x-2">
            <Avatar />
            <div className="">message</div>
          </div>
          <div className="flex flex-row-reverse space-x-2 space-x-reverse">
            <Avatar />
            <p className="bg-blue-200 p-5 rounded-sm">sadfasdf</p>
          </div>

          <div className="flex flex-row space-x-2">
            <Avatar />
            <div className="">message</div>
          </div>
          <div className="flex flex-row-reverse space-x-2 space-x-reverse">
            <Avatar />
            <p className="bg-blue-200 p-5 rounded-sm">sadfasdf</p>
          </div>

          <div className="flex flex-row space-x-2">
            <Avatar />
            <div className="">message</div>
          </div>
          <div className="flex flex-row-reverse space-x-2 space-x-reverse">
            <Avatar />
            <p className="bg-blue-200 p-5 rounded-sm">sadfasdf</p>
          </div>

          <div className="flex flex-row space-x-2">
            <Avatar />
            <div className="">message</div>
          </div>
        </div>
      </div>

      <div className="sticky inset-0 z-10 mx-5 flex items-center rounded-lg bg-gray-100">
        <textarea
          className=" resize-none w-full h-16 flex-initial rounded-lg outline-none bg-gray-100 px-5 scrollbar-hidden  focus:outline-none"
          placeholder="Type your message"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
}

export default ChannelListContainer;
