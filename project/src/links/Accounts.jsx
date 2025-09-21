import { useStates } from "../States"
import { CiCreditCard1, CiWallet, CiCirclePlus } from "react-icons/ci";
import { HiOutlineWallet } from "react-icons/hi2";
import { PiMoonStarsLight } from "react-icons/pi";


function Accounts() {
  const Valuecheck = useStates((s) => s.Valuecheck)
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
        <p className="AccountsTitle">Accounts</p>
        <span className={colorMap[status]}>{Valuecheck}$</span>
      </div>
      <div className="w-max ml-3">
        <div className="cardCSS">
          <CiCreditCard1 size={32} className="rounded-sm ico"/>
          <div className="ml-2">
            <p className="text-[15px] h-[19px]">
               Card
            </p>
            <span className={colorMap[status]}>{Valuecheck}$</span>
          </div>
        </div>
        <div className="cardCSS">
          <CiWallet size={32} className=" rounded-sm ico"/>
          <div className="ml-2">
            <p className="text-[15px] h-[19px]">
               Cash
            </p>
            <span className={colorMap[status]}>{Valuecheck}$</span>
          </div>
        </div>
        <div className="cardCSS">
          <HiOutlineWallet  size={32} className=" rounded-sm ico"/>
          <div className="ml-2">
            <p className="text-[15px] h-[19px]">
               General Account
            </p>
            <span className={colorMap[status]}>{Valuecheck}$</span>
          </div>
        </div>
        <div className="cardCSS cursor-pointer">
          <CiCirclePlus  size={32} className=" rounded-sm ico"/>
          <div className="ml-2">
            <p className="text-[15px] h-[19px]">
               Add Account
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="flex justify-between">
     <p className="AccountsTitle">Savings</p>
     <span className={colorMap[savingstatus]}>{Savings}$</span>
    </div>
    <div className="w-max ml-3">
        <div className="cardCSS">
          <PiMoonStarsLight  size={32} className=" rounded-sm ico"/>
          <div className="ml-2">
            <p className="text-[15px] h-[19px]">
               For dream
            </p>
            <span className={colorMap[status]}>{Valuecheck}$</span>
          </div>
        </div>
        <div className="cardCSS cursor-pointer">
          <CiCirclePlus  size={32} className=" rounded-sm ico"/>
          <div className="ml-2">
            <p className="text-[15px] h-[19px]">
               Add Savings Account
            </p>
          </div>
        </div>
    </div>
   </div>
  )
}

export default Accounts