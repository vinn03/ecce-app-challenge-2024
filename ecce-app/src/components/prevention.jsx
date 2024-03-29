import "../App.css"

export default function Prevention() {
    return (
        <div className="flex flex-row items-center justify-around w-full h-half mt-24">
            <div className="title-box font-inter font-bold bg-delft">
                <p className="collapse-text">Okay, so how can we prevent further harm?</p>
            </div>
            <div className="info-box font-inter bg-ucla">
                <p className="collapse-text text-3xl">
                    Further harm caused by urbanization can be prevented by <span className="font-bold">smart growth</span>, which is the development of urban areas in a way that is sustainable and environmentally friendly. 
                    <br></br><br></br>Some strategies for smart growth include <span className="font-bold">mixed-use development</span>, which is the construction of buildings that have both residential and commercial spaces, and <span className="font-bold">transit-oriented development</span>, which is the construction of buildings near public transportation.
                </p>
            </div>
        </div>
    )
}