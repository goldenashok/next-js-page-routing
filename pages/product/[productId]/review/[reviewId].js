import { useRouter } from 'next/router';

function ReviewDetails() {
    const router = useRouter(),
        { productId, reviewId } = router.query;
    return (<h1>Review Details {reviewId} - {productId}</h1>)
}

export default ReviewDetails;