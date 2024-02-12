import { handleLogout } from "@/core/firebase/auth";

const HomePage = () => {
    return (
        <div onClick={handleLogout}>
            HomePage
        </div>
    )
}

export default HomePage;

