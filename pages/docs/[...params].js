import { useRouter } from 'next/router';

function Doc() {
    const router = useRouter();
    const { params = [] } = router.query;

    if (params.length === 2) {
        return (<h1>Doc Page {params[0]} - {params[1]}</h1>)
    } else if (params.length === 1) {
        return (<h1>Doc Page {params[0]}</h1>)
    }
}

export default Doc;