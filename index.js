const { ApolloServer, gql } = require('apollo-server');

    const blogs = [
    
        {
            title: "Graphql",
            author: "Facebook",
            DateOfBlog: "2012",
            comments: '',
            likes: 0,
            dislikes: 0,
        },

        {
            title: "Graphql",
            author: "Facebook",
            DateOfBlog: "2012",
            comments: '',
            likes: 0,
            dislikes: 0,

        },

        {
            title: "Graphql",
            author: "Facebook",
            DateOfBlog: "2012",
            comments: '',
            likes: 0,
            dislikes: 0,

        },

        {
            title: "Graphql",
            author: "Facebook",
            DateOfBlog: "2012",
            comments: '',
            likes: 0,
            dislikes: 0,

        },
    
    ];
    
    
    const schemas = gql`
        type Blog {
            blogID: ID
            title: String!
            author: String!
            DateOfBlog: String!
            banner: String
            comments: String!
            likes: Int
            dislikes: Int
        }
               
        type Query {
            allTheBlogs: [Blog]
            blogByID(blogID: ID): Blog
            DateOfBlog: String!
        }
    `

    const blogResolvers = {
        Query: {
            allTheBlogs: () => blogs,
            blogByID: (parent, args) => blogs.find(blogs1 => blogs.title === args.title)
        },
    }

    const serve = new ApolloServer({ typeDefs: schemas, resolvers: blogResolvers});
    
    serve.listen(9000)
    .then(({ url }) => {
        console.log(`Server ready at ${url}`);
    }) 
    .catch(err => console.log(err));    