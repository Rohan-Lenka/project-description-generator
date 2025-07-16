const Description = ({ description, loading }) => {
  return (
    <div
      id="description-display"
      className="text-white bg-gray-600 w-[800px] p-[18px] overflow-y-auto rounded-xl"
    >
      {loading && <p>Generating...</p>}
      {!loading && (
        <>
          <h1 className="text-xl font-bold text-white mb-8">
            {description.heading}
          </h1>
          <ul className="list-disc pl-5">
            {description.points.map((point) => {
              return <li className="mb-2">{point}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Description;
