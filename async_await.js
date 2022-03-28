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

function createPosts(post){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      posts.push(post);
      const error = false;
      if(!error) resolve();
      else reject('Error: 1010101')
    }, 2000)
  })
}

async function init() {
  await createPosts({ title: 'post 3', body: 'This is the post 3' });
  getPosts();
}

async function fetchUsers(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  console.log(data)
}

getPosts();
fetchUsers();
init();