import React from 'react';

const InventoryTable = () => {
  // Sample data
  const inventoryData = [
    {
      id: 'P-1001',
      partName: 'Brake Pad Set',
      category: 'Brakes',
      brand: 'Brembo',
      supplier: 'AutoParts Inc.',
      stockQuantity: 42,
      unitPrice: 45.99,
      reorderLevel: 20,
      lastRestocked: '2023-10-15'
    },
    {
      id: 'P-1002',
      partName: 'Oil Filter',
      category: 'Engine',
      brand: 'Mann-Filter',
      supplier: 'FilterWorld',
      stockQuantity: 87,
      unitPrice: 12.50,
      reorderLevel: 30,
      lastRestocked: '2023-11-02'
    }
  ];

  const handleEdit = (id) => {
    console.log(`Edit item with ID: ${id}`);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    // Show confirmation dialog
  const confirmDelete = window.confirm(`Are you sure you want to delete item ${id}?`);
  
  if (!confirmDelete) return;

  try {
    // // Show loading state (you might want to implement this in your UI)
    // console.log(`Deleting item ${id}...`);
    
    // // Simulate API call (replace with your actual API call)
    // const response = await fetch(`/api/inventory/${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // Add authorization header if needed
    //     // 'Authorization': `Bearer ${yourAuthToken}`
    //   }
    // });

    // if (!response.ok) {
    //   throw new Error('Failed to delete item');
    // }

    // // Handle successful deletion
    // console.log(`Item ${id} deleted successfully`);
    
    // // In a real app, you would update the state to remove the deleted item
    // // For example, if using useState:
    // // setInventoryData(prevData => prevData.filter(item => item.id !== id));
    
    // // Show success message
    // alert(`Item ${id} was deleted successfully`);
    
  } catch (error) {
    console.error('Error deleting item:', error);
    alert(`Error deleting item: ${error.message}`);
  }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Parts Inventory</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Part Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock Qty</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reorder Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Restocked</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inventoryData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.partName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.brand}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.supplier}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.stockQuantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.unitPrice.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.reorderLevel}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.lastRestocked}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryTable;