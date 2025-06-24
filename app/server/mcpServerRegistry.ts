// app/server/mcpServerRegistry.ts
// Server-side MCPServerRegistry for Next.js

export type MCPServerSpec = {
  id: string;
  name: string;
  enabled: boolean;
};

class MCPServerRegistry {
  private servers: MCPServerSpec[] = [
    { id: '1', name: 'Server A', enabled: true },
    { id: '2', name: 'Server B', enabled: false },
    { id: '3', name: 'Server C', enabled: true },
  ];

  getList() {
    return this.servers;
  }

  locate(id: string) {
    return this.servers.find(server => server.id === id);
  }

  update(id: string, enabled: boolean) {
    const server = this.locate(id);
    if (server) {
      server.enabled = enabled;
      console.log(`[MCPServerRegistry] Updated server ${id} to enabled=${enabled}`);
    }
  }
}

// Singleton instance
export const mcpServerRegistry = new MCPServerRegistry();
