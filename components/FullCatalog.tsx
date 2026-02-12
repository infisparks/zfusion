"use client";
import { fullCatalog } from '@/app/data';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from './CartContext';

export default function FullCatalog() {
  const { items, addItem } = useCart();

  return (
    <section id="catalog" className="py-20 px-4 md:px-12 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Our Full Product Catalog</h2>
        <p className="text-gray-600 mt-2">Browse through our comprehensive selection of professional-grade durable medical equipment.</p>
        <p className="text-gray-500 text-sm">Add items to your cart and call for competitive pricing.</p>
      </div>

      <div className="overflow-x-auto border rounded-lg shadow-sm">
        <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-100 uppercase text-xs font-bold text-gray-700">
                <tr>
                    <th className="px-6 py-4">Product Name</th>
                    <th className="px-6 py-4 w-2/3">Description</th>
                    <th className="px-6 py-4 text-right">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {fullCatalog.map((item, idx) => {
                  const inCart = items.some((cartItem) => cartItem.name === item.name);
                  return (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        {item.name}
                      </td>
                      <td className="px-6 py-4">{item.desc}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          type="button"
                          onClick={() =>
                            addItem({
                              name: item.name,
                              desc: item.desc,
                            })
                          }
                          className={`px-4 py-2 rounded-md font-bold inline-flex items-center gap-2 text-xs transition ${
                            inCart
                              ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                          }`}
                        >
                          {inCart ? (
                            <>
                              <Check size={14} /> Added to Cart
                            </>
                          ) : (
                            <>
                              <ShoppingCart size={14} /> Add to Cart
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
        </table>
      </div>
    </section>
  );
}