function ContainerInputs() {
  return (
    <>
      <div className=" mx-5 flex items-center justify-center rounded-lg bg-gray-100 scrollbar-hidden">
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
    </>
  );
}

export default ContainerInputs;
