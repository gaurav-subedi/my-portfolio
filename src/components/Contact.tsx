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

const inputClasses =
  "w-full rounded-control border border-border bg-bg px-4 py-3 text-fg placeholder:text-fg-muted transition-colors focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/40";

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
    <SectionWrapper
      id="contact"
      title="Contact Me"
      index="05"
      eyebrow="Let's connect"
    >
      <motion.h3
        variants={fadeUp}
        className="mb-12 max-w-3xl font-display text-3xl font-bold text-fg md:text-4xl"
      >
        Have a project in mind?{" "}
        <span className="text-gradient">Let's build it together.</span>
      </motion.h3>

      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        <motion.div variants={fadeUp} className="space-y-4 md:w-1/2">
          {[
            { Icon: UserIcon, label: "Name", value: "Gaurav Subedi" },
            { Icon: MapPinIcon, label: "Location", value: "Arlington, Texas" },
            {
              Icon: EnvelopeIcon,
              label: "Email",
              value: "thegauravsubedi@gmail.com",
            },
            { Icon: PhoneIcon, label: "Phone", value: "(682)-559-2499" },
          ].map(({ Icon, label, value }) => (
            <div
              key={label}
              className="card flex items-start gap-4 p-5 transition-colors duration-300 hover:border-accent/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control border border-accent/25 bg-accent/10">
                <Icon className="h-5 w-5 text-accent-text" />
              </span>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                  {label}
                </h4>
                <p className="text-lg text-fg">{value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          variants={fadeUp}
          className="card space-y-4 p-6 md:w-1/2 md:p-8"
        >
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              name="name"
              placeholder="Your Name"
              required
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={inputClasses}
            />
          </div>

          <input
            name="title"
            placeholder="Subject"
            required
            className={inputClasses}
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className={inputClasses}
          />

          <button
            type="submit"
            className="w-full rounded-control bg-accent py-3 text-lg font-semibold text-black transition-colors hover:bg-accent-dim"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
