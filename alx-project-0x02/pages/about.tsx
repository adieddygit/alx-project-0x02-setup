import Button from '@/components/common/Button';

import { FC} from 'react';

const About: FC = ()=>{
    return (

        <div className='p-6 space-y-6'>
            <h1 className='flex items-center justify-center font-bold text-4xl'>This is the about page</h1>
            <div className="flex flex-wrap justify-center gap-4">
                <Button title='Small Rounded-sm' shape='rounded-sm' size='small'/>
                <Button title='Medium Rounded-md' shape='rounded-md' size='medium'/>
                <Button title='Large Rounded-full' shape="rounded-full" size='large'/>
            </div>
        </div>
    )
}

export default About;