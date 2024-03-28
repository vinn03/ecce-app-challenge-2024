import "../App.css"

export default function Info() {
    return (
        <div className="flex flex-row items-center justify-around w-full h-half">
            <div className="title-box font-inter font-bold bg-delft">
                <p className="collapse-text">Okay, first of all, what is urban growth?</p>
            </div>
            <div className="info-box font-inter bg-ucla">
                <p className="collapse-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}