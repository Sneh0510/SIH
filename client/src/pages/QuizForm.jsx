import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent } from "../components/ui/Card";
import { X } from "lucide-react";
import { assets, fieldSuggestions, skillSuggestions, steps } from "../assets/assets";

const QuizForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    skills: [],
    field: "",
    availability: "",
  });
  const [inputSkill, setInputSkill] = useState("");

  // Validation per step
  const validateStep = () => {
    switch (currentStep) {
      // case 0:
      //   if (!formData.name.trim() || !formData.email.trim()) {
      //     alert("Please enter your name and email.");
      //     return false;
      //   }
      //   break;
      case 1:
        if (!formData.education.trim()) {
          alert("Please enter your education details.");
          return false;
        }
        break;
      case 2:
        if (formData.skills.length === 0) {
          alert("Please add at least one skill.");
          return false;
        }
        break;
      case 3:
        if (!formData.field) {
          alert("Please select your field of interest.");
          return false;
        }
        break;
      case 4:
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

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mt-12 bg-gradient-to-b from-white to-blue-200 dark:bg-gray-900">
      <h1 className="text-5xl font-semibold">
        Let, <span className="text-indigo-600">AI</span> work for you
      </h1>
      <h5 className="text-gray-600 mt-5">
        Fill the below details & get your first internship now
      </h5>

      <div className="flex rounded-2xl  mt-5 items-center justify-center bg-white">
        {/* Quiz Form */}
        <Card className="w-[500px] p-6 h-full flex flex-col">
          <CardContent className="flex-1 flex flex-col">
            {/* Step Title */}
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              {steps[currentStep]}
            </h2>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>

            {/* Step Content */}
            <div className="flex-1">
              {currentStep === 0 && (
                <Input
                  placeholder="Education (e.g., B.Tech CSE, 3rd Year)"
                  value={formData.education}
                  onChange={(e) =>
                    setFormData({ ...formData, education: e.target.value })
                  }
                  required
                />
              )}

              {currentStep === 1 && (
                <div>
                  <div className="flex gap-2 mb-3">
                    <Input
                      placeholder="Add a skill..."
                      value={inputSkill}
                      onChange={(e) => setInputSkill(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addSkill(inputSkill)}
                    />
                    <Button type="button" onClick={() => addSkill(inputSkill)}>
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-2"
                      >
                        {skill}
                        <X
                          size={16}
                          className="cursor-pointer"
                          onClick={() => removeSkill(skill)}
                        />
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Suggestions:</p>
                  <div className="flex flex-wrap gap-2">
                    {skillSuggestions.map((s, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => addSkill(s)}
                        className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-blue-100 transition"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <select
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                  value={formData.field}
                  onChange={(e) =>
                    setFormData({ ...formData, field: e.target.value })
                  }
                  required
                >
                  <option value="">Select your field of interest</option>
                  {fieldSuggestions.map((field, index) => (
                    <option key={index} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
              )}

              {currentStep === 3 && (
                <Input
                  placeholder="Availability (e.g., 6 months, Immediate)"
                  value={formData.availability}
                  onChange={(e) =>
                    setFormData({ ...formData, availability: e.target.value })
                  }
                  required
                />
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <Button
                onClick={prevStep}
                disabled={currentStep === 0}
                variant="outline"
                type="button"
              >
                Back
              </Button>

              {currentStep === steps.length - 1 ? (
                <Button
                  className="bg-green-600 text-white"
                  onClick={() => {
                    if (validateStep()) {
                      console.log("Submit Data:", formData);
                      alert("Form submitted successfully 🎉");
                    }
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              ) : (
                <Button onClick={nextStep} type="button">
                  Next
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
};

export default QuizForm;
