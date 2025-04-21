function CheckoutPage() {
    return (
        <div className="bg-white text-gray-800 p-6 md:p-10 mx-auto flex justify-center gap-6">

            <div>
                <h2 className="text-xl font-semibold mb-4">Xaridni rasmiylashtirish</h2>
                <div className="mb-8">
                    <h3 className="text-lg font-medium mb-2">1. Sizning ma'lumotlaringiz</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input type="text" placeholder="Telefon" className="input" defaultValue="+998" />
                        <input type="text" placeholder="Ism" className="input" />
                        <input type="text" placeholder="Familiya" className="input" />
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-medium mb-2">2. Qabul qilish usuli</h3>
                    <div className="flex gap-4 mb-4">
                        <button className="btn-selected">Yetkazib berish</button>
                        <button className="btn">Dokondan olib ketish</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <select className="input">
                            <option>Toshkent shahri</option>
                        </select>
                        <select className="input">
                            <option>Shahar / tuman</option>
                        </select>
                        <input type="text" placeholder="Kvartal" className="input" />
                    </div>
                    <input type="text" placeholder="Manzil (masalan: Yakkasaroy 13-kvartal)" className="input w-full mb-4" />

                    <div className="flex gap-4">
                        <button className="btn">Ertaga yoki keyinroq<br /><span className="text-sm">30 000 so'm</span></button>
                        <button className="btn">Tez yetkazib berish<br /><span className="text-sm">30 000 so'mdan</span></button>
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-lg font-medium mb-2">3. Tolov usulini tanlang</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div className="btn">Payme</div>
                        <div className="btn">Click</div>
                        <div className="btn">Onlayn karta orqali</div>
                        <div className="btn">Qabul qilinganda</div>
                        <div className="btn">Muddatli tolov</div>
                    </div>
                    <input type="text" placeholder="Buyurtmaga izoh" className="input w-full mt-4" />
                </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-md">
                <div className="flex justify-between items-center mb-2">
                    <div>
                        <p className="text-sm text-gray-600">1 dona mahsulot narxi</p>
                        <p className="text-sm text-gray-600">Yetkazib berish</p>
                    </div>
                    <div className="text-right">
                        <p>132 000 so'm</p>
                        <p>30 000 so'm</p>
                    </div>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold">
                    <span>Jami</span>
                    <span>162 000 so'm</span>
                </div>
                <input type="text" placeholder="Promokodni kiriting" className="input mt-4 w-full" />
            </div>
        </div>
    );
};

export default CheckoutPage;