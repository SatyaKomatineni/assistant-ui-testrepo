// MCPServerSpecList.ts
// Holds a list of MCPServerSpec objects and provides utility methods
import { MCPServerSpec } from './MCPServerSpec';

export class MCPServerSpecList {
  list: MCPServerSpec[];

  constructor(list: MCPServerSpec[]) {
    this.list = list;
  }

  getList() {
    return this.list;
  }

  locate(id: string) {
    return this.list.find(server => server.id === id);
  }
}
