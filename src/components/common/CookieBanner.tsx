import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import Button from "./Button";

const KEY = "teqnoor-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  const decide = (value: string) => {
    localStorage.setItem(KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-popover/95 backdrop-blur"
        >
          <div className="shell flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">
              We use cookies to improve your experience and measure site performance. Read our{" "}
              <Link to="/cookie-policy" className="text-primary underline underline-offset-4">
                cookie policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <Button variant="outline" withArrow={false} onClick={() => decide("rejected")}>
                Reject
              </Button>
              <Button withArrow={false} onClick={() => decide("accepted")}>
                Accept all
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
