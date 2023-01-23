const config = {
    mongo: {
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: false,
            autoIndex: false,
            retryWrites: false
        },
        url: `mongodb+srv://admin:admin123@blog-app-cluster.v0cit3b.mongodb.net/?retryWrites=true&w=majority`
    },
    server: {
        host: 'localhost',
        port: 4000
    }
};

export default config;
