import { ContainerHeader, ContainerInputs, ContainerMessage } from '.';
function ChannelContainer() {
  return (
    <div className="flex-1 h-screen">
      <ContainerHeader />
      <div className="h-3/4 flex-none  p-4 overflow-y-auto  bg-gray-5 scrollbar-hide">
        <ContainerMessage />
      </div>
      <ContainerInputs />
    </div>
  );
}

export default ChannelContainer;
