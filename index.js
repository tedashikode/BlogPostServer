const { ApolloServer, gql } = require('apollo-server');

    //Schemas
    //typeDefs
    //Resolvers
    //Mutation

    //Schemas
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
    
    
    
    
    //the schema for the server
    const schemas = gql`
        #what does type even mean in graphql???
        type Blog {
            #the fields every blog should have
            blogID: ID
            title: String!
            author: String!
            DateOfBlog: String!
            banner: String
            comments: String!
            likes: Int
            dislikes: Int
        }

        #I guess we should add types for all our mandatory fields

        #type Author{}
        #type Comment{}
        
        
        type Query {
            allTheBlogs: [Blog]
            blogByID(blogID: ID): Blog
            DateOfBlog: String!
        }
        
        #type Mutation
      #  type Mutation   createBlog(title: String!, author: String!, DateOFBlog: String!): Blog      }
        
        #type Subscription
    `;
    
    //Resolvers
    const blogResolvers = {
        Query: {
            allTheBlogs: () => blogs,
            blogByID: (parent, args) => blogs.find(blogs1 => blogs.title === args.title)
        },
    
        // Mutation: {
        //     createBlogs: ( parents, args) => {
                
        //         const { title, author, DateOfBlog } = args;
    
        //         const blog = { title, author, DateOfBlog };
    
        //         blogs.push(blog);
    
        //         return(blog);
    
        //     },

            // deleteBlogs: ( parents, args) => {
                
            //     const { title, author, DateOfBlog } = args;
    
            //     const blog = { title, author, DateOfBlog };
    
            //     blogs.push(blog);
    
            //     return(blog);
    
            // },

            // updateBlogs: ( parents, args) => {
                
            //     const { title, author, DateOfBlog } = args;
    
            //     const blog = { title, author, DateOfBlog };
    
            //     blogs.push(blog);
    
            //     return(blog);
    
            // },

            // Blogs: ( parents, args) => {
                
            //     const { title, author, DateOfBlog } = args;
    
            //     const blog = { title, author, DateOfBlog };
    
            //     blogs.push(blog);
    
            //     return(blog);
    
            // },
        }
        // Mutation: {}
    
    
    const serve = new ApolloServer({ typeDefs: schemas, resolvers: blogResolvers});
    
    serve.listen(9000)
    .then(({ url }) => {
        console.log(`Server ready at ${url}`);
    }) 
    .catch(err => console.log(err));    