import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default function Form() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemDetail, setItemDetail] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const addItem = () => {
    if (itemName && itemDetail && itemPrice) {
      const newItem = { name: itemName, detail: itemDetail, price: itemPrice };
      setItems([...items, newItem]);
      setItemName('');
      setItemDetail('');
      setItemPrice('');
    }
  };

  const downloadExcel = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const ws = XLSX.utils.json_to_sheet(items);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    const fileName = 'items' + fileExtension;
    saveAs(data, fileName);
  };

  return (
    <div className='container'>
      <h2>Add Item</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Detail</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input className="form-control me-2" type="text" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} /></td>
            <td><input className="form-control me-2" type="text" placeholder="Item Detail" value={itemDetail} onChange={(e) => setItemDetail(e.target.value)} /></td>
            <td><input className="form-control me-2" type="number" placeholder="Item Price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} /></td>
            <td><button className="btn btn-primary" onClick={addItem}>Add</button></td>
          </tr>
        </tbody>
      </table>
      <div>
        <button className="btn btn-primary" onClick={downloadExcel}>Download Excel</button>
      </div>
      <h2>Items</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Detail</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.detail}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
