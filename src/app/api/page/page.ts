export const getCarouselData = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/events/feature/`
    );
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};

export const getCategoryData = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/events/category/`
    );
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};

export const getCurrentData = async (category?: string) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/events/current/?${category !== 'All' && `category=${category}`}`
    );
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};

export const getUpcomingData = async (category?: string) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/events/upcoming/?${category !== 'All' && `category=${category}`}`
    );
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};
