import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { Button } from "../ui/Button"; 
import { Input } from "../ui/Input";
import { Card, CardContent } from "../ui/Card";
import { X, Lightbulb } from "lucide-react"; 

// Dummy data for suggestions and steps. In a real app, these would come from assets.js or an API.
const fieldSuggestions = ["Software Development", "Data Science", "UI/UX Design", "Marketing", "Finance", "Research"];
const skillSuggestions = ["JavaScript", "Python", "React", "Node.js", "SQL", "Figma", "Marketing Strategy", "Financial Modeling"];
const steps = [
  { title: "Your Education", description: "Tell us about your academic background." },
  { title: "Your Skills", description: "Showcase your strengths and abilities." },
  { title: "Field of Interest", description: "What areas are you passionate about?" },
  { title: "Your Availability", description: "When are you ready to start your journey?" },
];

// Animation variants for step transitions
const stepVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { opacity: 0, x: -100, transition: { type: "spring", stiffness: 300, damping: 30 } },
};

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    education: "",
    skills: [],
    field: "",
    availability: "",
  });
  const [inputSkill, setInputSkill] = useState("");

  // Validation per step
  const validateStep = () => {
    switch (currentStep) {
      case 0:
        if (!formData.education.trim()) {
          alert("Please enter your education details.");
          return false;
        }
        break;
      case 1:
        if (formData.skills.length === 0) {
          alert("Please add at least one skill.");
          return false;
        }
        break;
      case 2:
        if (!formData.field) {
          alert("Please select your field of interest.");
          return false;
        }
        break;
      case 3:
        if (!formData.availability.trim()) {
          alert("Please provide your availability.");
          return false;
        }
        break;
      default:
        break;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep() && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const addSkill = (skill) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData({ ...formData, skills: [...formData.skills, skill] });
      setInputSkill("");
    }
  };

  const removeSkill = (skill) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  const handleSubmit = () => {
    if (validateStep()) {
      console.log("Submit Data:", formData);
      alert("Form submitted successfully 🎉 We're finding your perfect internships!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
      className="w-full max-w-lg mt-8 md:mt-2 px-4 sm:px-6"
    >
      <Card className="p-6 md:p-8 shadow-2xl dark:shadow-slate-700/50 
                       border border-gray-200 dark:border-slate-700 
                       rounded-xl bg-white dark:bg-slate-800 
                       min-h-[500px] md:min-h-[550px] h-auto">
        <CardContent className="flex flex-col h-full">
          {/* Step Indicator */}
          <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
            Step {currentStep + 1} of {steps.length}
          </div>

          {/* Step Title & Description */}
          <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
            {steps[currentStep].title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
            {steps[currentStep].description}
          </p>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 dark:bg-slate-700 h-2 rounded-full mb-8">
            <div
              className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Step Content with Animation */}
          <div className="flex-1 min-h-[150px] relative">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div key="step0" {...stepVariants}>
                  <label htmlFor="education" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Education Level</label>
                  <Input
                    id="education"
                    placeholder="e.g., B.Tech CSE, 3rd Year"
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    required
                    className="dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  />
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Your current academic status or highest degree.</p>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div key="step1" {...stepVariants}>
                  <label htmlFor="skills" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Key Skills</label>
                  <div className="flex flex-col sm:flex-row gap-2 mb-3">
                    <Input
                      id="skills"
                      placeholder="Add a skill..."
                      value={inputSkill}
                      onChange={(e) => setInputSkill(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addSkill(inputSkill)}
                      className="dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                    />
                    <Button type="button" onClick={() => addSkill(inputSkill)} className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4 min-h-[40px]">
                    {formData.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm flex items-center gap-1.5 shadow-sm"
                      >
                        {skill}
                        <X
                          size={14}
                          className="cursor-pointer text-purple-500 dark:text-purple-300 hover:text-purple-700 dark:hover:text-purple-100 transition-colors"
                          onClick={() => removeSkill(skill)}
                        />
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Suggestions:</p>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {skillSuggestions.map((s, i) => (
                      <Button
                        key={i}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => addSkill(s)}
                        className="dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-700 dark:hover:border-blue-500"
                      >
                        {s}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="step2" {...stepVariants}>
                  <label htmlFor="field" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Primary Field of Interest</label>
                  <div className="relative">
                    <select
                      id="field"
                      className="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors appearance-none pr-8"
                      value={formData.field}
                      onChange={(e) => setFormData({ ...formData, field: e.target.value })}
                      required
                    >
                      <option value="" disabled>Select your field of interest</option>
                      {fieldSuggestions.map((field, index) => (
                        <option key={index} value={field}>
                          {field}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Choose the industry or area you want to intern in.</p>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="step3" {...stepVariants}>
                  <label htmlFor="availability" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Availability</label>
                  <Input
                    id="availability"
                    placeholder="e.g., 6 months starting June 2024, Immediate"
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    required
                    className="dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  />
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">When are you available for an internship?</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 mt-8 pt-4 border-t border-gray-200 dark:border-slate-700">
            <Button
              onClick={prevStep}
              disabled={currentStep === 0}
              variant="outline"
              className="dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-700"
            >
              Back
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button
                className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold transform hover:scale-105 transition-all duration-300"
                onClick={handleSubmit}
                type="button"
              >
                Submit & Find Matches
                <Lightbulb className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={nextStep} type="button" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold transform hover:scale-105 transition-all duration-300">
                Next Step
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Form;
