import React, { useState } from "react";

const Oderbox = () => {
  let [count, setcount] = useState(1);

  const subtotal = 850.0 * count;
  let [total, settotal] = useState();
  function addcount() {
    if (count > 0) setcount(count + 1);
  }
  function subcount() {
    if (count > 1) setcount(count - 1);
  }
  function clickCity(x) {
    settotal(subtotal + x);
  }
  return (
    <>
      <div id="OrderFormContainer" className="md:flex">
        <div id="customerinfo" className="mr-10 w-[500px] ">
          <p className=" text-[18px] leading-[27px] my-4">আপনার ইনফরমেশন দিন</p>
          <form action="">
            <div id="inputs" className=" space-y-3 py-5">
              <input
                type="text"
                className="border py-2 md:w-full w-3/4"
                placeholder="আপনা নাম লিখ"
              />
              <br />
              <input
                type="text"
                className="border py-2 md:w-full w-3/4"
                placeholder="আপনা নাম লিখ"
              />
              <br />
              <input
                type="text"
                className="border py-2 md:w-full w-3/4"
                placeholder="আপনা নাম লিখ"
              />
            </div>
          </form>
          <div
            id="boxcontainer"
            className="md:w-full w-3/4 bg-[#f3f3f3] h-28  p-4 space-y-2"
          >
            <div id="oderbox1" className="flex justify-between ">
              <p>Product</p>
              <div id="p" className=" gap-12 flex">
                <p>Quantity</p>
                <p>Price</p>
              </div>
            </div>
            <hr />
            <div id="oderbox2" className="flex justify-between items-center">
              <div className="flex gap-2">
                <input type="radio" checked />
                <img
                  className="w-8"
                  src="https://landing.tech-trigger.com/wp-content/uploads/2023/08/ezgif.com-webp-to-jpg-300x300.jpg"
                  alt=""
                />
                <p>Demo Product X {count}</p>
              </div>
              <div className="flex">
                <div className="border flex w-[60px] justify-between items-center ">
                  <button className="p-1 border-r-2" onClick={subcount}>
                    -
                  </button>{" "}
                  <p>{count}</p>{" "}
                  <button className="p-1 border-l-2" onClick={addcount}>
                    +
                  </button>
                </div>
                <div id="price" className="ml-[30px]">
                  ৳ {850.0 * count}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="orderlistinfo" className=" w-[500px] space-y-5">
          <p className=" text-[18px] leading-[27px]  my-4">অর্ডার লিস্ট</p>
          <div
            id="0l1"
            className="flex justify-between items-center p-2  border-b-2 border-dashed"
          >
            <p>Product</p>
            <p>Subtotal</p>
          </div>
          <div
            id="0l2"
            className="flex justify-between border-b-2 border-dashed p-2 items-center"
          >
            <div className="flex gap-2">
              <input type="radio" checked />
              <img
                className="w-8"
                src="https://landing.tech-trigger.com/wp-content/uploads/2023/08/ezgif.com-webp-to-jpg-300x300.jpg"
                alt=""
              />
            </div>
            <p>
              X {count} ৳ {850.0 * count}
            </p>
          </div>
          <div
            id="0l3"
            className="flex justify-between border-b-2 border-dashed p-2 items-center"
          >
            <p>Subtotal</p>
            <p id="Subtotal" value={subtotal}>
              ৳ {850.0 * count}
            </p>
          </div>
          <div
            id="0l4"
            className="flex justify-between border-b-2 border-dashed p-2 items-center"
          >
            <p>Shipping</p>
            <div>
              <div className="flex gap-1">
                <input type="radio" onClick={() => clickCity(60)} name="v1" />
                <p>ঢাকার ভিতরে: ৳ 60.00</p>
              </div>
              <div className="flex gap-1">
                <input type="radio" onClick={() => clickCity(120)} name="v1" />
                <p>ঢাকার বাহিরে: ৳ 120.00</p>
              </div>
            </div>
          </div>
          <div id="0l5" className="flex justify-between p-2 items-center">
            <p>Total</p>
            <p>৳ {total}</p>
          </div>
          <div class=" p-6 rounded-lg shadow-md w-[500px]">
            <div class="mb-4">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio text-blue-600"
                  name="paymentMethod"
                  value="cash"
                  checked
                />
                <span class="ml-2 ">ক্যাশ অন ডেলিভারি</span>
              </label>
            </div>
            <p className="pb-4">পন্য হাতে পেয়ে ডেলিভারি ম্যানকে পেমেন্ট করুন</p>
            <div class="mb-4">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio text-blue-600"
                  name="paymentMethod"
                  value="bkash"
                />
                <span class="ml-2 ">bKash</span>
              </label>
            </div>
            <div class="p-4 rounded-lg">
              <ol class="list-decimal list-inside">
                <li>Go to your bKash app or Dial *247#</li>
                <li>Choose “Send Money”</li>
                <li>Enter below bKash Account Number</li>
                <li>
                  Enter <strong>total amount</strong>
                </li>
                <li>
                  Now enter your bKash Account PIN to confirm the transaction
                </li>
                <li>
                  Copy Transaction ID from payment confirmation message and
                  paste that Transaction ID below
                </li>
              </ol>
              <p class="mt-2 text-green-600">You need to send us ৳ 910.00</p>
              <p class="mt-2">
                <strong>Account Type:</strong> Personal
              </p>
              <p>
                <strong>Account Number:</strong> 01700000000
              </p>
              <hr />
              <div class="mt-4">
                <label class="block ">Your bKash Account Number</label>
                <input
                  type="text"
                  class="mt-1 block w-full p-2 border  rounded-md "
                  placeholder="01XXXXXXXXX"
                />
              </div>
              <div class="mt-4">
                <label class="block ">bKash Transaction ID</label>
                <input
                  type="text"
                  class="mt-1 block w-full p-2 border  rounded-md"
                  placeholder="2M7A5"
                />
              </div>
            </div>
            <p class="mt-4  text-sm">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
            <button class="mt-4 w-full bg-blue-600 text-white p-3 rounded-lg flex items-center justify-center">
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11s1.343 3 3 3 3-1.343 3-3zM12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3z"
                ></path>
              </svg>
              অর্ডার করুন ৳ 910.00
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Oderbox;
