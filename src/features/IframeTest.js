import React, { useEffect, useState } from 'react';
import _get from 'lodash/get';

function IframeTest(props) {
    const { location } = props;
    const state = _get(location, 'state', {});
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
                // window.location.href = '/web_app1';
            }
        },
        []
    );

    useEffect(() => {
        window.addEventListener("message", onMessageReceivedFromIframe);
        return () =>
            window.removeEventListener("message", onMessageReceivedFromIframe);
    }, [onMessageReceivedFromIframe]);
    return React.useMemo(()=> {
    return (
        <div class="iframe-container">
            <iframe
                id="1"
                name="my_frame"
                title="Title"
                src={`${_get(state, 'domain','https://app.greytip.qa.repute.net')}/mlogin?employerId=${_get(state, 'employerId', '5')}&token=${_get(state, 'token', 'npr7P8whB76XPI7Nsz0cIigj9DRjIJZt')}&tid=${_get(state, 'tid', '2')}`}
                style={{ width: '85%', height: '100%', margin: 'auto', display: 'flex', justifyContent: 'center' }}
                align="center"
                scrolling="yes"
                allow="camera;microphone"
            ></iframe>
        </div>
    )},[])
}

export default IframeTest;
