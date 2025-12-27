// types/event.ts

export interface GenEvent {
  id: number | string;
  slug: string;        // Penting buat link
  title: string;
  thumbnail: string;   
  description: string; 
  date: string;        
  isOpen: boolean;     
  mitra?: string;      // Opsional
}