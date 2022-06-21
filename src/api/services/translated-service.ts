import MyMemoryService from './my-memory-service';

export interface TranslatedResponse {
    responseData: {
        translatedText: string;
        match: number;
        matches: Matches[];
    };
}

export interface Matches {
    id: string;
    segment: string;
    translation: string;
}

class TranslatedService extends MyMemoryService {
    /** Returns user's experience list */
    async getTranslation(word: string): Promise<TranslatedResponse[]> {
        const response = await this.httpClient.request({
            url: `${this.baseUrl}/about-page-service/customer-api/experience`,
            method: 'GET',
            params: {
                q: word,
                langpair: 'en|uk'
            }
        });

        return response.data;
    }
}

export default TranslatedService;
