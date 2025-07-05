import { experimental_createMCPClient as createMCPClient } from "ai";
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { Tool } from 'ai';

// type MCPClientType = 'stdio' | 'streamable-http';
interface StreamableHttpConfig {
  id: string;
  type: 'streamable-http';
  url: string;
}

interface StdioConfig {
  id: string;
  type: 'stdio';
  command: string;
  args: string[];
}

type MCPClientConfig = StreamableHttpConfig | StdioConfig;

interface MCPClient {
  client: Awaited<ReturnType<typeof createMCPClient>>;
  tools: Record<string, Tool>;
}

class MCPRegistry {
  private static instance: MCPRegistry;
  private clients: Map<string, MCPClient> = new Map();
  private configs: MCPClientConfig[] = [];
  private bInitialized = false;

  private constructor() {}

  static getInstance(): MCPRegistry {
    if (!MCPRegistry.instance) {
      MCPRegistry.instance = new MCPRegistry();
    }
    return MCPRegistry.instance;
  }

  setConfigs(configs: MCPClientConfig[]) {
    this.configs = configs;
  }

  isInitialized(): boolean {
    return this.bInitialized;
  }

  // ['/Users/duanewood/dev/sandbox/mcp/mcp-demo-typescript/dist/server.js'],
  async initialize() {
    if (this.bInitialized) {
      console.warn('MCPRegistry is already initialized');
      return;
    } 
    for (const config of this.configs) {
      try {
        let transport;
        
        if (config.type === 'streamable-http') {
          if (!config.url) {
            throw new Error('URL is required for streamable-http type');
          }
          transport = new StreamableHTTPClientTransport(new URL(config.url));
        } else {
          if (!config.command || !config.args) {
            throw new Error('Command and args are required for stdio type');
          }
          transport = new StdioClientTransport({
            command: config.command,
            args: config.args
          });
        }

        const client = await createMCPClient({ transport });
        const tools = await client.tools();
        console.log('Get tools from MCPConfig:', config, ', tools:', tools);

        this.clients.set(config.id, {
          client,
          tools,
        });
      } catch (error) {
        console.error(`Failed to initialize MCP client of type ${config.type}:`, error);
      }
    }
    this.bInitialized = true;
  }

  getTools(): Record<string, Tool> {
    const allTools: Record<string, Tool> = {};
    
    for (const client of this.clients.values()) {
      Object.assign(allTools, client.tools);
    }

    return allTools;
  }

  async close() {
    for (const client of this.clients.values()) {
      try {
        await client.client.close();
      } catch (error) {
        console.error('Error closing MCP client:', error);
      }
    }
    this.clients.clear();
  }
}

export const mcpRegistry = MCPRegistry.getInstance(); 