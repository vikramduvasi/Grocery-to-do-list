
const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Deafult title"
}

export default Header