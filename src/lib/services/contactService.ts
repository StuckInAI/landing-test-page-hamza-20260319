import 'server-only';
import { initializeDatabase } from '@/lib/data-source';
import { ContactMessage } from '@/lib/entities/ContactMessage';

interface SaveContactMessageParams {
  name: string;
  email: string;
  message: string;
}

interface SaveContactMessageResult {
  success: boolean;
  error?: string;
}

export async function saveContactMessage(params: SaveContactMessageParams): Promise<SaveContactMessageResult> {
  try {
    const dataSource = await initializeDatabase();
    const contactRepository = dataSource.getRepository(ContactMessage);
    
    const contactMessage = new ContactMessage();
    contactMessage.name = params.name.trim();
    contactMessage.email = params.email.trim();
    contactMessage.message = params.message.trim();
    
    await contactRepository.save(contactMessage);
    
    return { success: true };
  } catch (error) {
    console.error('Error saving contact message:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}