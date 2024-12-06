import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

export default function Navigationbar({ theme, setTheme }) {


    const ChangeTheme = () => {
        if (theme == "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="src/assets/logo.png" width="40px" alt="" className='align-top mx-3' />
                        <h2 style={{ display: 'inline' }}>Ninja Notes</h2>
                    </Navbar.Brand>

                        <Button onClick={ChangeTheme}>Switch to {theme == "dark" ? "Light" : "Dark"} mode</Button>


                </Container>
            </Navbar>
        </>
    );
}
