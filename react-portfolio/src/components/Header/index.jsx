export default function Header({ setPage }) {
    return (
        <header>
            <img
                src=""
                alt="Coding Logo"
            />
            <h1>Earnest's portfolio</h1>
            <div>
                <a
                    href="#"
                    onClick={() => setPage('about')}
                >
                    About
                </a>
                <a
                    href="#"
                    onClick={() => setPage('projects')}
                >
                    Projects
                </a>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >Resume</a>
            </div>
        </header>
    );
}
