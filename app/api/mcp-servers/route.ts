// app/api/mcp-servers/route.ts
// API route for getting and updating MCP server registry
import { NextRequest } from 'next/server';
import { mcpServerRegistry } from '@/app/server/mcpServerRegistry';

export async function GET() {
  // Return the list of MCP servers
  return Response.json(mcpServerRegistry.getList());
}

export async function POST(req: NextRequest) {
  // Update a server's enabled state
  const { id, enabled } = await req.json();
  mcpServerRegistry.update(id, enabled);
  return Response.json({ success: true });
}
