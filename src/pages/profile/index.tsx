import { Button } from "@/components/ui/button";
import { FaClipboardList, FaHistory, FaMoneyCheckAlt, FaSignOutAlt } from "react-icons/fa";

const user = {
    name: "Muhammad",
    phone: "+998773058208"
};

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white shadow rounded-lg p-4 space-y-4">
                    <div className="text-center">
                        <div className="text-lg font-semibold">{user.name}</div>
                        <div className="text-gray-500">{user.phone}</div>
                    </div>
                    <nav className="space-y-3">
                        <SidebarLink icon={<FaMoneyCheckAlt />} label="Mening to'lovlarim" />
                        <SidebarLink icon={<FaHistory />} label="To'lov tarixi" />
                        <SidebarLink icon={<FaClipboardList />} label="Onlayn buyurtmalar" />
                        <SidebarLink icon={<FaSignOutAlt />} label="Chiqish" />
                    </nav>
                </div>

                <div className="md:col-span-3 space-y-6">
                    <Card title="Shaxsiy ma'lumotlar">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-medium">{user.name}</p>
                                <p className="text-sm text-gray-500">Telefon: {user.phone}</p>
                            </div>
                            <Button variant="outline">O'zgartirish</Button>
                        </div>
                    </Card>

                    <Card title="Xabarlar yoki yangiliklar">
                        <div className="flex gap-6">
                            <ToggleSwitch label="SMS orqali" />
                            <ToggleSwitch label="Telegram orqali" />
                        </div>
                    </Card>

                    <Card title="Mening kartam">
                        <p className="text-gray-500">Mavjud emas</p>
                    </Card>

                    <Card title="Yetkazib berish manzili">
                        <p className="text-gray-500 mb-2">Manzil qo'shilmagan</p>
                        <Button>Qo'shish</Button>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function SidebarLink({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div className="flex items-center gap-3 text-gray-700 hover:text-orange-500 cursor-pointer transition">
            {icon}
            <span>{label}</span>
        </div>
    );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="bg-white shadow rounded-lg p-4 space-y-2">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div>{children}</div>
        </div>
    );
}

function ToggleSwitch({ label }: { label: string }) {
    return (
        <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="form-checkbox text-orange-500" />
            <span>{label}</span>
        </label>
    );
}
