const { ApolloServer, gql } = require('apollo-server');

//Schemas
//typeDefs
//Resolvers
    //Mutation

    //Schemas
    const blogs = [
    
        {
            title: "Unwind",
            author: "Neal Shusterman",
            DateOFBlog: "1-3645-5643",
            comments:'',
            likes: null,
            dislikes: null,

        },
    
    ];
    
    
    
    
    //typeDefs
    const schemas = gql`
    
        type Blog {
            title: String!
            author: String!
            DateOFBlog: String!
            comments: String!
            likes: Int
            dislikes: Int
        }
        
        type Query {
            blogs: [Blog]
            blog(title: String!): String!
            DateOFBlog: String!
        }
        
        #type Mutation
        type Mutation {
            createBlog(title: String!, author: String!, DateOFBlog: String): Blog
        }
        
        #type Subscribtion
    `;
    
    //Resolvers
    const blogResolvers = {
        Query: {
            blogs: () => blogs,
            blog: (parent, args) => blogs.find(blog => blog.title === args.title)
        },
    
        Mutation: {
            createBlogs: ( parents, args) => {
                
                const { title, author, DateOFBlog } = args;
    
                const blog = { title, author, DateOFBlog };
    
                blogs.push(blog);
    
                return(blog);
    
            },
        }
        // Mutation: {}
    }
    
    const serve = new ApolloServer({ typeDefs: schemas, resolvers: blogResolvers});
    
    serve.listen(8000)
    .then(({ url }) => {
        console.log(`Server ready at ${url}`);
    }) 
    .catch(err => console.log(err));    