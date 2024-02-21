const posts= require('../posts.json')
const fs = require("fs").promises;

//get all products 
function getAllPosts() {
    return posts;
}

//get by id
function getById(id) {
    const post = posts.find((p)=>p.id == id);
    if (!post) {
        return " error not found ";
    }
    return post;
}

//create a post 
async function createPost(post) {
    posts.push({...post});
        try {
            await fs.writeFile('./posts.json', JSON.stringify(posts, null, 2));
            console.log('Data has been written to', '../posts.json');
            // Read the contents of input.txt
            const data = await fs.readFile('./posts.json', 'utf8');
            console.log('File contents:', data);
            return posts;
        } catch (error) {
            console.error('Error writing file:', error);
        }
     
}

//update a post 

async function updatePost(post,id) {
    const p= posts.find((po)=>po.id==id);
    if (!p) {
        return "error not found";
    }
    const index = posts.indexOf(p);
    if (index !== -1) {
        return {
            message: "This id is already in use"
        };
    }
    posts[index]=post;
    try {
        await fs.writeFile('./posts.json', JSON.stringify(posts, null, 2));
        console.log('Data has been written to', '../posts.json');
        // Read the contents of input.txt
        const data = await fs.readFile('./posts.json', 'utf8');
        console.log('File contents:', data);
        return posts;
    } catch (error) {
        console.error('Error writing file:', error);
    }
}

//remove post

async function removePost(id) {
    const p=posts.find((po)=>po.id == id);
    const index = posts.indexOf(p);
    if (index !== -1) {
        return {
            message: "This id is already in use"
        };
    }
    posts.splice(index,1);
    try {
        await fs.writeFile('./posts.json', JSON.stringify(posts, null, 2));
        console.log('Data has been written to', '../posts.json');
        // Read the contents of input.txt
        const data = await fs.readFile('./posts.json', 'utf8');
        console.log('File contents:', data);
        return posts;
    } catch (error) {
        console.error('Error writing file:', error);
    }
}



module.exports = {
    getAllPosts,
    createPost,
    getById,
    updatePost,
    removePost
};