// Higher Order Fn(s)

// a higher order fn is the one which does atleast one of the following:
// 1) takes one or more fn(s) as an argument(parameter)
// 2) returns a fn as the result


// The curly braces { posts } mean you are importing an export with the exact name posts from the module (i.e "named exports")
import { posts } from "./posts.js";


// for each()-> alternate to for loop

posts.forEach( (post)=>{
    console.log(post);
} );
console.clear();

// .filter()-> used for filtering records
// here filtering posts array
const filteredPosts = posts.filter( (post)=>{
    return post.userId=== 1;
});
console.log(filteredPosts);

// .map()-> maps each post to a specific value
// here mapping each post id of user 1 to *10
const mappedPosts = filteredPosts.map((post)=>{
    return post.id*10;
});
console.log(mappedPosts);

// .reduce()-> combine all elements of array to a single value
// here adding all values of mappedPosts array
const reducedPostsValue = mappedPosts.reduce( (sum,post)=>{
    return sum+post;
});
console.log(reducedPostsValue);

// --------------------------------------------//