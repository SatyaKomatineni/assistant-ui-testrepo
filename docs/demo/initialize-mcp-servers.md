<!-- ********************* -->
# How and where are the mcp servers initialzed?
<!-- ********************* -->

The following files

1. Files are in /app/lib
2. mcpconfig*.ts - json list of servers
3. init.ts  - uses mcpconfig files to init mcpregistry and close
4. mcpRegistry.ts - Singleton that holds the prefabricated clients

<!-- ********************* -->
## How to change the mcp server list
<!-- ********************* -->

1. Open the mcpconfig*.ts files
2. See which one is active by looking at "init.ts"
3. Then change the json there

<!-- ********************* -->
# ip addresses
<!-- ********************* -->

```
claims: 9000
cmdb: 9001
provider: 9002
prompts: 9003
```

<!-- ********************* -->
## Full Configuration: mcpConfig1.ts 
<!-- ********************* -->

File location

```
(/app/lib/mcpconfig1.ts)
```

```json
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
]
```