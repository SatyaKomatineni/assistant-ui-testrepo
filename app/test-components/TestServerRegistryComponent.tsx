'use client';

// TestServerRegistryComponent.tsx
// Client-side component to view (not edit) MCP server registry, with refresh
import React, { useEffect, useState } from 'react';
import { Button } from '../../components/ui/button';

type MCPServerSpec = {
  id: string;
  name: string;
  enabled: boolean;
};

export default function TestServerRegistryComponent() {
  const [servers, setServers] = useState<MCPServerSpec[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchServers = async () => {
    setLoading(true);
    const res = await fetch('/api/mcp-servers');
    const data = await res.json();
    setServers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchServers();
  }, []);

  return (
    <div style={{ border: '2px solid #ccc', borderRadius: 8, padding: 24, margin: 24 }}>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
        {servers.map(server => (
          <Button
            key={server.id}
            variant={server.enabled ? 'default' : 'outline'}
            disabled
          >
            {server.name} ({server.enabled ? 'Enabled' : 'Disabled'})
          </Button>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
        <Button onClick={fetchServers} disabled={loading}>
          Refresh
        </Button>
      </div>
    </div>
  );
}
