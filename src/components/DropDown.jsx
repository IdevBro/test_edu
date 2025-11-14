import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi"; 

function DropDownItem({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#F1F1F3] py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-[18px] font-medium text-[#262626]">{title}</h3>
        <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#F7F7F8] rounded-md transition-transform duration-300">
          {open ? (
            <FiX className="text-gray-600 text-lg" />
          ) : (
            <FiPlus className="text-gray-600 text-lg" />
          )}
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[200px] mt-3" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-[16px] leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

function DropDown() {
  return (
    <div className="rowMain7">
      <div className="container mx-auto">
        <div className="total p-[60px] bg-white flex flex-wrap justify-between gap-[40px]">
          <div className="left1 max-w-[450px]">
            <h1 className="text-[32px] font-[700] w-[250px] mb-[10px]">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 mb-[20px] font-[600]">
              Still you have any questions? Contact our Team via{" "}
              <span className="">
                support@skillbridge.com
              </span>
            </p>
            <button className="border-[1px] border-[#F1F1F3] p-[10px]  rounded-[10px] font-[600]">
              <a href="#">See All FAQ’s</a>
            </button>
          </div>

          <div className="right1  border-[#F1F1F3]  p-6 w-[600px] bg-white">
            <DropDownItem
              title="Can I enroll in multiple courses at once?"
              content="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
            />
            <DropDownItem
              title="What kind of support can I expect from instructors?"
              content="dfghjkl;qwertyuiopzxcvbnmqwaserfdtgyujhixkozlx"
            />
            <DropDownItem
              title="Are the courses self-paced or do they have specific start and end dates?"
              content="Yes, we provide certificates after course completion."
            />
            <DropDownItem
              title="Are there any prerequisites for the courses?"
              content="Yes, we provide certificates after course completion."
            />
            <DropDownItem
              title="Can I download the course materials for offline access?"
              content="Yes, we provide certificates after course completion."
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
