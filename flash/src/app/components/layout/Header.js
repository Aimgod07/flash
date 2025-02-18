import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between">
        <Link href="/">
            <img
            className="img"
            src="https://cdn.iconscout.com/icon/free/png-512/free-zomato-logo-icon-download-in-svg-png-gif-file-formats--food-company-brand-delivery-brans-logos-icons-1637644.png?f=webp&w=512 "
            alt="logo"
            ></img>
        </Link>
    
        <nav className="flex gap-8 font-bold">
            <Link className ="home" href={"/"}>Home</Link>
            <Link className ="menu" href={""}>Menu</Link>
            <Link className ="about" href={""}>About</Link>
            <Link className ="contact" href={""}>Contact</Link>
       
        </nav>

        <nav className="flex items-center gap-4">
        <Link  href={'/login'} className=""  style={{borderRadius:"20%"}}>
            Login
            </Link>
            <Link className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-white hover:text-red-500" href={'/register'}>Register</Link>
        
        </nav>
        </header>
    );
    }