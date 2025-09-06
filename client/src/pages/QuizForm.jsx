import Form from "../components/quizForm/Form";
import LeftSide from "../components/quizForm/LeftSide";

const QuizForm = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-2 lg:gap-16 justify-center items-center py-12 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-gray-950 text-gray-900 dark:text-gray-100">
      {/* LeftSide component for branding/intro text/image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
        <LeftSide />
      </div>

      {/* Form component for the actual quiz/input */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Form />
      </div>
    </div>
  );
};

export default QuizForm;