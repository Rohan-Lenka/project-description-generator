const DetailsText = ( {setDetails} ) => {
  return (
    <div className="px-[20px] mb-[24px]">
      <h3 className="mb-2 ml-[10px] font-semibold text-gray-900 dark:text-white">
        Project Details:{" "}
      </h3>
      <label
        htmlFor="default-input"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="text"
          id="details-input"
          onChange={(e) => setDetails((val) => val = e.target.value)}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type here"
          required
        />
      </div>
    </div>
  );
};

export default DetailsText;
