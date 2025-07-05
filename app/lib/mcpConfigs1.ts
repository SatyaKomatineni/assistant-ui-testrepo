export const mcpConfigs1 = [
  // Example: Only one config for demonstration
  {
    id: 'claims',
    type: 'streamable-http' as const,
    url: 'http://127.0.0.1:9000/mcp'
  },

  // streamable-http cmdb
  {
    id: 'cmdb',
    type: 'streamable-http' as const,
    url: 'http://127.0.0.1:9001/mcp'
  },

  // streamable-http provider
  {
    id: 'provider',
    type: 'streamable-http' as const,
    url: 'http://127.0.0.1:9002/mcp'
  },

  // streamable-http prompts
  {
    id: 'prompts',
    type: 'streamable-http' as const,
    url: 'http://127.0.0.1:9003/mcp'
  },
]