import Image from "next/image";
import image404 from '@/assets/images/404.png'

const NotFound= ()=>{
    return (
        <div>
            <h1>Page Not Found</h1>
            <Image src={image404} alt="not-found"/>
        </div>
    )
}

export default NotFound