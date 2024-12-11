import Navigation from "@/components/Navigation";

const ClientLayout= ({children})=>{
    return (
        <div>
            <Navigation/>
            {children}
        </div>
    )
}

export default ClientLayout