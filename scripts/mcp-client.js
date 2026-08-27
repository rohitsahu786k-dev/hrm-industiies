#!/usr/bin/env node

/**
 * 21st.dev MCP Client CLI & Library
 * Connects directly to 21st.dev Streamable HTTP MCP server
 */

const https = require('https');

const MCP_ENDPOINT = 'https://21st.dev/api/mcp';
const API_KEY = process.env.API_KEY_21ST || '21st_sk_076b86acbc0b7c5f481744f8d162d1a66aabb953723feb4b66f5a85aec212c4b';

async function sendMCPRequest(method, params = {}) {
  const payload = JSON.stringify({
    jsonrpc: '2.0',
    id: Date.now(),
    method,
    params
  });

  return new Promise((resolve, reject) => {
    const req = https.request(MCP_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'Authorization': `Bearer ${API_KEY}`
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) {
            reject(new Error(parsed.error.message || JSON.stringify(parsed.error)));
          } else {
            resolve(parsed.result);
          }
        } catch (e) {
          reject(new Error(`Failed to parse response: ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function listTools() {
  const res = await sendMCPRequest('tools/list', {});
  return res.tools || [];
}

async function searchComponents(query, options = {}) {
  const res = await sendMCPRequest('tools/call', {
    name: 'search',
    arguments: {
      query,
      ...options
    }
  });
  return res;
}

async function getComponent(id) {
  const res = await sendMCPRequest('tools/call', {
    name: 'get_component',
    arguments: { id: Number(id) }
  });
  return res;
}

// CLI Execution
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0] || 'list-tools';

  (async () => {
    try {
      if (command === 'list-tools') {
        console.log('Fetching available tools from 21st.dev MCP...');
        const tools = await listTools();
        console.log(`\nSuccessfully connected! Found ${tools.length} available tools:\n`);
        tools.forEach((t, i) => {
          console.log(`${(i + 1).toString().padStart(2, ' ')}. [${t.name}]`);
          console.log(`    ${t.description.split('\n')[0]}`);
        });
      } else if (command === 'search') {
        const query = args.slice(1).join(' ') || 'bento grid';
        console.log(`Searching 21st.dev for "${query}"...`);
        const result = await searchComponents(query);
        console.log('\n--- Search Results ---');
        console.log(result.content?.[0]?.text || JSON.stringify(result, null, 2));
      } else if (command === 'get') {
        const id = args[1];
        if (!id) {
          console.error('Please provide a component ID: node mcp-client.js get <id>');
          process.exit(1);
        }
        console.log(`Fetching component ID ${id}...`);
        const result = await getComponent(id);
        console.log('\n--- Component Code ---');
        console.log(result.content?.[0]?.text || JSON.stringify(result, null, 2));
      } else {
        console.log('Usage:');
        console.log('  node scripts/mcp-client.js list-tools');
        console.log('  node scripts/mcp-client.js search <query>');
        console.log('  node scripts/mcp-client.js get <component-id>');
      }
    } catch (err) {
      console.error('MCP Error:', err.message);
      process.exit(1);
    }
  })();
}

module.exports = {
  sendMCPRequest,
  listTools,
  searchComponents,
  getComponent
};
