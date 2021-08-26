const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      // console.log(User.find({}));
      return User.find({}).populate('savedBooks');
    },
    
    
  },
  Mutation: {
    addBook: async (parent, { bookId, authors, description, image, link, title}) => {

      let bookData = { bookId: bookId, 
                      authors: authors, 
                      description: description, 
                      image: image, 
                      link: link, 
                      title: title};
      let id = "6125c30af67a8e2acaed2e77"
      let newBook = await User.findOneAndUpdate(
        { _id: id}, 
        { $push: { savedBooks: bookData  } },
        {
          new: true,
          // runValidators: true,
        }
      );
      return newBook;
    },
},
};

module.exports = resolvers;



// module.exports = {empty: "empty"};


// matchups: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return Matchup.find(params);
    // },
