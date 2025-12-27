import SearchButton from "@/components/SearchButton"
import ButtonGenFilter from "@/components/ButtonGenFilter"
import GenEventList from '@/components/GenEventList';
import { getEvents } from '@/lib/eventLoader';

import Image from "next/image"

export default function EventsPage() {
    const allEvents = getEvents()
    
    return (
        <div className="flex flex-col py-8 px-6">
            <h2 className="text-3xl font-bold mb-3.5">Aktivitas</h2>
            <hr className="border-t-2 border-other-gray opacity-50 mb-4"/>
            <GenEventList initialData={allEvents}/>
        </div>

    )
}