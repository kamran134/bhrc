import React, { FunctionComponent } from "react";

export const MainSonicBot: FunctionComponent = (props) => {
    return (
        <div className="main-bot">
            <iframe 
                style={{ height: "605px", width: "80vw" }}
                frameBorder="0"
                title="Sonic Bot Widget"
                src="https://widget.botsonic.com/CDN/index.html?service-base-url=https%3A%2F%2Fapi-azure.botsonic.ai&token=24dd3e41-1328-4acc-8d3e-e561372a8cb5&base-origin=https%3A%2F%2Fbot.writesonic.com&instance-name=Botsonic&standalone=true&page-url=https%3A%2F%2Fbot.writesonic.com%2Fbots%2Fe27f4a95-d9e9-44e4-bb4a-114f20bd2df3%2Fconnect">
            </iframe>
        </div>
    );
}