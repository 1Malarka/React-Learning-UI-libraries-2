import { useStates } from "../States"
import { CiCreditCard1, CiWallet, CiCirclePlus } from "react-icons/ci";
import { HiOutlineWallet } from "react-icons/hi2";
import { PiMoonStarsLight } from "react-icons/pi";
import { Popover } from "radix-ui";
import { Dialog } from "radix-ui";
import { DialogAddAccount, PopoverAccounts, DialogAddSavingsAccount } from "../components/ui/Short";

function Accounts() {
  const accounts = useStates((s) => s.accounts)
  const savings = useStates((s) => s.savings)
  const getStatus = useStates((s) => s.Value)

  const colorMap = {
    profit: "text-green-500",
    neutral: "text-gray-500",
    loss: "text-red-600",
  }

  const iconMap = {
    card: <CiCreditCard1 size={32} className="ico" />,
    wallet: <CiWallet size={32} className="ico" />,
    general: <HiOutlineWallet size={32} className="ico" />,
    moon: <PiMoonStarsLight size={32} className="ico" />,
  }

  return (
    <div>
      <div className="mb-3">
        <div className="flex justify-between">
          <p className="AccountsTitle">Accounts</p>
        </div>
        <div className="ml-3">
          {accounts.map((a) => {
            const status = getStatus(a.value)
            return (
              <div key={a.id} className="cardCSS justify-between">
                <div className="flex items-center">
                  {iconMap[a.icon]}
                  <div className="ml-2">
                    <p className="text-[15px] h-[19px]">{a.title}</p>
                    <span className={colorMap[status]}>{a.value}$</span>
                  </div>
                </div>
                <div className="flex mr-2">
                <Popover.Root>
                      <Popover.Trigger asChild>
                          <button
                        className="inline-flex cursor-pointer w-5 items-center justify-center rounded-full bg-white text-violet11 outline-none"
                        aria-label="Update dimensions"
                        >
                          ⋮
                        </button>
                      </Popover.Trigger>
                  <PopoverAccounts id={a.id} />
                </Popover.Root>
                </div>
              </div>
            )
          })}
        
<Dialog.Root>
  <Dialog.Trigger asChild>
    <div className="cardCSS cursor-pointer">
      <CiCirclePlus size={32} className="ico" />
      <div className="ml-2">
        <button className="text-[15px] h-[19px]">Add Account</button>
      </div>
    </div>
  </Dialog.Trigger>

  <DialogAddAccount />
</Dialog.Root>

        </div>
      </div>

      <div className="flex justify-between">
        <p className="AccountsTitle">Savings</p>
      </div>
      <div className="ml-3">
        {savings.map((s) => {
          const status = getStatus(s.value)
          return (
            <div key={s.id} className="cardCSS justify-between">
              <div className="flex items-center">
              {iconMap[s.icon]}
              <div className="ml-2">
                <p className="text-[15px] h-[19px]">{s.title}</p>
                <span className={colorMap[status]}>{s.value}$</span>
              </div>
            </div>
              <Popover.Root>
                      <Popover.Trigger asChild>
                          <button
                        className="inline-flex cursor-pointer mr-2 w-5 items-center justify-center rounded-full bg-white text-violet11 outline-none"
                        aria-label="Update dimensions"
                        >
                          ⋮
                        </button>
                      </Popover.Trigger>
                  <PopoverAccounts id={s.id} />
                </Popover.Root>
            </div>
          )
        })}
<Dialog.Root>
  <Dialog.Trigger asChild>
        <div className="cardCSS cursor-pointer">
          <CiCirclePlus size={32} className="ico"/>
          <div className="ml-2">
            <p className="text-[15px] h-[19px]">Add Savings Account</p>
          </div>
        </div>
        </Dialog.Trigger>

  <DialogAddSavingsAccount />
</Dialog.Root>
      </div>
    </div>
  )
}

export default Accounts