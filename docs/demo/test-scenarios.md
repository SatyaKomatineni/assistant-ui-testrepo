<!-- ********************* -->
# Demo Test cases for testing the MCP Servers 
<!-- ********************* -->


1. This file contains various Test sets for testing MCP servers
2. The test data for the servers is in the sister file demo-data.md
3. The tool descriptions are given below

Ask 1:

1. can you generate a test suite of questions I can submit to test the tool selection
2. The questions should consider all the tools and also questions that are outside the tools with LLM internal knowledge
3. Try not to confuse the LLM yet make the questions practical
4. Can you intersperse the questions so that I can see the tool selection aspect nicely
5. Just keep the questions under 1 heading
6. Do not delete this prompt. Keep it in the file.
7. Add the generated suite at the bottom of this file

<!-- ********************* -->
# MCP Tool descriptions
<!-- ********************* -->

These are the available tools to the Chat

lookup_claim: Look up a medical claim by its ID.
lookup_system_by_id: Look up a system by its ID.
lookup_provider: Look up a healthcare provider by their National Provider Identifier (NPI).
search_prompts: Search for prompts containing specific words
weather: Get the weather in a location (Fahrenheit)
convertFahrenheitToCelsius: Convert a temperature from Fahrenheit to Celsius

<!-- ********************* -->
# Test Suite: Tool Selection and LLM Knowledge
<!-- ********************* -->

Below is a single, interspersed list of practical questions designed to test both tool selection and LLM internal knowledge. The questions are mixed so you can observe the tool selection aspect clearly.

1. What is the weather in San Francisco?
2. Who is the provider with NPI `1234567890`?
3. Who is the current president of the United States?
4. Show me the details for the claim with ID `C003`.
5. What is the capital of France?
6. What is the operating system of the system with ID `web-prod-01`?
7. Convert 100 Fahrenheit to Celsius.
8. Find all prompts related to "security".
9. Explain the difference between HTTP and HTTPS.
10. What is the status of the medical claim with ID `C001`?
11. List the specialties of the provider with NPI `3456789012`.
12. What are some best practices for writing secure code?
13. Give me the details of the system with ID `dev-01`.
14. Search for prompts containing the word "documentation".
15. Show me the claim with ID `C999` (nonexistent claim).
16. What is the weather on Mars?
17. Convert -40 Fahrenheit to Celsius.
18. Find prompts containing the word "unicorn".
19. Summarize the Agile software development methodology.
20. Who is the provider with NPI `0000000000` (nonexistent provider)?

