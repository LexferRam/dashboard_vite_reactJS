import { useEffect, useState } from 'react'
import '../styles/DisignPrinciple.css'
import { testingservice } from '../services/testing.services'

const DisignPrincinples = () => {

    const [morty, setMorty] = useState({} as any)

    const fetchMorty = async () => {
        const { data } = await testingservice()
        setMorty(data)
    }

    useEffect(() => {
        fetchMorty()
    }, [])
    return (
        <>
            DisignPrincinples
            <div className='grid'>
                <div className='ele1'>element1</div>
                <div className='ele2'>element2</div>
                <div className='ele3'>element3</div>
                <div className='ele4'>element4</div>
                <div className='ele5'>element5</div>
                <div className='ele6'>element6</div>
            </div>
            {JSON.stringify(morty)}
        </>
    )
}

export default DisignPrincinples