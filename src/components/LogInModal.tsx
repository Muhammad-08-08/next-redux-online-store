import { useState } from "react"
import { useForm } from "react-hook-form"

import Api from "@/API/Api"
import { RiUser2Fill } from "react-icons/ri"
import { Button } from "./ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "./ui/form"
import { Input } from "./ui/input"
import toast from "react-hot-toast"



type FormValues = {
    email: string,
    password: string
}

function LogInModal() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const form = useForm<FormValues>({

        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async (values: FormValues) => {
        console.log("Form ma'lumotlari:", values)
        try {
            const response = await Api.post("https://nt.softly.uz/api/auth/login", values)
            const data = await response.data
            localStorage.setItem("yangi_login", data)
            setIsOpen(false)
            toast.success("Logindan o'tildi")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div onClick={() => {
                setIsOpen(true)
            }} className="flex flex-col items-center text-gray-700 hover:text-orange-500 transition cursor-pointer">
                <RiUser2Fill className="w-6 h-6" />
                <p className="text-sm mt-1">Kirish</p>
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-lg sm:max-w-xl">
                    <DialogHeader>
                        <DialogTitle>LogIn</DialogTitle>
                        <DialogDescription>LogIn kiriting</DialogDescription>
                    </DialogHeader>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="email" {...field} />
                                        </FormControl>

                                        <FormMessage />


                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>

                                        <FormMessage />


                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>

                    <DialogFooter className="mt-4">
                        <DialogClose asChild>
                            <Button variant="outline">Yopish</Button>
                        </DialogClose>
                        <Button>Sotib olish</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default LogInModal
