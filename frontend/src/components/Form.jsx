import { useState } from "react";
import DescriptionTypeRadio from "./form-components/DescriptionTypeRadio";
import DetailsText from "./form-components/DetailsText";
import LanguagesText from "./form-components/LanguagesText";
import NewButton from "./form-components/NewButton";
import PlatformRadio from "./form-components/PlatformRadio";
import SubmitButton from "./form-components/SubmitButton";

const Form = ({ setDescription, setLoading }) => {
  const [details, setDetails] = useState("");
  const [languages, setLanguages] = useState("");
  const [type, setType] = useState("");
  const [platform, setPlatform] = useState("");
  return (
    <div className="bg-gray-700 p-[10px] rounded-xl">
      <form action="">
        <DetailsText setDetails={setDetails} />
        <LanguagesText setLanguages={setLanguages} />
        <DescriptionTypeRadio setType={setType} />
        <PlatformRadio setPlatform={setPlatform} />
        <div className="flex justify-between">
          <SubmitButton
            setDescription={setDescription}
            details={details}
            languages={languages}
            type={type}
            platform={platform}
            setLoading={setLoading}
          />
          <NewButton />
        </div>
      </form>
    </div>
  );
};

export default Form;
