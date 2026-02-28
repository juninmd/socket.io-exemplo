```markdown
# AGENTS.md Guidelines

These guidelines outline best practices for development of the AGENTS repository. Adherence to these principles is crucial for maintaining a robust, maintainable, and scalable codebase.

## 1. DRY (Don't Repeat Yourself)

*   **Single Responsibility Principle:** Each agent module should have a single, well-defined purpose.  Avoid creating overly complex modules with multiple responsibilities.
*   **Reusable Components:** Promote the creation of reusable components and utilities that can be used across multiple agents.
*   **Abstraction:** Utilize abstraction to hide implementation details and provide a consistent interface for different agents.

## 2. KISS (Keep It Simple, Stupid)

*   **Minimal Code:** Strive for the shortest possible code paths while maintaining functionality.
*   **Readability:** Prioritize code clarity and structure for easy understanding and maintenance.
*   **Avoid Complexity:** Resist adding unnecessary features or logic unless absolutely required.

## 3. SOLID Principles

*   **Single Responsibility Principle (SRP):** Each class should have one reason to change.
*   **Open/Closed Principle:**  The system should be open for extension but closed for modification.  New functionality should be added through new agents, not by modifying existing ones.
*   **Liskov Substitution Principle (LSP):**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle (ISP):** Client code should not be forced to depend on methods it does not use.
*   **Dependency Inversion Principle (DIP):** High-level modules should be dependent on abstractions, not specific implementations.

## 4. YAGNI (You Aren't Gonna Need It)

*   **Avoid Unnecessary Features:**  Only implement features that are currently required for the agent's functionality.
*   **Focus on Functionality:** Prioritize delivering the essential functionality first and then add enhancements as needed.

## 5. Code Quality & Structure

*   **Modular Design:**  Organize the code into logical modules with well-defined responsibilities.
*   **Consistent Naming Conventions:**  Use consistent naming conventions for variables, functions, and classes.
*   **Comments:**  Add comments to explain complex logic, non-obvious code sections, or assumptions.
*   **Error Handling:** Implement appropriate error handling to prevent unexpected crashes or data inconsistencies.
*   **Testing:** Unit tests should be completed and maintained to verify component functions.

## 6. Development Workflow

*   **Branching Strategy:** Utilize a branching strategy (e.g., Gitflow) to isolate development and testing.
*   **Version Control:**  Use Git for version control and maintain a clear commit history.
*   **Code Reviews:**  Conduct thorough code reviews to identify potential issues and ensure code quality.
*   **Documentation:**  Maintain clear and concise documentation for each agent module.

## 7. Production Environment

*   **Unit Tests:** The primary focus is on comprehensive unit tests covering all agent functionalities.
*   **Integration Tests:**  Implement integration tests to validate interactions between agents.
*   **Continuous Integration/Continuous Deployment (CI/CD):**  Establish a CI/CD pipeline to automate building, testing, and deployment.
*   **Monitoring:** Implement monitoring to track agent performance and identify potential issues.

## 8. File Size & Length

*   **Maximum Code Length:** 180 lines of code.
*   **Code Structure:** Aim for a well-organized structure, clearly separated functions and classes, and logical grouping of responsibilities.

## 9.  Testing (Mocking Only)

*   **Mocking:** All tests must utilize mocks and stubs to simulate external dependencies and state. No reliance on actual data or external systems is permitted.
*   **Test Coverage:** Aim for 80% test coverage.  Automated test suites will be implemented.

## 10.  Library/Framework Usage

*   Use established and well-documented libraries/frameworks where appropriate.  Adhere to the library's guidelines.
*   Ensure all dependencies are managed through a dependency management tool (e.g., pip, Maven, etc.).


```