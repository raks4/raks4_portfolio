import Image from "next/image";
import bg from "../../../../public/background/astro_1.jpg";
import Form from "@/components/contact/Form";
import { color } from "framer-motion";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            establish communication
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
           Need to reach Mission Control?
           Whether you’re looking to collaborate on a professional project, ask a question, or just say hello from Earth,<br />
           I welcome you to send a transmission here.
           You can reach me at <a style={{ color: '#4DFFFF ' }} href="https://mail.google.com/mail/?view=cm&to=rakshakrnaik10@gmail.com" target="_blank" rel="noopener noreferrer">
           rakshakrnaik10@gmail.com</a> 
           &nbsp;or shoot me a message using the form below.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
