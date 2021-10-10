import { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

function ListSearch() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const getChannels = async (text) => {
    try {
      //todo
    } catch (error) {
      setQuery('');
    }
  };

  const OnSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setQuery(e.target.value);
    getChannels(e.target.value);
  };
  return (
    <div className="flex justify-center mt-4 items-center px-4 bg-blue-400 rounded-lg m-2 h-14">
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
        type="text"
        value={query}
        placeholder="Search"
        onChange={OnSearch}
        className=" placeholder-gray-100 bg-blue-400 p-4 w-full h-12 rounded-lg outline-none focus-outline-none focus-ring text-gray-100"
      />
    </div>
  );
}

export default ListSearch;
