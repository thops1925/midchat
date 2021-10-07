import { ListSearch, ListHeader, ListMessage, ListChannels } from '/';
const ChannelList = () => {
  return (
    <div className="md:flex flex-row sm:w-1/6 md:1/4 lg:1/4 md:h-screen lg:h-screen h-screen sm:h-screen bg-blue-700 rounded-r-lg hidden">
      <div className="flex-auto h-screen ">
        <ListHeader />
        <ListSearch />
        <div className="h-3/4">
          <ListChannels />
          <ListMessage />
        </div>
      </div>
    </div>
  );
};

export default ChannelList;
