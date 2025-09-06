
import Form from "../components/quizForm/Form";
import LeftSide from "../components/quizForm/LeftSide";

const QuizForm = () => {
  return (
    <div className="min-h-screen mt-15 flex flex-row gap-10 justify-center items-center py-12 px-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-gray-950 text-gray-900 dark:text-gray-100">
      <LeftSide />
      <Form />
    </div>
  );
};

export default QuizForm;