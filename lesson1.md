### Monorepo

### strategy mode
```text
const pipelineMap = {
    bar : barPipeline，
    column : columnPipeline
}
const pipeline = pipelineMap[chartType];
```

write some small function.

when we use function from other files, don't quote each other.

we can write an index.

### combination of pipelines
```text
const pipe1 = ()=>{}
const pipe2 = ()=>{}
const execPipeline = (pipe1,pipe2,...) => {
    let finalResult = {}; //to restore the result of last pipe, which is the import of next pipe
    for(const pipe of pipes){}
    // we can also use reduce

}
```


## task
```
1.compete data reshape and copy the git.

2.cheack the original program.



