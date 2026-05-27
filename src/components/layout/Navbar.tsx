"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, Landmark, Calendar, BookOpen, BrainCircuit, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { id: "home", label: "Trang chủ", icon: Landmark },
    { id: "timeline", label: "Dòng lịch sử", icon: Calendar },
    { id: "stories", label: "Thành tựu & Tác phẩm", icon: BookOpen },
    { id: "quiz", label: "Trắc nghiệm", icon: BrainCircuit },
    { id: "games", label: "Trò chơi", icon: Gamepad2 },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-outline-variant/30 bg-brand-surface/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        {/* Logo */}
        <div 
          className="flex items-center gap-2.5 cursor-pointer select-none"
          onClick={() => onSectionChange("home")}
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full overflow-hidden bg-white shadow-md shadow-brand-primary/20">
            <Image src="/logo.png" alt="HCM Logo" fill className="object-contain p-1" sizes="36px" />
          </div>
          <span className="text-xl font-bold font-serif tracking-tight text-brand-primary">
            HCM: Ký Ức Đời Người
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer select-none",
                  isActive ? "text-brand-primary" : "text-brand-on-surface-variant hover:text-brand-on-surface"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-container border border-brand-outline-variant/50"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full p-2 md:hidden hover:bg-brand-container text-brand-on-surface-variant hover:text-brand-on-surface transition-colors cursor-pointer"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-brand-outline-variant/30 bg-brand-surface px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors w-full cursor-pointer",
                    isActive 
                      ? "bg-brand-primary/10 text-brand-primary border border-brand-primary/20" 
                      : "text-brand-on-surface-variant hover:bg-brand-container hover:text-brand-on-surface border border-transparent"
                  )}
                >
                  <Icon className="h-4.5 w-4.5" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </motion.div>
      )}
    </header>
  );
};
