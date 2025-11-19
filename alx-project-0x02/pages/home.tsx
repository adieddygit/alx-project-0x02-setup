import { FC} from 'react';
import Card from '@/components/common/Card';

const Home: FC = ()=>{
    return (
        <div>
            <h1 className='flex items-center justify-center font-bold text-4xl shadow-md m-5 p-4'>This is the home page</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-4'>
            <Card title='Beachfront Villa'
            content={
                
                <ul className='list-disc ml-5'>
                    <li>Stunning ocean views</li>
                    <li>Private outdoor pool</li>
                    <li>3–5 bedrooms</li>
                    <li>Perfect for family vacations</li>
                </ul>
            }/>
            <Card title='Standard Room'
            content={
                <ul className='list-disc ml-5'>
                    <li>Fully furnished single room</li>
                    <li>Comfortable bed</li>
                    <li>Private bathroom</li>
                    <li>Free Wi-Fi + ceiling fan</li>
                </ul>
            }/>
            <Card title='Deluxe Apartment'
            content={
                <ul className='list-disc ml-5'>
                    <li>Spacious 1–2 bedroom apartment</li>
                    <li>Fully equipped kitchen</li>
                    <li>Air-conditioned</li>
                    <li>24/7 security & water supply</li>
                </ul>
            }/>
            <Card title='Deluxe Apartment'
            content={
                <ul className='list-disc ml-5'>
                    <li>Spacious 1–2 bedroom apartment</li>
                    <li>Fully equipped kitchen</li>
                    <li>Air-conditioned</li>
                    <li>24/7 security & water supply</li>
                </ul>
            }/>
            </div>
        </div>
    )
}

export default Home;