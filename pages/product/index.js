import Link from 'next/link';

function Product({ productId = 100 }) {
    return (
        <>
            <h1>Product Page</h1>
            <Link href="/"><a>Go Back</a></Link>
            <ul>
                <li><Link href="/product/1"><a>Product 1</a></Link></li>
                <li><Link href="/product/2"><a>Product 2</a></Link></li>
                <li><Link href="/product/3"><a>Product 3</a></Link></li>
                <li><Link href={`/product/${productId}`}><a>Product {productId}</a></Link></li>
            </ul>
        </>
    )
}

export default Product;