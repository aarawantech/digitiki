export type CategoryTypes = {
    uuid: string;
    name: string;
    is_shown: boolean;
}[];

export type EventDataTypes = {
    uuid: string;
    name: string;
    category: {
        uuid: string;
        name: string;
        is_shown: boolean;
    };
    short_description: string;
    long_description: string;
    start_time: string;
    end_time: string;
    feature_photo: string;
    feature_event: boolean;
    price: string;
    is_shown: boolean;
}[];

export type EventDataType = {
    uuid: string;
    name: string;
    category: {
        uuid: string;
        name: string;
        is_shown: boolean;
    };
    short_description: string;
    long_description: string;
    start_time: string;
    end_time: string;
    feature_photo: string;
    feature_event: boolean;
    price: string;
    is_shown: boolean;
};
