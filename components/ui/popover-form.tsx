"use client"

import { ReactNode, RefObject, useEffect, useRef, useState } from "react"
import { ChevronUp, Loader, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"

type PopoverFormProps = {
  open: boolean
  setOpen: (open: boolean) => void
  openChild?: ReactNode
  successChild?: ReactNode
  showSuccess: boolean
  width?: string
  height?: string
  showCloseButton?: boolean
  title: string
  customTrigger?: ReactNode
  rounded?: boolean
  showTitle?: boolean
}

export function PopoverForm({
  open,
  setOpen,
  openChild,
  showSuccess,
  successChild,
  width = "364px",
  height = "192px",
  title = "Feedback",
  showCloseButton = false,
  customTrigger,
  rounded = true,
  showTitle = true,
}: PopoverFormProps) {
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, () => setOpen(false))

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div key={title} className="relative inline-block text-left">
      {/* Dynamic CSS styles for the rotating conic border effect */}
      <style>{`
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .popover-border-container {
          position: relative;
          padding: 1.5px;
          overflow: hidden;
          background: transparent;
        }
        .popover-border-container::before {
          content: "";
          position: absolute;
          inset: -150%;
          background: conic-gradient(from 0deg, #1620f0, #a906c9, #f016da, #1620f0);
          animation: rotate-border 6s linear infinite;
          opacity: 1;
          z-index: 0;
        }
        .popover-border-inner {
          position: relative;
          z-index: 1;
          height: 100%;
          width: 100%;
          background: rgb(255, 255, 255);
        }
        .dark .popover-border-inner {
          background: rgb(18, 18, 18);
        }
      `}</style>

      {customTrigger ? (
        <div 
          onClick={(e) => {
            e.stopPropagation()
            setOpen(true)
          }}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          className="cursor-pointer inline-block"
        >
          {customTrigger}
        </div>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation()
            setOpen(true)
          }}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          style={{ borderRadius: rounded ? 8 : 0 }}
          className={cn(
            "flex h-9 items-center border bg-white dark:bg-[#121212] px-3 text-sm font-medium outline-none border-neutral-200 dark:border-neutral-800 text-slate-800 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors",
            rounded ? "rounded-lg" : "rounded-none"
          )}
        >
          <span>{title}</span>
        </button>
      )}
      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              key={`${title}-portal-wrapper`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-auto"
            >
              {/* Backdrop overlay for premium modal feel */}
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  setOpen(false)
                }}
                className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"
              />
              
              {/* Centered Premium Modal Popover with Conic Glowing Borders */}
              <motion.div
                key={`${title}-modal`}
                initial={{ scale: 0.95, y: 16 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 16 }}
                transition={{ type: "spring", duration: 0.35, bounce: 0 }}
                className={cn(
                  "relative shadow-2xl outline-none overflow-hidden",
                  rounded && "popover-border-container"
                )}
                ref={ref}
                style={{ borderRadius: rounded ? 12 : 0, width: "calc(100vw - 32px)", maxWidth: width, height }}
              >
                <div 
                  className="popover-border-inner overflow-hidden h-full"
                  style={{ borderRadius: rounded ? 11 : 0 }}
                >
                  {showTitle && (
                    <span
                      aria-hidden
                      className="absolute left-4 top-[17px] text-sm text-neutral-500 dark:text-neutral-400 data-[success=true]:text-transparent"
                      data-success={showSuccess}
                    >
                      {title}
                    </span>
                  )}

                  {showCloseButton && (
                    <div className="absolute top-3.5 right-3.5 z-40">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setOpen(false)
                        }}
                        className="flex items-center justify-center p-1 text-slate-400 hover:text-slate-700 dark:text-neutral-500 dark:hover:text-white transition-all bg-slate-100 dark:bg-neutral-800 hover:bg-slate-200 dark:hover:bg-neutral-700 hover:scale-105 active:scale-95 rounded-full shadow-xs cursor-pointer"
                        aria-label="Close"
                      >
                        <X className="size-3.5 shrink-0" />
                      </button>
                    </div>
                  )}

                  <AnimatePresence mode="popLayout">
                    {showSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ y: -32, opacity: 0, filter: "blur(4px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{
                          type: "spring",
                          duration: 0.4,
                          bounce: 0,
                        }}
                        className={cn(
                          "flex h-full flex-col items-center justify-center bg-white dark:bg-[#121212]",
                          rounded ? "rounded-lg" : "rounded-none"
                        )}
                      >
                        {successChild || <PopoverFormSuccess />}
                      </motion.div>
                    ) : (
                      <motion.div
                        exit={{ y: 8, opacity: 0, filter: "blur(4px)" }}
                        transition={{
                          type: "spring",
                          duration: 0.4,
                          bounce: 0,
                        }}
                        key="open-child"
                        style={{ borderRadius: rounded ? 11 : 0 }}
                        className={cn(
                          "h-full bg-white dark:bg-[#121212] z-20 overflow-hidden",
                          rounded ? "rounded-lg" : "rounded-none"
                        )}
                      >
                        {openChild}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}

export function PopoverFormButton({
  loading,
  text = "submit",
}: {
  loading: boolean
  text: string
}) {
  return (
    <button
      type="submit"
      className="ml-auto flex h-6 w-26 items-center justify-center overflow-hidden rounded-md bg-gradient-to-b from-blue-600/90 to-blue-600 px-3 text-xs font-semibold text-white shadow-[0_0_1px_1px_rgba(255,255,255,0.08)_inset,0_1px_1.5px_0_rgba(0,0,0,0.32),0_0_0_0.5px_#1a94ff]"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={`${loading}`}
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
          transition={{
            type: "spring",
            duration: 0.3,
            bounce: 0,
          }}
          className="flex w-full items-center justify-center"
        >
          {loading ? (
            <Loader className="animate-spin size-3" />
          ) : (
            <span>{text}</span>
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  handleOnClickOutside: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handleOnClickOutside(event)
    }
    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handleOnClickOutside])
}

export function PopoverFormSuccess({
  title = "Success",
  description = "Thank you for your submission",
}) {
  return (
    <>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mt-1"
      >
        <path
          d="M27.6 16C27.6 17.5234 27.3 19.0318 26.717 20.4392C26.1341 21.8465 25.2796 23.1253 24.2025 24.2025C23.1253 25.2796 21.8465 26.1341 20.4392 26.717C19.0318 27.3 17.5234 27.6 16 27.6C14.4767 27.6 12.9683 27.3 11.5609 26.717C10.1535 26.1341 8.87475 25.2796 7.79759 24.2025C6.72043 23.1253 5.86598 21.8465 5.28302 20.4392C4.70007 19.0318 4.40002 17.5234 4.40002 16C4.40002 12.9235 5.62216 9.97301 7.79759 7.79759C9.97301 5.62216 12.9235 4.40002 16 4.40002C19.0765 4.40002 22.027 5.62216 24.2025 7.79759C26.3779 9.97301 27.6 12.9235 27.6 16Z"
          fill="#2090FF"
          fillOpacity="0.16"
        />
        <path
          d="M12.1334 16.9667L15.0334 19.8667L19.8667 13.1M27.6 16C27.6 17.5234 27.3 19.0318 26.717 20.4392C26.1341 21.8465 25.2796 23.1253 24.2025 24.2025C23.1253 25.2796 21.8465 26.1341 20.4392 26.717C19.0318 27.3 17.5234 27.6 16 27.6C14.4767 27.6 12.9683 27.3 11.5609 26.717C10.1535 26.1341 8.87475 25.2796 7.79759 24.2025C6.72043 23.1253 5.86598 21.8465 5.28302 20.4392C4.70007 19.0318 4.40002 17.5234 4.40002 16C4.40002 12.9235 5.62216 9.97301 7.79759 7.79759C9.97301 5.62216 12.9235 4.40002 16 4.40002C19.0765 4.40002 22.027 5.62216 24.2025 7.79759C26.3779 9.97301 27.6 12.9235 27.6 16Z"
          stroke="#2090FF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h3 className="mb-1 mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">{title}</h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs text-pretty mx-auto text-center">
        {description}
      </p>
    </>
  )
}

export function PopoverFormSeparator({
  width = 352,
  height = 2,
}: {
  width?: number | string
  height?: number
}) {
  return (
    <svg
      className="absolute left-0 right-0 top-[-1px]"
      width={width}
      height={height}
      viewBox="0 0 352 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H352" className="stroke-neutral-200 dark:stroke-neutral-800" strokeDasharray="4 4" />
    </svg>
  )
}

function PopoverFormCutOutTopIcon({
  width = 44,
  height = 30,
}: {
  width?: number
  height?: number
}) {
  const aspectRatio = 6 / 12
  const calculatedHeight = width * aspectRatio
  const calculatedWidth = height / aspectRatio

  const finalWidth = Math.min(width, calculatedWidth)
  const finalHeight = Math.min(height, calculatedHeight)

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rotate-90 mt-[1px]"
      preserveAspectRatio="none"
    >
      <g clipPath="url(#clip0_2029_22)">
        <path
          d="M0 2C0.656613 2 1.30679 2.10346 1.91341 2.30448C2.52005 2.5055 3.07124 2.80014 3.53554 3.17157C3.99982 3.54301 4.36812 3.98396 4.6194 4.46927C4.87067 4.95457 5 5.47471 5 6C5 6.52529 4.87067 7.04543 4.6194 7.53073C4.36812 8.01604 3.99982 8.45699 3.53554 8.82843C3.07124 9.19986 2.52005 9.4945 1.91341 9.69552C1.30679 9.89654 0.656613 10 0 10V6V2Z"
          className="fill-neutral-100 dark:fill-neutral-900"
        />
        <path
          d="M1 12V10C2.06087 10 3.07828 9.57857 3.82843 8.82843C4.57857 8.07828 5 7.06087 5 6C5 4.93913 4.57857 3.92172 3.82843 3.17157C3.07828 2.42143 2.06087 2 1 2V0"
          className="stroke-neutral-200 dark:stroke-neutral-800"
          strokeWidth={0.6}
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2029_22">
          <rect width={finalWidth} height={finalHeight} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function PopoverFormCutOutLeftIcon() {
  return (
    <svg
      width="6"
      height="12"
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2029_22)">
        <path
          d="M0 2C0.656613 2 1.30679 2.10346 1.91341 2.30448C2.52005 2.5055 3.07124 2.80014 3.53554 3.17157C3.99982 3.54301 4.36812 3.98396 4.6194 4.46927C4.87067 4.95457 5 5.47471 5 6C5 6.52529 4.87067 7.04543 4.6194 7.53073C4.36812 8.01604 3.99982 8.45699 3.53554 8.82843C3.07124 9.19986 2.52005 9.4945 1.91341 9.69552C1.30679 9.89654 0.656613 10 0 10V6V2Z"
          className="fill-neutral-100 dark:fill-neutral-900"
        />
        <path
          d="M1 12V10C2.06087 10 3.07828 9.57857 3.82843 8.82843C4.57857 8.07828 5 7.06087 5 6C5 4.93913 4.57857 3.92172 3.82843 3.17157C3.07828 2.42143 2.06087 2 1 2V0"
          className="stroke-neutral-200 dark:stroke-neutral-800"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2029_22">
          <rect width="6" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function PopoverFormCutOutRightIcon() {
  return (
    <svg
      width="6"
      height="12"
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2029_22)">
        <path
          d="M0 2C0.656613 2 1.30679 2.10346 1.91341 2.30448C2.52005 2.5055 3.07124 2.80014 3.53554 3.17157C3.99982 3.54301 4.36812 3.98396 4.6194 4.46927C4.87067 4.95457 5 5.47471 5 6C5 6.52529 4.87067 7.04543 4.6194 7.53073C4.36812 8.01604 3.99982 8.45699 3.53554 8.82843C3.07124 9.19986 2.52005 9.4945 1.91341 9.69552C1.30679 9.89654 0.656613 10 0 10V6V2Z"
          className="fill-neutral-100 dark:fill-neutral-900"
        />
        <path
          d="M1 12V10C2.06087 10 3.07828 9.57857 3.82843 8.82843C4.57857 8.07828 5 7.06087 5 6C5 4.93913 4.57857 3.92172 3.82843 3.17157C3.07828 2.42143 2.06087 2 1 2V0"
          className="stroke-neutral-200 dark:stroke-neutral-800"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2029_22">
          <rect width="6" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default PopoverForm
