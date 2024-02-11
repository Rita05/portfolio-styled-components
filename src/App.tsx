import './App.css';
import { Header } from './layout/header/Header'
import { Main } from './layout/sections/main/Main';
import { About } from './layout/sections/about/About';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import { Contacts } from './layout/sections/contact/Contact';
import { Footer } from './layout/footer/Footer';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import { ScrollButton } from './components/ScrollButton';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Header />
                <Main />
                <About />
                <Skills />
                <Projects />
                <Contacts />
                <Footer />
                <ScrollButton />
            </div>
        </ThemeProvider>
    );
}

export default App;

