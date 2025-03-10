const NewButton = () => {
    function startNew(e) {
        e.preventDefault();
        location.reload();
    }
    return (
        <div className="px-[20px] mb-[24px] inline-block ">
            <button onClick={(e) => startNew(e)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 active:scale-[0.9] duration-200">
                New
            </button>
        </div>
    );
}

export default NewButton;