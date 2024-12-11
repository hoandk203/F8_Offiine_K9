import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

export const metadata= {
    title: "Products"
}

const Products = async({searchParams}) => {
  const {status, query}= await searchParams
  
  // return (
  //   <div>
  //       <ProductList/>
  //   </div>
  // )
  return (
    <div>
      <div>Status: {status}</div>
      <div>Query: {query}</div>
      <ProductForm/>
    </div>
  )
}

export default Products