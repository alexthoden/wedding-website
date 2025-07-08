export interface Guest {
  name: string;
  email: string;
  invited_guests: number;
  group_id: string;
}

export const loadGuestList = async (): Promise<Guest[]> => {
  try {
    const response = await fetch('/guest-list.csv');
    const csvText = await response.text();
    
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');
    
    const guests: Guest[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      if (values.length >= 4) {
        guests.push({
          name: values[0].trim(),
          email: values[1].trim(),
          invited_guests: parseInt(values[2].trim()) || 1,
          group_id: values[3].trim()
        });
      }
    }
    
    return guests;
  } catch (error) {
    console.error('Error loading guest list:', error);
    return [];
  }
};

export const findGuestByEmail = (guests: Guest[], email: string): Guest | null => {
  return guests.find(guest => 
    guest.email.toLowerCase() === email.toLowerCase()
  ) || null;
};
