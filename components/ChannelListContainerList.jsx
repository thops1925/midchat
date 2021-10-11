import { SideBar, ListSearch, ListHeader, ListMessage, ListChannels } from '/';
import Cookies from 'universal-cookie';
import { ChannelList, useChatContext } from 'stream-chat-react';
const ChannelListContainer = () => {
  return (
    <div className="md:flex flex-row sm:w-1/5 md:h-screen lg:h-screen h-screen sm:h-screen bg-blue-700 rounded-r-lg hidden">
      <SideBar />
      <div className="flex-auto h-screen ">
        <ListHeader />
        <ListSearch />
        <div className="h-3/4">
          <ChannelList
            filters={{}}
            channelRenderFilterFn={() => {}}
            List={(listProps) => <ListChannels {...listProps} type="team" />}
            Preview={(preProps) => <ListMessage {...prePros} type="team" />}
          />
        </div>
      </div>
    </div>
  );
};

export default ChannelListContainer;
