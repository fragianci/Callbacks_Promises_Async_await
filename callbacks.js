posts = [
  { title: 'post 1', body: 'This is the post 1' },
  { title: 'post 2', body: 'This is the post 2' },
]

function getPosts(){
  setTimeout(()=>{
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000)
}

function createPosts(post, callback){
  setTimeout(()=>{
    posts.push(post);
    callback();
  }, 2000)
}

getPosts();
createPosts({ title: 'post 3', body: 'This is the post 3' }, getPosts);