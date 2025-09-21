import { create } from "zustand"
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid"

export const useStates = create(persist((set) => ({
    Valuecheck: -10,
    Savings: 0,
    saveCheck: "saved",
    
    Value: (Valuecheck) => {
          if (Valuecheck > 0) return "profit"
          if (Valuecheck === 0) return "neutral"
          return "loss"
    }
})))