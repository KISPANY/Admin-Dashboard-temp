const Notification = () => {

    return (
        <div className="general-settings width-100 flex-column center">
            <h1>General Settings</h1>
            <div>
                <div>
                    <h2>Site informations</h2>
                    <div>
                        <p>Site Title:<br/><span>kispan</span></p>
                        <p>Site Tagline:<br/><span>kispan</span></p>
                        <p>Site Icon:<br/><span>kispan</span></p>
                        <p>Site Logo:<br/><span>kispan</span></p>
                        <p>Site Link:<br/><span>kispan.com</span></p>
                        <input type="file">Upload</input>
                    </div>
                </div>
                <div>
                    <h2>Contact informations</h2>
                    <div>
                        <p>User Name:<br/><span>KISPAN</span></p>
                        <p>Email Address:<br/><span>kispan</span></p>
                        <p>Phone Number:<br/>
                            <span>+255 792 148 404</span><br />
                            <span>+255 659 418 404</span></p>
                        <p>Physical Address:<br/><span>kispan</span></p>
                        <p>Site Logo:<br/><span>kispan</span></p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Social Media Links</h2>
                        <img src="" /><span>http://link/to/facebook</span>
                        <img src="" /><span>http://link/to/instagram</span>
                        <img src="" /><span>http://link/to/X</span>
                    </div>
                    <div>
                        <h2>Timezone & Language</h2>
                        <p>Timezone:<br/>
                            <select>
                                <option>Nairobi (EAT) - East Africa Time (UTC+3)</option>
                                <option>New York (EST/EDT) - Eastern Standard/Daylight Time (UTC-5 / UTC-4)</option>
                                <option>London (GMT/BST) - Greenwich Mean Time / British Summer Time (UTC+0 / UTC+1)</option>
                                <option>Paris (CET/CEST) - Central European Time / Central European Summer Time (UTC+1 / UTC+2)</option>
                                <option disabled>Tokyo (JST) - Japan Standard Time (UTC+9) - coming soon</option>
                                <option disabled>Sydney (AEST/AEDT) - Australian Eastern Standard/Daylight Time (UTC+10 / UTC+11) - coming soon</option>
                                <option>Los Angeles (PST/PDT) - Pacific Standard/Daylight Time (UTC-8 / UTC-7)</option>
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

export default Notification;