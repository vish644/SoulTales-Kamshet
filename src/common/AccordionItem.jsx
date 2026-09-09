import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * A single FAQ accordion row.
 *
 * - Open state: white card, hairline border, question + chevron-up header,
 *   answer body revealed underneath.
 * - Closed state: soft grey pill, question + chevron-down, no body.
 */
export default function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className={
        isOpen
          ? "rounded-2xl border border-slate-200 bg-white"
          : "rounded-2xl bg-[#FAFAFA"
      }
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
      >
        <span className="font-body font-bold text-[15px] md:text-base text-primary">
          {question}
        </span>
        <span className="shrink-0 text-secondary">
          {isOpen ? (
            <ChevronUp size={20} strokeWidth={2.5} />
          ) : (
            <ChevronDown size={20} strokeWidth={2.5} />
          )}
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 -mt-1 space-y-4">
          {answer.map((paragraph, i) => (
            <p
              key={i}
              className="!text-[15px] md:!text-[16px] !leading-relaxed !text-slate-600 font-body font-normal"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
