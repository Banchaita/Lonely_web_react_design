import React from 'react'

const BlockedUser = () => {
    return (
        <>
            <div className='' style={{ background: '#000000', color: 'white' }}>
                <div style={{ padding: '3rem 0' }}>
                    <p className='my-5' style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', paddingTop:'5rem' }}>Blocked Users</p>
                </div>
                <div style={{ padding: '3rem 0' }}>
                    <p className='my-2' style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '500' }}>No Block User Found</p>
                </div>
            </div>
        </>
    )
}

export default BlockedUser
