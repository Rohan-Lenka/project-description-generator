const SubmitButton = ( {setDescription} ) => {

    function func(e) {
        e.preventDefault();
        setDescription((description) => description = "ready");
        const el = document.querySelector("#platform-list").children[0].children[0].children[0];
        console.log(el);
    }

    return (
        <div className="px-[20px] mb-[24px] inline-block ">
            <button onClick={(e) => func(e)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                Submit
            </button>        
        </div>
    );
}

export default SubmitButton;