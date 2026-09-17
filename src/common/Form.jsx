import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import formImage from "../assets/FormImage.jpeg";

const Form = ({ onSuccess }) => {
  const fields = [
    {
      name: "firstName",
      label: "First Name",
      placeholder: "First Name",
      rules: { required: "First name is required" },
    },
    {
      name: "lastName",
      label: "Last Name",
      placeholder: "Last Name",
      rules: { required: "Last name is required" },
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "Email Address",
      type: "email",
      rules: {
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+\.\S+$/,
          message: "Enter a valid email",
        },
      },
    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "Phone Number",
      type: "tel",
      rules: {
        required: "Phone number is required",
        pattern: {
          value: /^[6-9]\d{9}$/,
          message: "Enter a valid 10-digit mobile number",
        },
      },
    },
    {
      name: "message",
      label: "Enter Your Message",
      placeholder: "Enter Your Message",
      rules: {}, // optional, matches screenshot (no asterisk)
      fullWidth: true,
    },
  ];

  const defaultValues = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [toast, setToast] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 1000);
  };

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbx-fFKkK3Ssg9-5Q4XNYFNm8PYDUjRuSC3wqKtYvJsSq_0pIvtJO2pfH7-MZxNEgil6/exec";

  // const onSubmit = async (data) => {
  //   try {
  //     await fetch(SCRIPT_URL, {
  //       method: "POST",
  //       mode: "no-cors", // key change
  //       body: JSON.stringify(data),
  //       headers: { "Content-Type": "text/plain;charset=utf-8" },
  //     });

  //     // With no-cors, the response is "opaque" — you cannot read status/body.
  //     // If fetch didn't throw, treat it as a successful submission.
  //     reset(defaultValues);
  //     showToast("success", "Message sent! We'll be in touch soon.");
  //     setTimeout(() => onSuccess?.(), 1200);
  //   } catch (err) {
  //     console.error("Submission failed:", err.message, err);
  //     showToast("error", "Something went wrong. Please try again.");
  //   }
  // };

  const onSubmit = async (data) => {
    // Show feedback immediately, don't wait on the network
    reset(defaultValues);
    showToast("success", "Message sent! We'll be in touch soon.");
    setTimeout(() => onSuccess?.(), 1200);

    // Fire the request in the background — don't block the UI on it
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data),
        headers: { "Content-Type": "text/plain;charset=utf-8" },
      });
    } catch (err) {
      console.error("Submission failed:", err.message, err);
      // Note: with no-cors + fire-and-forget, the user won't see this error.
      // Consider logging it somewhere you can monitor (e.g. Sentry) since
      // they won't get real-time feedback if it silently fails.
    }
  };
  return (
    <section className="relative w-full overflow-hidden rounded-2xl shadow-xl">
      {/* Toast */}
      {toast && (
        <div
          className={`absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-3 rounded-md text-sm shadow-lg transition-opacity duration-300 ${
            toast.type === "success"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="flex flex-col-reverse md:flex-row items-stretch w-full">
        {/* Left panel — dark form */}
        <div className="flex flex-col justify-center gap-6 sm:gap-8 bg-primary px-5 py-8 sm:py-10 w-full md:w-2/3">
          <div className="flex flex-col gap-3">
            <h2 className="font-body text-xl italic text-white sm:text-2xl lg:text-3xl">
              Let&apos;s Talk About the Journey Ahead !
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              Growth doesn&apos;t happen overnight it begins with intention.
              Reach out to explore how our nature-led retreats create space for
              emotional awareness, connection, and lasting transformation for
              children and families.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 sm:gap-6"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {fields
                .filter((f) => !f.fullWidth)
                .map((data) => (
                  <Input
                    key={data.name}
                    name={data.name}
                    placeholder={data.placeholder}
                    type={data.type}
                    register={register}
                    rules={data.rules}
                    error={errors[data.name]}
                    className="text-white"
                    labelClassName="text-white/90"
                    inputClassName="border-white/30 bg-transparent text-white placeholder-white/50 focus:border-white"
                  />
                ))}
            </div>

            {fields
              .filter((f) => f.fullWidth)
              .map((data) => (
                <Input
                  key={data.name}
                  name={data.name}
                  placeholder={data.placeholder}
                  type={data.type}
                  register={register}
                  rules={data.rules}
                  error={errors[data.name]}
                  className="text-white"
                  labelClassName="text-white/90"
                  inputClassName="border-white/30 bg-transparent text-white placeholder-white/50 focus:border-white"
                />
              ))}

            <Button type="submit" title="SUBMIT" />
          </form>
        </div>

        {/* Right panel — image */}
        <div className="w-full md:w-1/2">
          <img
            src={formImage}
            alt="Children and mentors at a nature retreat"
            className="h-full w-full aspect-4/3 sm:aspect-16/10 md:aspect-auto md:h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default Form;
