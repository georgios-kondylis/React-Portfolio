import React, { useState } from "react";
import { margins_paddings } from "../utils";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { AnimatePresence, motion } from "framer-motion";

const Contact = ({ darkMode, textColor, textColor2, dynamicBorder }) => {
// ------------------ Custom styles variables  ------------------ //
  const rmv_focus_border = `${textColor} ${ darkMode ? "dark" : ""} focus:outline-none focus:ring-0`;
  const form_container_styles = `flex px-[20px] max-w-[550px] py-[20px] rounded-lg transition-all ease-in-out duration-500 ${ darkMode ? "shadow-[3px_3px_10px_#000000a2]" : "shadow-[3px_3px_10px_#12121276]" }`;
  const Contact_Me_h2_Styles = `${textColor} mb-[70px] text-[2.5rem] max-sm:text-[1.8rem] font-semibold text-center`;
  const Submit_Button_Styles = `HeroBTN ${!darkMode && "bg-[#171717] border-none"} w-[50%] max-sm:w-full px-[10px] py-[5px] rounded-[4px] border border-[#f5f3dc] text-[#f5f3dc] `;
// ------------------ Custom styles variables  ------------------ //


  const access_key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ;
  const [btnLoading, setBtnLoading] = useState(false); // Add loading state for the submit button
  const [message, setMessage] = useState(null); // Add message state for success/error
  const [messageIsVisible, setMessageIsVisible] = useState(false); // Add message state for success/error
  

  const [formDetails, setFormDetails] = useState(
    {
      FirstName: '',
      LastName: '',
      PhoneNumber: '',
      Email: '',
      Subject: '',
      Message: '',
    }
  );

 const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent default form submission wich refreshes the page
  setBtnLoading(true); // so that the submit button is temporary disabled

    // Prepare form data
    const formData = new FormData();
    formData.append("access_key", access_key);  // Add your Web3Forms access key its an .env variable
    formData.append("First Name", formDetails.FirstName);
    formData.append("Last Name", formDetails.LastName);
    formData.append("Phone Number", formDetails.PhoneNumber);
    formData.append("Email", formDetails.Email);
    formData.append("Subject", formDetails.Subject);
    formData.append("Message", formDetails.Message);

  try{
    const response = await fetch('https://api.web3forms.com/submit', {method: 'POST',body: formData });
    const result = await response.json();
    if(result.success){
      setMessage("Thanks for contacting me!");
      setMessageIsVisible(true);
      
      setTimeout(() => {setMessage(null), setMessageIsVisible(false)}, 5000);
        setFormDetails({                    // reset the forms after submited
          FirstName: "",
          LastName: "",
          PhoneNumber: "",
          Email: "",
          Subject: "",
          Message: "",
        });
      } else {
        setMessage("Failed to send message. Try again later.");
      }
  } 
  catch (error){
    console.log('malakia egine tsekare to, Error :',error);
    setMessage('Kati malakia egine bro de to esteile')
  }
  setBtnLoading(false);
}

  return (
    <section id="contact" className={`${margins_paddings} flex flex-col items-center justify-center max-md:py-[70px] py-[100px] w-full`}>
      <h2 className={`${Contact_Me_h2_Styles}`}> Contact </h2>

      <div className=" flex flex-row max-sm:flex-col-reverse gap-[30px] justify-between w-full">
        <div id="form-container" className={`${form_container_styles}`} >

        <form onSubmit={handleSubmit} className="space-y-[17px] transition-all ease-in-out duration-500">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={formDetails.FirstName} 
              name="FirstName"
              className={`p-2 rounded w-full bg-transparent  ${rmv_focus_border} ${dynamicBorder}`}
              required
              onChange={(e) => setFormDetails ((prev) => ({...prev ,FirstName : e.target.value }) ) }
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formDetails.LastName} 
              name="LastName"
              className={`p-2 rounded w-full bg-transparent ${rmv_focus_border} ${dynamicBorder}`}
              required
              onChange={(e) => setFormDetails ((prev) => ({...prev ,LastName : e.target.value }) ) }
            />
          </div>

          <input
            type="tel"
            placeholder="Phone Number"
            value={formDetails.PhoneNumber} 
            name="PhoneNumber"
            className={`p-2 rounded w-full bg-transparent ${rmv_focus_border} ${dynamicBorder}`}
            required
            onChange={(e) => setFormDetails ((prev) => ({...prev ,PhoneNumber : e.target.value }) ) }
          />

          <input
            type="email"
            placeholder="Email"
            value={formDetails.Email} 
            name="Email"
            className={`p-2 rounded w-full bg-transparent ${rmv_focus_border} ${dynamicBorder} `}
            required
            onChange={(e) => setFormDetails ((prev) => ({...prev ,Email : e.target.value }) ) }
          />

          <input
            type="text"
            placeholder="Subject"
            value={formDetails.Subject} 
            name="Subject"
            className={`p-2 rounded w-full bg-transparent ${rmv_focus_border} ${dynamicBorder}`}
            required
            onChange={(e) => setFormDetails ((prev) => ({...prev ,Subject : e.target.value }) ) }
          />
          <textarea
            placeholder="Message"
            value={formDetails.Message} 
            name="Message"
            className={`h-[200px] p-2 rounded w-full bg-transparent ${rmv_focus_border} ${dynamicBorder} `}
            required
            onChange={(e) => setFormDetails ((prev) => ({...prev ,Message : e.target.value }) ) }
          ></textarea>

          <div className={`flex w-full gap-[20px] max-sm:flex-col items-center justify-between transition-all ease-in-out duration-400`}>
            <button type="submit" disabled={btnLoading} className={`${Submit_Button_Styles} ${btnLoading ? "opacity-50 cursor-not-allowed" : ""} transition-all ease-in-out duration-400`}>
            {btnLoading? 'Sending...' : 'Send Message'}
            </button>

            <AnimatePresence>
              {message && messageIsVisible &&
              <motion.div
                initial={{ opacity: 0, x: 150 }}   // Starts hidden, slides in from the right
                animate={{ opacity: 1, x: 0 }}   // Becomes fully visible
                exit={{ opacity: 0, x: 150 }}     // Fades out and slides out to the right
                transition={{ duration: 0.3 }}  // Smooth transition
                className={`flex flex-col gap-[1px] items-center`}>
                
                <div className="flex gap-[10px] items-center">
                  <h1 className={`${textColor} max-sm:text-[13px] text-nowrap`}>{message}</h1>
                  <CheckCircleIcon sx={{ color: '#26d000a2' }} />
                </div>
              
                  {/* Loading Bar */}
                <motion.div
                  initial={{ width: 0, originX: 1 }} // Start from the right
                  animate={{ width: "100%" }} // Fills up over 5 seconds
                  transition={{ duration: 5, ease: "linear" }} // Smooth linear fill
                  className={`h-[3px] ${darkMode? 'bg-[#f5f3dc]' : 'bg-[#121212]'} rounded-lg w-full`}
                />

              </motion.div> } 

              
            </AnimatePresence>
          

          </div>
        
        </form>

        </div>
{/* //------------------------ */}
        <div className="relative flex flex-col justify-between gap-[20px] w-1/2 max-sm:w-full bg-[#1b1b1b] text-white rounded-lg p-[20px]">
          <div className="flex flex-col md:gap-[20px] transition-all ease-in-out duration-300">

            <p className="text-[1.3rem] max-md:mb-[15px] max-md:text-[1.2rem]">
              Interested in collaborating or learning more about my projects? Feel free to
            </p>

            <div className="flex flex-wrap items-center gap-[12px] text-[1.8rem] max-md:text-[1.5rem]">
              <h1 className={` text-white text-nowrap`}>Connect with me on </h1>
              <button className={`HeroBTN px-[10px] py-[2px] max-md:mb-[15px] rounded-[4px] border border-[#f5f3dc] text-[#f5f3dc] bg-[#171717]`}>
                <a className="flex items-center gap-[3px]" href="#">Linked<i className={`fa-brands fa-linkedin`}></i></a>
              </button>  
            </div>

            <p className="text-[1.6rem] max-md:text-[1.4rem]">Or fill out the form</p>
           
            {/* {---------- Custom Border Fade Effect ----------} */}
            {darkMode && (
            <>
              <div className="absolute bottom-0 left-0 w-[20%] h-[3px] bg-gradient-to-r from-[#f5f3dc] to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-[3px] h-[50%] bg-gradient-to-t from-[#f5f3dc] to-transparent"></div>
              <div className="absolute top-[0px] right-0 w-[10%] h-[3px] bg-gradient-to-l from-[#f5f3dc] to-transparent"></div>
              <div className="absolute top-[0px] right-0 w-[3px] h-[50%] bg-gradient-to-b from-[#f5f3dc] to-transparent"></div>
            </>
            )}
            {/* {---------- Custom Border Fade Effect ----------} */}
    
          </div>
         
            
          <p className="text-[1.3rem] max-md:text-[1.2rem]"> I look forward to connecting with you! </p>
        </div>

      </div>

     


      
    </section>
  );
};

export default Contact;









//                                NOTES AND GUIDE FOR THE FUTURE



// step 1 - create the frorm and add a <button type="submit"> at the bottom.
//          ex.  <input
            //   type="text"
            //   placeholder="First Name"
            //   value={formDetails.FirstName}  OBS Bind value to state so you can update to empty later on.
            //   name="FirstName"               OBS make sure its the same as the formDetails key
            //   required
            //   onChange={(e) => setFormDetails ((prev) => ({...prev ,FirstName : e.target.value }) ) }   // update the formDetails
            // />

// step 2 - create a variable with your acces_key ex. 7be2133f-4b5b-4cad-b86d-35d9cc4e230b or import it from .env so its hidden.

// step 3 create 2 useState() variables, 1 btnLoading to use for disabling the submit button while submiting
//        and  2 message to display after submit btn was clicked.

// step 4 create an Object using useState() whose key-value pair reflect to those of the input fields 
//        example const [formDetails, setFormDetails] = useState( { FirstName: '', LastName: '',} )

// STEP 5 create the const handleSubmit = async(e){ 
//        e.preventDefault(); // Prevent default form submission wich refreshes the page
//        setBtnLoading(true); // so that the submit button is temporary disabled

//        const formData = new FormData(); then create the form and add the key-value pairs that are stored in the formDetails
          
//        formData.append("access_key", access_key);  // Add your Web3Forms access key its an .env variable
//        formData.append("First Name", formDetails.FirstName); add the rest of the key-value pairs
//        formData.append("Last Name", formDetails.LastName);

  // then make an api post request to https://api.web3forms.com/submit, await fetch takes 2 arguements ex. fetch('adress' object with 2 values {method: 'POST',body: formData})
            
  // try{
  //      const response = await fetch('https://api.web3forms.com/submit', {method: 'POST',body: formData });
  //      const result = await response.json();  we turn the web3form's response they send back to us after they review the request to a json formated object. its like this -> data : {First Name: 'Georgios', ..etc} success : true

  //      if(result.success){
  //      setMessage("Message sent successfully!");
  //      setFormDetails({                                            // reset the forms after submited
  //         FirstName: "",
  //         LastName: "", ...etc
  //       });
  //     } else {
  //       setMessage("Failed to send message. Try again later.");
  //       }
  //     } catch (error){
  //         console.log('malakia egine tsekare to, Error :',error);
  //         setMessage('Kati malakia egine bro de to esteile')
  //       }
  //       setBtnLoading(false);
  //   }

  // step 6 add the functionto <form onSubmit={handleSubmit}>
