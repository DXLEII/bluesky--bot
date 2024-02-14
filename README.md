<h1>Bluesky Bot</h1>

<p>Bluesky Bot is a simple bot designed to post "Hello, World!" to your Bluesky account every minute. It serves as a starting point for more complex interactions with Bluesky.</p>

<h2>Getting Started</h2>

<ol>
    <li>Clone the repository to your local machine:
        <pre><code>git clone https://github.com/DXLEII/bluesky--bot.git</code></pre>
    </li>
    <li>Navigate to the project directory:
        <pre><code>cd bluesky-bot</code></pre>
    </li>
    <li>Install dependencies using npm:
        <pre><code>npm install</code></pre>
    </li>
    <li>Create a <code>.env</code> file based on <code>.env.template</code> and fill in your Bluesky account information. Ensure the <strong>username</strong> follows the <strong>user.bsky.social</strong> format, or the bot won't work.</li>
    <li>Run the bot using ts-node:
        <pre><code>ts-node bot.ts</code></pre>
    </li>
</ol>

<h2>Usage</h2>

<p>Bluesky Bot will automatically post "Hello, World!" to your Bluesky account every minute. You can customize this behavior by modifying the <code>example_bot.ts</code> file to suit your needs.</p>

<h2>Environment Variables</h2>

<p>Make sure to keep your <code>.env</code> file secure and never expose it publicly. It should contain the following variables:</p>

<ul>
    <li><code>BLUESKY_USERNAME</code>: Your Bluesky username in the <strong>user.bsky.social</strong> format.</li>
    <li><code>BLUESKY_PASSWORD</code>: Your Bluesky password.</li>
</ul>

<h2>Security</h2>

<p>It's important to keep your <code>.env</code> file secure and never expose it publicly. Avoid committing it to version control systems or sharing it with others.</p>

test
