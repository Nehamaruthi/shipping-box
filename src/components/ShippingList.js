import React from 'react';
import { useState } from 'react';
import ShippingForm from './ShippingForm';

function ShippingList() {
    const[items,setItems] = useState([]);
    const addToList = (item) => {
        console.log(item);
        const itemCopy = [...items];
        itemsCopy.push(item)
        setItems(itemsCopy);

    };
  return (
    <div>
        <ShippingForm addToListCallback = {(value) => addToList(value)} />
        <table>
            <thread>
            <th>title
            </th>
            <th>weight</th>
            <th>
                color
            </th>
            <th>place</th>
            </thread>
            <tbody>
                {
                    item.map((item) => {
                        return
                        (
                            <tr key={item.title}>
                                <td>{item.title}</td>   
                                <td>{item.weight}</td>   
                                <td>{item.color}</td>   
                                <td>{item.place}</td>   
                                </tr>

                                 );

                    })
                }
            </tbody>

        </table>
        </div>
  )
}

export default ShippingList