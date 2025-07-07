import { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import {
  UserIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_f67q7k2",
        "template_o4kpjzr",
        formRef.current,
        "Yd28CRy9OM0Lk__zX"
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error("Email sending error:", err);
        alert("Failed to send message.");
      });
  };

  return (
    <SectionWrapper id="contact" title="Contact Me">
      <motion.div
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16"
      >
        <motion.div
          variants={fadeUp}
          className="md:w-1/2 space-y-8 select-none"
        >
          {[
            {
              Icon: UserIcon,
              label: "Name",
              value: "Gaurav Subedi",
            },
            {
              Icon: MapPinIcon,
              label: "Location",
              value: "Arlington, Texas",
            },
            {
              Icon: EnvelopeIcon,
              label: "Email",
              value: "thegauravsubedi@gmail.com",
            },
            {
              Icon: PhoneIcon,
              label: "Phone",
              value: "(682)-559-2499",
            },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <Icon className="h-6 w-6 text-orange-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">{label}</h3>
                <p className="text-lg">{value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          variants={fadeUp}
          className="
            md:w-1/2 space-y-4 p-6 rounded-lg shadow-md
            bg-white  text-gray-900
            dark:bg-gray-900 dark:text-gray-200
            transition-colors
          "
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              name="name"
              placeholder="Your Name"
              required
              className="
                w-full p-3 rounded-md border
                bg-transparent
                border-gray-400  focus:ring-2 focus:ring-orange-500
                dark:border-gray-600 dark:focus:ring-orange-400
              "
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
                w-full p-3 rounded-md border
                bg-transparent
                border-gray-400  focus:ring-2 focus:ring-orange-500
                dark:border-gray-600 dark:focus:ring-orange-400
              "
            />
          </div>

          <input
            name="title"
            placeholder="Subject"
            required
            className="
              w-full p-3 rounded-md border
              bg-transparent
              border-gray-400  focus:ring-2 focus:ring-orange-500
              dark:border-gray-600 dark:focus:ring-orange-400
            "
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="
              w-full p-3 rounded-md border
              bg-transparent
              border-gray-400  focus:ring-2 focus:ring-orange-500
              dark:border-gray-600 dark:focus:ring-orange-400
            "
          />

          <button
            type="submit"
            className="
              inline-block w-full py-3 rounded-md font-semibold text-lg
              bg-orange-600 hover:bg-orange-700 text-white
              dark:bg-orange-500 dark:hover:bg-orange-400
              transition-colors
            "
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </SectionWrapper>
  );
}
