const { ApolloServer, gql } = require('apollo-server');

//Schemas
//typeDefs
//Resolvers
    //Mutation

    //Schemas
    const books = [
    
        {
            title: "Unwind",
            author: "Neal Shusterman",
            ISBN: "1-3645-5643"
        },
    
        {
            title: "Unwind",
            author: "Neal Shusterman",
            ISBN: "1-3645-5643"
        }
    ];
    
    
    
    
    //typeDefs
    const schemas = gql`
    
        type Book {
            title: String!
            author: String!
            ISBN: String
        }
        
        type Query {
            books: [Book]
            book(title: String!): Book
            ISBN: String
        }
        
        #type Mutation
        type Mutation {
            createBook(title: String!, author: String!, ISBN: String): Book
        }
        
        #type Subscribtion
    `;
    
    //Resolvers
    const booksResolvers = {
        Query: {
            books: () => books,
            book: (parent, args) => books.find(book => book.title === args.title)
        },
    
        Mutation: {
            createBook: ( parents, args) => {
                
                const { title, author, ISBN } = args;
    
                const book = { title, author, ISBN };
    
                books.push(book);
    
                return(book);
    
            },
        }
        // Mutation: {}
    }
    
    const serve = new ApolloServer({ typeDefs: schemas, resolvers: booksResolvers});
    
    serve.listen(8000)
    .then(({ url }) => {
        console.log(`Server ready at ${url}`);
    }) 
    .catch(err => console.log(err));    