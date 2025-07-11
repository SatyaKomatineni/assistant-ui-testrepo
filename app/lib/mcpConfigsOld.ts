export const mcpConfigs = [
  // // streamable-http mcp-demo-typescript - tell a joke and database query
  // {
  //   id: 'http-streamable-typescript-test',
  //   type: 'streamable-http' as const,
  //   url: 'http://127.0.0.1:4000/mcp'
  // },

  // streamable-http claims
  {
    id: 'claims',
    type: 'streamable-http' as const,
    url: 'http://127.0.0.1:9000/mcp'
  },

  // streamable-http prompts
  {
    id: 'prompts',
    type: 'streamable-http' as const,
    url: 'http://127.0.0.1:9001/mcp'
  },

  // streamable-http pharmacy
  {
    id: 'pharmacy',
    type: 'streamable-http' as const,
    url: 'http://127.0.0.1:9002/mcp'
  },

  // streamable-http cmdb
  {
    id: 'cmdb',
    type: 'streamable-http' as const,
    url: 'http://127.0.0.1:9003/mcp'
  },

  // streamable-http provider
  {
    id: 'provider',
    type: 'streamable-http' as const,
    url: 'http://127.0.0.1:9004/mcp'
  },

  // stdio mcp-demo-typescript
  {
    id: 'stdio-test',
    type: 'stdio' as const,
    command: 'node',
    args: ['/Users/duanewood/dev/sandbox/mcp/mcp-demo-typescript/dist/server.js']
  }
];
