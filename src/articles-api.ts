import axios from "axios";

type Image = {
    id: string;
    urls: {
        small: string;
    };
    alt_description: string;
    user: {
        name: string;
    };
    likes: number;
    description: string;
};

export async function fetchImages(topic: string, page: number) {
    const res = await axios.get<{ results: Image[] }>(
        `https://api.unsplash.com/search/photos`, {
        params: {
            query: topic,
            page: page,
            per_page: 12,
            client_id: '__ezgUmZErHBgaV0A33XF55QlhlArX1dIRP8hszudqU',
        }
    }
    );
    return res.data.results.map((image) => ({
        id: image.id,
        url: image.urls.small,
        alt_description: image.alt_description,
        author: image.user.name,
        likes: image.likes,
        description: image.description,
    }));
}
