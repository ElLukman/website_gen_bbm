'use-client'

interface SearchButtonProps {
    onSearch: (keyword: string) => void; 
}

export default function SearchButton({ onSearch }: SearchButtonProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
    };

    return (
        <form className="font-poppins">
            <label htmlFor="search" className="sr-only mb-2 text-sm font-medium text-radix-dark">Search</label>
            <div className="relative">
                
                {/* Ikon Kaca Pembesar */}
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4">
                    <svg className="h-4 w-4 text-other-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>

                {/* Input Field */}
                <input
                    type="search"
                    id="search"
                    className="block w-full rounded-full border border-secondary-10 bg-white p-4 ps-10 text-sm text-radix-dark shadow-sm placeholder:text-other-gray focus:border-secondary-6 focus:ring-secondary-6 focus:outline-none transition-all duration-300"
                    onChange={handleInputChange}
                    placeholder="   Cari sesuatu..."
                    required
                />

                {/* Tombol Search */}
                <button
                    type="submit"
                    className="cursor-pointer absolute bottom-2 end-2.5 rounded-full bg-secondary-6 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-secondary-4 hover:shadow-md active:shadow-md active:bg-secondary-4 focus:outline-none focus:ring-4 focus:ring-secondary-10"
                >
                    Search
                </button>
            </div>
        </form>
    )
}