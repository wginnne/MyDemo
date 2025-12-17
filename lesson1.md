# Project Architecture Notes

## 1. Monorepo Strategy
> *(Details regarding the monorepo structure)*

## 2. Strategy Pattern
Use a map to manage different chart pipelines instead of using complex `if-else` or `switch` statements.

```javascript
const pipelineMap = {
    bar: barPipeline,
    column: columnPipeline
};

// Select pipeline dynamically based on chart type
const pipeline = pipelineMap[chartType];
```

### Modularization Guidelines
* **Small Functions:** Break logic into small, reusable functions.
* **Clean Imports:** When using functions from other files, avoid circular dependencies (don't quote each other).
* **Index Files:** Use an `index.js` to manage exports (Barrel pattern) for cleaner imports.

## 3. Combination of Pipelines
A utility to execute a series of functions where the output of one becomes the input of the next.

```javascript
const pipe1 = (data) => { /* logic */ };
const pipe2 = (data) => { /* logic */ };

const execPipeline = (initialData, ...pipes) => {
    // Method 1: Using a Loop
    let finalResult = initialData;
    for (const pipe of pipes) {
        finalResult = pipe(finalResult);
    }
    return finalResult;

    // Method 2: Using Reduce (More concise)
    // return pipes.reduce((acc, pipe) => pipe(acc), initialData);
};
```

---

## 4. Task List

- [ ] **Data Preparation:** Complete data reshaping and copy the git repository.
- [ ] **Code Review:** Check the original program logic.