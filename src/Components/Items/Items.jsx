import { useEffect, useState } from "react";

const Items = () => {
    const [Items, setItems] = useState([]);

    useEffect(() =>{
        fetch('Items.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Items;