import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import Api from "@/API/Api";
import { RiUser2Fill } from "react-icons/ri";
import { Loader2 } from "lucide-react"; 

import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import toast from "react-hot-toast";

type FormValues = {
  email: string;
  password: string;
};

function LogInModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const navigate = useRouter();

  useEffect(() => {
    const localData = localStorage.getItem("yangi_login");
    if (localData) {
      const parsed = JSON.parse(localData);
      setUserEmail(parsed.name ?? "profil");
    }
  }, []);

  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      const { data } = await Api.post(
        "https://nt.softly.uz/api/auth/login",
        values
      );
      localStorage.setItem("yangi_login", JSON.stringify(data));
      toast.success("Tizimga muvaffaqiyatli kirdingiz!");
      setUserEmail(values.email);
      setIsOpen(false);

      if (navigate.pathname !== "/profile") {
        await navigate.push("/profile");
      }
    } catch (error: any) {
      console.error("Login xatosi:", error?.response?.data || error.message);
      toast.error("Login yoki parol noto'g'ri. Iltimos, qayta urinib ko'ring.");
    } finally {
      setIsLoading(false); 
    }
  };

  const handleClick = () => {
    const token = localStorage.getItem("yangi_login");
    if (token) {
      if (navigate.pathname !== "/profile") {
        navigate.push("/profile");
      }
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="flex flex-col items-center text-gray-700 hover:text-orange-500 transition cursor-pointer"
      >
        <RiUser2Fill className="w-6 h-6" />
        <p className="text-sm mt-1">{userEmail ?? "Kirish"}</p>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>LogIn</DialogTitle>
            <DialogDescription>Email va parol kiriting</DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
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
                    <FormLabel>Parol</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="••••••••"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Submit
              </Button>
            </form>
          </Form>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Yopish</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default LogInModal;
