import React from "react";

const Input = ({
  name,
  label,
  placeholder,
  type = "text",
  register,
  rules,
  error,
  inputClassName = "",
  labelClassName = "",
}) => {
  return (
    <div className="flex flex-col gap-2">
      {/* <label htmlFor={name} className={`text-sm ${labelClassName}`}>
        {label}
        {rules?.required && <span className="ml-1">*</span>}
      </label> */}

      {name === "message" ? (
        <textarea
          id={name}
          placeholder={placeholder}
          rows={5}
          {...register(name, rules)}
          className={`w-full border-b-2 px-2 py-3 outline-none ${inputClassName}`}
        />
      ) : (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name, rules)}
          className={`w-full  border-b-2 px-2 py-3 outline-none ${inputClassName}`}
        />
      )}

      {error && <p className="text-sm text-red-400">{error.message}</p>}
    </div>
  );
};

export default Input;

// export default Input;

// const Input = ({
//   label,
//   placeholder,
//   subDescription,
//   type = "text",
//   options = [],
//   name,
//   register,
//   rules = {},
//   error,
// }) => {
//   if (type === "checkbox") {
//     return (
//       <div className="flex flex-col gap-2">
//         {label && <label className="text-sm">{label}</label>}
//         {subDescription && (
//           <p className="text-xs text-white/60">{subDescription}</p>
//         )}
//         <div className="flex flex-col gap-2">
//           {options.map((option, index) => (
//             <label
//               key={index}
//               className="flex items-center gap-2 text-sm cursor-pointer"
//             >
//               <input
//                 type="checkbox"
//                 value={option}
//                 className="accent-white"
//                 {...register(name, rules)}
//               />
//               {option}
//             </label>
//           ))}
//         </div>
//         {error && <p className="text-xs text-red-400">{error.message}</p>}
//       </div>
//     );
//   }

//   if (type === "textarea") {
//     return (
//       <div className="flex flex-col gap-2">
//         {label && (
//           <label htmlFor={name} className="text-sm">
//             {label}
//           </label>
//         )}
//         {subDescription && (
//           <p className="text-xs text-white/60">{subDescription}</p>
//         )}
//         <textarea
//           id={name}
//           placeholder={placeholder}
//           rows={4}
//           className="bg-transparent border-b border-white/20 text-sm py-2 outline-none"
//           {...register(name, rules)}
//         />
//         {error && <p className="text-xs text-red-400">{error.message}</p>}
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col gap-2">
//       {label && (
//         <label htmlFor={name} className="text-sm">
//           {label}
//         </label>
//       )}
//       {subDescription && (
//         <p className="text-xs text-white/60 ">{subDescription}</p>
//       )}
//       <input
//         id={name}
//         type={type}
//         placeholder={placeholder}
//         className="bg-transparent border-b border-white/20 text-sm py-2 outline-none"
//         {...register(name, rules)}
//       />
//       {error && <p className="text-xs text-red-400">{error.message}</p>}
//     </div>
//   );
// };

// export default Input;
