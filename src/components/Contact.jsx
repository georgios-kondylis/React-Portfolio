import React from "react";
import { margins_paddings } from "../utils";

const Contact = ({ darkMode, textColor, dynamicBorder }) => {
  const rmv_focus_border = `${textColor} ${
    darkMode ? "dark" : ""
  } focus:outline-none focus:ring-0`;

  return (
    <div className={`${margins_paddings} flex items-center justify-center`}>
      <div
        className={`px-[20px] max-w-[550px] py-[20px] ${
          darkMode
            ? "shadow-[3px_3px_10px_#000000a2]"
            : "shadow-[3px_3px_10px_#12121276]"
        } rounded-lg`}
      >
        <h2 className={`${textColor} text-2xl font-semibold text-center mb-4`}>
          Contact Me
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className={`p-2 rounded w-full bg-transparent  ${rmv_focus_border} ${dynamicBorder}`}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className={`p-2 rounded w-full bg-transparent ${rmv_focus_border} ${dynamicBorder}`}
              required
            />
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            className={`p-2 rounded w-full bg-transparent ${rmv_focus_border} ${dynamicBorder}`}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className={`p-2 rounded w-full bg-transparent ${rmv_focus_border} ${dynamicBorder} `}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className={`p-2 rounded w-full bg-transparent ${rmv_focus_border} `}
            required
          />
          <textarea
            placeholder="Message"
            className={`h-[200px] p-2 rounded w-full bg-transparent ${rmv_focus_border} ${dynamicBorder} `}
            required
          ></textarea>
          <button
            type="submit"
            className={`HeroBTN w-[50%] px-[10px] py-[5px] rounded-[4px] border border-[#f5f3dc] text-[#f5f3dc] ${
              !darkMode && "bg-[#171717] border-none"
            }`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
