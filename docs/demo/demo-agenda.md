<!-- ********************* -->
# Agenda for a comprehensive demo
<!-- ********************* -->

<!-- ********************* -->
# Scripts
<!-- ********************* -->

1. Explain MCP through a deck
2. Show Code how it works
3. Demo of MCP Servers interacting with Chat
4. References

<!-- ********************* -->
# Key  URLs
<!-- ********************* -->

**Demo links**
1. [github demo directory](https://github.com/SatyaKomatineni/assistant-ui-testrepo/tree/main/docs/demo)
2. [Demo agenda: this page](https://github.com/SatyaKomatineni/assistant-ui-testrepo/blob/main/docs/demo/demo-agenda.md)
3. [Test suites](https://github.com/SatyaKomatineni/assistant-ui-testrepo/blob/main/docs/demo/test-scenarios.md)
4. [MCP Server Data](https://github.com/SatyaKomatineni/assistant-ui-testrepo/blob/main/docs/demo/demo-data.md)
5. [Duane's notes.md](https://github.com/SatyaKomatineni/mcp-servers-testrepo/blob/main/docs/notes.md)
6. [Log file](https://github.com/SatyaKomatineni/mcp-servers-testrepo/blob/main/docs/ux-server-run1.log)

**During Demo:**
1. [Inspector](http://127.0.0.1:6274/)
2. [Assistant UI](http://127.0.0.1:3000)

<!-- ********************* -->
# Agenda 2: Show How code works
<!-- ********************* -->
1. Show what servers are available: [Server list: mcpconfigs1.js]()
2. Show server code using the following
3. [Claims server]()
4. [Provider server]()
5. [CMDB Server]()
6. [Prompt Server]()
7. Show how LLM is asked. [route.ts]()

<!-- ********************* -->
# Useful scripts
<!-- ********************* -->
1. setup-servers.ps1
2. cds-vscode
3. pathutils




<!-- ********************* -->
# scropt 1: Show mcp servers
<!-- ********************* -->

Goal:

1. start them
2. Examine threm through mcp inspectors

How:

1. Start all the servers
2. Use the inspector
3. plug in the URLs (See the mcp-servers.md file for urls)
4. Examine one by one


<!-- ********************* -->
# what do I have to show first!
<!-- ********************* -->
1. MCP servers
2. How to start all mcp servers
3. How to see each server in the mcp inspector
4. Test sets
5. Source code for an mcp server
6. Show how the 4 servers are defined in the config file ()