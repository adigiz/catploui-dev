"use client";

import React, { useState, useEffect, useRef } from "react";

// Hook for step-by-step animation with progressive line drawing
const useStepAnimation = (totalSteps: number, delay: number = 400) => {
  const [activeStep, setActiveStep] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateSteps = () => {
      for (let i = 0; i < totalSteps; i++) {
        setTimeout(() => {
          setActiveStep(i);
        }, i * delay);
      }
    };

    animateSteps();
  }, [isVisible, totalSteps, delay]);

  return { activeStep, isVisible, ref };
};

// Hook for fade-in animation
const useFadeIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { isVisible, ref };
};

const FranchiseProcessSection: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Initial Inquiry",
      desc: "Submit your info and connect with our franchise development team",
    },
    {
      number: "2",
      title: "Application Review",
      desc: "Complete our detailed franchise application",
    },
    {
      number: "3",
      title: "Discovery & FDD Review",
      desc: "Dive deeper into our system, performance, and expectations",
    },
    {
      number: "4",
      title: "Approval & Signing",
      desc: "Finalize your agreement and become part of the Cap't Loui family",
    },
    {
      number: "5",
      title: "Launch & Support",
      desc: "Begin training, buildout, and enjoy full launch support",
    },
  ];

  // Animation hooks
  const titleFade = useFadeIn();
  const stepAnimation = useStepAnimation(steps.length, 400);

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          ref={titleFade.ref}
          className={`text-3xl md:text-3xl lg:text-4xl font-normal text-[#333333] mb-12 transition-all duration-1000 ease-out ${
            titleFade.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          FRANCHISE PROCESS
        </h2>

        <div ref={stepAnimation.ref} className="stepper-wrapper">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`stepper-item transition-all duration-700 ease-out ${
                stepAnimation.activeStep >= idx
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              } ${stepAnimation.activeStep > idx ? "completed" : ""}`}
              style={{
                transitionDelay:
                  stepAnimation.activeStep >= idx ? `${idx * 100}ms` : "0ms",
              }}
            >
              <div
                className={`step-counter transition-all duration-500 ease-out ${
                  stepAnimation.activeStep >= idx
                    ? "border-primary bg-primary/10 scale-110"
                    : "border-gray-300 bg-white"
                }`}
              >
                <span
                  className={`text-5xl font-bold transition-colors duration-500 ${
                    stepAnimation.activeStep >= idx
                      ? "text-primary"
                      : "text-gray-400"
                  }`}
                >
                  {step.number}
                </span>
              </div>
              <div className="step-name">
                <h3
                  className={`text-xl font-bold uppercase mb-2 transition-colors duration-500 ${
                    stepAnimation.activeStep >= idx
                      ? "text-primary"
                      : "text-gray-400"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-md transition-colors duration-500 ${
                    stepAnimation.activeStep >= idx
                      ? "text-gray-600"
                      : "text-gray-400"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .stepper-wrapper {
            margin-top: auto;
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
          }
          .stepper-item {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
          }
          .stepper-item::after {
            position: absolute;
            content: "";
            border-bottom: 2px dashed #d1d5dc;
            width: 100%;
            top: 40px;
            left: 50%;
            transform: scaleX(0);
            transform-origin: left center;
            transition: transform 0.8s ease;
          }
          .stepper-item.completed::before,
          .stepper-item.completed::after {
            transform: scaleX(1);
            z-index: -1;
          }
          .stepper-item .step-counter {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: white;
            border: 2px solid #d1d5dc;
            margin-bottom: 6px;
          }
          .stepper-item:first-child::before {
            content: none;
          }
          .stepper-item:last-child::after {
            content: none;
          }

          /* Mobile responsive - vertical layout */
          @media (max-width: 768px) {
            .stepper-wrapper {
              flex-direction: column;
              align-items: center;
              gap: 0;
            }
            .stepper-item {
              flex-direction: row;
              align-items: flex-start;
              width: 100%;
              max-width: 400px;
              padding-bottom: 1.5rem;
            }
            .stepper-item::before {
              display: none;
            }
            .stepper-item::after {
              position: absolute;
              content: "";
              border-left: 2px dashed #d1d5dc;
              width: 0;
              height: calc(100% - 30px);
              top: 60px;
              left: 30px;
              transform: scaleY(0);
              transform-origin: top center;
              transition: transform 0.8s ease;
            }
            .stepper-item.completed::after {
              transform: scaleY(1);
            }
            .stepper-item:last-child::after {
              display: none;
            }
            .stepper-item .step-counter {
              margin-right: 1rem;
              margin-bottom: 0;
              flex-shrink: 0;
              width: 60px;
              height: 60px;
            }
            .stepper-item .step-counter span {
              font-size: 2rem;
            }
            .stepper-item .step-name {
              text-align: left;
              padding-top: 0.5rem;
            }
            .stepper-item .step-name h3 {
              font-size: 1rem;
              margin-bottom: 0.25rem;
            }
            .stepper-item .step-name p {
              font-size: 0.875rem;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default FranchiseProcessSection;
