import { useStates } from "../../States";
import { Dialog } from "radix-ui";
import { Popover } from "radix-ui";
import { AnimatePresence, motion } from "motion/react"
import { Button } from "./button";
import { useState } from "react";

export function PopoverAccounts() {
const [isEditOpen, setIsEditOpen] = useState(false)
const [isDeleteOpen, setIsDeleteOpen] = useState(false)
console.log(isDeleteOpen)
console.log(isEditOpen)

return (
	<>
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


        <Dialog.Root open={isEditOpen} onOpenChange={setIsEditOpen}>
		<Dialog.Portal forceMount>
			<AnimatePresence>
             {isEditOpen && (
			 <>
			<Dialog.Overlay className="fixed inset-0 bg-[#000] opacity-55 z-2" />
			 <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.135 }}
            />
			<Dialog.Content className="fixed left-1/2 top-1/2 z-3 ">
				<motion.div
             initial={{ opacity: 0, scale: 0.96 }}   
             animate={{ opacity: 1, scale: 1 }}     
             exit={{ opacity: 0, scale: 0.96 }} 
             transition={{ duration: 0.145, ease: "easeIn" }} 
			 className="fixed left-1/2 top-1/2 z-3 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 
                   rounded-md bg-white p-[25px] shadow-[var(--shadow-6)] focus:outline-none"
             ><Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
					Edit profile
				</Dialog.Title>
				<Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
					Make changes to your profile here. Click save when you're done.
				</Dialog.Description>
				<fieldset className="mb-[15px] flex items-center gap-5">
					<label
						className="w-[90px] text-right text-[15px] text-violet11"
						htmlFor="name"
					>
						Name
					</label>
					<input
						className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
						id="name"
						defaultValue="Pedro Duarte"
					/>
				</fieldset>
				<fieldset className="mb-[15px] flex items-center gap-5">
					<label
						className="w-[90px] text-right text-[15px] text-violet11"
						htmlFor="username"
					>
						Username
					</label>
					<input
						className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
						id="username"
						defaultValue="@peduarte"
					/>
				</fieldset>
				<div className="mt-[25px] flex justify-end">
					<Dialog.Close asChild>
						<button className="inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium leading-none text-green11 outline-none outline-offset-1 hover:bg-green5 focus-visible:outline-2 focus-visible:outline-green6 select-none">
							Save changes
						</button>
					</Dialog.Close>
				</div>
				<Dialog.Close asChild>
					<button
						className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
						aria-label="Close"
					>
					</button>
				</Dialog.Close>
			</motion.div>
			</Dialog.Content>
			</>
			 )}
		 </AnimatePresence>
		</Dialog.Portal>
	</Dialog.Root>
	</>
   )
}