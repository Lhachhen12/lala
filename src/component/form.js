import React, { useState } from "react";
import {
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import FormInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Courses = [
  { id: 1, value: "UI/UX", name: "UI/UX" },
  { id: 2, value: "AWS Cloud Practitioner", name: "AWS Cloud Practitioner" },
  { id: 3, value: "ASP .NET", name: "ASP .NET" },
  { id: 4, value: "Data Analytics and ML", name: "Data Analytics and ML" },
  { id: 5, value: "AWS-Developer-Associate", name: "AWS-Developer-Associate" },
  { id: 6, value: "Full Stack MERN", name: "Full Stack MERN" },
  { id: 7, value: "RHEL", name: "RHEL" },
  { id: 8, value: "Digital Marketing", name: "Digital Marketing" },
  { id: 9, value: "Java", name: "Java" },
  { id: 10, value: "Python with Django", name: "Python with Django" },
  { id: 11, value: "Laravel", name: "Laravel" },
  { id: 12, value: "PHP MySQL", name: "PHP MySQL" },
  { id: 13, value: "Flutter", name: "Flutter" },
  { id: 14, value: "AWS", name: "AWS" },
  { id: 15, value: "C++", name: "C++" },
  { id: 16, value: "Web Designer", name: "Web Designer" },
  { id: 16, value: "DevOps", name: "DevOps" },
  { id: 16, value: "Python", name: "Python" },
  { id: 16, value: "Ethical Hacking", name: "Ethical Hacking" },
  { id: 16, value: "Cyber Security", name: "Cyber Security" },
];

const levelOptions = [
  { id: 1, name: "School" },
  { id: 2, name: "+2/Intermidate" },
  { id: 3, name: "Bachelor" },
  { id: 4, name: "Master" },
  { id: 5, name: "Others" },
];

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    alternativeNumber: "",
    schoolCollegeName: "",
    levelOfEducation: null,
    message: "",
    courses: [],
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const handleCourseChange = (selectedCourses) => {
    setFormData({
      ...formData,
      courses: selectedCourses,
    });
  };

  const handleLevelChange = (levelId) => {
    setFormData({
      ...formData,
      levelOfEducation: levelId,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log(formData);
    // You can add your form submission logic here
  };

  return (
    <div className="bg-blue-300 py-8">
      <div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Enrollment Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Name field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            {formSubmitted && formData.name === "" && (
              <span className="text-red-500 text-sm">
                This is a required field.
              </span>
            )}
          </div>
          {/* Email field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            {formSubmitted && formData.email === "" && (
              <span className="text-red-500 text-sm">
                This is a required field.
              </span>
            )}
          </div>
          {/* Mobile Number field */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-semibold mb-2"
            >
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <FormInput
              country={"np"}
              value={formData.phone}
              onChange={handleChange}
              inputProps={{ required: true }}
              containerClass="w-full focus:outline-none focus:border-blue-500"
              inputClass="w-full px-3 py-2"
            />
            {formSubmitted && formData.phone === "" && (
              <span className="text-red-500 text-sm">
                Please enter a valid Phone Number!
              </span>
            )}
          </div>
          {/* School/College Name field */}
          <div className="mb-4">
            <label
              htmlFor="schoolCollegeName"
              className="block text-gray-700 font-semibold mb-2"
            >
              School/College Name
            </label>
            <input
              type="text"
              id="schoolCollegeName"
              name="schoolCollegeName"
              placeholder="Your School/College Name"
              value={formData.schoolCollegeName}
              onChange={(e) =>
                setFormData({ ...formData, schoolCollegeName: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Level of Education field */}
          <div className="mb-4">
            <label
              htmlFor="levelOfEducation"
              className="block text-gray-700 font-semibold mb-2"
            >
              Level of Education <span className="text-red-500">*</span>
            </label>
            {formSubmitted && formData.levelOfEducation === null && (
              <span className="text-red-500 text-sm">
                Please select one level of education.
              </span>
            )}
            {levelOptions.map((levelItem) => (
              <div key={levelItem.id} className="flex items-center mb-2">
                <input
                  type="radio"
                  id={`level-${levelItem.id}`}
                  name="levelOfEducation"
                  value={levelItem.id}
                  checked={formData.levelOfEducation === levelItem.id}
                  onChange={() => handleLevelChange(levelItem.id)}
                  className="mr-2"
                />
                <label htmlFor={`level-${levelItem.id}`}>
                  {levelItem.name}
                </label>
              </div>
            ))}
          </div>
          {/* Choose Courses field */}
          <div className="mb-4">
            <label
              htmlFor="courses"
              className="block text-gray-700 font-semibold mb-2"
            >
              Choose Courses <span className="text-red-500">*</span>
            </label>
            {formSubmitted && formData.courses.length === 0 && (
              <span className="text-red-500 text-sm">
                This is a required field.
              </span>
            )}
            <FormControl sx={{ width: "100%" }}>
              <Select
                className="h-10"
                labelId="multi-select-label"
                id="multi-select"
                multiple
                value={formData.courses}
                onChange={(e) => handleCourseChange(e.target.value)}
                renderValue={(selected) => selected.join(", ")}
                displayEmpty
              >
                {/* Placeholder */}
                <MenuItem disabled value="Choose courses">
                  <em>Choose Courses</em>
                </MenuItem>
                {/* Actual options */}
                {Courses.map((course) => (
                  <MenuItem key={course.id} value={course.name}>
                    <Checkbox
                      checked={formData.courses.includes(course.name)}
                    />
                    <ListItemText primary={course.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* Message field */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Share a bit about yourself with us"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          {/* Submit button */}
          <button
            onClick={() => {
              console.log("button clicked");
            }}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
