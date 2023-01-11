import React, {useEffect,useState} from 'react'
import Navbar from 'components/navbar'
import { getProducts } from 'service/getProducts'
export const Home = () => {
const [products, setProducts] = useState(null);

    useEffect(() => {
       getProducts().then((res)=>{
        if (res.status === 200){
            setProducts(res.data);
        }
       });
    }, []);


  return (
    <div>
        <Navbar/>
        {products && products.map((product) => <div>salam</div>)}
    </div>
  );
};

export default Home
