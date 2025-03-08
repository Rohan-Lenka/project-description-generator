const PlatformRadio = () => {
    return (
        <div className="px-[20px] mb-[24px]">       
<h3 className="mb-2 ml-[10px] font-semibold text-gray-900 dark:text-white">Platform: </h3>
<ul id="platform-list" className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center ps-3">
            <input id="linkedIn" type="radio" value="" name="platform" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500" />
            <label htmlFor="linkedIn" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">LinkedIn</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center ps-3">
            <input id="github" type="radio" value="" name="platform" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500" />
            <label htmlFor="github" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Github</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center ps-3">
            <input id="resume" type="radio" value="" name="platform" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmlFor="resume" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Resume</label>
        </div>
    </li>
   
</ul>
</div>
    );
}

export default PlatformRadio