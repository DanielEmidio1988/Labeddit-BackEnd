-- Active: 1677687953792@@127.0.0.1@3306
CREATE TABLE users(
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    username TEXT NOT NULL, 
    email TEXT NOT NULL, 
    password TEXT NOT NULL, 
    role TEXT NOT NULL, 
    created_at TEXT DEFAULT(DATETIME()));

CREATE TABLE posts(
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    creator_id TEXT NOT NULL, 
    content TEXT, 
    comments INTEGER DEFAULT(0) NOT NULL,
    likes INTEGER DEFAULT(0) NOT NULL, 
    dislikes INTEGER DEFAULT(0) NOT NULL, 
    created_at TEXT DEFAULT(DATETIME()) NOT NULL, 
    updated_at TEXT DEFAULT(DATETIME()) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users (id));

CREATE TABLE comments_posts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    creator_id TEXT NOT NULL, 
    content TEXT,
    likes INTEGER DEFAULT(0) NOT NULL, 
    dislikes INTEGER DEFAULT(0) NOT NULL, 
    created_at TEXT DEFAULT(DATETIME()) NOT NULL, 
    updated_at TEXT DEFAULT(DATETIME()) NOT NULL,
    post_id TEXT NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users (id),
    FOREIGN KEY (post_id) REFERENCES posts (id)
);

CREATE TABLE likes_dislikes(
    user_id TEXT NOT NULL, 
    post_id TEXT NOT NULL,
    like INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(post_id) REFERENCES posts(id));

CREATE TABLE likes_dislikes_comments(
    user_id TEXT NOT NULL, 
    comment_id TEXT NOT NULL, 
    like INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY (comment_id) REFERENCES comments_posts(id));


SELECT * FROM users;

SELECT * FROM posts;

SELECT * FROM comments_posts;

SELECT * FROM likes_dislikes;

SELECT * FROM likes_dislikes_comments;

INSERT INTO users (id, username, email, password, role)
VALUES ("u001", "Daniel", "daniel@labeddit.com", "123654","ADMIN"),
("u002", "Cristiano", "cristiano@labeddit.com", "654123","NORMAL");

INSERT INTO posts (id, creator_id, content)
VALUES ("p001", "u001", "Ultimo projeto de Full Stack Entregue!"),
("p002", "u001", "Qual o melhor lugar para encontrar vagas?"),
("p003", "u002", "O que vocês escutam enquanto programam?");

INSERT INTO comments_posts(id, creator_id, content, post_id)
VALUES("c001", "u002", "Parabéns! \o/", "p001"),
("c002", "u001", "Valeu! :)", "p001"),
("c003", "u002", "Prefiro o LabedIn", "p002");

DELETE FROM posts;

UPDATE users SET role="ADMIN" WHERE ID = 'e5211187-9114-49dc-bb8e-42225b5bf8f9';

SELECT comments_posts.id, 
comments_posts.content,
comments_posts.likes,
comments_posts.dislikes,
comments_posts.created_at,
comments_posts.updated_at,
users.id,
users.username
FROM comments_posts LEFT JOIN users
ON users.id = comments_posts.creator_id;
