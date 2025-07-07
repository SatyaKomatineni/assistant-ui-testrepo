<!-- ********************* -->
# Agenda for a comprehensive demo
<!-- ********************* -->

<!-- ********************* -->
# Scripts
<!-- ********************* -->

1. Agenda 1: Explain MCP through a deck
2. Agenda 2: Show Code how it works
3. Agenda 3: Demo of MCP Servers interacting with Chat
4. Agenda 4: References
5. Agenda 5: Bonus (Surprise)

<!-- ********************* -->
# Agenda 2: Show How code works
<!-- ********************* -->

Do the following:
1. Show first what are the servers
2. show code for each server
3. Explain how the mcp tools work through the route.ts (UX, LLM and Tool interaction )

Use the following links for that:

1. Show what servers are available: [Server list: mcpconfigs1.js](https://github.com/SatyaKomatineni/assistant-ui-testrepo/blob/473191498cbeea81cb2b069a2e653f9f45627392/app/lib/mcpConfigs1.ts) 
3. Show server code using the following
4. [Claims server](https://github.com/SatyaKomatineni/mcp-servers-testrepo/blob/main/mcp-claims-python/mcp-claims-server.py)
5. [Provider server](https://github.com/SatyaKomatineni/mcp-servers-testrepo/blob/main/mcp-provider-python/mcp-provider-server.py)
6. [CMDB Server](https://github.com/SatyaKomatineni/mcp-servers-testrepo/blob/main/mcp-cmdb-python/mcp-cmdb-server.py)
7.  [Prompt Server](https://github.com/SatyaKomatineni/mcp-servers-testrepo/blob/main/mcp-prompts-python/mcp-prompts-server.py)
8.  Show how LLM is asked. [route.ts](https://github.com/SatyaKomatineni/assistant-ui-testrepo/blob/389f254584c6e5771c48e146d835f32d19a20142/app/api/chat/route.ts)


<!-- ********************* -->
## Running Servers
<!-- ********************* -->

Here is how the servers are  invoked for each Server:

1. Show how to start one of the servers. [Start Claims Server](https://github.com/SatyaKomatineni/mcp-servers-testrepo/blob/main/mcp-claims-python/runclaims-http.ps1)
2. [Running the inspector.](https://github.com/SatyaKomatineni/mcp-servers-testrepo/blob/main/mcp-claims-python/runinspector.ps1)
3. [Running "an" MCP Server as stdio](https://github.com/SatyaKomatineni/mcp-servers-testrepo/blob/main/mcp-claims-python/runinspector-claims.ps1)

<!-- ********************* -->
## Useful scripts
<!-- ********************* -->
1. setup-servers.ps1
2. cds-vscode
3. pathutils


<!-- ********************* -->
# Agenda 3: Demo
<!-- ********************* -->

Goal:

1. start the servers
2. Examine threm through mcp inspectors (if necessary, may be show last)
3. Bring up Assistatnt UI: [Access the Assistant UI](http://127.0.0.1:3000)
4. Run through some preliminary tests
5. Use the test scripts. [Test Scripts](https://github.com/SatyaKomatineni/assistant-ui-testrepo/blob/main/docs/demo/test-scenarios.md)
6. Show the log file to show interactions [Log file](https://github.com/SatyaKomatineni/assistant-ui-testrepo/blob/main/docs/demo/ux-server-run1.log)


<!-- ********************* -->
## Using Inspector
<!-- ********************* -->

1. Start all the servers
2. Use the inspector: [Inspector](http://127.0.0.1:6274/)
3. plug in the URLs (See the mcp-servers.md file for urls)
4. Examine one by one

<!-- ********************* -->
# References
<!-- ********************* -->

1. [Primary official site for MCP](https://modelcontextprotocol.io/introduction). Entry point for how to write mcp servers, list of public servers, various transports, security protocols, pointers to SDK sites.
2. [MCP SDK github](https://github.com/modelcontextprotocol/python-sdk). FastMCP SDK site. Has a great readme file to do your own mcp server.
3. [Function calling: openai](https://platform.openai.com/docs/guides/function-calling?utm_source=chatgpt.com&api-mode=chat). The protocol and how it works, expectations, limitations
4. [ReACT at Langchain](https://python.langchain.com/api_reference/langchain/agents/langchain.agents.react.base.ReActChain.html). To see if ReAct can be used as a function calling alternative. It is deprecated in favor of LangGraph. One less choice.
5. [LangGraph](https://www.langchain.com/langgraph). LangGraph page for a more deterministic function calling behavior
6. [Function calling at LangChain](https://python.langchain.com/docs/how_to/function_calling)
7. [Assistant UI Homepage](https://www.assistant-ui.com/). This is the UX that is used. assistant-ui is the TypeScript/React library for AI Chat. Built on shadcn/ui and Tailwind.
8. [Assistant ui docs](https://www.assistant-ui.com/docs/getting-started)

<!-- ********************* -->
# Key  URLs
<!-- ********************* -->

**My Github Repos for this work**
1. Repo 1: [UX server using assistant UI: Replicated from Duane's repo](https://github.com/SatyaKomatineni/assistant-ui-testrepo/tree/main)
2. Repo 2: [Associated MCP Servers repo](https://github.com/SatyaKomatineni/mcp-servers-testrepo)
   
**Demo links**
1. [github demo directory](https://github.com/SatyaKomatineni/assistant-ui-testrepo/tree/main/docs/demo)
2. [Demo agenda: this page](https://github.com/SatyaKomatineni/assistant-ui-testrepo/blob/main/docs/demo/demo-agenda.md)
3. [Test suites](https://github.com/SatyaKomatineni/assistant-ui-testrepo/blob/main/docs/demo/test-scenarios.md)
4. [MCP Server Data](https://github.com/SatyaKomatineni/assistant-ui-testrepo/blob/main/docs/demo/demo-data.md)
5. [Duane's notes.md](https://github.com/SatyaKomatineni/mcp-servers-testrepo/blob/main/docs/notes.md)
6. [Log file](https://github.com/SatyaKomatineni/assistant-ui-testrepo/blob/main/docs/demo/ux-server-run1.log)

**During Demo:**
1. [Inspector](http://127.0.0.1:6274/)
2. [Assistant UI](http://127.0.0.1:3000)

<!-- ********************* -->
# Bonuse Agenda: Exercising Github Agent
<!-- ********************* -->

1. Requirements for setup servers, a powershel script. [start-servers-requirements.txt](https://github.com/SatyaKomatineni/assistant-ui-testrepo/blob/ce388c7813f5fe9d0aa0471789e2b02f88e9b97d/ps-utils/start-servers-requirements.txt)
2. The generated and adjusted file. [setup-servers.ps1](https://github.com/SatyaKomatineni/assistant-ui-testrepo/blob/ce388c7813f5fe9d0aa0471789e2b02f88e9b97d/ps-utils/setup-servers.ps1)
3. Requirements for writing test suites. [test-scenarios.md](https://github.com/SatyaKomatineni/assistant-ui-testrepo/blob/main/docs/demo/test-scenarios.md)
4. Requirements for replicating someone else's repo. [git-associate-repo.txt](https://github.com/SatyaKomatineni/LearnPowershell/blob/master/gitutils/specs/git-associate-repo.txt)
5. Mixing prompt hints and agent mode to work with md files. [Fix headings for readability](https://github.com/SatyaKomatineni/articles-repo/blob/master/.github/prompts/fixh1.prompt.md), and [convert lines to ordered lists](https://github.com/SatyaKomatineni/articles-repo/blob/master/.github/prompts/olist.prompt.md)
6. A way to list and update system paths. [pathutils requirements.txt](https://github.com/SatyaKomatineni/LearnPowershell/blob/master/gitutils/specs/pathutils.txt)
7. [pathutils.ps1](https://github.com/SatyaKomatineni/LearnPowershell/blob/master/gitutils/pathutils.ps1)


