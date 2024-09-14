import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removefromCart, addtoCart } from '../Schema/Cartslice';

function Addtocart() {

    const [amount, setamount] = useState(0);

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart.items)

    const totalAmount = useSelector(state => state.cart.totalAmount || 0);

    useEffect(() => {
        if (typeof totalAmount === 'number') { // Ensure totalAmount is a number
            setamount(totalAmount + 150); // Add additional charges if needed
        } else {
            setamount(0); // Handle the case where totalAmount is NaN or undefined
        }
    }, [totalAmount]);

    // adding product into the item state using redux

    const additem = (item) => {
        dispatch(addtoCart(item));
    }

    // removing product into the item state using redux

    const remove = (id) => {
        dispatch(removefromCart(id));
    };

    // console.log(cartitems)


    return (
        <div class="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
            <h1 class="text-2xl font-extrabold text-gray-800">Your Cart</h1>
            <div class="grid md:grid-cols-3 gap-4 mt-8">
                <div class="md:col-span-2 space-y-4">

                    {cart && cart.length > 0 ? (
                        cart.map((item, id) => (
                            <div key={id} class="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                                <div class="flex gap-4">
                                    <div class="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                                        <img src={`http://localhost:8080${item.img}`} alt='img' class="w-full h-full object-contain" />
                                    </div>
                                    <div class="flex flex-col gap-4">
                                        <div>
                                            <h3 class="text-base font-bold text-gray-800">{item.title}</h3>

                                        </div>

                                        <div class="mt-auto flex items-center gap-3">
                                            <button type="button" onClick={() => remove(item.id)}
                                                class="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-2 fill-white" viewBox="0 0 124 124">
                                                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                                </svg>
                                            </button>
                                            <span class="font-bold text-sm leading-[18px]">{item.quantity}</span>
                                            <button type="button" onClick={() => additem(item)}
                                                class="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-2 fill-white" viewBox="0 0 42 42">
                                                    <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="ml-auto flex flex-col">
                                    <div class="flex items-start gap-4 justify-end">

                                        <svg onClick={() => remove(item.id)} xmlns="http://www.w3.org/2000/svg" class="w-4 cursor-pointer fill-gray-400 inline-block" viewBox="0 0 24 24">
                                            <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                                        </svg>
                                    </div>
                                    <h3 class="text-base font-bold text-gray-800 mt-auto">₹{item.price}</h3>
                                </div>
                            </div>
                        ))

                    ) : ("")}
                </div>

                <div class="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                    <ul class="text-gray-800 space-y-4">
                        <li class="flex flex-wrap gap-4 text-sm">Subtotal <span class="ml-auto font-bold">₹{totalAmount}</span></li>
                        <li class="flex flex-wrap gap-4 text-sm">Shipping <span class="ml-auto font-bold">₹100</span></li>
                        <li class="flex flex-wrap gap-4 text-sm">Tax <span class="ml-auto font-bold">₹50</span></li>
                        <hr class="border-gray-300" />
                        <li class="flex flex-wrap gap-4 text-sm font-bold">Total <span class="ml-auto">₹{amount}</span></li>
                    </ul>

                    <div class="mt-8 space-y-2">
                        <button type="button" class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">Buy Now</button>
                        <button type="button" class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md">Continue Shopping  </button>
                    </div>

                    <div class="mt-4 flex flex-wrap justify-center gap-4">
                        <img src='https://readymadeui.com/images/master.webp' alt="card1" class="w-10 object-contain" />
                        <img src='https://readymadeui.com/images/visa.webp' alt="card2" class="w-10 object-contain" />
                        <img src='https://readymadeui.com/images/american-express.webp' alt="card3" class="w-10 object-contain" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addtocart