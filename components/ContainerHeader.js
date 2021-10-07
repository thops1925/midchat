import Avatar from '@mui/material/Avatar';

function ContainerHeader() {
  return (
    <>
      <div className="flex space-y-between flex-col bg-gray-100">
        <div className=" flex items-center p-3 border-b-2">
          <Avatar sx={{ width: 32, height: 32 }} />
          <p className="ml-2 text-lg font-bold text-gray-800">Dr Lumen</p>
        </div>
      </div>
    </>
  );
}

export default ContainerHeader;
