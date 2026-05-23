"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle, Info, X, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "error" | "info" | "warning";

export interface Toast {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType, duration?: number) => void;
  dismiss: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = React.useCallback(
    (message: string, type: ToastType = "info", duration = 3000) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, message, type, duration }]);

      setTimeout(() => {
        dismiss(id);
      }, duration);
    },
    []
  );

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => (
            <ToastItem key={t.id} toast={t} onDismiss={dismiss} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

const ToastItem: React.FC<{ toast: Toast; onDismiss: (id: string) => void }> = ({
  toast,
  onDismiss,
}) => {
  const icons = {
    success: <CheckCircle className="h-5 w-5 text-emerald-600" />,
    error: <XCircle className="h-5 w-5 text-brand-primary" />,
    info: <Info className="h-5 w-5 text-brand-gold" />,
    warning: <AlertCircle className="h-5 w-5 text-amber-600" />,
  };

  const borders = {
    success: "border-emerald-500/25 bg-emerald-50/90 text-emerald-950 backdrop-blur-md",
    error: "border-brand-primary/25 bg-[#fff3f3]/90 text-[#600010] backdrop-blur-md",
    info: "border-brand-outline/25 bg-brand-paper/95 text-brand-on-surface backdrop-blur-md",
    warning: "border-brand-gold/25 bg-[#fffcf3]/95 text-[#5b4300] backdrop-blur-md",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className={cn(
        "flex items-center gap-3 w-full p-4 rounded-xl border pointer-events-auto shadow-md shadow-[#1a0f0a]/5 font-sans",
        borders[toast.type || "info"]
      )}
    >
      {icons[toast.type || "info"]}
      <p className="flex-1 text-xs font-semibold leading-relaxed uppercase tracking-wider">{toast.message}</p>
      <button
        onClick={() => onDismiss(toast.id)}
        className="rounded-lg p-1 hover:bg-black/5 text-stone-500 hover:text-stone-850 transition-colors cursor-pointer"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
};
