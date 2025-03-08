const Description = ( {description} ) => {
    return (
        <>
            <h1 className="text-xl font-bold text-white mb-8">{description.heading}</h1>
            <ul className="list-disc pl-5">
            {description.points.map((point) => {
                return <li className="mb-2">{point}</li>
            })}
        </ul>
        </>
    );
}

export default Description;