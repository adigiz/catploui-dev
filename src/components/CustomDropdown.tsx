"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface DropdownOption {
  value: string;
  label: string;
  subtitle?: string;
  phone?: string;
  icon?: React.ReactNode;
  type?: string;
}

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  options: DropdownOption[] | string[];
  placeholder: string;
  placeholderIcon?: React.ReactNode;
  variant?: "simple" | "complex";
  size?: "sm" | "md";
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  value,
  onChange,
  error,
  options,
  placeholder,
  placeholderIcon,
  variant = "complex",
  size = "md",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Normalize options to handle both string arrays and object arrays
  const normalizedOptions: DropdownOption[] = options.map((option) => {
    if (typeof option === "string") {
      return { value: option, label: option };
    }
    return option;
  });

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Style variants
  const getButtonStyles = () => {
    const baseStyles =
      "w-full border text-gray-900 rounded-md text-sm text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors";
    const errorStyles = error
      ? "border-red-500"
      : variant === "simple"
      ? "border-black"
      : "border-gray-300";
    const openStyles = isOpen ? "ring-2 ring-primary border-primary" : "";

    const paddingStyles = size === "sm" ? "px-3 py-2" : "px-3 py-3";

    return `${baseStyles} ${paddingStyles} ${errorStyles} ${openStyles}`;
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={getButtonStyles()}
      >
        {variant === "simple" ? (
          <span className={value ? "text-gray-900" : "text-gray-500"}>
            {value || placeholder}
          </span>
        ) : (
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {selectedOption ? (
              <>
                {selectedOption.icon && (
                  <span className="text-primary flex-shrink-0">
                    {selectedOption.icon}
                  </span>
                )}
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900">
                    {selectedOption.label}
                  </div>
                  {selectedOption.subtitle && (
                    <div className="text-sm text-gray-500 truncate">
                      {selectedOption.subtitle}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                {placeholderIcon && (
                  <span className="text-gray-400 flex-shrink-0">
                    {placeholderIcon}
                  </span>
                )}
                <span className="text-gray-500">{placeholder}</span>
              </>
            )}
          </div>
        )}
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-80 overflow-auto">
          <div className="p-2 space-y-1">
            {normalizedOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={
                  variant === "simple"
                    ? "px-3 py-3 rounded-lg hover:bg-primary hover:text-white cursor-pointer transition-colors text-black"
                    : "flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-primary hover:text-white cursor-pointer transition-colors group"
                }
              >
                {variant === "simple" ? (
                  option.label
                ) : (
                  <>
                    {option.icon && (
                      <span className="text-primary group-hover:text-white flex-shrink-0">
                        {option.icon}
                      </span>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-black group-hover:text-white">
                        {option.label}
                      </div>
                      {option.subtitle && (
                        <div className="text-sm text-gray-500 group-hover:text-gray-200 truncate">
                          {option.subtitle}
                        </div>
                      )}
                      {option.phone && (
                        <div className="text-xs text-gray-400 group-hover:text-gray-300">
                          {option.phone}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default CustomDropdown;
