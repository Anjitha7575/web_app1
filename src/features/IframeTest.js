import React, { useEffect, useState } from 'react';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';

function IframeTest(props) {
    const { location } = props;
    const [urlIframe, setUrl] = React.useState('');
    const [token3, setToken3] = React.useState('');
    const [token2, setToken2] = React.useState('');
    const [btnType, setBtnType] = React.useState('iframe');

    const state = _get(location, 'state', {});
    const handleChange = e => {
        const { name, value } = e.target;
        setToken2(value);
    };
    const handleChange3 = e => {
        const { name, value } = e.target;
        setToken3(value);
    };
    useEffect(() => {
        let src = `${_get(state, 'domain', 'https://app.greytip.qa.repute.net')}/mlogin?token=${_get(state, 'token', 'npr7P8whB76XPI7Nsz0cIigj9DRjIJZt')}&app_status=active`;
        setUrl(src);
    }, [])
    console.log('location', state);

    const onMessageReceivedFromIframe = React.useCallback(
        event => {
            console.log("onMessageReceivedFromIframe", event.data.type, event.data.status);
            if (event.data.type === 'iFrameRequest_Repute') {
                console.log("onMessageReceivedFromIframe434w3");
                let obj = {
                    type: 'parentResponse',
                    responseData: 'Response #' + ' session_timeout'
                };
                event.source.postMessage(obj, '*');
                console.log('hehehehe');
            }
        },
        []
    );

    useEffect(() => {
        window.addEventListener("message", onMessageReceivedFromIframe);
        return () =>
            window.removeEventListener("message", onMessageReceivedFromIframe);
    }, [onMessageReceivedFromIframe]);

    const goWhereever = (view) => {
        console.log('view', view);
        setBtnType(view)

    }

    return React.useMemo(() => {
        return (
            <div style={{ display: 'flex', width: '100%', height: '100%' }}>
                <div>
                    <div>
                        <button onClick={() => goWhereever('gosomwhere')}>Go Somewhere</button>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <div style={{ display: 'flex', margin: '10px' }}>
                            <label style={{ width: '200px' }}>Token3333 :</label>
                            <input
                                value={state.token2}
                                style={{ width: '250px' }}
                                type="text"
                                onChange={handleChange3}
                                name="token"
                            />
                        </div>
                        <button onClick={() => goWhereever('iframe')}>Go Iframe</button>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <div style={{ display: 'flex', margin: '10px' }}>
                            <label style={{ width: '200px' }}>Token22 :</label>
                            <input
                                value={state.token2}
                                style={{ width: '250px' }}
                                type="text"
                                onChange={handleChange}
                                name="token"
                            />
                        </div>
                        <button onClick={() => goWhereever('iframe2')}>Go Iframe2</button>
                    </div>
                </div>
                {(btnType === 'iframe') ?
                    <div class="iframe-container">
                        {urlIframe ?
                            <iframe
                                id="iframe_id"
                                name="my_frame"
                                title="Title"
                                // src={urlIframe}
                                src={`${_get(state, 'domain', 'https://app.greytip.qa.repute.net')}/mlogin?token=${token3}&app_status=active`}
                                style={{ width: '70%', height: '100%', margin: 'auto', display: 'flex', justifyContent: 'center' }}
                                align="center"
                                scrolling="yes"
                                allow="camera;microphone"
                            ></iframe> : null}
                    </div> :
                    ((btnType === 'iframe2')) ?
                        <div class="iframe-container">
                            {urlIframe ?
                                <iframe
                                    id="iframe_id"
                                    name="my_frame"
                                    title="Title"
                                    src={`${_get(state, 'domain', 'https://app.greytip.qa.repute.net')}/mlogin?token=${token2}&app_status=active`}
                                    style={{ width: '70%', height: '100%', margin: 'auto', display: 'flex', justifyContent: 'center' }}
                                    align="center"
                                    scrolling="yes"
                                    allow="camera;microphone"
                                ></iframe> : null}
                        </div>
                        : <div style={{ width: '70%', height: '100%', margin: 'auto', display: 'flex', justifyContent: 'center' }}>
                            Im'm somewhere......
                    </div>
                }
            </div >
        )
    }, [urlIframe, btnType])
}

export default IframeTest;
