const User = require('./User');
const Post = require("./Post");

// create associations

// User has many Post
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

  // Post can only belong to one user
Post.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Post };