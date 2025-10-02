import { useStates } from "../States"
import { CiCreditCard1, CiWallet, CiCirclePlus } from "react-icons/ci";
import { HiOutlineWallet } from "react-icons/hi2";
import { PiMoonStarsLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { DialogAddLendor,  DialogAddDebtor, PopoverAccounts, DialogAddSavingsAccount, PopoverDebts } from "../components/ui/Short";
import { Dialog } from "radix-ui";
import { Popover } from "radix-ui";

function Debts(){
const Valuecheck = useStates((s) => s.value)
  const getStatus = useStates((s) => s.Value)
  const status = getStatus(Valuecheck)
  const Savings = useStates((s) => s.Savings)
  const savingstatus = getStatus(Savings)
  const debtsOwe = useStates((s) => s.debts.owe)
  const debtsOwed = useStates((s) => s.debts.owed)

  const colorMap = {
    profit: 'text-green-500',
    neutral: 'text-gray-500',
    loss: 'text-red-600',
  }

   const iconMap = {
    card: <CiCreditCard1 size={32} className="ico" />,
    wallet: <CiWallet size={32} className="ico" />,
    general: <HiOutlineWallet size={32} className="ico" />,
    moon: <PiMoonStarsLight size={32} className="ico" />,
    person: <GoPerson size={32} className="ico" />
  }

    return (
    <div>
      <div className="mb-3">
        <div className="flex justify-between">
          <p className="AccountsTitle">I owe money</p>
          <span className={colorMap[status]}>{Valuecheck}$</span>
        </div>
         <div className="ml-3">
              {debtsOwe.map((a) => {
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
                  <PopoverDebts id={a.id} type="owe" />
                </Popover.Root>
                </div>
              </div>
            )
          })}
<Dialog.Root>
  <Dialog.Trigger asChild>
              <div className="cardCSS cursor-pointer">
                <CiCirclePlus  size={32} className=" rounded-sm ico"/>
                <div className="ml-2">
                  <p className="text-[15px] h-[19px]">
                     Add Lender
                  </p>
                </div>
              </div>
               </Dialog.Trigger>

  <DialogAddLendor />
</Dialog.Root>
          </div>
      </div>


      <div className="flex justify-between">
           <p className="AccountsTitle">I'm owed money</p>
           <span className={colorMap[savingstatus]}>{Savings}$</span>
          </div>
          <div className="ml-3">
              {debtsOwed.map((s) => {
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
                                <PopoverDebts id={s.id} type="owed" />
                              </Popover.Root>
                          </div>
                        )
                      })}
              <Dialog.Root>
                <Dialog.Trigger asChild>
                      <div className="cardCSS cursor-pointer">
                        <CiCirclePlus size={32} className="ico"/>
                        <div className="ml-2">
                          <p className="text-[15px] h-[19px]">Add Debtor</p>
                        </div>
                      </div>
                      </Dialog.Trigger>
              
                <DialogAddDebtor />
              </Dialog.Root>
          </div>
    </div>
    )

}

export default Debts