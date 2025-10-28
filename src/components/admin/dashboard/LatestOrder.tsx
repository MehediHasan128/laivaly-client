import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orderData = [
  {
    orderId: 'H5021-0001',
    customerName: 'Mehedi Hasan',
    price: 25.50,
    quantity: 2,
    paymentStatus: 'paid'
  },
  {
    orderId: 'HH021-0002',
    customerName: 'Sumaiya Akter',
    price: 20.50,
    quantity: 1,
    paymentStatus: 'paid'
  },
  {
    orderId: 'H5031-0003',
    customerName: 'Foysal Ahmed',
    price: 55.50,
    quantity: 1,
    paymentStatus: 'paid'
  },
  {
    orderId: 'JH021-0004',
    customerName: 'Rahad Hussian',
    price: 25.50,
    quantity: 2,
    paymentStatus: 'unpaid'
  },
  {
    orderId: 'H5U21-0005',
    customerName: 'Mehedi Hasan',
    price: 25.50,
    quantity: 2,
    paymentStatus: 'paid'
  },
  {
    orderId: 'H5U51-0006',
    customerName: 'Akib Tanzim',
    price: 25.50,
    quantity: 2,
    paymentStatus: 'unpaid'
  },
];

const LatestOrder = () => {
  return (
    <div>
      <div className="p-5 border-b bg-gray-100">
        <h1 className="text-md font-semibold">Latest Orders</h1>
      </div>
      <div className="px-5">
        <Table>
          <TableHeader>
            <TableRow className="font-bold">
              <TableHead>OrderId</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead className="text-center">Payment Status</TableHead>
              <TableHead className="text-end">Amount</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orderData.map((order) => (
              <TableRow key={order.orderId} className="font-medium">
                <TableCell>#{order.orderId}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>${order.price}</TableCell>
                <TableCell className="text-center">{order.quantity}</TableCell>
                <TableCell className="text-center"><div className={`border rounded-full w-20 mx-auto ${order.paymentStatus === 'paid' ? "bg-green-100 border-green-600" : "bg-red-100 border-red-600"}`}>{order.paymentStatus.charAt(0).toUpperCase()+order.paymentStatus.slice(1)}</div></TableCell>
                <TableCell className="text-end">${((order.price)*(order.quantity)).toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LatestOrder;
