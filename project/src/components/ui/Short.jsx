import { useStates } from "../../States";
import { Popover } from "radix-ui";
import { motion } from "motion/react"
import { Button } from "./button";
import { useState } from "react";

export function PopoverAccounts() {
const [isEditOpen, setIsEditOpen] = useState(false)
const [isDeleteOpen, setIsDeleteOpen] = useState(false)
console.log(isDeleteOpen)
console.log(isEditOpen)

return (
    <Popover.Portal>
			<Popover.Content
				className="w-[100px] rounded bg-white p-1 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
				sideOffset={5}
			>
            <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            transition={{ duration: 0.130, ease: "easeOut" }}
            className=" rounded bg-white"
             >
                <Popover.Close asChild>
				<div className="flex flex-col items-start ">
					<fieldset className="flex items-center gap-5 text-left">
						<Button className="cursor-pointer w-24 pl-0 font-normal" variant="ghost" onClick={() => setIsEditOpen(true)}>
							✏️Edit
						</Button>
					</fieldset>
					<fieldset className="flex items-center">
						<Button className="cursor-pointer w-full font-normal" variant="ghost" onClick={() => setIsDeleteOpen(true)}>
							❌Delete
						</Button>
					</fieldset> 
				</div>
				</Popover.Close>
              </motion.div>
			</Popover.Content>
		</Popover.Portal>


        
   )
}