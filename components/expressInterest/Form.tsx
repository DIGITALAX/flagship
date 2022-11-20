import { FunctionComponent, useContext, useMemo } from "react";
import { GlobalContext } from "../../pages/_app";
import useForm from "./hooks/useForm";

const Form: FunctionComponent= (): JSX.Element => {
  const { setSubmitSuccess, handleSubmitForm, submitSuccess } = useForm();
  useMemo(() => {
    if (submitSuccess) {
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000);
    }
  }, [submitSuccess]);
  const {expressInterest} = useContext(GlobalContext)
  return (
    <form
      onSubmit={(e) => handleSubmitForm(e)}
      className="relative h-fit w-fit"
    >
      <div className="relative grid auto-rows-auto grid-flow-row gap-10">
        <div className="relative h-fit w-fit col-start-1 row-start-1">
          <div className="relative col-start-1 row-start-1">
            <input name="expressInterest" className="hidden" defaultValue={expressInterest} />
            <div className="text-mainText m-2 font-lib">
              Have more to say? Share your thoughts on the piece before you submit.
            </div>
            <input
              className="rounded-lg w-5/6 h-12 p-2 border border-offBlack bg-offWhite caret-offBlue focus:caret-offBlue font-lib"
              type="text"
              name="itemFeatures"
              required
              onChange={() => setSubmitSuccess(false)}
            />
          </div>
        </div>
        <div className="relative h-fit w-fit col-start-1 row-start-3 md:row-start-2">
          <div className="relative col-start-1 row-start-2">
            <div className="text-mainText m-2 font-lib">
              How would you like to keep in touch?
            </div>
            <input
              className="rounded-lg w-5/6 h-12 p-2 border border-offBlack bg-offWhite caret-offBlue focus:caret-offBlue font-lib"
              type="text"
              name="contactType"
              required
              onChange={() => setSubmitSuccess(false)}
            />
          </div>
        </div>
        <div className="relative h-fit w-fit col-start-1 row-start-4 md:row-start-3">
          <button
            type="submit"
            className="relative font-libB w-24 h-fit p-2 border-2 border-mainText cursor-sewingHS rounded-full text-mainText bg-mainBg text-xs hover:opacity-80 active:bg-grayBlue"
          >
            SUBMIT
          </button>
        </div>
        <div className="relative h-fit w-fit col-start-1 row-start-5 md:row-start-4">
          {submitSuccess && (
            <div className="text-mainText font-libB relative">
              Thanks {":)"}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
