const GeneralSettings = () => {

    return (
        <div className="general-settings width-100 flex-column center">
            <h1>General Settings</h1>
            <div className="general-grid center">
                <div className="flex-column">
                    <h2>Site informations</h2>
                    <div>
                        <p>Site Title:<span> kispan</span></p>
                        <p>Site Tagline:<span> kispan</span></p>
                        <p>Site Icon:<span> kispan</span></p>
                        <p>Site Logo:<span> kispan</span></p>
                        <p>Site Link:<span> kispan.com</span></p>
                        <input type="file" placeholder="Upload" />
                    </div>
                </div>
                <div className="flex-column">
                    <h2>Contact informations</h2>
                    <div>
                        <p>User Name:<span>KISPAN</span></p>
                        <p>Email Address:<span>kispan</span></p>
                        <p>Phone Number:<br/>
                            <span>+255 792 148 404</span><br />
                            <span>+255 659 418 404</span></p>
                        <p>Physical Address:<br/><span>kispan</span></p>
                    </div>
                </div>
                <div className="flex-row center width-100">
                    <div>
                        <h2>Social Media Links</h2>
                        <img src="" /><span>http://link/to/facebook</span><br />
                        <img src="" /><span>http://link/to/instagram</span><br />
                        <img src="" /><span>http://link/to/X</span><br />
                    </div>
                    <div>
                        <h2>Timezone & Language</h2>
                        <p>Timezone:<br/>
                            <select>
                                <option>Nairobi (EAT) - (UTC+3)</option>
                                <option>New York (EST/EDT) - (UTC-5 / UTC-4)</option>
                                <option>London (GMT/BST) - (UTC+0 / UTC+1)</option>
                                <option>Paris (CET/CEST) - (UTC+1 / UTC+2)</option>
                                <option disabled>Tokyo (JST) - (UTC+9) - coming soon</option>
                                <option disabled>Australian Eastern - coming soon</option>
                                <option>Los Angeles (PST/PDT) - (UTC-8 / UTC-7)</option>
                            </select>
                        </p>
                        <p>Language:<br/>
                            <select>
                                <option>Kiswahili</option>
                                <option selected>English</option>
                                <option disabled>Hindi - workin on it</option>
                                <option disabled>Germany - workin on it</option>
                                <option disabled>Chinese - workin on it</option>
                            </select>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralSettings;