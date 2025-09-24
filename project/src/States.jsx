import { create } from "zustand"
import { persist } from "zustand/middleware"
import { nanoid } from "nanoid"
import Accounts from "./links/Accounts"

export const useStates = create(
  persist(
    (set, get) => ({
      accounts: [
        { id: nanoid(), title: "Card", value: -10, icon: "card" },
        { id: nanoid(), title: "Cash", value: 50, icon: "wallet" },
        { id: nanoid(), title: "General Account", value: 120, icon: "general" },
      ],
      savings: [
        { id: nanoid(), title: "For dream", value: 0, icon: "moon" },
      ],
      debts: {
        owe: [
          { id: nanoid(), title: "Anatoly", value: -20, icon: "person" },
        ],
        owed: [
          { id: nanoid(), title: "Anya", value: 40, icon: "person" },
        ]
      },

      addAccount: (title, value = 0, icon = "wallet") =>
        set((state) => ({
          accounts: [
            ...state.accounts,
            { id: nanoid(), title, value, icon }
          ]
        })),

      addSaving: (title, value = 0, icon = "moon") =>
        set((state) => ({
          savings: [
            ...state.savings,
            { id: nanoid(), title, value, icon }
          ]
        })),

      addDebt: (type, title, value = 0, icon = "person") =>
        set((state) => ({
          debts: {
            ...state.debts,
            [type]: [
              ...state.debts[type],
              { id: nanoid(), title, value, icon }
            ]
          }
        })),

      Value: (value) => {
        if (value > 0) return "profit"
        if (value === 0) return "neutral"
        return "loss"
      },

      getTotalWithoutGeneral: () => {
        const accounts = get().accounts
        return accounts
          .filter((acc) => acc.title !== "General Account")
          .reduce((sum, acc) => sum + acc.value, 0)        
      },
    }),
    { name: "Expense-tracker" }
  )
)
