import { useState } from "react";
import Display from "./Display";
import Form from "./Form";
import defaultText from "../texts/default-text";

const DescriptionGenerator = () => {
  const [description, setDescription] = useState(defaultText);
  return (
    <div className="mt-[40px] flex flex-wrap md:flex-nowrap justify-between gap-10 h-[520px] px-[18px] py-[6px]">
        <Display
          description={description}
          setDescription={setDescription}
        />
        <Form setDescription={setDescription}/>
    </div>
  );
};

export default DescriptionGenerator;
