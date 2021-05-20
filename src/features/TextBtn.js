import React, { useState } from 'react';
import { Link } from 'react-router-dom';

let TextBtn = (props) => {
    const [state, setState] = useState({ token: "", employerId: "", tid: "" , domain :""});

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };



    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignContent:'center', justifyContent:'center' }}>
                <div style={{display: 'flex', margin: '10px'}}>
                    <label style={{width: '200px'}}>Token :</label>
                    <input
                        value={state.token}
                        type="text"
                        onChange={handleChange}
                        name="token"
                    />
                </div>
                <div style={{display: 'flex', margin: '10px'}}>
                    <label style={{width: '200px'}}>Employer Id :</label>
                    <input
                        value={state.employerId}
                        type="text"
                        onChange={handleChange}
                        name="employerId"
                    />
                </div>
                <div style={{display: 'flex', margin: '10px'}}>
                    <label style={{width: '200px'}}>Tenant Id :</label>
                    <input
                        value={state.tid}
                        type="text"
                        onChange={handleChange}
                        name="tid"
                    />
                </div>
                <div style={{display: 'flex', margin: '10px'}}>
                    <label style={{width: '300px'}}>Test Domain <span style={{fontSize:'8px'}}>(eg: `https://app.greytip.qa.repute.net`) </span> :</label>
                    <input
                        value={state.domain}
                        type="text"
                        onChange={handleChange}
                        name="domain"
                    />
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <button>
                <Link to={{
                    pathname: `/reputeiframe`,
                    state: {
                        token: state.token,
                        employerId: state.employerId,
                        tid: state.tid,
                        domain : state.domain
                    },
                }}>Open Repute</Link></button>
        </div>
    );
}

export default TextBtn;