export const metadata = {
  title: "Shipping Addresses",
  description:
    "Manage your saved addresses for faster checkout on Laivaly. Add, edit, or remove delivery and billing addresses easily.",
  keywords: [
    "Laivaly address",
    "delivery address",
    "billing address",
    "manage addresses",
    "Laivaly account",
  ],
};

const address = false;

const Addresspage = () => {
  return (
    <main className="space-y-20">
      <div className="space-y-5">
        <h1 className="text-3xl font-semibold">Shipping Address</h1>
        <div className="border-t" />
      </div>
      <div>
        {!address && (
          <div className="font-medium text-gray-700 space-y-2">
            <h1 className="text-xl">No addresses saved yet</h1>
            <p>Save your delivery and billing addresses for faster checkout.</p>
          </div>
        )}
      </div>
      <div>
        <button className="btn">Add a New Shipping Address</button>
      </div>
      <div>
        <p className="font-medium text-gray-700 leading-7">You can save multiple addresses for home, work, or friends & family. <br /> Your address details are private and secure with Laivaly</p>
      </div>
    </main>
  );
};

export default Addresspage;
