const users = [{
    id: '1',
    name: 'TASK 1',
    email: 'andrew@example.com',
    age: 27
}, {
    id: '2',
    name: 'TASK 2',
    email: 'sarah@example.com'
}, {
    id: '3',
    name: 'TASK 3',
    email: 'mike@example.com'
}, {
    id: '4',
    name: 'TASK 4',
    email: 'mike0123@example.com'
},
{
    id: '5',
    name: 'TASK 5',
    email: 'mike0123@example.com'
}]

const posts = [{
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1'
}, {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false,
    author: '1'
}, {
    id: '12',
    title: 'Programming Music',
    body: '',
    published: true,
    author: '2'
}]

const comments = [{
    id: '102',
    text: 'This worked well for me. Thanks!',
    author: '3',
    post: '10'
}, {
    id: '103',
    text: 'Glad you enjoyed it.',
    author: '1',
    post: '10'
}, {
    id: '104',
    text: 'This did no work.',
    author: '2',
    post: '11'
}, {
    id: '105',
    text: 'Nevermind. I got it to work.',
    author: '1',
    post: '12'
}]

const todo = [{
  task: 'go to gym',
  status: false ,
  id: '1'
},
{
    task: 'have breakfast',
    status: false ,
    id: '2'
  },
  {
    task: 'do nothing',
    status: true ,
    id: '3'
  }
]
const db = {
    users,
    posts,
    comments
}

export { db as default }