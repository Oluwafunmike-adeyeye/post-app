<h1>React CRUD App</h1>
<p>A simple CRUD (Create, Read, Update, Delete) application built with React.js, using the JSONPlaceholder API to manage posts data.</p>

<h2>Getting Started</h2>
<p>To run this project locally, follow these steps:</p>

<p>Clone the Repository:</p>
<pre><code>git clone  https://github.com/Oluwafunmike-adeyeye/post-app.git
cd react-crud-app</code></pre>

<p>Install Dependencies:</p>
<pre><code>npm install</code></pre>

<p>Run the Development Server:</p>
<pre><code>npm start</code></pre>

<p>Open in Your Browser:</p>
<p>Visit <a href="http://localhost:3000](https://oluwafunmike-adeyeye-post-app.netlify.app">http://localhost:3000](https://oluwafunmike-adeyeye-post-app.netlify.app</a> to use the application.</p>

<h2>Features</h2>
<ul>
  <li><strong>Paginated Listing:</strong> 10 posts per page</li>
  <li><strong>Detailed Posts:</strong> Click any post to see full details</li>
  <li><strong>Edit Posts:</strong> Update post information through forms</li>
  <li><strong>Delete Posts:</strong> Remove posts permanently from the API</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li><strong>React.js:</strong> Frontend library for building user interfaces</li>
  <li><strong>React Router:</strong> Navigation and routing management</li>
  <li><strong>Tailwind CSS:</strong> Modern styling framework</li>
  <li><strong>JSONPlaceholder:</strong> Fake REST API for data operations</li>
</ul>

<h2>API Endpoints</h2>
<ul>
  <li><strong>Base URL:</strong> https://jsonplaceholder.typicode.com/posts</li>
  <li><strong>GET /posts:</strong> Fetch all posts</li>
  <li><strong>GET /posts/{id}:</strong> Get single post details</li>
  <li><strong>PUT /posts/{id}:</strong> Update existing post</li>
  <li><strong>DELETE /posts/{id}:</strong> Delete post</li>
</ul>

<h2>Routes</h2>
<ul>
  <li><strong>/</strong> - Main posts listing</li>
  <li><strong>/item/:id</strong> - Individual post details</li>
  <li><strong>/edit/:id</strong> - Post editing interface</li>
</ul>

<h2>Contributions</h2>
<p>Contributions are welcome! Please:</p>
<ul>
  <li>Fork the repository</li>
  <li>Create a feature branch</li>
  <li>Submit pull requests for review</li>
</ul>

<h2 style="text-align: center;">Development Notes</h2>
<p style="text-align: center;">This project uses Create React App for scaffolding<br>
Data persistence is simulated through JSONPlaceholder API</p>

<h2>License</h2>
<p>MIT Licensed - See LICENSE file for details</p>

<p>For any issues or feature requests, please open a GitHub issue.</p>
