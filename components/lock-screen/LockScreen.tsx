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
  verifyPasswordAsync?: (password: string) => Promise<boolean>;
}

export default function PortfolioLock({
  primaryColor,
  secondaryColor,
  companyName,
  correctPassword,
  onUnlock,
  children,
  verifyPasswordAsync,
}: PortfolioLockProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const { t } = useLocale();
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);

    try {
      let isCorrect = false;

      // Use server-side verification if available, otherwise fall back to client-side
      if (verifyPasswordAsync) {
        isCorrect = await verifyPasswordAsync(password);
      } else {
        isCorrect = password === correctPassword;
      }

      if (isCorrect) {
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
    } catch (error) {
      console.error("Error verifying password:", error);
      setIsShaking(true);
      setAttempts((prev) => prev + 1);
      setPassword("");
      setTimeout(() => setIsShaking(false), 500);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <>
      {/* Always render children, they will be visible when lock screen is gone */}
      {children}

      <AnimatePresence>
        {isUnlocked ? (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
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
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 overflow-hidden"
          >
            {/* Main Content */}
            <div
              className="relative z-20 flex items-center justify-center min-h-screen p-4 "
              style={{ backgroundColor: `#${secondaryColor}` }}
            >
              {/* Add dynamic style for placeholder color */}
              <style>
                {`
                  .custom-placeholder::placeholder {
                    color: #${primaryColor}99;
                    opacity: 1;
                  }
                `}
              </style>
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
                        `drop-shadow(0 0 20px ${primaryColor}99)`,
                        `drop-shadow(0 0 30px ${secondaryColor}99)`,
                        `drop-shadow(0 0 20px ${primaryColor}99)`,
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Lock size={64} style={{ color: primaryColor }} />
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
                      color: `#${primaryColor}`,
                    }}
                  >
                    {t("lock.greeting").replace("{companyName}", companyName)}
                  </h1>{" "}
                  <p
                    className="text-lg font-light"
                    style={{ color: `#${primaryColor}` }}
                  >
                    {t("lock.description").replace(
                      "{companyName}",
                      companyName
                    )}
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
                        maxLength={10}
                        required
                        className="pr-12 h-14 text-lg border-2 transition-all duration-300 focus:border-opacity-50 custom-placeholder"
                        style={{
                          borderColor: `#${primaryColor}88`,
                          color: `#${primaryColor}`,
                          boxShadow: `0 0 0 0px ${primaryColor}33`,
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = primaryColor;
                          e.target.style.boxShadow = `0 0 20px #${primaryColor}66`;
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = `${primaryColor}99`;
                          e.target.style.boxShadow = `0 0 0 0px #${primaryColor}33`;
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
                  </div>{" "}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {" "}
                    <Button
                      type="submit"
                      variant={undefined}
                      disabled={isVerifying}
                      className="w-full h-14 text-lg font-semibold transition-all duration-300 relative"
                      style={{
                        backgroundColor: `#${primaryColor}`,
                        color: `#${secondaryColor}`,
                        border: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 10px 30px ${primaryColor}`;
                        e.currentTarget.style.opacity = "0.9";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.opacity = "1";
                      }}
                    >
                      {isVerifying ? (
                        <span className="flex items-center justify-center">
                          <div
                            className="w-6 h-6 border-2 border-t-transparent rounded-full animate-spin"
                            style={{ borderColor: `#${secondaryColor}` }}
                          />
                        </span>
                      ) : (
                        <motion.span
                          animate={{ opacity: [1, 0.7, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          {t("lock.button")}
                        </motion.span>
                      )}
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
                  className="text-center mt-8 text-sm"
                  style={{ color: `#${primaryColor}95` }}
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
    </>
  );
}
