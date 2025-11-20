import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { PostData} from '@/interfaces';
import {useState, FC} from 'react'

const Home: FC = ()=>{
    const [isModalOpen, setModalOpen] = useState(false)

    const [cards, setCards]= useState<PostData[]>([])

    const handleAddCard = (newCard: PostData)=>{
        setCards((prev) =>[...prev, newCard]);
        setModalOpen(false)
    }
    return (
        <div>
            <Header title='Home Page'/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-5 gap-6'>
            {isModalOpen && (<PostModal onClose={()=> setModalOpen(false)} onSubmit={handleAddCard}/>)}
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
            <Card title='Executive Suite'
            content={
                <ul className='list-disc ml-5'>
                    <li>Luxury suite with king-size bed</li>
                    <li>Elegant interior + smart TV</li>
                    <li>Complimentary breakfast</li>
                    <li>High-speed Wi-Fi</li>
                </ul>
            }/>
                    {/* Dynamic cards added by user */}
                    {cards.map((card, index) => (
                    <Card
                        key={index} 
                        title={card.title} 
                        content={card.content} 
                    />
                ))}

            
            </div>
            {/* Add New Card */}
                <button onClick={()=> setModalOpen(true)} className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 m-5">
                    Add New Card
                </button>
        </div>
    )
}

export default Home;