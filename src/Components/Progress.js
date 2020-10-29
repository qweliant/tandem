import React from 'react'
import { Progress } from 'antd';

const Progression = ({percent}) => {
    return(
        <React.Fragment>
            <Progress strokeLinecap="square" type="dashboard" percent={((percent/21)*100).toFixed(0)} />
        </React.Fragment>
    )
}

export default Progression;