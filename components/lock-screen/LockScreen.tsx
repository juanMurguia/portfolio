"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, Eye, EyeOff, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useLocale from "@/lib/context/useLocale";

interface PortfolioLockProps {
  primaryColor: string;
  secondaryColor: string;
  companyName: string;
  personalizedMessage?: string;
  correctPassword: string;
  onUnlock: () => void;
  children: React.ReactNode;
}

export default function PortfolioLock({
  primaryColor,
  secondaryColor,
  companyName,
  personalizedMessage,
  correctPassword,
  onUnlock,
  children,
}: PortfolioLockProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const { t } = useLocale();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === correctPassword) {
      setIsUnlocked(true);
      setTimeout(() => {
        onUnlock();
      }, 1500);
    } else {
      setIsShaking(true);
      setAttempts((prev) => prev + 1);
      setPassword("");
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  const FloatingParticle = ({ delay }: { delay: number }) => (
    <motion.div
      className="absolute w-2 h-2 rounded-full opacity-30"
      style={{
        background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`,
      }}
      animate={{
        y: [-20, -100],
        x: [0, Math.random() * 100 - 50],
        opacity: [0.3, 0, 0.3, 0],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeOut",
      }}
      initial={{
        left: `${Math.random() * 100}%`,
        bottom: 0,
      }}
    />
  );

  if (isUnlocked) {
    return (
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="fixed inset-0 z-50"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}20, ${secondaryColor}20)`,
        }}
      >
        <div className="flex items-center justify-center h-full">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear" }}
            >
              <Unlock size={80} style={{ color: primaryColor }} />
            </motion.div>{" "}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl font-bold mt-4"
              style={{ color: primaryColor }}
            >
              {t("lock.welcome")}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      {!isUnlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}15, ${secondaryColor}15, ${primaryColor}10)`,
          }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  `radial-gradient(circle at 20% 50%, ${primaryColor}30 0%, transparent 50%)`,
                  `radial-gradient(circle at 80% 50%, ${secondaryColor}30 0%, transparent 50%)`,
                  `radial-gradient(circle at 40% 80%, ${primaryColor}30 0%, transparent 50%)`,
                ],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </div>

          {/* Floating Particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <FloatingParticle key={i} delay={i * 0.3} />
          ))}

          {/* Main Content */}
          <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-md"
            >
              {/* Lock Icon with Glow Effect */}
              <motion.div
                className="text-center mb-8"
                animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="inline-block relative"
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    filter: [
                      `drop-shadow(0 0 20px ${primaryColor}40)`,
                      `drop-shadow(0 0 30px ${secondaryColor}40)`,
                      `drop-shadow(0 0 20px ${primaryColor}40)`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Lock size={64} style={{ color: primaryColor }} />
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Sparkles size={20} style={{ color: secondaryColor }} />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Company Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-8"
              >
                {" "}
                <h1
                  className="text-3xl font-bold mb-4"
                  style={{
                    background: ` ${primaryColor}`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {t("lock.greeting").replace("{companyName}", companyName)}
                </h1>{" "}
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t("lock.description").replace("{companyName}", companyName)}
                </p>
              </motion.div>

              {/* Password Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="relative">
                  <motion.div
                    className="relative"
                    animate={isShaking ? { x: [-5, 5, -5, 5, 0] } : {}}
                  >
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={t("lock.placeholder")}
                      className="pr-12 h-14 text-lg border-2 transition-all duration-300 focus:border-opacity-50"
                      style={{
                        borderColor: `${primaryColor}40`,
                        boxShadow: `0 0 0 0px ${primaryColor}20`,
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = primaryColor;
                        e.target.style.boxShadow = `0 0 20px ${primaryColor}30`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = `${primaryColor}40`;
                        e.target.style.boxShadow = `0 0 0 0px ${primaryColor}20`;
                      }}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff size={16} style={{ color: primaryColor }} />
                      ) : (
                        <Eye size={16} style={{ color: primaryColor }} />
                      )}
                    </Button>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-semibold transition-all duration-300 }`]"
                    style={{
                      background: ` ${primaryColor}`,
                      border: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 10px 30px ${primaryColor}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      {t("lock.button")}
                    </motion.span>
                  </Button>
                </motion.div>

                {attempts > 0 && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-red-500"
                  >
                    {t("lock.error")}
                  </motion.p>
                )}
              </motion.form>

              {/* Footer Message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center mt-8 text-sm text-gray-500"
              >
                {" "}
                <p>
                  {t("lock.footer")} {companyName}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
