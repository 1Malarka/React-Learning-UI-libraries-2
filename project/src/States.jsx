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

   getAccountById: (id) => {
    const account = get().accounts.find((a) => a.id === id)
  return account ? account : null
},

   getSavingsById: (id) => {
    const savings = get().savings.find((a) => a.id === id)
  return savings ? savings : null
},

   getOweById: (id) => {
  const debt = get().debts.owe.find((a) => a.id === id)
  return debt ? debt : null
},


   getOwedById: (id) => {
  const debt = get().debts.owed.find((a) => a.id === id)
  return debt ? debt : null
},


      addAccount: ( title, value = 0, icon = "wallet")  =>
        set((state) => ({
          accounts: [
            ...state.accounts,
            { id: nanoid(), title, value, icon }
          ]
        })),

       removeAccount: (id) => set((state) => ({
         accounts: state.accounts.filter((t) => t.id !== id)
       })),

       removeSavings: (id) => set((state) => ({
         savings: state.savings.filter((t) => t.id !== id)
       })),

      editAccountValue: (id, newValueText) => {
        if (!newValueText || newValueText.trim().length === 0) return;
        const filtered = newValueText.replace(/[^0-9.-]/g, "");
        const num = Number(filtered);

        if (isNaN(num)) return;

        set((state) => ({
          accounts: state.accounts.map((t) =>
          t.id === id ? { ...t, value: num } : t
          ),
          savings: state.savings.map((t) =>
          t.id === id ? { ...t, value: num } : t
        ),
    }));
},

       editAccountName: (id, newNameText) => {
        if (!newNameText || newNameText.trim().length === 0) return;

        set((state) => ({
          accounts: state.accounts.map((t) =>
          t.id === id ? { ...t, title: newNameText } : t
        ),
          savings: state.savings.map((t) =>
          t.id === id ? { ...t, title: newNameText } : t
        ),
    }));
},

removeDebt: (type, id) =>
  set((state) => ({
    debts: {
      ...state.debts,
      [type]: state.debts[type].filter((t) => t.id !== id),
    },
  })),

editDebtValue: (type, id, newValue) => {
  const num = Number(String(newValue).replace(/[^0-9.-]/g, ""));
  if (isNaN(num)) return;
  set((state) => ({
    debts: {
      ...state.debts,
      [type]: state.debts[type].map((t) =>
        t.id === id ? { ...t, value: num } : t
      ),
    },
  }));
},

editDebtTitle: (type, id, newTitle) => {
  if (!newTitle?.trim()) return;
  set((state) => ({
    debts: {
      ...state.debts,
      [type]: state.debts[type].map((t) =>
        t.id === id ? { ...t, title: newTitle } : t
      ),
    },
  }));
},


      addSaving: (title, value, icon) => {
         if (!newNameText || newNameText.trim().length === 0) return;
         

        set((state) => ({
          savings: [
            ...state.savings,
            { id: nanoid(), title, value, icon }
          ]
        
        }));
      },

      addDebt: (type, title, value, icon ) =>
        set((state) => ({
          debts: {
            ...state.debts,
            [type]: [
              ...state.debts[type],
              { id: nanoid(), title, value, icon }
            ]
          }
        })),

        removeOwe: (id) => set((state) => ({
  debts: {
    ...state.debts,
    owe: state.debts.owe.filter((t) => t.id !== id),
  }
})),

removeOwed: (id) => set((state) => ({
  debts: {
    ...state.debts,
    owed: state.debts.owed.filter((t) => t.id !== id),
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
