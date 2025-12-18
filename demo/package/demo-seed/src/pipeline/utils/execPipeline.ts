import { Pipe } from "../../types/Pipe";
import { IVSeed } from "../../types/VSeed";

export const execPipeline = (pipes: Pipe[], vseed: IVSeed) =>{
    let finalResult = {};
    for (const pipe of pipes) {
        finalResult = pipe(finalResult, vseed);
    }

    return finalResult;
    
}

