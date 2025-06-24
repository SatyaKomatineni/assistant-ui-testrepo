// MCPServerSpec.ts
// Represents a single MCP server with enable/disable logic

export class MCPServerSpec {
  id: string;
  name: string;
  enabled: boolean;

  constructor(id: string, name: string, enabled = false) {
    this.id = id;
    this.name = name;
    this.enabled = enabled;
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }
}
