import {
    FaClipboardList,
    FaHistory,
    FaMoneyCheckAlt,
    FaSignOutAlt
} from "react-icons/fa";

const user = {
    name: "Muhammad",
    phone: "+998773058208",
};

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-[#f5f5f5] py-6 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
                <aside className="bg-white rounded-lg shadow p-4 space-y-4">
                    <div className="text-center space-y-1">
                        <div className="text-base font-semibold">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.phone}</div>
                    </div>
                    <nav className="space-y-3 pt-2">
                        <SidebarLink icon={<FaMoneyCheckAlt />} label="Mening to'lovlarim" />
                        <SidebarLink icon={<FaHistory />} label="To'lov tarixi" />
                        <SidebarLink icon={<FaClipboardList />} label="Onlayn buyurtmalar" />
                        <SidebarLink icon={<FaSignOutAlt />} label="Chiqish" />
                    </nav>
                </aside>

                <div className="space-y-4">
                    <Card title="Shaxsiy ma'lumotlar">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm font-medium">{user.name}</p>
                                <p className="text-sm text-gray-500">Telefon: {user.phone}</p>
                            </div>
                            <button className="text-sm border border-gray-300 px-3 py-1 rounded hover:bg-gray-100">
                                O'zgartirish
                            </button>
                        </div>
                    </Card>

                    <Card title="Xabarlar yoki yangiliklar">
                        <div className="flex items-center gap-6 pt-1">
                            <ToggleSwitch label="SMS orqali" />
                            <ToggleSwitch label="Telegram orqali" />
                        </div>
                    </Card>

                    <Card title="Mening kartam">
                        <p className="text-sm text-gray-500">Mavjud emas</p>
                    </Card>

                    <Card title="Yetkazib berish manzili">
                        <p className="text-sm text-gray-500 mb-2">Manzil qo'shilmagan</p>
                        <button className="bg-[#FFD500] text-black px-4 py-1 text-sm rounded hover:bg-[#FFC000]">
                            Qo'shish
                        </button>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function SidebarLink({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-500 cursor-pointer transition">
            <div className="text-[16px]">{icon}</div>
            <span>{label}</span>
        </div>
    );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <div className="text-[15px] font-semibold text-gray-800 border-b pb-2 mb-3">
                {title}
            </div>
            {children}
        </div>
    );
}

function ToggleSwitch({ label }: { label: string }) {
    return (
        <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" className="form-checkbox text-yellow-500 border-gray-300 rounded" />
            <span>{label}</span>
        </label>
    );
}
