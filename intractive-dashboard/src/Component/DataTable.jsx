import React from 'react';

const DataTable = ({rows}) => {

    const [query, setQuery] = React.useState("");

    const filtered = rows.filter((row) => 
    row.product.toLowerCase().includes(query.toLowerCase())
);

    return (
        <div className='bg-white p-4.shadow-sm rounded-xl mt-6'>
            <div className='flex justify-between mb-4'>
                <h3 className='font-semibold'>Orders</h3>
                <input 
                className='border px-3 py-1 rounded-md'
                placeholder='Search Product...'
                value={query}
                onChange={(e) => setQuery(e.target.value)} />
            </div>
            <table className='w-full text-sm'>
                <thead>
                    <tr className='border-b'>
                        <th className='py-2 text-left'>Product</th>
                        <th className='py-2 text-left'>Status</th>
                        <th className='py-2 text-left'>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((r) => (
                        <tr key={r.id} className='border-b'>
                        <td className='py-2'>{r.product}</td>
                        <td>{r.status}</td>
                        <td>${r.amount}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;