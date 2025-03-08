import Description from "./Description";

const Display = ( {description, setDescription} ) => {
    return <div id="description-display" className="text-white bg-gray-600 w-[800px] p-[18px] overflow-y-auto rounded-xl">
       <Description description={description}/>
    </div>
}

export default Display;