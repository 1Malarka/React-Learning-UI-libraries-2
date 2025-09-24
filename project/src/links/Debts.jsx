import { useStates } from "../States"
import { CiCreditCard1, CiWallet, CiCirclePlus } from "react-icons/ci";
import { HiOutlineWallet } from "react-icons/hi2";
import { PiMoonStarsLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";

function Debts(){
const Valuecheck = useStates((s) => s.value)
  const getStatus = useStates((s) => s.Value)
  const status = getStatus(Valuecheck)
  const Savings = useStates((s) => s.Savings)
  const savingstatus = getStatus(Savings)

  const colorMap = {
    profit: 'text-green-500',
    neutral: 'text-gray-500',
    loss: 'text-red-600',
  }


    return (
    <div>
      <div className="mb-3">
        <div className="flex justify-between">
          <p className="AccountsTitle">I owe money</p>
          <span className={colorMap[status]}>{Valuecheck}$</span>
        </div>
         <div className="ml-3">
              <div className="cardCSS">
                <GoPerson  size={32} className=" rounded-sm ico"/>
                <div className="ml-2">
                  <p className="text-[15px] h-[19px]">
                    Anatoly
                  </p>
                  <span className={colorMap[status]}>{Valuecheck}$</span>
                </div>
              </div>
              <div className="cardCSS cursor-pointer">
                <CiCirclePlus  size={32} className=" rounded-sm ico"/>
                <div className="ml-2">
                  <p className="text-[15px] h-[19px]">
                     Add Lender
                  </p>
                </div>
              </div>
          </div>
      </div>
      <div className="flex justify-between">
           <p className="AccountsTitle">I'm owed money</p>
           <span className={colorMap[savingstatus]}>{Savings}$</span>
          </div>
          <div className="ml-3">
              <div className="cardCSS">
                <GoPerson size={32} className=" rounded-sm ico"/>
                <div className="ml-2">
                  <p className="text-[15px] h-[19px]">
                    Anya
                  </p>
                  <span className={colorMap[status]}>{Valuecheck}$</span>
                </div>
              </div>
              <div className="cardCSS cursor-pointer">
                <CiCirclePlus  size={32} className=" rounded-sm ico"/>
                <div className="ml-2">
                  <p className="text-[15px] h-[19px]">
                     Add Debtor
                  </p>
                </div>
              </div>
          </div>
    </div>
    )

}

export default Debts