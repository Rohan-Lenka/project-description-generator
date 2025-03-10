const DescriptionTypeRadio = ({ setType }) => {
  return (
    <div className="px-[20px] mb-[24px]">
      <h3 className="mb-2 ml-[10px] font-semibold text-gray-900 dark:text-white">
        Description type:{" "}
      </h3>
      <ul
        id="description-list"
        className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white "
      >
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="short-and-concise"
              type="radio"
              value="short and concise"
              onChange={(e) => setType((val) => val = e.target.value)}
              name="description-type"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
              />
            <label
              htmlFor="short-and-concise"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
              Short and concise
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="long-and-detailed"
              type="radio"
              value="long and detailed"
              onChange={(e) => setType((val) => val = e.target.value)}
              name="description-type"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
              />
            <label
              htmlFor="long-and-detailed"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
              Long and detailed
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="satirical"
              type="radio"
              value="satirical"
              onChange={(e) => setType((val) => val = e.target.value)}
              name="description-type"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
              />
            <label
              htmlFor="satirical"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
              Satirical
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DescriptionTypeRadio;
