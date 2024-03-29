
export default function Header() {
return (
        <header>
                <span className="font- text-blue-300 text-2xl pl-28 pr-56 pt-5 pb-5 flex"
                style={{ backgroundColor: "rgba(40, 44, 73, 0.9)", position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2 }}>
                        <a href="/" className="mr-10">Home</a>
                        <a href="/" target="_blank">Experience</a>
                </span>
        </header>
);
}