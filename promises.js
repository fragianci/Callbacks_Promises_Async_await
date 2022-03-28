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

// createPosts({title: 'post 3', body: 'Post 3 body'})
//   .then(getPosts)
//   .catch(error => console.log(error))

const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>{
  setTimeout(resolve, 2000, 'Goodbye');
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
Promise.all([promise1, promise2, promise3, promise4]).then(((values)=>console.log(values)))