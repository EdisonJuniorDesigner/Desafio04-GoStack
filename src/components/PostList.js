import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Clara Lisboa',
          avatar: 'https://i.pravatar.cc/150?img=5'
        },
        date: '28 Nov 2019',
        content: 'Pessoal, Vocês viram o preço do Combo do Star Wars na Cinemark?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Edison Junior',
              avatar: 'https://avatars3.githubusercontent.com/u/44264221?s=400&u=95cb0fb0e4dd4b644f1e328dd69d7fd42a43ab7c&v=4'
            },
            date: '28 Nov 2019',
            content:
              'Vi e está o cúmulo do absurdo!'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Willian Nunes',
          avatar: 'https://i.pravatar.cc/150?img=15'
        },
        date: '27 Nov 2019',
        content:
          'Caramba... cadê o novo episódio de Mandalorian? :/\n#Chateado',
        comments: [
          {
            id: 4,
            author: {
              name: 'Edison Junior',
              avatar: 'https://avatars3.githubusercontent.com/u/44264221?s=400&u=95cb0fb0e4dd4b644f1e328dd69d7fd42a43ab7c&v=4'
            },
            date: '28 Nov 2019',
            content:
              'Foi muitooo massa, simplismente incrível!!!'
          },
          {
            id: 5,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '27 Nov 2019',
            content:
              'Também estou to esperando, o último foi ótimo, o Bebê Yoda é super fofooo'
          },
        ]
      },
      {
        id: 6,
        author: {
          name: 'Ricardo Alberto',
          avatar: 'https://i.pravatar.cc/150?img=60'
        },
        date: '25 Nov 2019',
        content:
          'Por que esse dia não passa logo !? -_-',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clarice Vulge',
              avatar: 'https://i.pravatar.cc/150?img=30'
            },
            date: '28 Nov 2019',
            content:
              'Relaxa daqui a pouco passa!'
          },
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
