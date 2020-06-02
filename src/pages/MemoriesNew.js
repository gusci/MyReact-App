import React from 'react'
import MemoriesForm from '../components/MemoriesForm'
import Card from '../components/Card'

const MemoriesNew = ({form, onChange, onSubmit}) => (
    <div className="MemoriesNew_Lateral_Spaces row">
        <div className="col-sm MemoriesNew_Card_Space">
            <Card {...form}/>
        </div>
        <div className="col-sm MemoriesNew_Form_Space">
            <MemoriesForm
                onChange={onChange}
                onSubmit={onSubmit}
                form={form}
            />            
        </div>
    </div>
)
export default MemoriesNew