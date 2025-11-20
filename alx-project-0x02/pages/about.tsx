import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

import { FC} from 'react';

const About: FC = ()=>{
    return (

        <div>
            <Header title='About Page'/>
            <div className="flex flex-wrap justify-center gap-4 m-5">
                <Button title='Small Rounded-sm' shape='rounded-sm' size='small'/>
                <Button title='Medium Rounded-md' shape='rounded-md' size='medium'/>
                <Button title='Large Rounded-full' shape="rounded-full" size='large'/>
            </div>
        </div>
    )
}

export default About;