import { useState } from "react";
import Display from "./Display";
import Form from "./Form";

const DescriptionGenerator = () => {
  const [description, setDescription] = useState("not ready");
  return (
    <div className="mt-[40px] flex justify-center">
        <Display
          description={description}
          setDescription={setDescription}
        />
        <Form setDescription={setDescription}/>
    </div>
  );
};

export default DescriptionGenerator;
