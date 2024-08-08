import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Browse() {

    const data = useSelector((store)=>store.user)

    return (
        <>Browse</>
    )
}
export default Browse