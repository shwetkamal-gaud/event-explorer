import React from 'react'
import GlassCard from './GlassCard'
import { Event } from '@/data/events'
import Link from 'next/link'

const EventCard = ({ event }: { event: Event }) => {
    return (
        <GlassCard className='flex flex-col justify-between items-start'>
            <div>
                <h2 className="text-xl font-semibold">{event.title}</h2>
                <p className="text-sm text-gray-500">{event.date} – {event.location}</p>
            </div>
            <p className="mt-2">{event.description}</p>
            <Link href={`/events/${event.id}`} className="text-blue-600 mt-2 ">
                View Details →
            </Link>
        </GlassCard>
    )
}

export default EventCard