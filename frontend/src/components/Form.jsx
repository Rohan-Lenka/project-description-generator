import DescriptionTypeRadio from "./form-components/DescriptionTypeRadio";
import DetailsText from "./form-components/DetailsText";
import LanguagesText from "./form-components/LanguagesText";
import NewButton from "./form-components/NewButton";
import PlatformRadio from "./form-components/PlatformRadio";
import SubmitButton from "./form-components/SubmitButton";

const Form = ( {setDescription} ) => {
  return (
    <div className="bg-gray-700 p-[10px]">
      <form action="">
        <DetailsText />
        <LanguagesText />
        <DescriptionTypeRadio />
        <PlatformRadio />
        <div className="flex justify-between">
          <SubmitButton setDescription={setDescription}/>
          <NewButton />
        </div>
      </form>
    </div>
  );
};

export default Form;
