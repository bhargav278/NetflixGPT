import LanguageButton from "./LanguageButton"

function Footer() {
    return (
        <div className="w-full bg-black text-white py-20">
            <div className="w-8/12 mx-auto">
                <div className="mb-12">Questions? Call 000-800-919-1694</div>
                <div className="my-7" >
                    <div className="flex gap-20 flex-wrap">
                        <div>
                            <li className="list-none mb-3">FAQ</li>
                            <li className="list-none mb-3">Cookie Preferences</li>

                        </div>
                        <div>
                            <li className="list-none mb-3">Help Centre</li>
                            <li className="list-none mb-3">Corporate Information</li>
                        </div>
                        <li className="list-none mb-3">Terms of Use</li>
                        <li className="list-none mb-3">Privacy</li>

                    </div>
                </div>
                <LanguageButton/>
            </div>
        </div>
    )
}

export default Footer