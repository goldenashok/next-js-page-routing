import { useRouter } from "next/router";

function Review() {
    const router = useRouter(),
        { productId } = router.query;
    return (<h1>Product Review - {productId}</h1>)
}

export default Review;