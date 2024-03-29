import React, { useState } from 'react';
import _get from 'lodash/get';
import { Link } from 'react-router-dom';

let TextBtn = (props) => {
    const [state, setState] = useState({ token: "", employerId: "", userId: "", domain: "" });

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const openWin = () => {
        let url = `${_get(state, 'domain', 'https://app.greytip.qa.repute.net')}/mlogin?employerId=${_get(state, 'employerId', '5')}&token=${_get(state, 'token', 'npr7P8whB76XPI7Nsz0cIigj9DRjIJZt')}&userId=${_get(state, 'userId', '2')}`
        window.open(url, '_blank');
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', margin: '10px' }}>
                    <label style={{ width: '200px' }}>Token :</label>
                    <input
                        value={state.token}
                        style={{width: '250px'}}
                        type="text"
                        onChange={handleChange}
                        name="token"
                    />
                </div>
                {/* <div style={{ display: 'flex', margin: '10px' }}>
                    <label style={{ width: '200px' }}>Employer Id :</label>
                    <input
                        value={state.employerId}
                        type="text"
                        onChange={handleChange}
                        name="employerId"
                    />
                </div>
                <div style={{ display: 'flex', margin: '10px' }}>
                    <label style={{ width: '200px' }}>User Id :</label>
                    <input
                        value={state.userId}
                        type="text"
                        onChange={handleChange}
                        name="userId"
                    />
                </div> */}
                <div style={{ display: 'flex', margin: '10px' }}>
                    <label style={{ width: '300px' }}>Test Domain <span style={{ fontSize: '8px' }}>(eg: `https://app.greytip.qa.repute.net`, `http://localhost:3000`) </span> :</label>
                    <input
                        value={state.domain}
                        style={{width: '250px'}}
                        type="text"
                        onChange={handleChange}
                        name="domain"
                    />
                </div>
            </div>
            <br />
            <br />
            <br />
            <button>
                <Link to={{
                    pathname: `/reputeiframe`,
                    state: {
                        token: state.token,
                        employerId: state.employerId,
                        userId: state.userId,
                        domain: state.domain
                    },
                }}>Open In Iframe</Link></button>
            <br />
            <br />
            <br />
            <button onClick={openWin}>Open In New Window</button>

        </div>
    );
}

export default TextBtn;