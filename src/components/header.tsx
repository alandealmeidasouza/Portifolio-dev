import './header.css'

function Header({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }){

    return(
        <header>
            <nav>
                <i className="fa-solid fa-house icone"></i>
                <i className="fa-solid fa-brain icone"></i>
                <i className="fa-solid fa-graduation-cap icone"></i>
                <i className="fa-solid fa-swatchbook icone"></i>
                <div onClick={() => setDarkMode(!darkMode)}>
                    <i className={darkMode ? "fa-solid fa-sun icone" : "fa-solid fa-moon icone"}></i>
                </div>
            </nav>
        </header>
    )

}

export default Header