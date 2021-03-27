const prod = {
    url: {
        API_URL: ''
    }
};

const dev = {
    url: {
        API_URL: 'https://admin-bhrc.kazimovs.dev/api/',
        IMAGE_URL: 'https://admin-bhrc.kazimovs.dev/cdn/storage/'
    }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;