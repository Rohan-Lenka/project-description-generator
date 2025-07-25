import { useState } from "react";
import Description from "./Description";
import Form from "./Form";
import defaultText from "../texts/default-text";

const DescriptionGenerator = () => {
  const [description, setDescription] = useState(defaultText);
  const [loading, setLoading] = useState(false);
  return (
    <div className="mt-[225px] flex flex-wrap md:flex-nowrap justify-between gap-10 h-[520px] px-[18px] py-[6px]">
      <Description description={description} loading={loading} />
      <Form setDescription={setDescription} setLoading={setLoading} />
    </div>
  );
};

export default DescriptionGenerator;
